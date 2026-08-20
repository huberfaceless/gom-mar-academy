import React, { useState } from 'react';
import { Mail, RefreshCw, Send, LogOut, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import gommarLogo from '../assets/images/gommar_logo.jpg';

interface EmailVerificationViewProps {
  onVerificationSuccess?: () => void;
}

export const EmailVerificationView: React.FC<EmailVerificationViewProps> = ({ onVerificationSuccess }) => {
  const { user, refreshVerificationStatus, sendVerificationEmail, logout, error, clearError } = useAuth();
  const { t } = useLanguage();
  
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [resendCooldown, setResendCooldown] = useState<number>(0);

  const handleCheckVerification = async () => {
    setIsChecking(true);
    setFeedbackMsg(null);
    clearError();
    
    try {
      const isVerified = await refreshVerificationStatus();
      if (isVerified) {
        setFeedbackMsg({
          type: 'success',
          text: t('verification.success')
        });
        if (onVerificationSuccess) {
          setTimeout(() => {
            onVerificationSuccess();
          }, 800);
        }
      } else {
        setFeedbackMsg({
          type: 'info',
          text: t('verification.pending')
        });
      }
    } catch {
      setFeedbackMsg({
        type: 'error',
        text: t('verification.checkError')
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleResendEmail = async () => {
    if (resendCooldown > 0) return;
    
    setIsSending(true);
    setFeedbackMsg(null);
    clearError();

    try {
      await sendVerificationEmail();
      setFeedbackMsg({
        type: 'success',
        text: t('verification.resent', { email: user?.email || t('verification.fallbackEmail') })
      });
      setResendCooldown(60);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: unknown) {
      setFeedbackMsg({
        type: 'error',
        text: err instanceof Error ? err.message : t('verification.sendError')
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="max-w-lg w-full bg-white border border-slate-200/90 rounded-3xl shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-6 text-center relative overflow-hidden">
        {/* Decorative Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />

        {/* Logo & Header */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-1 shadow-sm overflow-hidden flex items-center justify-center">
            <img 
              src={gommarLogo} 
              alt="GOM-MAR Academy" 
              className="w-full h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Icon & Badge */}
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 mx-auto flex items-center justify-center shadow-inner">
            <Mail className="w-8 h-8 animate-bounce" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-800 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('verification.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            {t('verification.title')}
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            {t('verification.beforeEmail')}{' '}
            <strong className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200 break-all">
              {user?.email || t('verification.fallbackEmail')}
            </strong>{' '}
            {t('verification.afterEmail')}
          </p>
        </div>

        {/* Feedback / Status Alert */}
        {feedbackMsg && (
          <div className={`p-4 rounded-2xl text-xs sm:text-sm font-medium text-left flex items-start gap-3 border animate-fadeIn ${
            feedbackMsg.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : feedbackMsg.type === 'error'
              ? 'bg-rose-50 text-rose-800 border-rose-200'
              : 'bg-indigo-50 text-indigo-800 border-indigo-200'
          }`}>
            {feedbackMsg.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <span className="leading-snug">{feedbackMsg.text}</span>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-2xl text-xs sm:text-sm font-medium text-left flex items-start gap-3 bg-rose-50 text-rose-800 border border-rose-200">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{error}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* Check Verification Status */}
          <button
            id="btn-check-verification"
            onClick={handleCheckVerification}
            disabled={isChecking}
            className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
            <span>{isChecking ? t('verification.checking') : t('verification.check')}</span>
          </button>

          {/* Resend Email */}
          <button
            id="btn-resend-verification"
            onClick={handleResendEmail}
            disabled={isSending || resendCooldown > 0}
            className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5 text-slate-500" />
            <span>
              {resendCooldown > 0 
                ? t('verification.resendCountdown', { seconds: resendCooldown })
                : isSending 
                ? t('verification.sending')
                : t('verification.resend')}
            </span>
          </button>

          {/* Logout */}
          <button
            id="btn-verification-logout"
            onClick={handleLogout}
            className="w-full py-2.5 px-4 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t('verification.logout')}</span>
          </button>
        </div>

        {/* Helpful Hints Box */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-left space-y-1.5 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-slate-700 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t('verification.hintsTitle')}</span>
          </div>
          <ul className="list-disc pl-4 space-y-1">
            <li>{t('verification.hintSpam')}</li>
            <li>{t('verification.hintDelay')}</li>
            <li>{t('verification.hintAddress')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
