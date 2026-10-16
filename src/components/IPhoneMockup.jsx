import React from 'react';

export default function IPhoneMockup({
  children,
  className = '',
  island = true,
  theme = 'light',
  notch = false,
  scale = 1
}) {
  return (
    <div 
      className={`relative rounded-[50px] p-[10px] bg-[#222] shadow-2xl border-[3px] border-[#38383a] ring-1 ring-black/40 ${className}`}
      style={{
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.12) inset',
      }}
    >
      {/* Side buttons */}
      <div className="absolute -left-[5px] top-[100px] w-[3px] h-[32px] bg-[#444] rounded-l-sm" />
      <div className="absolute -left-[5px] top-[145px] w-[3px] h-[55px] bg-[#444] rounded-l-sm" />
      <div className="absolute -left-[5px] top-[210px] w-[3px] h-[55px] bg-[#444] rounded-l-sm" />
      <div className="absolute -right-[5px] top-[140px] w-[3px] h-[80px] bg-[#444] rounded-r-sm" />

      {/* Screen Frame */}
      <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-black flex flex-col select-none">
        {/* Dynamic Island / Notch */}
        {island && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 h-[26px] w-[100px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] border border-[#1f1f2e] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1b2b48]" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#06101e]" />
          </div>
        )}

        {/* Screen Content */}
        <div className="relative w-full h-full flex flex-col overflow-hidden">
          {children}
        </div>

        {/* Home Indicator bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 w-32 h-1 bg-white/60 rounded-full backdrop-blur-md pointer-events-none" />
      </div>
    </div>
  );
}
