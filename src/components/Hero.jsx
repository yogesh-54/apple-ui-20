import React, { useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import { CloudSun, BatteryMedium, Activity, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [activeHeroPhone, setActiveHeroPhone] = useState(2); // 0 to 4

  const phoneScreens = [
    {
      id: 0,
      title: 'Depth Portrait',
      sub: 'Multi-layer depth effect',
      time: '9:41',
      date: 'MONDAY, SEPTEMBER 12',
      font: 'font-serif',
      textColor: 'text-amber-100',
      bgGradient: 'from-amber-900/90 via-stone-800 to-black',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80', // handsome dog portrait
      hasSubjectOverlap: true,
      widgets: [
        { icon: CloudSun, label: '74°', sub: 'Partly Cloudy' },
        { icon: Activity, label: '520', sub: 'CAL' }
      ]
    },
    {
      id: 1,
      title: 'Neon Horizon',
      sub: 'Vibrant custom styling',
      time: '9:41',
      date: 'TUESDAY, SEPTEMBER 13',
      font: 'font-sans font-extrabold tracking-tight',
      textColor: 'text-cyan-300',
      bgGradient: 'from-blue-600 via-indigo-900 to-black',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', // tropical beach
      hasSubjectOverlap: false,
      widgets: [
        { icon: BatteryMedium, label: '92%', sub: 'iPhone' },
        { icon: CloudSun, label: '78°', sub: 'Sunny' }
      ]
    },
    {
      id: 2,
      title: 'Astronomy',
      sub: 'Dynamic Earth atmosphere',
      time: '9:41',
      date: 'WEDNESDAY, SEPTEMBER 14',
      font: 'font-mono font-bold tracking-tight',
      textColor: 'text-white',
      bgGradient: 'from-blue-950 via-slate-900 to-black',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80', // Earth space globe
      hasSubjectOverlap: false,
      widgets: [
        { icon: Activity, label: '640/30/12', sub: 'Rings' },
        { icon: CloudSun, label: '68°', sub: 'Clear' }
      ]
    },
    {
      id: 3,
      title: 'Clownfish',
      sub: 'Apple heritage remastered',
      time: '9:41',
      date: 'THURSDAY, SEPTEMBER 15',
      font: 'font-sans font-black tracking-tighter',
      textColor: 'text-emerald-300',
      bgGradient: 'from-teal-900 via-emerald-950 to-black',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', // ocean clownfish coral
      hasSubjectOverlap: true,
      widgets: [
        { icon: BatteryMedium, label: '100%', sub: 'Fully Charged' },
        { icon: Activity, label: '480', sub: 'Move' }
      ]
    },
    {
      id: 4,
      title: 'Color Wash',
      sub: 'Pastel typography & gradient',
      time: '9:41',
      date: 'FRIDAY, SEPTEMBER 16',
      font: 'font-serif font-semibold italic',
      textColor: 'text-rose-200',
      bgGradient: 'from-purple-900 via-pink-900 to-black',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', // aesthetic flowers
      hasSubjectOverlap: false,
      widgets: [
        { icon: CloudSun, label: '70°', sub: 'Golden Hour' },
        { icon: Activity, label: '590', sub: 'Burn' }
      ]
    }
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#f5f5f7]">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-100/60 via-purple-50/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1024px] mx-auto px-4 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f]">
            iOS 16
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-[#1d1d1f] leading-[1.05] max-w-4xl mx-auto mb-6">
          Personal is powerful.
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#6e6e73] font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Reimagine everyday experiences with personalized Lock Screens, new ways to connect and share, and smarter ways to search.
        </p>

        {/* Quick link */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="#lock-screen"
            className="inline-flex items-center text-[#0071e3] hover:text-[#0077ed] text-lg font-medium group"
          >
            <span>Explore the all-new Lock Screen</span>
            <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Fanned iPhones Display */}
        <div className="relative mx-auto mt-6 max-w-[1080px] h-[520px] sm:h-[580px] md:h-[640px] flex items-center justify-center perspective-[1200px]">
          {phoneScreens.map((phone, idx) => {
            const offset = idx - activeHeroPhone;
            const isCenter = offset === 0;

            // Calculate fan rotation and translate
            let translateX = offset * 140; // in px
            let rotateZ = offset * 7; // in degrees
            let scale = isCenter ? 1.05 : 0.88 - Math.abs(offset) * 0.05;
            let zIndex = 30 - Math.abs(offset) * 5;
            let opacity = Math.abs(offset) > 2 ? 0.3 : 1 - Math.abs(offset) * 0.15;

            return (
              <div
                key={phone.id}
                onClick={() => setActiveHeroPhone(idx)}
                style={{
                  transform: `translateX(${translateX}px) rotateZ(${rotateZ}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
                className="absolute cursor-pointer will-change-transform transform-gpu hover:brightness-105"
              >
                <div className="w-[260px] sm:w-[280px] md:w-[300px] h-[520px] sm:h-[560px] md:h-[600px]">
                  <IPhoneMockup className="w-full h-full">
                    {/* Screen Wallpaper */}
                    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col justify-between p-6">
                      <img
                        src={phone.image}
                        alt={phone.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${phone.bgGradient} opacity-60 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Lock Screen Header: Date & Time */}
                      <div className="relative z-20 pt-8 text-center">
                        <div className="text-[10px] tracking-widest font-semibold uppercase text-white/90 drop-shadow">
                          {phone.date}
                        </div>
                        <div
                          className={`text-6xl sm:text-7xl font-bold tracking-tight ${phone.font} ${phone.textColor} drop-shadow-md leading-none my-1`}
                        >
                          {phone.time}
                        </div>

                        {/* Lock Screen Widgets Bar */}
                        <div className="flex items-center justify-center gap-2 mt-2 px-3 py-1.5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 w-fit mx-auto shadow-sm">
                          {phone.widgets.map((w, wIdx) => {
                            const WidgetIcon = w.icon;
                            return (
                              <div key={wIdx} className="flex items-center gap-1.5 px-2 text-white">
                                <WidgetIcon className="w-3.5 h-3.5 text-white/80" />
                                <div className="text-left">
                                  <div className="text-[11px] font-bold leading-tight">{w.label}</div>
                                  <div className="text-[8px] text-white/70 leading-none">{w.sub}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Controls: Flashlight & Camera */}
                      <div className="relative z-20 flex items-center justify-between pb-4 px-2">
                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-lg active:scale-90 transition-transform">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M9 2h6v5l-3 4-3-4V2zm0 10l3 4 3-4v10H9V12z" />
                          </svg>
                        </div>

                        <div className="text-[11px] font-medium text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          Swipe up to open
                        </div>

                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-lg active:scale-90 transition-transform">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3.2" />
                            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </IPhoneMockup>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Switcher Pills */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {phoneScreens.map((phone, idx) => (
            <button
              key={phone.id}
              onClick={() => setActiveHeroPhone(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeHeroPhone === idx
                  ? 'bg-[#1d1d1f] text-white shadow'
                  : 'bg-white/80 text-[#6e6e73] hover:text-[#1d1d1f] border border-[#d2d2d7]/60'
              }`}
            >
              {phone.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
