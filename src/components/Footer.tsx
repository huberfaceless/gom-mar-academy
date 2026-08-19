import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Cookie, 
  FileText, 
  Building, 
  GraduationCap, 
  ChevronUp,
  Heart
} from 'lucide-react';
import gommarLogo from '../assets/images/gommar_logo.jpg';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  theme?: string;
  onOpenLegal: (docType: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  theme = 'clean-light',
  onOpenLegal 
}) => {
  const isLight = theme === 'clean-light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`mt-auto w-full border-t transition-colors ${
      isLight 
        ? 'bg-slate-900 border-slate-800 text-slate-400' 
        : 'bg-slate-950 border-slate-800/80 text-slate-400'
    } pt-10 pb-20 md:pb-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Mission (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src={gommarLogo} 
                alt="GOM-MAR Academy" 
                className="w-8 h-8 rounded-xl object-cover shadow-sm ring-1 ring-white/10" 
              />
              <span className="text-base font-black tracking-tight text-white">
                GOM-MAR <span className="text-indigo-400">Academy</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Deine führende Plattform für den systematischen Aufbau eines krisensicheren, automatisierten Online-Nebeneinkommens durch moderne digitale Funnels und praxiserprobte Strategien.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                100% DSGVO-konform
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                <Lock className="w-3 h-3 text-amber-400" />
                256-Bit SSL-Schutz
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Bereiche (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Academy-Bereiche
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  Schritt-für-Schritt Lehrplan
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium">
                  E-Mail Marketing & Funnels
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium">
                  GOM-MAR Toolbox & Vorlagen
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium">
                  KI-Mentor „Frag GOM-MAR“
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Rechtliches & Datenschutz (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Rechtliches & Richtlinien
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => onOpenLegal('imprint')}
                className="text-left text-slate-300 hover:text-indigo-400 transition-colors font-medium flex items-center gap-2 cursor-pointer group"
              >
                <Building className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                <span>Impressum</span>
              </button>

              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-left text-slate-300 hover:text-indigo-400 transition-colors font-medium flex items-center gap-2 cursor-pointer group"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                <span>Datenschutzerklärung</span>
              </button>

              <button
                onClick={() => onOpenLegal('cookies')}
                className="text-left text-slate-300 hover:text-indigo-400 transition-colors font-medium flex items-center gap-2 cursor-pointer group"
              >
                <Cookie className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                <span>Cookie-Richtlinie & Einstellungen</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Transparenz und der Schutz deiner persönlichen Daten haben bei uns oberste Priorität.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} GOM-MAR Academy. Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('imprint')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Cookies
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title="Nach oben scrollen"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
