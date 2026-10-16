import React, { useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import { User, Briefcase, Moon, Dumbbell, Calendar, Mail, CheckCircle2, Filter } from 'lucide-react';

export default function FocusSection() {
  const [activeFocus, setActiveFocus] = useState('work'); // 'personal', 'work', 'sleep', 'fitness'

  const focusModes = [
    {
      id: 'personal',
      name: 'Personal',
      icon: User,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-900/60 border-indigo-400/40 text-indigo-200',
      wallpaper: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      time: '6:15',
      timeFont: 'font-serif font-bold text-amber-100',
      widgets: 'Family Photos • Spotify Chill Mix • Sunset 7:42 PM',
      quote: 'Disconnect from work notifications and cherish evening moments with loved ones.'
    },
    {
      id: 'work',
      name: 'Work',
      icon: Briefcase,
      color: 'bg-blue-600',
      textColor: 'text-blue-400',
      badgeBg: 'bg-blue-900/60 border-blue-400/40 text-blue-200',
      wallpaper: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      time: '9:41',
      timeFont: 'font-sans font-bold text-white',
      widgets: 'Calendar: Product Sync • 3 Unread Work Mails • Jira 4 Tickets',
      quote: 'Silence personal group chats and show only productivity tools, meetings, and team channels.'
    },
    {
      id: 'fitness',
      name: 'Fitness',
      icon: Dumbbell,
      color: 'bg-emerald-600',
      textColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-900/60 border-emerald-400/40 text-emerald-200',
      wallpaper: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      time: '5:30',
      timeFont: 'font-mono font-bold text-emerald-200',
      widgets: 'Nike Run Club • Heart Rate 142 bpm • 650/700 Active Cal',
      quote: 'Keep your mind focused on workout goals with dedicated activity and music widgets.'
    },
    {
      id: 'sleep',
      name: 'Sleep',
      icon: Moon,
      color: 'bg-purple-600',
      textColor: 'text-purple-400',
      badgeBg: 'bg-purple-900/60 border-purple-400/40 text-purple-200',
      wallpaper: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
      time: '11:00',
      timeFont: 'font-mono font-medium text-slate-300',
      widgets: 'Alarm 6:30 AM • Sleep schedule 7h 45m • Wind Down',
      quote: 'Dim the screen completely, silence incoming notifications, and prepare for restful slumber.'
    }
  ];

  const currentMode = focusModes.find((m) => m.id === activeFocus);

  return (
    <section id="focus" className="py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Focus
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Tie your Lock Screen to your Focus.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Easily connect your Lock Screen to your Focus, so the look and feel of your iPhone matches how you want to use it in the moment.
          </p>

          {/* Focus Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {focusModes.map((mode) => {
              const Icon = mode.icon;
              const isSelected = activeFocus === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveFocus(mode.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#1d1d1f] text-white shadow-md scale-105'
                      : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {mode.name} Focus
                </button>
              );
            })}
          </div>
        </div>

        {/* Focus Interactive Showcase */}
        <div className="bg-[#f5f5f7] rounded-[36px] p-6 sm:p-10 md:p-14 border border-[#e5e5ea] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Phone Mockup Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[290px] sm:w-[310px] h-[610px]">
              <IPhoneMockup className="w-full h-full shadow-apple-phone">
                <div className="relative w-full h-full overflow-hidden bg-black flex flex-col justify-between p-6">
                  {/* Mode Wallpaper */}
                  <img
                    src={currentMode.wallpaper}
                    alt={currentMode.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-black/45" />

                  {/* Header Clock */}
                  <div className="relative z-10 pt-8 text-center">
                    <div className="text-[10px] tracking-widest font-semibold uppercase text-white/80">
                      THURSDAY, SEPTEMBER 15
                    </div>
                    <div className={`text-6xl ${currentMode.timeFont} drop-shadow-md my-2`}>
                      {currentMode.time}
                    </div>

                    {/* Active Focus Pill on Lock Screen */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-md ${currentMode.badgeBg}`}>
                      {React.createElement(currentMode.icon, { className: 'w-3.5 h-3.5' })}
                      <span>{currentMode.name} Focus On</span>
                    </div>
                  </div>

                  {/* Focus Lock Screen Card */}
                  <div className="relative z-10 pb-12">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl text-white">
                      <div className="text-[10px] uppercase font-bold text-white/60 mb-1">
                        Active Focus Widgets
                      </div>
                      <div className="text-xs font-medium text-white/95">
                        {currentMode.widgets}
                      </div>
                    </div>
                  </div>
                </div>
              </IPhoneMockup>
            </div>
          </div>

          {/* Focus Explanations Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-3 h-3 rounded-full ${currentMode.color}`} />
                <h3 className="text-2xl font-bold text-[#1d1d1f]">
                  {currentMode.name} Focus Experience
                </h3>
              </div>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-6">
                {currentMode.quote}
              </p>

              <div className="space-y-4 pt-4 border-t border-[#f5f5f7]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
                    <Filter className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f]">Focus Filters</h4>
                    <p className="text-xs text-[#6e6e73] mt-0.5">
                      Set boundaries within Apple apps like Safari, Messages, Mail, and Calendar to hide distracting notifications and tabs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f]">Seamless Automation</h4>
                    <p className="text-xs text-[#6e6e73] mt-0.5">
                      Set your Focus to turn on automatically at a set time, when arriving at an address, or when launching a designated app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
