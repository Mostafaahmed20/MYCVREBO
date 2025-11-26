import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Settings, MessageSquare } from 'lucide-react';
import { sendMessageToNPC } from '../services/gemini';

interface Message {
  id: number;
  sender: 'User' | 'Mostafa' | 'System';
  text: string;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'System', text: 'Welcome to the server. Mostafa is online.' },
    { id: 2, sender: 'Mostafa', text: 'LFG: Need help with a complex React useEffect hook? PM me.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Track component mount status to prevent state updates after unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now(), sender: 'User', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Prepare history for API
    const history = messages
        .filter(m => m.sender !== 'System')
        .map(m => ({
            role: m.sender === 'User' ? 'user' : 'model',
            parts: [{ text: m.text }]
        }));

    try {
      const responseText = await sendMessageToNPC(history, userMsg.text);
      
      // Only update state if component is still mounted
      if (isMountedRef.current) {
        setIsTyping(false);
        
        if (responseText) {
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'Mostafa', text: responseText }]);
        }
      }
    } catch (error) {
      // Handle any errors that weren't caught in sendMessageToNPC
      console.error("Chat error:", error);
      if (isMountedRef.current) {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'System', text: '*Connection interrupted*' }]);
      }
    }
  }, [inputValue, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      void handleSend();
    }
  };

  return (
    <div className="w-full lg:w-96 flex flex-col h-[300px] lg:h-auto bg-black/80 border-2 border-slate-700 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl">
        
        {/* Chat Header */}
        <div className="bg-slate-900 p-2 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Chat</span>
            </div>
            <Settings size={14} className="text-slate-500 cursor-pointer hover:text-slate-300" />
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 font-mono text-sm scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
                <div key={msg.id} className={`${msg.sender === 'System' ? 'text-yellow-500 italic' : ''}`}>
                    {msg.sender !== 'System' && (
                        <span className={`font-bold cursor-pointer hover:underline ${
                            msg.sender === 'User' ? 'text-cyan-400' : 'text-fuchsia-400'
                        }`}>
                            [{msg.sender}]:
                        </span>
                    )}
                    <span className={`ml-2 ${msg.sender === 'User' ? 'text-white' : msg.sender === 'Mostafa' ? 'text-fuchsia-100' : ''}`}>
                        {msg.text}
                    </span>
                </div>
            ))}
            {isTyping && (
                <div className="text-fuchsia-400 text-xs animate-pulse ml-2">Mostafa is typing...</div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-slate-900 p-2 border-t border-slate-700 flex gap-2">
            <div className="bg-black/50 text-slate-400 px-2 flex items-center rounded text-xs border border-slate-700 select-none">
                To: Mostafa
            </div>
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-600"
                placeholder="Type here..."
            />
            <button 
                onClick={() => void handleSend()}
                className="text-cyan-500 hover:text-cyan-300 transition-colors"
            >
                <Send size={16} />
            </button>
        </div>
    </div>
  );
};

export default ChatWindow;