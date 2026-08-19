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
  Check,
  RotateCcw
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

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.9em] text-indigo-700">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-slate-950">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-800"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
};

const MarkdownMessage: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim().startsWith('```')) {
      const language = line.trim().slice(3);
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += index < lines.length ? 1 : 0;
      blocks.push(
        <pre key={`code-${index}`} className="overflow-x-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-100">
          <code className={language ? `language-${language}` : undefined}>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    if (/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
      blocks.push(<hr key={`divider-${index}`} className="border-0 border-t border-slate-200" />);
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingClasses = level === 1
        ? 'text-base font-extrabold text-slate-950'
        : level === 2
          ? 'text-sm font-bold text-slate-950'
          : 'text-xs font-bold uppercase tracking-wide text-slate-700';
      blocks.push(
        <div key={`heading-${index}`} className={headingClasses}>
          {renderInlineMarkdown(headingMatch[2])}
        </div>
      );
      index += 1;
      continue;
    }

    const listMatch = line.match(/^\s*(?:([-*+])|(\d+)\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = Boolean(listMatch[2]);
      const items: string[] = [];
      while (index < lines.length) {
        const itemMatch = lines[index].match(/^\s*(?:([-*+])|(\d+)\.)\s+(.+)$/);
        if (!itemMatch || Boolean(itemMatch[2]) !== ordered) break;
        items.push(itemMatch[3]);
        index += 1;
      }
      const ListTag = ordered ? 'ol' : 'ul';
      blocks.push(
        <ListTag
          key={`list-${index}`}
          className={`space-y-1 pl-5 ${ordered ? 'list-decimal' : 'list-disc'}`}
        >
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-0.5 marker:text-indigo-500">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ListTag>
      );
      continue;
    }

    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].startsWith('> ')) {
        quoteLines.push(lines[index].slice(2));
        index += 1;
      }
      blocks.push(
        <blockquote key={`quote-${index}`} className="border-l-4 border-indigo-300 pl-3 italic text-slate-600">
          {quoteLines.map((quoteLine, quoteIndex) => (
            <React.Fragment key={quoteIndex}>
              {quoteIndex > 0 && <br />}
              {renderInlineMarkdown(quoteLine)}
            </React.Fragment>
          ))}
        </blockquote>
      );
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length
      && lines[index].trim()
      && !/^(#{1,3})\s+/.test(lines[index])
      && !/^\s*(?:[-*+]|\d+\.)\s+/.test(lines[index])
      && !lines[index].trim().startsWith('```')
      && !/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(lines[index])
      && !lines[index].startsWith('> ')
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    blocks.push(
      <p key={`paragraph-${index}`}>
        {paragraphLines.map((paragraphLine, paragraphIndex) => (
          <React.Fragment key={paragraphIndex}>
            {paragraphIndex > 0 && <br />}
            {renderInlineMarkdown(paragraphLine)}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return <div className="space-y-3">{blocks}</div>;
};

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
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [failedPrompts, setFailedPrompts] = useState<Record<string, string>>({});
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

  const handleSendPrompt = async (customText?: string, retryMessageId?: string) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim() || isLoading) return;

    if (retryMessageId) {
      setMessages((prev) => prev.filter((message) => message.id !== retryMessageId));
      setFailedPrompts((prev) => {
        const next = { ...prev };
        delete next[retryMessageId];
        return next;
      });
    } else {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: textToSend,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, userMessage]);
    }
    setInputPrompt('');
    setIsLoading(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch('/api/ask-gommar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          prompt: textToSend,
          currentStageTitle,
          currentLessonTitle,
          niche: user.niche,
          targetAudience: user.targetAudience,
          history: messages
            .filter((message) => message.id !== retryMessageId)
            .slice(-6)
            .map((message) => ({ sender: message.sender, text: message.text })),
        }),
      });

      if (!response.ok) {
        if (response.status === 429) throw new Error('RATE_LIMIT');
        if (response.status >= 500) throw new Error('SERVER_ERROR');
        throw new Error('REQUEST_FAILED');
      }

      let data: unknown;
      try {
        data = await response.json();
      } catch {
        throw new Error('INVALID_RESPONSE');
      }

      const answer = typeof data === 'object'
        && data !== null
        && 'answer' in data
        && typeof data.answer === 'string'
        ? data.answer.trim()
        : '';

      if (!answer) throw new Error('EMPTY_ANSWER');

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'gommar',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error asking Frag GOM-MAR:', err);
      const errorCode = err instanceof Error ? err.message : '';
      const errorText = err instanceof DOMException && err.name === 'AbortError'
        ? 'Die Antwort dauert ungewöhnlich lange. Bitte versuche es erneut.'
        : errorCode === 'RATE_LIMIT'
          ? 'Der KI-Mentor erhält gerade sehr viele Anfragen. Bitte versuche es in einem Moment erneut.'
          : errorCode === 'SERVER_ERROR'
            ? 'Der KI-Mentor ist vorübergehend nicht erreichbar. Bitte versuche es gleich erneut.'
            : errorCode === 'INVALID_RESPONSE' || errorCode === 'EMPTY_ANSWER'
              ? 'Die Antwort konnte nicht richtig verarbeitet werden. Bitte versuche es erneut.'
              : 'Die Anfrage konnte nicht gesendet werden. Prüfe deine Verbindung und versuche es erneut.';
      const errorMessageId = (Date.now() + 1).toString();
      const errorMessage: ChatMessage = {
        id: errorMessageId,
        sender: 'gommar',
        text: errorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setFailedPrompts((prev) => ({ ...prev, [errorMessageId]: textToSend }));
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };
const handleCopyMessage = async (message: ChatMessage) => {
  try {
    await navigator.clipboard.writeText(message.text);
    setCopiedMessageId(message.id);
    window.setTimeout(() => setCopiedMessageId(null), 2000);
  } catch (err) {
    console.error('Kopieren fehlgeschlagen:', err);
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
                {msg.sender === 'gommar' ? <MarkdownMessage text={msg.text} /> : <p>{msg.text}</p>}
                {failedPrompts[msg.id] && (
                  <button
                    type="button"
                    onClick={() => handleSendPrompt(failedPrompts[msg.id], msg.id)}
                    disabled={isLoading}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-[11px] font-bold text-indigo-700 transition-colors hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Erneut versuchen
                  </button>
                )}
               <div className="mt-2 flex items-center justify-between gap-3">
  {msg.sender === 'gommar' ? (
    <button
      type="button"
      onClick={() => handleCopyMessage(msg)}
      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
      aria-label="Antwort kopieren"
    >
      {copiedMessageId === msg.id ? (
        <>
          <Check className="w-3.5 h-3.5" />
          Kopiert
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Kopieren
        </>
      )}
    </button>
  ) : (
    <span />
  )}

  <span className={`block text-[10px] text-right ${
    msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
  }`}>
    {msg.timestamp}
  </span>
</div>
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
