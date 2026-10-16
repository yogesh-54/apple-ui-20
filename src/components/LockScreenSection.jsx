import React, { useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import { 
  CloudSun, 
  BatteryCharging, 
  Activity, 
  Calendar, 
  Clock, 
  Palette, 
  Layers, 
  Shuffle, 
  Sparkles 
} from 'lucide-react';

export default function LockScreenSection() {
  const [selectedFont, setSelectedFont] = useState('font-sans font-bold');
  const [selectedColor, setSelectedColor] = useState('text-white');
  const [selectedWallpaper, setSelectedWallpaper] = useState(0);
  const [activeWidgets, setActiveWidgets] = useState(['weather', 'activity', 'battery']);

  const wallpapers = [
    {
      name: 'Astronomy',
      src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-blue-900/60 to-black/80',
    },
    {
      name: 'Depth Portrait',
      src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-amber-900/60 to-stone-900/80',
    },
    {
      name: 'Sunset Coast',
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-indigo-900/60 to-purple-950/80',
    },
    {
      name: 'Botanical',
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-900/60 to-pink-950/80',
    }
  ];

  const fontOptions = [
    { label: 'Modern', class: 'font-sans font-bold' },
    { label: 'Editorial', class: 'font-serif font-medium' },
    { label: 'Slab', class: 'font-mono font-black' },
    { label: 'Rounded', class: 'font-sans font-black tracking-tighter' }
  ];

  const colorOptions = [
    { name: 'White', class: 'text-white', bg: 'bg-white' },
    { name: 'Cream', class: 'text-amber-100', bg: 'bg-amber-100' },
    { name: 'Cyan', class: 'text-cyan-200', bg: 'bg-cyan-200' },
    { name: 'Coral', class: 'text-rose-200', bg: 'bg-rose-200' },
    { name: 'Lilac', class: 'text-purple-200', bg: 'bg-purple-200' },
    { name: 'Mint', class: 'text-emerald-200', bg: 'bg-emerald-200' },
  ];

  const toggleWidget = (wId) => {
    setActiveWidgets(prev => 
      prev.includes(wId) ? prev.filter(item => item !== wId) : [...prev, wId]
    );
  };

  return (
    <section id="lock-screen" className="py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Lock Screen
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Make iPhone your own.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Personalize your Lock Screen in all-new ways. Showcase favorite photos, customize font styles, and display a set of widgets to get information at a glance.
          </p>
        </div>

        {/* Interactive Customizer Studio */}
        <div className="bg-[#f5f5f7] rounded-[36px] p-6 sm:p-10 md:p-14 mb-16 shadow-inner border border-[#e5e5ea]">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1d1d1f] text-xs font-semibold shadow-sm border border-black/5">
              <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
              Interactive Lock Screen Studio
            </span>
            <p className="text-xs text-[#86868b] mt-1.5">Customize fonts, colors, wallpapers and widgets below</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls Left Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Wallpaper Picker */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e5ea]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] block mb-3">
                  Wallpaper Theme
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {wallpapers.map((wp, idx) => (
                    <button
                      key={wp.name}
                      onClick={() => setSelectedWallpaper(idx)}
                      className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all group ${
                        selectedWallpaper === idx
                          ? 'border-[#0071e3] ring-2 ring-[#0071e3]/20 scale-105'
                          : 'border-transparent hover:opacity-90'
                      }`}
                    >
                      <img src={wp.src} alt={wp.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
                <div className="text-xs font-medium text-center text-[#1d1d1f] mt-2">
                  {wallpapers[selectedWallpaper].name}
                </div>
              </div>

              {/* Font Style Picker */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e5ea]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] block mb-3">
                  Clock Typography
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {fontOptions.map((font) => (
                    <button
                      key={font.label}
                      onClick={() => setSelectedFont(font.class)}
                      className={`py-2 px-1 rounded-xl border text-sm font-semibold transition-all ${
                        selectedFont === font.class
                          ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                          : 'bg-[#f5f5f7] text-[#1d1d1f] border-transparent hover:bg-[#e8e8ed]'
                      }`}
                    >
                      {font.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e5ea]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] block mb-3">
                  Font Color
                </label>
                <div className="flex items-center justify-between">
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.class)}
                      className={`w-9 h-9 rounded-full ${c.bg} border border-black/10 transition-all flex items-center justify-center ${
                        selectedColor === c.class ? 'ring-2 ring-offset-2 ring-[#0071e3] scale-110' : 'hover:scale-105'
                      }`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Widgets Toggle */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e5e5ea]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] block mb-3">
                  Toggle Lock Screen Widgets
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'weather', label: 'Weather', icon: CloudSun },
                    { id: 'activity', label: 'Activity Rings', icon: Activity },
                    { id: 'battery', label: 'Battery', icon: BatteryCharging },
                    { id: 'calendar', label: 'Calendar', icon: Calendar },
                  ].map((widget) => {
                    const WIcon = widget.icon;
                    const isActive = activeWidgets.includes(widget.id);
                    return (
                      <button
                        key={widget.id}
                        onClick={() => toggleWidget(widget.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          isActive
                            ? 'bg-[#0071e3] text-white border-[#0071e3]'
                            : 'bg-[#f5f5f7] text-[#6e6e73] border-transparent hover:text-[#1d1d1f]'
                        }`}
                      >
                        <WIcon className="w-3.5 h-3.5" />
                        {widget.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Live Interactive Mockup Right Column */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-[300px] sm:w-[320px] h-[620px]">
                <IPhoneMockup className="w-full h-full shadow-apple-phone">
                  <div className="relative w-full h-full overflow-hidden bg-black flex flex-col justify-between p-6">
                    {/* Background Wallpaper */}
                    <img
                      src={wallpapers[selectedWallpaper].src}
                      alt="Lock screen wallpaper"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${wallpapers[selectedWallpaper].gradient} transition-all duration-500 opacity-60 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Lock Screen Header */}
                    <div className="relative z-20 pt-8 text-center">
                      <div className="text-[10px] tracking-widest font-semibold uppercase text-white/90 drop-shadow flex items-center justify-center gap-1">
                        <Calendar className="w-3 h-3" />
                        WEDNESDAY, SEPTEMBER 14
                      </div>

                      {/* Customized Time */}
                      <div
                        className={`text-7xl font-bold tracking-tight ${selectedFont} ${selectedColor} drop-shadow-lg leading-none my-2 transition-all duration-300`}
                      >
                        9:41
                      </div>

                      {/* Customized Widgets Grid */}
                      {activeWidgets.length > 0 && (
                        <div className="flex items-center justify-center gap-2 mt-3 px-3 py-1.5 rounded-2xl bg-black/35 backdrop-blur-md border border-white/15 w-fit mx-auto transition-all shadow-md">
                          {activeWidgets.includes('weather') && (
                            <div className="flex items-center gap-1 text-white px-1.5 border-r border-white/20 last:border-0">
                              <CloudSun className="w-4 h-4 text-amber-300" />
                              <div className="text-left">
                                <div className="text-[11px] font-bold leading-tight">72°</div>
                                <div className="text-[8px] text-white/80 leading-none">Sunny</div>
                              </div>
                            </div>
                          )}

                          {activeWidgets.includes('activity') && (
                            <div className="flex items-center gap-1 text-white px-1.5 border-r border-white/20 last:border-0">
                              <Activity className="w-4 h-4 text-rose-400" />
                              <div className="text-left">
                                <div className="text-[11px] font-bold leading-tight">560</div>
                                <div className="text-[8px] text-white/80 leading-none">CAL</div>
                              </div>
                            </div>
                          )}

                          {activeWidgets.includes('battery') && (
                            <div className="flex items-center gap-1 text-white px-1.5 border-r border-white/20 last:border-0">
                              <BatteryCharging className="w-4 h-4 text-emerald-400" />
                              <div className="text-left">
                                <div className="text-[11px] font-bold leading-tight">94%</div>
                                <div className="text-[8px] text-white/80 leading-none">AirPods</div>
                              </div>
                            </div>
                          )}

                          {activeWidgets.includes('calendar') && (
                            <div className="flex items-center gap-1 text-white px-1.5 last:border-0">
                              <Clock className="w-4 h-4 text-blue-300" />
                              <div className="text-left">
                                <div className="text-[11px] font-bold leading-tight">10:00 AM</div>
                                <div className="text-[8px] text-white/80 leading-none">Design</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Flashlight & Camera Controls */}
                    <div className="relative z-20 flex items-center justify-between pb-4 px-2">
                      <div className="w-11 h-11 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/90 shadow-lg">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M9 2h6v5l-3 4-3-4V2zm0 10l3 4 3-4v10H9V12z" />
                        </svg>
                      </div>

                      <div className="text-[10px] font-semibold tracking-wide text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase">
                        Swipe up to unlock
                      </div>

                      <div className="w-11 h-11 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/90 shadow-lg">
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
          </div>
        </div>

        {/* Depth Effect & Gallery Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Depth Effect Interactive Card */}
          <div className="bg-[#f5f5f7] p-8 sm:p-10 rounded-[36px] border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1d1d1f] text-xs font-semibold mb-4 border border-black/5">
                <Layers className="w-3.5 h-3.5 text-[#0071e3]" />
                Depth Effect Engine
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-3">
                Multilayered photo effect.
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Photo subjects are artfully layered in front of the time on your Lock Screen to make elements of the photo pop with dimension. Toggle the depth effect below:
              </p>
            </div>

            {/* Depth Demonstration Frame */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-stone-900 border border-black/10 shadow-inner flex items-center justify-center">
              {/* Background mountain / nature */}
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80"
                alt="Portrait with depth"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* Time Numbers */}
              <div className="relative z-10 text-center">
                <div className="text-[10px] tracking-widest uppercase font-semibold text-white/80">
                  WEDNESDAY, SEPTEMBER 14
                </div>
                <div className="text-6xl font-bold font-serif text-amber-100 drop-shadow-lg tracking-tight">
                  9:41
                </div>
              </div>

              {/* Toggle depth indicator */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Depth Effect Enabled
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Sheet Showcase */}
          <div className="bg-[#f5f5f7] p-8 sm:p-10 rounded-[36px] border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1d1d1f] text-xs font-semibold mb-4 border border-black/5">
                <Palette className="w-3.5 h-3.5 text-[#0071e3]" />
                Add New Wallpaper
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-3">
                Lock Screen gallery.
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Explore an inspiring gallery of suggested wallpapers with unique backdrops and stylized views of date and time to personalize your iPhone.
              </p>
            </div>

            {/* Simulated Apple Gallery Sheet */}
            <div className="bg-white p-5 rounded-2xl border border-[#e5e5ea] shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#1d1d1f] border-b pb-3 border-[#f5f5f7]">
                <span>Add New Wallpaper</span>
                <span className="text-[#0071e3] font-semibold">Done</span>
              </div>

              {/* Category Icons Row */}
              <div className="flex items-center justify-between px-2 text-center">
                {[
                  { name: 'Photos', bg: 'bg-blue-500', icon: '🖼️' },
                  { name: 'People', bg: 'bg-amber-500', icon: '👤' },
                  { name: 'Photo Shuffle', bg: 'bg-indigo-500', icon: '🔀' },
                  { name: 'Emoji', bg: 'bg-pink-500', icon: '😊' },
                  { name: 'Weather', bg: 'bg-sky-500', icon: '☀️' },
                  { name: 'Astronomy', bg: 'bg-purple-600', icon: '🪐' },
                ].map((cat) => (
                  <div key={cat.name} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform cursor-pointer">
                      {cat.icon}
                    </div>
                    <span className="text-[9px] font-medium text-[#6e6e73]">{cat.name}</span>
                  </div>
                ))}
              </div>

              {/* Featured suggestions row */}
              <div className="pt-2">
                <div className="text-[10px] font-bold text-[#86868b] uppercase tracking-wider mb-2">
                  Featured Collections
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Astronomy', color: 'from-blue-900 to-black' },
                    { label: 'Pride & Unity', color: 'from-pink-600 to-purple-800' },
                    { label: 'Color Wash', color: 'from-teal-600 to-emerald-900' },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className={`h-16 rounded-xl bg-gradient-to-br ${f.color} p-2 text-white flex flex-col justify-end text-[10px] font-bold shadow-sm cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm mb-5">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">Lock Screen gallery</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Inspirational wallpapers with dynamic themes including Weather, Astronomy, and curated Pride and Unity collections.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">Multilayered depth</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Photo subjects are artfully layered in front of the time on your Lock Screen to make the elements of the photo pop with dimension.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm mb-5">
                <Shuffle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">Photo Shuffle</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Automatically rotate through your favorite photos throughout the day at an hourly frequency, on tap, or when you wake iPhone.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm mb-5">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">Glanceable widgets</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Check weather forecasts, calendar events, next alarms, time zones, and Activity ring progress without unlocking iPhone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
