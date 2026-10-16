import React, { useState, useEffect } from 'react';

export default function SubNav({ activeSection = 'overview' }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 44);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`sticky top-[44px] z-40 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(29,29,31,0.85)] backdrop-blur-md border-[#d2d2d7]/50 dark:border-[#38383a]/60 shadow-sm'
          : 'bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white flex items-center gap-1.5"
        >
          <span>iOS 16</span>
        </a>

        <div className="flex items-center space-x-6 text-[12px] md:text-[13px]">
          <button
            onClick={() => scrollTo('hero')}
            className="text-[#1d1d1f] dark:text-white font-normal hover:text-[#0071e3] transition-colors"
          >
            Overview
          </button>
          <button
            onClick={() => scrollTo('lock-screen')}
            className="text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
          >
            Lock Screen
          </button>
          <button
            onClick={() => scrollTo('features-all')}
            className="hidden sm:inline-block text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
          >
            All New Features
          </button>
          <button
            onClick={() => scrollTo('features-all')}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] font-medium px-3.5 py-1 rounded-full transition-all shadow-sm active:scale-95"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
