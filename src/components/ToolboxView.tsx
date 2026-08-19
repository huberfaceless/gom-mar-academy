import React, { useState } from 'react';
import { PromptTemplate } from '../types';
import { PROMPT_LIBRARY } from '../data/academyData';
import { 
  Wrench, 
  Sparkles, 
  FileText, 
  Mail, 
  Layout, 
  ShoppingBag, 
  Copy, 
  Check, 
  Bot, 
  Send, 
  Loader2, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';

interface ToolboxViewProps {
  initialCategory?: string;
  onOpenFragGommar: (prompt?: string) => void;
}

export const ToolboxView: React.FC<ToolboxViewProps> = ({
  initialCategory = 'content',
  onOpenFragGommar,
}) => {
  const [activeTab, setActiveTab] = useState<'tools' | 'prompts'>('tools');
  const [selectedTool, setSelectedTool] = useState<string>(initialCategory || 'content');

  // Input states for AI generation
  const [topicInput, setTopicInput] = useState<string>('');
  const [targetAudienceInput, setTargetAudienceInput] = useState<string>('Angestellte auf der Suche nach zeitlicher Freiheit');
  const [nicheInput, setNicheInput] = useState<string>('Online-Nebeneinkommen');
  const [offerInput, setOfferInput] = useState<string>('GOM-MAR Starter System');
  const [formatInput, setFormatInput] = useState<string>('Facebook');

  // AI Output state
  const [generatedResult, setGeneratedResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [promptCategoryFilter, setPromptCategoryFilter] = useState<string>('Alle');

  const toolsList = [
    { id: 'content', title: 'Content Generator', icon: FileText, desc: 'Facebook-Post, Instagram-Post, Pinterest-Pin, Reel-Idee' },
    { id: 'email', title: 'E-Mail Generator', icon: Mail, desc: 'Welcome-Mail, Follow-up, Verkaufs-Mail' },
    { id: 'landingpage', title: 'Landingpage Assistant', icon: Layout, desc: 'Headline, Benefits, Call To Action' },
    { id: 'affiliate', title: 'Affiliate Assistant', icon: ShoppingBag, desc: 'Angebot analysieren, Zielgruppe, Werbebotschaft' },
  ];

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedResult('');
    try {
      const response = await fetch('/api/toolbox/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolType: selectedTool,
          format: formatInput,
          topic: topicInput || 'Online-Nebeneinkommen ohne Vorkenntnisse',
          targetAudience: targetAudienceInput,
          niche: nicheInput,
          offer: offerInput,
        }),
      });

      const data = await response.json();
      if (data.result) {
        setGeneratedResult(data.result);
      } else {
        setGeneratedResult('Fehler beim Generieren. Bitte versuche es erneut.');
      }
    } catch (err) {
      console.error(err);
      setGeneratedResult('Ein Verbindungsfehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const filteredPrompts = promptCategoryFilter === 'Alle'
    ? PROMPT_LIBRARY
    : PROMPT_LIBRARY.filter((p) => p.category === promptCategoryFilter);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
            <Wrench className="w-3.5 h-3.5 text-indigo-600" />
            GOM-MAR KI Werkzeuge
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">🧰 Die GOM-MAR Toolbox</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Spezialisierte KI-Generatoren und geprüfte KI-Prompts, um deine Landingpage, E-Mails und Social Media Posts in Sekunden zu erstellen.
          </p>
        </div>

        {/* Tab Toggle: KI Tools vs Prompt Library */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <span>🛠️ KI Generators</span>
          </button>
          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'prompts'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <span>📖 Prompt Library</span>
          </button>
        </div>
      </div>

      {activeTab === 'tools' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Tool Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-[80px] lg:self-start">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
              Wähle ein KI Werkzeug:
            </p>
            <div className="space-y-2">
              {toolsList.map((tool) => {
                const Icon = tool.icon;
                const isSelected = selectedTool === tool.id;

                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50/80 border-indigo-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900">{tool.title}</p>
                        <p className="text-[11px] text-slate-500">{tool.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generator Input & Result Box (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                  GOM-MAR KI Generator
                </span>
                <h3 className="text-xl font-bold text-slate-950 mt-0.5">
                  {toolsList.find((t) => t.id === selectedTool)?.title}
                </h3>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                {selectedTool === 'content' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Social Media Format:
                    </label>
                    <select
                      value={formatInput}
                      onChange={(e) => setFormatInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
                    >
                      <option value="Facebook">Facebook Post (Gruppen & Profil)</option>
                      <option value="Instagram">Instagram Post / Caption</option>
                      <option value="Pinterest">Pinterest Pin Idee & Beschreibung</option>
                      <option value="Reel">Reel / Short Skript (15-30 Sek)</option>
                    </select>
                  </div>
                )}

                {selectedTool === 'email' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      E-Mail Typ:
                    </label>
                    <select
                      value={formatInput}
                      onChange={(e) => setFormatInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
                    >
                      <option value="Welcome-Mail">Mail 1: Welcome & Lead Magnet Download</option>
                      <option value="Follow-up">Mail 2/3: Storytelling & Problem-Lösung</option>
                      <option value="Verkaufs-Mail">Mail 4/5: Verkaufs-Pitch & Angebot</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Thema / Hauptaussage:
                  </label>
                  <input
                    type="text"
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    placeholder="z.B. Wie du dir in 30 Min am Tag dein erstes Online-Nebeneinkommen aufbaust"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Deine Nische:
                    </label>
                    <input
                      type="text"
                      value={nicheInput}
                      onChange={(e) => setNicheInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Deine Zielgruppe:
                    </label>
                    <input
                      type="text"
                      value={targetAudienceInput}
                      onChange={(e) => setTargetAudienceInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Generiere mit KI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Inhalt jetzt generieren →</span>
                    </>
                  )}
                </button>
              </div>

              {/* Result Preview Box */}
              {generatedResult && (
                <div className="mt-6 space-y-4 pt-6 border-t border-slate-100 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      Ergeneriertes Ergebnis:
                    </span>

                    <button
                      onClick={() => handleCopy(generatedResult)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                    >
                      {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSuccess ? 'Kopiert!' : 'Text kopieren'}</span>
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-sans">
                    {generatedResult}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Prompt Library View */
        <div className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {['Alle', 'Nische', 'Content', 'E-Mail', 'Landingpage', 'Mindset'].map((cat) => (
              <button
                key={cat}
                onClick={() => setPromptCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  promptCategoryFilter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPrompts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-3xl p-5 space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-950 text-base">{p.title}</h4>
                  <p className="text-xs text-slate-600">{p.description}</p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
                    "{p.prompt}"
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleCopy(p.prompt)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-slate-200"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kopieren</span>
                  </button>

                  <button
                    onClick={() => onOpenFragGommar(p.prompt)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-sm"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>In Frag GOM-MAR nutzen →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
