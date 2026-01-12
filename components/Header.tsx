import React, { useState } from 'react';
import { MenuIcon, XIcon, LogoIcon } from './Icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '产品服务', href: '#features' },
    { name: '成功案例', href: '#solutions' },
    { name: '新闻动态', href: '#news' },
    { name: '关于我们', href: '#footer' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-red transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo & Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer mr-12" onClick={() => window.scrollTo(0,0)}>
              <div className="mr-2 text-white opacity-90">
                 <LogoIcon className="w-8 h-8" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">中企销</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-white/80 px-1 py-2 text-[15px] font-normal transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right text-white">
              <div className="text-lg font-bold leading-none mb-1">400-1028-608</div>
              <div className="text-xs opacity-80">工作日: 9:00 - 18:00</div>
            </div>
            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-brand-red px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              体验
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 p-2"
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-red border-t border-white/10 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-dark"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 text-white">
              <div className="font-bold text-lg">400-1028-608</div>
              <div className="text-xs opacity-70 mb-3">工作日: 9:00 - 18:00</div>
              <a
                 href="#contact"
                 onClick={() => setIsMenuOpen(false)}
                 className="block w-full text-center bg-white text-brand-red px-3 py-3 rounded-md font-bold"
              >
                立即体验
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};