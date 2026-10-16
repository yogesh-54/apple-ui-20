import React from 'react';
import { PenTool, Gamepad2, Search, Headphones, FileEdit, Smile, Lock } from 'lucide-react';

export default function BentoFeatures() {
  const features = [
    {
      title: 'Freeform',
      subtitle: 'A powerful new canvas for creative collaboration.',
      desc: 'Brainstorm, sketch, draw, and share notes with teammates on an infinite canvas with real-time sync.',
      icon: PenTool,
      tag: 'New App',
      color: 'bg-orange-500',
    },
    {
      title: 'Spotlight on Home Screen',
      subtitle: 'Access search right from the bottom of your screen.',
      desc: 'Quickly open apps, find contacts, search web content, and run shortcuts with a single tap.',
      icon: Search,
      tag: 'Productivity',
      color: 'bg-blue-500',
    },
    {
      title: 'Personalized Spatial Audio',
      subtitle: 'Tuned specifically to the unique shape of your ears.',
      desc: 'Use the TrueDepth camera on iPhone to create a custom profile for AirPods that delivers theater-like sound.',
      icon: Headphones,
      tag: 'Audio',
      color: 'bg-purple-500',
    },
    {
      title: 'Game Center Dashboard',
      subtitle: 'See what your friends are playing and beat high scores.',
      desc: 'The redesigned dashboard brings achievements and friend activity front and center across all your games.',
      icon: Gamepad2,
      tag: 'Gaming',
      color: 'bg-emerald-500',
    },
    {
      title: 'Quick Note',
      subtitle: 'Jot down thoughts over any app on iPhone.',
      desc: 'Add links, sketch diagrams, and save recipes directly into Notes with a quick gesture.',
      icon: FileEdit,
      tag: 'Notes',
      color: 'bg-amber-500',
    },
    {
      title: 'Lockdown Mode',
      subtitle: 'Extreme optional security protection.',
      desc: 'Groundbreaking defense for rare individuals who face targeted cyber threats from mercenary spyware.',
      icon: Lock,
      tag: 'Security',
      color: 'bg-rose-500',
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            And So Much More
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Small touches that make a big difference.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white p-7 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between shadow-sm hover:shadow-apple-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl ${f.color} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#86868b] bg-[#f5f5f7] px-2.5 py-1 rounded-full">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{f.title}</h3>
                  <h4 className="text-sm font-semibold text-[#6e6e73] mb-3">{f.subtitle}</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
