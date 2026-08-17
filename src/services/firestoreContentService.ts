import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  deleteDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db, isFirestoreOperational, handleFirestoreError } from '../firebase/config';
import { 
  ProjectSettings, 
  CentralContentProject, 
  PublishingJob, 
  SchedulerJob, 
  toCanonicalStatus 
} from '../types/contentEngine';
import { 
  loadAllProjectSettings, 
  loadAllContentProjects, 
  saveAllContentProjects, 
  loadAllPublishingJobs,
  saveAllPublishingJobs,
  loadAllSchedulerJobs,
  saveAllSchedulerJobs,
  DEFAULT_VITAL50_PROJECT 
} from '../utils/contentStorage';

const COLLECTION_PROJECTS = 'projects';
const COLLECTION_CONTENT_PROJECTS = 'contentProjects';
const COLLECTION_PUBLISHING_JOBS = 'publishingJobs';
const COLLECTION_SCHEDULER_JOBS = 'schedulerJobs';

async function firestoreWithTimeout<T>(promise: Promise<T>, timeoutMs: number = 2000): Promise<T> {
  let timeoutHandle: NodeJS.Timeout;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(() => reject(new Error('Firestore operation timed out')), timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutHandle));
}

export class FirestoreContentService {

  // ==========================================
  // 1. BRAND / PROJECT SETTINGS
  // ==========================================

  static async getProjectSettings(userId?: string): Promise<ProjectSettings[]> {
    if (!userId || !isFirestoreOperational()) {
      return loadAllProjectSettings();
    }

    try {
      const q = query(collection(db, COLLECTION_PROJECTS), where('userId', '==', userId));
      const snapshot = await firestoreWithTimeout(getDocs(q), 1500);
      if (snapshot.empty) {
        const initialProject: ProjectSettings = {
          ...DEFAULT_VITAL50_PROJECT,
          userId,
          updatedAt: new Date().toISOString(),
        };
        await setDoc(doc(db, COLLECTION_PROJECTS, initialProject.id), initialProject);
        return [initialProject];
      }
      return snapshot.docs.map((d) => ({ ...(d.data() as ProjectSettings), id: d.id }));
    } catch (err) {
      handleFirestoreError(err);
      return loadAllProjectSettings();
    }
  }

  static async saveProjectSettings(userId: string | undefined, settings: ProjectSettings): Promise<void> {
    if (!userId) return;
    
    // Always save locally first
    const current = loadAllProjectSettings();
    const idx = current.findIndex(p => p.id === settings.id);
    if (idx >= 0) {
      current[idx] = settings;
    } else {
      current.push(settings);
    }
    const { saveAllProjectSettings } = await import('../utils/contentStorage');
    saveAllProjectSettings(current);

    if (!isFirestoreOperational()) return;

    try {
      const docRef = doc(db, COLLECTION_PROJECTS, settings.id);
      const dataToSave = {
        ...settings,
        userId,
        updatedAt: new Date().toISOString(),
      };
      await firestoreWithTimeout(setDoc(docRef, dataToSave, { merge: true }), 1500);
    } catch (err) {
      handleFirestoreError(err);
    }
  }

  // ==========================================
  // 2. CENTRAL CONTENT PROJECTS
  // ==========================================

  static async getContentProjects(userId?: string): Promise<CentralContentProject[]> {
    if (!userId || !isFirestoreOperational()) {
      return loadAllContentProjects();
    }

    try {
      const q = query(collection(db, COLLECTION_CONTENT_PROJECTS), where('userId', '==', userId));
      const snapshot = await firestoreWithTimeout(getDocs(q), 1500);
      const list = snapshot.docs.map((d) => ({ ...(d.data() as CentralContentProject), id: d.id }));
      saveAllContentProjects(list);
      return list;
    } catch (err) {
      handleFirestoreError(err);
      return loadAllContentProjects();
    }
  }

