import React, { useState } from 'react';
import { KeyRound, ShieldCheck, Compass, Users, Check, Fingerprint, Lock } from 'lucide-react';

export default function SafariSection() {
  const [passkeyAuthenticated, setPasskeyAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const simulatePasskeyAuth = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setPasskeyAuthenticated(true);
    }, 1200);
  };

  return (
    <section id="safari" className="py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Safari & Passkeys
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            A safer and easier way to sign in.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Passkeys introduce a new sign-in method that is end-to-end encrypted and safe from phishing and data leaks. Plus Shared Tab Groups make browsing together effortless.
          </p>
        </div>

        {/* 2 Big Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Passkeys with Interactive Biometric Demo */}
          <div className="bg-[#f5f5f7] p-8 sm:p-12 rounded-[36px] border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-4">
                Passkeys. The future of passwordless login.
              </h3>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
                Passkeys are unique cryptographic digital keys stored in iCloud Keychain. They never leave your device, meaning servers can never leak them and hackers cannot phish them.
              </p>
            </div>

            {/* Interactive Passkey Simulator */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                  Biometric Passkey Demo
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  FIDO Compliant
                </span>
              </div>

              {!passkeyAuthenticated ? (
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0071e3] flex items-center justify-center mx-auto mb-3">
                    <Fingerprint className={`w-8 h-8 ${isAuthenticating ? 'animate-pulse text-[#0071e3]' : ''}`} />
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">
                    Sign in to Acme Bank with Passkey
                  </h4>
                  <p className="text-xs text-[#86868b] mb-4">
                    Authenticating with Face ID & Touch ID
                  </p>
                  <button
                    onClick={simulatePasskeyAuth}
                    disabled={isAuthenticating}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold shadow transition-all active:scale-98"
                  >
                    {isAuthenticating ? 'Verifying Face ID...' : 'Sign In with Touch ID / Face ID'}
                  </button>
                </div>
              ) : (
                <div className="text-center py-4 animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-700 mb-1">
                    Successfully Authenticated!
                  </h4>
                  <p className="text-xs text-[#86868b] mb-3">
                    Zero passwords used. Cryptographic proof confirmed.
                  </p>
                  <button
                    onClick={() => setPasskeyAuthenticated(false)}
                    className="text-xs text-[#0071e3] hover:underline"
                  >
                    Reset authentication demo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Shared Tab Groups */}
          <div className="bg-[#f5f5f7] p-8 sm:p-12 rounded-[36px] border border-[#e5e5ea] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mb-6 shadow-md shadow-cyan-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-4">
                Shared Tab Groups. Plan together seamlessly.
              </h3>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
                Share a collection of tabs with friends, family, or colleagues. Everyone can see tabs open in real time, add bookmarks, and kick off a FaceTime call right from Safari.
              </p>
            </div>

            {/* Visual Tab Groups Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#e5e5ea] shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#f5f5f7]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1d1d1f]">Japan Trip 2026 🗾</div>
                    <div className="text-[10px] text-[#86868b]">4 participants sharing 8 tabs</div>
                  </div>
                </div>
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-[10px] text-white flex items-center justify-center ring-2 ring-white">J</span>
                  <span className="w-6 h-6 rounded-full bg-pink-500 text-[10px] text-white flex items-center justify-center ring-2 ring-white">M</span>
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-[10px] text-white flex items-center justify-center ring-2 ring-white">S</span>
                </div>
              </div>

              {/* Tabs list */}
              <div className="space-y-1.5">
                {[
                  { title: 'Tokyo Ryokan Booking', url: 'ryokan-kyoto.jp', active: true },
                  { title: 'Bullet Train Shinkansen Passes', url: 'jreast.co.jp', active: false },
                  { title: 'Mount Fuji Day Hike Guide', url: 'japan-guide.com', active: false },
                ].map((tab) => (
                  <div
                    key={tab.title}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs ${
                      tab.active ? 'bg-cyan-50/60 border border-cyan-200' : 'bg-[#f5f5f7]'
                    }`}
                  >
                    <span className="font-medium text-[#1d1d1f] truncate max-w-[200px]">{tab.title}</span>
                    <span className="text-[10px] text-[#86868b]">{tab.url}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
