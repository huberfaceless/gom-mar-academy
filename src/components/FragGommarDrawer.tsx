import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, ChatMessage } from '../types';
import gommarLogo from '../assets/images/gommar_logo.jpg';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  Loader2, 
  User, 
  ArrowRight, 
  HelpCircle,
  Zap,
   Lightbulb,
  Copy,
  Check
} from 'lucide-react';

interface FragGommarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  initialPrompt?: string;
  currentStageTitle?: string;
  currentLessonTitle?: string;
  onNavigate: (view: string, stageId?: number, lessonId?: string) => void;
}

export const FragGommarDrawer: React.FC<FragGommarDrawerProps> = ({
  isOpen,
  onClose,
  user,
  initialPrompt,
  currentStageTitle = '1. Dein Start',
  currentLessonTitle = '1.1 Wie funktioniert Online-Einkommen?',
  onNavigate,
}) => {
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'gommar',
      text: `Hallo ${user.name}! 👋 Ich bin dein KI-Mentor "Frag GOM-MAR".

Ich kenne genau deinen Lernstand (Du bist gerade bei Stage ${user.currentStageId}: "${currentStageTitle}"). 

Wie kann ich dir bei deiner nächsten Aufgabe oder bei deinem Online-System helfen?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick suggestion chips
  const quickQuestions = [
    'Ich habe keine Ahnung, welche Nische ich nehmen soll.',
    'Ich habe meine Landingpage erstellt. Was mache ich jetzt?',
    'Hilf mir, einen Lead Magneten zu erfinden.',
    'Schreibe eine Betreffzeile für meine Willkommens-E-Mail.',
  ];

  useEffect(() => {
    if (initialPrompt) {
      handleSendPrompt(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSendPrompt = async (customText?: string) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-gommar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          currentStageTitle,
          currentLessonTitle,
          niche: user.niche,
          targetAudience: user.targetAudience,
          history: messages.slice(-6).map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'gommar',
        text: data.answer || 'Entschuldigung, ich konnte darauf keine Antwort generieren.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error asking Frag GOM-MAR:', err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'gommar',
        text: 'Derzeit ist der Mentor kurz nicht erreichbar. Bitte versuche es gleich erneut.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Drawer Body */}
      <div className="relative w-full max-w-lg bg-white border-l border-slate-200 text-slate-900 h-full flex flex-col justify-between shadow-2xl z-10">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 p-0.5 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
              <img 
                src={gommarLogo} 
                alt="GOM-MAR" 
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base text-slate-950">🤖 Frag GOM-MAR</h3>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-mono font-bold">
                  KI Mentor
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Geführtes System-Wissen • Stage {user.currentStageId}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'gommar' && (
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 p-0.5 overflow-hidden flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <img 
                    src={gommarLogo} 
                    alt="GOM-MAR" 
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-1 ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white font-medium rounded-tr-none shadow-md shadow-indigo-600/20'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none whitespace-pre-line shadow-xs'
              }`}>
                <p>{msg.text}</p>
                <span className={`block text-[10px] text-right ${
                  msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                }`}>
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  {user.name.substring(0, 1)}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-slate-500 text-xs">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center">
                <Bot className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span className="text-slate-700">GOM-MAR denkt nach...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions Chips */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-amber-500" />
            Häufige Fragen:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(q)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200 shrink-0 whitespace-nowrap transition-colors cursor-pointer"
              >
                "{q}"
              </button>
            ))}
          </div>
        </div>

        {/* Input Box */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Frage GOM-MAR nach Hilfe zu deinem System..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !inputPrompt.trim()}
              className="px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-indigo-600/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
