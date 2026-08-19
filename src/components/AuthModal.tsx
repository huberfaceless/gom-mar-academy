import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  ArrowRight, 
  KeyRound, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import gommarLogo from '../assets/images/gommar_logo.jpg';

export type AuthModalMode = 'login' | 'register' | 'forgot_password';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthModalMode;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  onSuccess
}) => {
  const { login, register, resetPassword, error, clearError } = useAuth();

  const [mode, setMode] = useState<AuthModalMode>(initialMode);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [resetSuccessMsg, setResetSuccessMsg] = useState<string>('');

  // Sync mode whenever initialMode or isOpen changes
  React.useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setFormError('');
      setResetSuccessMsg('');
      clearError();
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSwitchMode = (newMode: AuthModalMode) => {
    setMode(newMode);
    setFormError('');
    setResetSuccessMsg('');
    clearError();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setResetSuccessMsg('');
    clearError();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      setFormError('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    if (mode === 'register') {
      if (!name.trim()) {
        setFormError('Bitte gib deinen Namen oder Vornamen ein.');
        return;
      }
      if (!password || password.length < 6) {
        setFormError('Das Passwort muss mindestens 6 Zeichen lang sein.');
        return;
      }

      setIsSubmitting(true);
      try {
        await register(trimmedEmail, password, name.trim());
        if (onSuccess) onSuccess();
        onClose();
      } catch (err: any) {
        setFormError(err?.message || 'Registrierung fehlgeschlagen.');
      } finally {
        setIsSubmitting(false);
      }
    } else if (mode === 'login') {
      if (!password) {
        setFormError('Bitte gib dein Passwort ein.');
        return;
      }

      setIsSubmitting(true);
      try {
        await login(trimmedEmail, password);
        if (onSuccess) onSuccess();
        onClose();
      } catch (err: any) {
        setFormError(err?.message || 'Anmeldung fehlgeschlagen.');
      } finally {
        setIsSubmitting(false);
      }
    } else if (mode === 'forgot_password') {
      setIsSubmitting(true);
      try {
        await resetPassword(trimmedEmail);
        setResetSuccessMsg(`Wir haben dir einen Link zum Zurücksetzen deines Passworts an ${trimmedEmail} geschickt.`);
      } catch (err: any) {
        setFormError(err?.message || 'Konnte keine Reset-E-Mail senden.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 p-0.5 shadow-xs mx-auto overflow-hidden flex items-center justify-center">
            <img 
              src={gommarLogo} 
              alt="GOM-MAR Academy" 
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-2xl font-black text-slate-950 tracking-tight">
            {mode === 'login' && 'Willkommen zurück! 👋'}
            {mode === 'register' && 'Kostenloses Konto erstellen 🚀'}
            {mode === 'forgot_password' && 'Passwort zurücksetzen 🔑'}
          </h2>

          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            {mode === 'login' && 'Melde dich an, um direkt in deiner GOM-MAR Academy weiterzulernen.'}
            {mode === 'register' && 'Trage dich in 30 Sekunden ein und starte deine 7-Etappen Masterclass.'}
            {mode === 'forgot_password' && 'Gib deine E-Mail-Adresse ein, um einen Reset-Link zu erhalten.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Login / Register) */}
        {mode !== 'forgot_password' && (
          <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200/80 text-xs font-bold">
            <button
              type="button"
              onClick={() => handleSwitchMode('login')}
              className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
                mode === 'login' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Anmelden
            </button>
            <button
              type="button"
              onClick={() => handleSwitchMode('register')}
              className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
                mode === 'register' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Neu Registrieren
            </button>
          </div>
        )}

        {/* Error or Success Messages */}
        {(formError || error) && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-start gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{formError || error}</span>
          </div>
        )}

        {resetSuccessMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-start gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{resetSuccessMsg}</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Dein Vor- und Nachname
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="z.B. Sarah Lindemann"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Deine E-Mail-Adresse
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@beispiel.de"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>
          </div>

          {mode !== 'forgot_password' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Passwort
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => handleSwitchMode('forgot_password')}
                    className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                  >
                    Passwort vergessen?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mindestens 6 Zeichen"
                  minLength={6}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-2"
          >
            <span>
              {isSubmitting ? (
                'Wird verarbeitet...'
              ) : mode === 'login' ? (
                'Jetzt Anmelden'
              ) : mode === 'register' ? (
                'Kostenlos registrieren'
              ) : (
                'Reset-Link senden'
              )}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Back to Login link when in forgot password */}
        {mode === 'forgot_password' && (
          <button
            type="button"
            onClick={() => handleSwitchMode('login')}
            className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
          >
            ← Zurück zur Anmeldung
          </button>
        )}

        <div className="pt-2 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Sichere Firebase Authentifizierung & DSGVO-konform</span>
          </p>
        </div>
      </div>
    </div>
  );
};
