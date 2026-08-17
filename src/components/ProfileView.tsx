import React, { useState } from 'react';
import { UserProfile, AcademyTier } from '../types';
import { User, Crown, Check, ShieldCheck, Mail, Sparkles, BookOpen, Layers, Edit2, Save } from 'lucide-react';

interface ProfileViewProps {
  user: UserProfile;
  onUpdateUser: (updatedUser: UserProfile) => void;
  progressPercent: number;
  completedTasksCount: number;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  onUpdateUser,
  progressPercent,
  completedTasksCount,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>(user.name);
  const [editNiche, setEditNiche] = useState<string>(user.niche);
  const [editAudience, setEditAudience] = useState<string>(user.targetAudience);

  const handleSaveProfile = () => {
    onUpdateUser({
      ...user,
      name: editName,
      niche: editNiche,
      targetAudience: editAudience,
    });
    setIsEditing(false);
  };

  const handleSelectTier = (tier: AcademyTier) => {
    onUpdateUser({ ...user, tier });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Profile Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-500/20" />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-700 font-black text-2xl flex items-center justify-center border border-indigo-200">
                  {user.name.substring(0, 1)}
                </div>
              )}
              <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-indigo-600 text-white font-black text-[10px]">
                Lvl {user.level}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-slate-950">{user.name}'s Academy</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5 text-amber-600" />
                  {user.tier} Member
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Nische: <strong className="text-slate-800">{user.niche}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Edit2 className="w-4 h-4" />
            <span>{isEditing ? 'Abbrechen' : 'Profil bearbeiten'}</span>
          </button>
        </div>
      </div>

      {/* Profile Edit Form */}
      {isEditing && (
        <div className="bg-white border border-indigo-200 rounded-3xl p-6 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-indigo-700 uppercase tracking-wider">
            Profil-Details anpassen
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dein Name:</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Deine Nische:</label>
              <input
                type="text"
                value={editNiche}
                onChange={(e) => setEditNiche(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Deine Zielgruppe:</label>
            <input
              type="text"
              value={editAudience}
              onChange={(e) => setEditAudience(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>Profil speichern</span>
          </button>
        </div>
      )}

      {/* Member Key Metrics Summary */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          Mitglieder-Übersicht & Kennzahlen
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Fortschritt</span>
            <p className="text-xl font-black text-indigo-600">{progressPercent} %</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Aktueller Kurs</span>
            <p className="text-sm font-extrabold text-slate-900 truncate">Stage {user.currentStageId}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Aufgaben</span>
            <p className="text-xl font-black text-slate-900">{completedTasksCount}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Meilensteine</span>
            <p className="text-xl font-black text-amber-600">{user.earnedBadges.length}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Kampagnen</span>
            <p className="text-xl font-black text-sky-600">{user.activeCampaignsCount}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold">Leads</span>
            <p className="text-xl font-black text-indigo-600">{user.leadsCount}</p>
          </div>
        </div>
      </div>

      {/* Plan Tier Switcher */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-500" />
            GOM-MAR Academy Mitgliedschafts-Ebenen
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Wähle dein bevorzugtes Level für vollen Funktionszugriff:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FREE Tier */}
          <div className={`p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between ${
            user.tier === 'FREE'
              ? 'bg-slate-50 border-slate-300 ring-2 ring-slate-400/20'
              : 'bg-white border-slate-200'
          }`}>
            <div className="space-y-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                🆓 FREE
              </span>
              <h4 className="text-xl font-black text-slate-950">GOM-MAR FREE</h4>
              <p className="text-xs text-slate-600">Grundlagen & einfache Einstiegstools zum Kennenlernen.</p>

              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ Etappe 1 & 2 Lektionen</li>
                <li className="flex items-center gap-2">✓ Begrenzter KI-Zugang</li>
                <li className="flex items-center gap-2">✓ Grundlegende Checklisten</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectTier('FREE')}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                user.tier === 'FREE'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {user.tier === 'FREE' ? 'Aktiver Plan' : 'Zu FREE wechseln'}
            </button>
          </div>

          {/* PRO Tier */}
          <div className={`p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between relative overflow-hidden ${
            user.tier === 'PRO'
              ? 'bg-indigo-50/50 border-indigo-600 ring-2 ring-indigo-600/20 shadow-md'
              : 'bg-white border-slate-200'
          }`}>
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-black text-[9px] uppercase tracking-wider">
              Empfohlen
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                ⭐ PRO
              </span>
              <h4 className="text-xl font-black text-slate-950">GOM-MAR PRO</h4>
              <p className="text-xs text-slate-600">Komplette Academy, E-Mail Automation & volle KI-Toolbox.</p>

              <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2 text-indigo-700 font-medium">✓ Alle 7 Etappen freigeschaltet</li>
                <li className="flex items-center gap-2 text-indigo-700 font-medium">✓ GOM-MAR Mail Automation</li>
                <li className="flex items-center gap-2 text-indigo-700 font-medium">✓ Frag GOM-MAR KI Mentor</li>
                <li className="flex items-center gap-2 text-indigo-700 font-medium">✓ Alle KI-Toolbox Generatoren</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectTier('PRO')}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                user.tier === 'PRO'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              {user.tier === 'PRO' ? 'Aktiver Plan' : 'Zu PRO aufsteigen'}
            </button>
          </div>

          {/* PREMIUM Tier */}
          <div className={`p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between ${
            user.tier === 'PREMIUM'
              ? 'bg-amber-50/50 border-amber-400 ring-2 ring-amber-400/20 shadow-md'
              : 'bg-white border-slate-200'
          }`}>
            <div className="space-y-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                🚀 PREMIUM
              </span>
              <h4 className="text-xl font-black text-slate-950">GOM-MAR PREMIUM</h4>
              <p className="text-xs text-slate-600">Für individuelle Begleitung, VIP-Trainings & VIP Support.</p>

              <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2 text-amber-800 font-medium">✓ Alles aus PRO enthalten</li>
                <li className="flex items-center gap-2 text-amber-800 font-medium">✓ Persönliche System-Audits</li>
                <li className="flex items-center gap-2 text-amber-800 font-medium">✓ VIP 1-zu-1 KI Prompts</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectTier('PREMIUM')}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                user.tier === 'PREMIUM'
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {user.tier === 'PREMIUM' ? 'Aktiver Plan' : 'Zu PREMIUM wechseln'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
