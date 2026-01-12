import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, BotIcon, LoaderIcon } from './Icons';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAdviser: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '您好！我是中企销的 AI 智能顾问。关于生鲜配送系统的功能、部署或效率提升，您可以随时问我。',
      timestamp: Date.now()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getAIResponse(input);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
       console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Context */}
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
            不懂技术方案？<br />
            <span className="text-blue-600">AI 顾问</span> 为您实时解答
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            我们的 Gemini 驱动的智能助手 24/7 在线。无论您是关心如何对接电子秤，还是想了解如何降低 20% 的生鲜损耗，它都能为您提供专业的行业洞察。
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              询问：“如何通过系统降低库存损耗？”
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              询问：“系统支持哪些智能电子秤硬件？”
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              询问：“你们的智能排线功能是如何工作的？”
            </li>
          </ul>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center">
            <div className="bg-blue-600 p-1.5 rounded-lg mr-3">
              <BotIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">ZhongQiXiao AI</h4>
              <p className="text-slate-400 text-xs">Powered by Gemini 3</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl px-4 py-3 rounded-bl-none border border-slate-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="输入您的问题..."
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <LoaderIcon className="w-5 h-5 animate-spin" /> : <SendIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};