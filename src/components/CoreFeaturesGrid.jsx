import React from 'react';
import { 
  Mic, 
  MapPin, 
  Wallet, 
  Home, 
  Heart, 
  Users, 
  Gauge, 
  ShieldAlert, 
  Eye, 
  CreditCard,
  Pill,
  Sparkles
} from 'lucide-react';

export default function CoreFeaturesGrid() {
  return (
    <section id="features-all" className="py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            System Upgrades
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Even more to love. Every day.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Essential apps and services you rely on daily get major enhancements across navigation, financial security, smart home, health, and privacy.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card: Dictation */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0071e3] flex items-center justify-center mb-6">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Dictation</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Move fluidly between voice and touch. Type with the keyboard, tap in the text field, move the cursor, and insert QuickType suggestions without stopping Dictation.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-mono text-[#1d1d1f]">"Heart emoji. See you tomorrow!"</span>
            </div>
          </div>

          {/* Card: Maps */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Maps</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Multistop routing lets you plan up to 15 stops along your route in advance. Easily sync planned routes between your Mac and iPhone so you are ready to hit the road.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1d1d1f]">15 Route Stops Planned</span>
              <span className="text-[#0071e3] font-medium">Mac ⇄ iPhone</span>
            </div>
          </div>

          {/* Card: Apple Pay & Wallet */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Apple Pay & Wallet</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Apple Pay Later lets you split purchases into four equal payments over six weeks with 0% interest. Track deliveries directly in Wallet and share digital keys securely.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs">
              <span className="font-semibold text-purple-700">Apple Pay Later</span>
              <span className="text-[#6e6e73]">4 Payments • 0% APR</span>
            </div>
          </div>

          {/* Card: Home */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Home App</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                An all-new design makes it easier to navigate, organize, view, and control all your smart home accessories. Built with support for Matter smart home connectivity standard.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs font-semibold">
              <span className="text-amber-800">Climate • Lights • Security</span>
              <span className="text-[#86868b]">Matter Ready</span>
            </div>
          </div>

          {/* Card: Health & Fitness */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Health & Fitness</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Track and log medications, vitamins, and supplements with interaction alerts. And the Fitness app is available to all iPhone users to close their daily Move ring.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-rose-600">
                <Pill className="w-3.5 h-3.5" />
                Medications Logged
              </span>
              <span className="text-rose-500">Move Ring on iPhone</span>
            </div>
          </div>

          {/* Card: Family Sharing */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Family Sharing</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Quick Start setup makes it simple to set up a new device for your child with age-appropriate parental controls. Screen Time requests can now be approved right in Messages.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1d1d1f]">Quick Start Parental Setup</span>
              <span className="text-emerald-600 font-semibold">Approve in iMessage</span>
            </div>
          </div>

          {/* Card: CarPlay */}
          <div className="bg-[#1d1d1f] text-white p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:shadow-apple-phone-dark transition-all md:col-span-2 lg:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>Next Generation Preview</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">The next generation of CarPlay.</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
                CarPlay delivers the ultimate iPhone experience for cars by providing unified content for all the driver's screens including the digital speedometer and tachometer instrument cluster.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 font-bold">DIGITAL COCKPIT • SPEEDOMETER • CLIMATE • GAUGES</span>
              <span className="text-white/60">Announced for automaker integration</span>
            </div>
          </div>

          {/* Card: Safety Check */}
          <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#e5e5ea] flex flex-col justify-between hover:shadow-apple-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Safety Check</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                Helps people in domestic or intimate partner violence situations quickly reset the access and location permissions they’ve previously granted to others.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-black/5 flex items-center justify-between text-xs font-bold text-red-600">
              <span>Emergency Reset</span>
              <span>Revoke All Permissions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
