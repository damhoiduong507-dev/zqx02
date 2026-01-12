import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AIAdviser } from './components/AIAdviser';
import { ContactForm } from './components/ContactForm';
import { FloatingMenu } from './components/FloatingMenu';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-red-200 selection:text-red-900">
      <Header />
      <FloatingMenu />
      <main>
        <Hero />
        <Features />
        <AIAdviser />
        <ContactForm />
      </main>
      
      <footer id="footer" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-white text-lg font-bold mb-4">中企销 ZhongQiXiao</h5>
            <p className="text-sm">
              致力于为生鲜配送企业提供最先进的数字化基础设施。
            </p>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">联系我们</h5>
            <p className="text-sm">400-1028-608</p>
            <p className="text-sm">support@zhongqixiao.cn</p>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">关注</h5>
            <div className="flex space-x-4">
              <span className="cursor-pointer hover:text-white">微信公众号</span>
              <span className="cursor-pointer hover:text-white">知乎专栏</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
          © {new Date().getFullYear()} ZhongQiXiao. All rights reserved. 京ICP备12345678号
        </div>
      </footer>
    </div>
  );
};

export default App;