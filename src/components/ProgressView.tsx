import React from 'react';
import { UserProfile } from '../types';
import { Trophy, Award, Star, CheckCircle2, Lock, Shield, Zap, Flame } from 'lucide-react';

interface ProgressViewProps {
  user: UserProfile;
  completedTasksCount: number;
  totalTasksCount: number;
  progressPercent: number;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  user,
  completedTasksCount,
  totalTasksCount,
  progressPercent,
}) => {
  const levelsInfo = [
    { level: 1, title: 'Starter', range: '0–20%', desc: 'Erste Schritte, Grundlagen & Ausrichtung', color: 'slate' },
    { level: 2, title: 'Explorer', range: '20–40%', desc: 'Nische bestimmt, Zielgruppe & Angebot gewählt', color: 'blue' },
    { level: 3, title: 'Builder', range: '40–60%', desc: 'Landingpage, Domain & Mail-System aufgebaut', color: 'purple' },
    { level: 4, title: 'Creator', range: '60–80%', desc: 'Traffic aufgebau, Leads gewinnen & Mails senden', color: 'amber' },
    { level: 5, title: 'Online Entrepreneur', range: '80–100%', desc: 'Automatisierung, Skalierung & dauerhafte Einnahmen', color: 'emerald' },
  ];

  const badgesList = [
    { title: '🚀 Erste Schritte', desc: 'Etappe 1 vollständig abgeschlossen', reqLevel: 1 },
    { title: '🎯 Nischen-Meister', desc: 'Nische & Zielgruppe erfolgreich definiert', reqLevel: 2 },
    { title: '🛠️ System-Bauer', desc: 'Landingpage & Domain verknüpft', reqLevel: 3 },
    { title: '📩 Mail-Pionier', desc: 'E-Mail Kampagne & Autoresponder aktiviert', reqLevel: 3 },
    { title: '⚡ Traffic-Maschine', desc: 'Organische Traffic-Quellen aufgebaut', reqLevel: 4 },
    { title: '🏆 Online Entrepreneur', desc: 'Alle 7 Etappen gemeistert & System automatisiert', reqLevel: 5 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Gamification & Meilensteine
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">🏆 Dein Fortschritt & Level</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Sichtbare Erfolge ohne Kinderkram. Jede absolvierte Lektion schaltet deinen nächsten Level und Meilenstein-Badges frei.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0">
          <Award className="w-8 h-8 text-amber-500" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Aktueller Status:</p>
            <p className="text-lg font-black text-slate-950">Level {user.level} • {progressPercent}%</p>
          </div>
        </div>
      </div>

      {/* Level Roadmap Grid */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500" />
          Die 5 Level der GOM-MAR Academy
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {levelsInfo.map((lvl) => {
            const isReached = user.level >= lvl.level;
            const isCurrent = user.level === lvl.level;

            return (
              <div
                key={lvl.level}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                  isCurrent
                    ? 'bg-amber-50/70 border-amber-300 shadow-sm'
                    : isReached
                    ? 'bg-indigo-50/40 border-indigo-200 text-slate-800'
                    : 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isCurrent ? 'bg-amber-200/60 text-amber-900' : isReached ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {lvl.range}
                    </span>
                    {isReached && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <h4 className="font-bold text-sm text-slate-950 mt-1">Level {lvl.level}</h4>
                  <p className="text-xs font-semibold text-amber-600">{lvl.title}</p>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">{lvl.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Gallery */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          Erreichte Auszeichnungen ({user.earnedBadges.length} / {badgesList.length})
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badgesList.map((badge, idx) => {
            const isUnlocked = user.earnedBadges.some((b) => b.includes(badge.title.replace(/[^a-zA-ZäöüÄÖÜß\s]/g, '').trim())) || user.level >= badge.reqLevel;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  isUnlocked
                    ? 'bg-emerald-50/60 border-emerald-200 text-slate-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 text-xl ${
                  isUnlocked ? 'bg-emerald-100 border border-emerald-200 text-emerald-700' : 'bg-slate-100 border border-slate-200 text-slate-400'
                }`}>
                  {isUnlocked ? badge.title.substring(0, 2) : <Lock className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-950">{badge.title}</h4>
                  <p className="text-xs text-slate-600">{badge.desc}</p>
                  <span className={`inline-block text-[10px] font-semibold mt-1 ${
                    isUnlocked ? 'text-emerald-700' : 'text-slate-500'
                  }`}>
                    {isUnlocked ? '✓ Freigeschaltet' : `Benötigt Level ${badge.reqLevel}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
