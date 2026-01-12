import React from 'react';
import { HeadsetIcon, ChatBubbleIcon, PhoneIcon, ChevronUpIcon } from './Icons';

export const FloatingMenu: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 pr-1">
      <div className="group relative bg-white hover:bg-brand-red text-brand-red hover:text-white p-3 rounded-l-lg shadow-lg cursor-pointer transition-colors border border-r-0 border-gray-100">
        <div className="flex flex-col items-center justify-center w-10">
          <HeadsetIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] leading-tight text-center">客服<br/>经理</span>
        </div>
        {/* Tooltip/Expand */}
        <div className="absolute right-full top-0 h-full bg-white text-brand-red items-center px-4 rounded-l-lg shadow-lg hidden group-hover:flex whitespace-nowrap border border-r-0 border-gray-100">
          <span className="font-bold">联系经理</span>
        </div>
      </div>

      <div className="group relative bg-white hover:bg-brand-red text-brand-red hover:text-white p-3 rounded-l-lg shadow-lg cursor-pointer transition-colors border border-r-0 border-gray-100">
        <div className="flex flex-col items-center justify-center w-10">
          <ChatBubbleIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] leading-tight text-center">微信<br/>咨询</span>
        </div>
      </div>

      <div className="group relative bg-white hover:bg-brand-red text-brand-red hover:text-white p-3 rounded-l-lg shadow-lg cursor-pointer transition-colors border border-r-0 border-gray-100">
        <div className="flex flex-col items-center justify-center w-10">
          <PhoneIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] leading-tight text-center">电话<br/>咨询</span>
        </div>
        <div className="absolute right-full top-0 h-full bg-white text-brand-red items-center px-4 rounded-l-lg shadow-lg hidden group-hover:flex whitespace-nowrap border border-r-0 border-gray-100">
          <span className="font-bold">400-1028-608</span>
        </div>
      </div>

      <div 
        onClick={scrollToTop}
        className="group relative bg-white hover:bg-brand-red text-brand-red hover:text-white p-3 rounded-l-lg shadow-lg cursor-pointer transition-colors border border-r-0 border-gray-100 mt-4"
      >
        <div className="flex flex-col items-center justify-center w-10">
          <ChevronUpIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] leading-tight text-center">返回<br/>顶部</span>
        </div>
      </div>
    </div>
  );
};