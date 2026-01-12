import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-red">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="text-left text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              中企销·供应链ERP<br/>
              <span className="text-white">震撼发布</span>
            </h1>
            <div className="w-16 h-1 bg-white mb-8 opacity-50"></div>
            <p className="text-lg sm:text-xl text-white/90 mb-2 font-light">
              进销存、客户、商城，资金全链路管理
            </p>
            <p className="text-lg sm:text-xl text-white/90 mb-10 font-light">
              数据赋能、助力企业智慧经营
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-brand-red text-base font-bold rounded hover:bg-gray-100 transition-colors shadow-lg"
              >
                获取演示
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-brand-red text-base font-bold rounded hover:bg-gray-100 transition-colors shadow-lg"
              >
                免费注册
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-2xl">
                {/* 
                   Please ensure the image file is placed in the public folder 
                   with the name 'hero-illustration.png' 
                */}
                <img 
                  src="/hero-illustration.png"
                  alt="中企销供应链ERP系统演示" 
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Decorative glow behind the image */}
                <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full -z-10 opacity-50"></div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Decorative background elements to match the "tech" feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    </section>
  );
};