import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, SquareTerminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Terminal online. Query system active. How can I assist with Arman's profile?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    const response = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button - Square */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-neutral-900 dark:bg-white text-white dark:text-black shadow-none hover:bg-black dark:hover:bg-neutral-200 transition-colors duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <SquareTerminal size={20} className="mr-3" />
        <span className="font-bold text-sm uppercase tracking-wider">AI Terminal</span>
      </button>

      {/* Chat Window - Sharp */}
      {isOpen && (
        <div className="fixed bottom-8 right-4 md:right-8 w-[350px] h-[500px] bg-white dark:bg-neutral-950 border border-neutral-900 dark:border-neutral-100 shadow-none z-50 flex flex-col animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-neutral-900 dark:border-neutral-100 flex justify-between items-center bg-neutral-900 dark:bg-white text-white dark:text-black">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white dark:bg-black animate-pulse"></div>
                <h3 className="font-bold text-xs uppercase tracking-widest">System Access</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm font-mono ${
                  msg.role === 'user' 
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black' 
                    : 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200'
                }`}>
                  <span className="block text-[10px] opacity-50 mb-1 uppercase tracking-wider">{msg.role === 'user' ? 'USR' : 'SYS'}</span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-3">
                  <Loader2 size={16} className="animate-spin text-neutral-900 dark:text-white" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="ENTER COMMAND..."
                className="flex-1 border border-neutral-900 dark:border-neutral-100 bg-transparent text-neutral-900 dark:text-white px-3 py-2 text-sm font-mono outline-none placeholder:text-neutral-400"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="px-4 bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};