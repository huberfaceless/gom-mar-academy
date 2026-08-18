import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  reload,
  User,
  AuthError
} from 'firebase/auth';
import { auth } from './config';

/**
 * Translates Firebase Auth error codes into clean, user-friendly German messages.
 */
export function getFirebaseAuthErrorMessage(error: unknown): string {
  if (!error) return 'Ein unbekannter Fehler ist aufgetreten.';

  const authError = error as AuthError;
  const code = authError.code || '';

  switch (code) {
    case 'auth/email-already-in-use':
      return 'Diese E-Mail-Adresse wird bereits für ein bestehendes Konto verwendet.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
      return 'E-Mail-Adresse oder Passwort ist nicht korrekt.';
    case 'auth/user-not-found':
      return 'Kein Benutzerkonto mit dieser E-Mail-Adresse gefunden.';
    case 'auth/weak-password':
      return 'Das Passwort ist zu schwach. Bitte wähle mindestens 6 Zeichen.';
    case 'auth/invalid-email':
      return 'Bitte gib eine gültige E-Mail-Adresse ein.';
    case 'auth/too-many-requests':
      return 'Zu viele fehlgeschlagene Versuche. Bitte warte einen Moment und versuche es erneut.';
    case 'auth/network-request-failed':
      return 'Netzwerkfehler. Bitte überprüfe deine Internetverbindung.';
    case 'auth/user-disabled':
      return 'Dieses Benutzerkonto wurde deaktiviert. Bitte wende dich an den Support.';
    case 'auth/operation-not-allowed':
      return 'Die E-Mail/Passwort-Anmeldung ist im Firebase-Projekt noch nicht aktiviert.';
    case 'auth/requires-recent-login':
      return 'Diese Aktion erfordert eine erneute Anmeldung.';
    default:
      if (authError.message) {
        return `Authentifizierungsfehler: ${authError.message}`;
      }
      return 'Ein Fehler bei der Authentifizierung ist aufgetreten. Bitte versuche es erneut.';
  }
}

/**
 * Register a new user with email and password, set display name, and send verification email.
 * Note: emailVerified starts as false from Firebase.
 */
export async function registerWithEmail(
  email: string,
  password: string,
  displayName?: string
): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
  const user = userCredential.user;

  if (displayName && displayName.trim()) {
    try {
      await updateProfile(user, {
        displayName: displayName.trim()
      });
    } catch (profileErr) {
      console.warn('Could not set displayName on registration:', profileErr);
    }
  }

  // Send verification email immediately
  try {
    await sendEmailVerification(user);
  } catch (emailErr) {
    console.warn('Could not send initial verification email:', emailErr);
  }

  return user;
}

/**
 * Log in an existing user with email and password.
 */
export async function loginWithEmail(email: string, password: string): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
  return userCredential.user;
}

/**
 * Log out the current Firebase user.
 */
export async function logout(): Promise<void> {
  await signOut(auth);
}

/**
 * Send or re-send the Firebase email verification link to the currently signed in user.
 */
export async function sendVerificationEmail(userToVerify?: User | null): Promise<void> {
  const targetUser = userToVerify || auth.currentUser;
  if (!targetUser) {
    throw new Error('Kein angemeldeter Benutzer für den E-Mail-Versand gefunden.');
  }
  await sendEmailVerification(targetUser);
}

/**
 * Reload the current Firebase user from server and return the fresh emailVerified status.
 */
export async function reloadCurrentUser(): Promise<{ user: User | null; emailVerified: boolean }> {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return { user: null, emailVerified: false };
  }
  await reload(currentUser);
  return {
    user: auth.currentUser,
    emailVerified: auth.currentUser ? auth.currentUser.emailVerified : false
  };
}

/**
 * Send password reset email.
 */
export async function sendPasswordReset(email: string): Promise<void> {
  if (!email || !email.trim()) {
    throw new Error('Bitte gib eine E-Mail-Adresse ein.');
  }
  await sendPasswordResetEmail(auth, email.trim());
auth.languageCode = 'de';
}
