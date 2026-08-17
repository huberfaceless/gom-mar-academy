import React from 'react';
import { LayoutGrid, GraduationCap, Mail, Wrench, Bot } from 'lucide-react';

interface BottomNavProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onOpenFragGommar: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeView,
  onNavigate,
  onOpenFragGommar,
}) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'academy', label: 'Academy', icon: GraduationCap },
    { id: 'email', label: 'Marketing', icon: Mail },
    { id: 'toolbox', label: 'Toolbox', icon: Wrench },
    { id: 'ki', label: 'KI', icon: Bot, isAction: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 shadow-lg shadow-slate-900/5">
      <nav className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeView === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.isAction) {
                  onOpenFragGommar();
                } else {
                  onNavigate(tab.id);
                }
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-150 relative ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon
                className={`w-5 h-5 mb-1 transition-transform ${
                  isActive ? 'text-indigo-600 scale-105' : 'text-slate-500'
                }`}
                strokeWidth={isActive ? 2.3 : 1.8}
              />
              <span className={`text-[10px] tracking-tight ${isActive ? 'font-extrabold text-indigo-600' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
