import React from 'react';
import { ShieldAlert, Lock, Sparkles, ArrowRight, CheckCircle2, LogIn, Tv } from 'lucide-react';

interface VisitorAccessGateModalProps {
  onOpenRegisterModal: () => void;
  onOpenLoginModal: () => void;
  onOpenLandingView?: () => void;
}

export const VisitorAccessGateModal: React.FC<VisitorAccessGateModalProps> = ({
  onOpenRegisterModal,
  onOpenLoginModal,
  onOpenLandingView,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl shadow-emerald-500/10 text-center">
        {/* Glow backdrop behind icon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-inner">
          <Lock className="w-8 h-8 animate-pulse text-emerald-400" />
        </div>

        {/* Header Titles */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Besucher-Vorschau • Anmeldung erforderlich</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            GOM-MAR Academy Zugang gesperrt 🔒
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Du siehst die Academy in der <strong className="text-white">Besucher-Vorschau</strong>. Um alle Module, Lektionen und KI-Tools uneingeschränkt zu nutzen, registriere dich kostenlos oder melde dich an.
          </p>
        </div>

        {/* Value Highlights */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2.5 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-white font-bold pb-1 border-b border-slate-800/80">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Das erwartet dich nach der kostenlosen Registrierung:</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>7-Etappen Masterclass:</strong> 99 Lektionen mit Videos & Schritt-für-Schritt Anleitungen</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>E-Mail Automation Builder:</strong> Vorlagen, Autoresponder & Funnels</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Frag GOM-MAR KI:</strong> 24/7 intelligenter Mentor für Content, Hooks & Skripte</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            id="btn-gate-register-direct"
            onClick={onOpenRegisterModal}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🚀 Jetzt in 30 Sek. kostenlos registrieren</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="btn-gate-login-direct"
            onClick={onOpenLoginModal}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
          >
            <LogIn className="w-3.5 h-3.5 text-indigo-400" />
            <span>Bereits registriert? Hier direkt anmelden</span>
          </button>

          {onOpenLandingView && (
            <button
              id="btn-gate-open-landing"
              onClick={onOpenLandingView}
              className="w-full py-2 px-3 text-[11px] text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Tv className="w-3 h-3 text-slate-400" />
              <span>Oder Informationsseite & VSL-Video ansehen</span>
            </button>
          )}
        </div>

        <p className="text-[11px] text-slate-500">
          100% kostenfreie Erstregistrierung • Keine Kreditkarte erforderlich
        </p>
      </div>
    </div>
  );
};