  static async getContentProjectById(userId: string | undefined, contentProjectId: string): Promise<CentralContentProject | null> {
    if (!userId || !isFirestoreOperational()) {
      const list = loadAllContentProjects();
      return list.find((p) => p.id === contentProjectId) || null;
    }

    try {
      const docRef = doc(db, COLLECTION_CONTENT_PROJECTS, contentProjectId);
      const snap = await firestoreWithTimeout(getDoc(docRef), 1500);
      if (snap.exists() && snap.data()?.userId === userId) {
        return { ...(snap.data() as CentralContentProject), id: snap.id };
      }
      return null;
    } catch (err) {
      handleFirestoreError(err);
      const list = loadAllContentProjects();
      return list.find((p) => p.id === contentProjectId) || null;
    }
  }

  static async saveContentProject(userId: string | undefined, project: CentralContentProject): Promise<void> {
    const dataToSave: CentralContentProject = {
      ...project,
      userId: userId || project.userId,
      updatedAt: new Date().toISOString(),
    };

    // Always update local cache for responsiveness
    const current = loadAllContentProjects();
    const idx = current.findIndex((p) => p.id === project.id);
    if (idx >= 0) {
      current[idx] = dataToSave;
    } else {
      current.unshift(dataToSave);
    }
    saveAllContentProjects(current);

    if (userId && isFirestoreOperational()) {
      try {
        const docRef = doc(db, COLLECTION_CONTENT_PROJECTS, project.id);
        const serialized = JSON.parse(JSON.stringify(dataToSave));
        await firestoreWithTimeout(setDoc(docRef, serialized, { merge: true }), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  static async deleteContentProject(userId: string | undefined, contentProjectId: string): Promise<void> {
    const current = loadAllContentProjects().filter((p) => p.id !== contentProjectId);
    saveAllContentProjects(current);

    if (userId && isFirestoreOperational()) {
      try {
        await firestoreWithTimeout(deleteDoc(doc(db, COLLECTION_CONTENT_PROJECTS, contentProjectId)), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  // ==========================================
  // 3. PUBLISHING QUEUE JOBS
  // ==========================================

  static async getPublishingJobs(userId?: string, contentProjectId?: string): Promise<PublishingJob[]> {
    if (!userId || !isFirestoreOperational()) {
      let localList = loadAllPublishingJobs();
      if (contentProjectId) {
        localList = localList.filter((j) => j.contentProjectId === contentProjectId);
      }
      return localList.sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());
    }

    try {
      let q = query(collection(db, COLLECTION_PUBLISHING_JOBS), where('userId', '==', userId));
      const snapshot = await firestoreWithTimeout(getDocs(q), 1500);
      let list = snapshot.docs.map((d) => ({ ...(d.data() as PublishingJob), id: d.id }));
      if (contentProjectId) {
        list = list.filter((j) => j.contentProjectId === contentProjectId);
      }
      saveAllPublishingJobs(list);
      return list.sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());
    } catch (err) {
      handleFirestoreError(err);
      let localList = loadAllPublishingJobs();
      if (contentProjectId) {
        localList = localList.filter((j) => j.contentProjectId === contentProjectId);
      }
      return localList.sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());
    }
  }

  static async savePublishingJob(userId: string, job: PublishingJob): Promise<void> {
    const dataToSave = {
      ...job,
      userId,
      updatedAt: new Date().toISOString(),
    };

    const current = loadAllPublishingJobs();
    const idx = current.findIndex((j) => j.id === job.id);
    if (idx >= 0) {
      current[idx] = dataToSave;
    } else {
      current.unshift(dataToSave);
    }
    saveAllPublishingJobs(current);

    if (isFirestoreOperational()) {
      try {
        const docRef = doc(db, COLLECTION_PUBLISHING_JOBS, job.id);
        const serialized = JSON.parse(JSON.stringify(dataToSave));
        await firestoreWithTimeout(setDoc(docRef, serialized, { merge: true }), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  static async updatePublishingJobStatus(
    userId: string,
    jobId: string,
    status: PublishingJob['status'],
    lastError?: string,
    extraFields?: Partial<PublishingJob>
  ): Promise<void> {
    const current = loadAllPublishingJobs();
    const idx = current.findIndex((j) => j.id === jobId);
    if (idx >= 0) {
      current[idx] = {
        ...current[idx],
        status,
        updatedAt: new Date().toISOString(),
        lastError: lastError !== undefined ? lastError : current[idx].lastError,
        ...extraFields,
      };
      saveAllPublishingJobs(current);
    }

    if (isFirestoreOperational()) {
      try {
        const docRef = doc(db, COLLECTION_PUBLISHING_JOBS, jobId);
        const updateData: Record<string, any> = {
          status,
          updatedAt: new Date().toISOString(),
          ...extraFields,
        };
        if (lastError !== undefined) {
          updateData.lastError = lastError;
        }
        await firestoreWithTimeout(updateDoc(docRef, updateData), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  static async deletePublishingJob(userId: string, jobId: string): Promise<void> {
    const current = loadAllPublishingJobs().filter((j) => j.id !== jobId);
    saveAllPublishingJobs(current);

    if (isFirestoreOperational()) {
      try {
        await firestoreWithTimeout(deleteDoc(doc(db, COLLECTION_PUBLISHING_JOBS, jobId)), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  // ==========================================
  // 4. SCHEDULER JOBS
  // ==========================================

  static async getSchedulerJobs(userId?: string): Promise<SchedulerJob[]> {
    if (!userId || !isFirestoreOperational()) return loadAllSchedulerJobs();

    try {
      const q = query(collection(db, COLLECTION_SCHEDULER_JOBS), where('userId', '==', userId));
      const snapshot = await firestoreWithTimeout(getDocs(q), 1500);
      const list = snapshot.docs.map((d) => ({ ...(d.data() as SchedulerJob), id: d.id }));
      saveAllSchedulerJobs(list);
      return list;
    } catch (err) {
      handleFirestoreError(err);
      return loadAllSchedulerJobs();
    }
  }

  static async saveSchedulerJob(userId: string, job: SchedulerJob): Promise<void> {
    const dataToSave = {
      ...job,
      userId,
      updatedAt: new Date().toISOString(),
    };

    const current = loadAllSchedulerJobs();
    const idx = current.findIndex((j) => j.id === job.id);
    if (idx >= 0) {
      current[idx] = dataToSave;
    } else {
      current.unshift(dataToSave);
    }
    saveAllSchedulerJobs(current);

    if (isFirestoreOperational()) {
      try {
        const docRef = doc(db, COLLECTION_SCHEDULER_JOBS, job.id);
        const serialized = JSON.parse(JSON.stringify(dataToSave));
        await firestoreWithTimeout(setDoc(docRef, serialized, { merge: true }), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  static async updateSchedulerJobStatus(
    userId: string,
    jobId: string,
    status: SchedulerJob['status'],
    lastError?: string
  ): Promise<void> {
    const current = loadAllSchedulerJobs();
    const idx = current.findIndex((j) => j.id === jobId);
    if (idx >= 0) {
      current[idx] = {
        ...current[idx],
        status,
        updatedAt: new Date().toISOString(),
        lastError: lastError !== undefined ? lastError : current[idx].lastError,
      };
      saveAllSchedulerJobs(current);
    }

    if (isFirestoreOperational()) {
      try {
        const docRef = doc(db, COLLECTION_SCHEDULER_JOBS, jobId);
        const updateData: Record<string, any> = {
          status,
          updatedAt: new Date().toISOString(),
        };
        if (lastError !== undefined) {
          updateData.lastError = lastError;
        }
        await firestoreWithTimeout(updateDoc(docRef, updateData), 1500);
      } catch (err) {
        handleFirestoreError(err);
      }
    }
  }

  // ==========================================
  // 5. LOCALSTORAGE TO FIRESTORE MIGRATION
  // ==========================================

  static async syncLocalDataToFirestore(userId: string): Promise<void> {
    if (!userId || !isFirestoreOperational()) return;

    try {
      const localProjects = loadAllContentProjects();
      for (const p of localProjects) {
        if (!p.userId || p.userId !== userId) {
          await this.saveContentProject(userId, { ...p, userId });
        }
      }
    } catch (err) {
      handleFirestoreError(err);
    }
  }
}

