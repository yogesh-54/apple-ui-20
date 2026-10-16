import React, { useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import { Bell, MessageSquare, Car, Trophy, Sparkles } from 'lucide-react';

export default function NotificationsSection() {
  const [viewMode, setViewMode] = useState('stack'); // 'expanded', 'stack', 'count'

  const sampleNotifications = [
    {
      id: 1,
      app: 'Messages',
      title: 'Elena Vance',
      text: 'Are we still meeting at Blue Bottle Coffee at 2:30?',
      time: '2m ago',
      iconBg: 'bg-emerald-500',
    },
    {
      id: 2,
      app: 'Calendar',
      title: 'Design Review & Roadmap',
      text: 'Starting in 15 minutes in Conference Room 4B',
      time: '12m ago',
      iconBg: 'bg-red-500',
    },
    {
      id: 3,
      app: 'News',
      title: 'Apple News Alert',
      text: 'NASA reveals stunning new deep space images from Webb Telescope',
      time: '25m ago',
      iconBg: 'bg-rose-600',
    }
  ];

  return (
    <section id="notifications" className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Notifications & Live Activities
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Stay in the flow.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Notifications now roll in from the bottom of your Lock Screen so you can easily see them in an expanded list, stacked view, or hidden count view.
          </p>

          {/* View Mode Toggle Switch */}
          <div className="inline-flex p-1.5 mt-8 bg-[#e8e8ed] rounded-full border border-black/5 shadow-inner">
            {[
              { id: 'count', label: 'Count View' },
              { id: 'stack', label: 'Stack View' },
              { id: 'expanded', label: 'Expanded List' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  viewMode === mode.id
                    ? 'bg-white text-[#1d1d1f] shadow-md scale-100'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid: Interactive Phone + Live Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[300px] sm:w-[320px] h-[640px]">
              <IPhoneMockup className="w-full h-full shadow-apple-phone">
                <div className="relative w-full h-full overflow-hidden bg-slate-900 flex flex-col justify-between p-5">
                  {/* Subtle Wallpaper */}
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
                    alt="Night Mountains Wallpaper"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

                  {/* Header Lock Time */}
                  <div className="relative z-10 pt-8 text-center text-white">
                    <div className="text-[10px] tracking-widest font-semibold uppercase opacity-80">
                      TUESDAY, SEPTEMBER 13
                    </div>
                    <div className="text-6xl font-bold tracking-tight mt-1 font-sans">
                      9:41
                    </div>
                  </div>

                  {/* Dynamic Notifications Container */}
                  <div className="relative z-20 pb-16 flex flex-col justify-end min-h-[260px]">
                    {/* COUNT VIEW */}
                    {viewMode === 'count' && (
                      <div className="flex items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white text-xs font-semibold shadow-lg">
                          <Bell className="w-3.5 h-3.5 text-[#0071e3]" />
                          <span>3 Notifications</span>
                        </div>
                      </div>
                    )}

                    {/* STACK VIEW */}
                    {viewMode === 'stack' && (
                      <div className="relative h-[110px] flex items-end justify-center animate-in fade-in duration-300">
                        {/* Background stack card 3 */}
                        <div className="absolute bottom-4 w-[85%] h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 scale-90 -translate-y-4 opacity-50" />
                        {/* Background stack card 2 */}
                        <div className="absolute bottom-2 w-[92%] h-14 rounded-2xl bg-white/40 backdrop-blur-md border border-white/15 scale-95 -translate-y-2 opacity-70" />
                        {/* Top visible card */}
                        <div className="relative w-full rounded-2xl bg-white/75 dark:bg-black/75 backdrop-blur-xl p-3.5 border border-white/25 shadow-xl text-left">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-white text-[9px] font-bold">
                                M
                              </div>
                              <span className="text-[11px] font-semibold text-[#1d1d1f] dark:text-white">
                                {sampleNotifications[0].title}
                              </span>
                            </div>
                            <span className="text-[9px] text-[#86868b]">{sampleNotifications[0].time}</span>
                          </div>
                          <p className="text-[11px] text-[#424245] dark:text-white/80 line-clamp-1 leading-snug">
                            {sampleNotifications[0].text}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* EXPANDED LIST VIEW */}
                    {viewMode === 'expanded' && (
                      <div className="space-y-2.5 animate-in slide-in-from-bottom-4 duration-300">
                        {sampleNotifications.map((n) => (
                          <div
                            key={n.id}
                            className="rounded-2xl bg-white/80 dark:bg-black/75 backdrop-blur-xl p-3 border border-white/25 shadow-lg text-left"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded ${n.iconBg} flex items-center justify-center text-white text-[9px] font-bold`}>
                                  {n.app[0]}
                                </div>
                                <span className="text-[11px] font-semibold text-[#1d1d1f] dark:text-white">
                                  {n.title}
                                </span>
                              </div>
                              <span className="text-[9px] text-[#86868b]">{n.time}</span>
                            </div>
                            <p className="text-[10px] text-[#424245] dark:text-white/80 line-clamp-2 leading-snug">
                              {n.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </IPhoneMockup>
            </div>
          </div>

          {/* Live Activities Spotlight Right Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#e5e5ea] shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4">
                <Car className="w-3.5 h-3.5" />
                Live Activities
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-3">
                Real-time updates, glanceable at once.
              </h3>
              <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
                Follow an ongoing sports game, track a food delivery, or view your ride's arrival in real time right on the Lock Screen without opening any apps.
              </p>

              {/* Live Activity Card 1: Uber Ride */}
              <div className="rounded-2xl bg-[#1d1d1f] text-white p-4.5 shadow-xl border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-black text-xs">
                      Uber
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Toyota Prius • 7XYZ42</div>
                      <div className="text-[11px] text-[#86868b]">Arriving in 3 mins</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold animate-pulse">
                    On the way
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[80%] rounded-full transition-all duration-1000" />
                </div>
              </div>

              {/* Live Activity Card 2: Sports Score */}
              <div className="rounded-2xl bg-[#1d1d1f] text-white p-4.5 shadow-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-xs font-black">
                      SF
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#86868b]">Giants</div>
                      <div className="text-lg font-bold">4</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded">
                      Bottom 9th
                    </span>
                    <div className="text-[10px] text-[#86868b] mt-0.5">2 Outs • 1 On</div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <div className="text-xs font-medium text-[#86868b]">Dodgers</div>
                      <div className="text-lg font-bold">3</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-black">
                      LA
                    </div>
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
