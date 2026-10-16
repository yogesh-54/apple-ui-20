import React, { useState } from 'react';
import { Sparkles, Copy, Video, Globe, Phone, FileText, Check } from 'lucide-react';

export default function LiveTextSection() {
  const [isLifted, setIsLifted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const copyLiveText = () => {
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="live-text" className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Intelligence
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Lift subject from background.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Lift a subject from an image or isolate it by instantly removing the background with on-device machine learning. Plus Live Text now works across paused video frames.
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          {/* Card 1: Visual Look Up Subject Lifting Left (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[36px] border border-[#e5e5ea] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0071e3] text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Visual Look Up
                </span>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  Tap and hold to lift
                </h3>
              </div>
              <button
                onClick={() => setIsLifted(!isLifted)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isLifted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#1d1d1f] text-white hover:bg-black'
                }`}
              >
                {isLifted ? 'Subject Lifted!' : 'Click to Lift Dog'}
              </button>
            </div>

            {/* Interactive Image Sandbox */}
            <div
              onClick={() => setIsLifted(!isLifted)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer select-none group border border-black/5"
            >
              {/* Background image scene */}
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
                alt="Golden Beagle dog portrait"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isLifted ? 'brightness-50 blur-[2px]' : 'brightness-100 group-hover:scale-102'
                }`}
              />

              {/* Shimmer boundary overlay when lifted */}
              {isLifted && (
                <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in-95 duration-500">
                  <div className="relative">
                    {/* Glowing highlight halo */}
                    <div className="w-64 h-64 rounded-full bg-white/20 filter blur-xl animate-pulse" />
                    
                    {/* Cutout simulated card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-4">
                      <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 flex items-center gap-2 text-xs font-bold text-[#1d1d1f]">
                        <Copy className="w-4 h-4 text-[#0071e3]" />
                        <span>Copied as Sticker / Drag to Messages</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tap instruction */}
              {!isLifted && (
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-white border border-white/20">
                  Tap image to isolate subject
                </div>
              )}
            </div>

            <p className="text-xs text-[#6e6e73] mt-4 leading-relaxed">
              Apple Neural Engine detects animals, birds, insects, statues, and people in milliseconds with zero server upload for absolute privacy.
            </p>
          </div>

          {/* Card 2: Live Text for Video Right (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-[36px] border border-[#e5e5ea] shadow-sm space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                Live Text for video
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Pause a video on any frame with text to interact with words. Copy code snippets, convert foreign currencies, or translate signs on the fly.
              </p>
            </div>

            {/* Live Text Video Simulation */}
            <div className="p-4 rounded-2xl bg-[#1d1d1f] text-white">
              <div className="flex items-center justify-between mb-3 text-[11px] text-[#86868b]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Video Paused at 0:24
                </span>
                <span className="text-emerald-400 font-mono">TEXT RECOGNIZED</span>
              </div>

              <div className="p-3 bg-white/10 rounded-xl border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between mb-3">
                <span>https://apple.com/ios/ios-16/</span>
                <button
                  onClick={copyLiveText}
                  className="p-1 rounded hover:bg-white/10 text-white"
                  title="Copy text"
                >
                  {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Translate</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Number</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Look Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
