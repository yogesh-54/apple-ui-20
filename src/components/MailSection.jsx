import React, { useState, useEffect } from 'react';
import { Mail, RotateCcw, Clock, Bell, Link2, Check, ArrowRight } from 'lucide-react';

export default function MailSection() {
  const [undoCountdown, setUndoCountdown] = useState(0);
  const [emailStatus, setEmailStatus] = useState('ready'); // 'ready', 'sending', 'sent', 'undone'

  const handleSendTestEmail = () => {
    setEmailStatus('sending');
    setUndoCountdown(10);
  };

  useEffect(() => {
    let timer;
    if (undoCountdown > 0 && emailStatus === 'sending') {
      timer = setTimeout(() => {
        setUndoCountdown(prev => prev - 1);
      }, 1000);
    } else if (undoCountdown === 0 && emailStatus === 'sending') {
      setEmailStatus('sent');
    }
    return () => clearTimeout(timer);
  }, [undoCountdown, emailStatus]);

  const handleUndo = () => {
    setEmailStatus('undone');
    setUndoCountdown(0);
  };

  return (
    <section id="mail" className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Mail
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Smarter inbox superpowers.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Search delivers more accurate and complete results. Easily cancel sending a message that was just sent, schedule messages to be sent whenever you like, and get reminders to follow up.
          </p>
        </div>

        {/* 4 Mail Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Undo Send with Interactive Test */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Undo Send</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Easily unsend an email you just hit send on. You have up to 10 seconds to cancel delivery before it reaches the recipient's inbox.
              </p>
            </div>

            {/* Interactive Undo Send Box */}
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#1d1d1f]">Interactive Demo</span>
                <span className="text-[11px] text-[#86868b]">
                  {emailStatus === 'ready' && 'Ready to send'}
                  {emailStatus === 'sending' && `Undo window: ${undoCountdown}s remaining`}
                  {emailStatus === 'sent' && 'Delivered to inbox'}
                  {emailStatus === 'undone' && 'Send canceled'}
                </span>
              </div>

              {emailStatus === 'ready' && (
                <button
                  onClick={handleSendTestEmail}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  Send Sample Client Pitch Email
                </button>
              )}

              {emailStatus === 'sending' && (
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white p-2.5 rounded-xl border border-blue-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    <span className="text-xs font-medium text-[#1d1d1f]">Sending email...</span>
                  </div>
                  <button
                    onClick={handleUndo}
                    className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md transition-all animate-pulse"
                  >
                    Undo Send ({undoCountdown}s)
                  </button>
                </div>
              )}

              {(emailStatus === 'sent' || emailStatus === 'undone') && (
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${emailStatus === 'sent' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {emailStatus === 'sent' ? '✓ Email successfully delivered' : '↩ Email recalled to draft'}
                  </span>
                  <button
                    onClick={() => setEmailStatus('ready')}
                    className="text-xs text-[#0071e3] font-medium hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Scheduled Send */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-[#e5e5ea] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Scheduled Send</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Draft an email late at night and schedule it to arrive precisely at 9:00 AM in your recipient's local time zone for maximum impact.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] space-y-2">
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white shadow-sm border border-black/5">
                <span className="font-medium text-[#1d1d1f]">Send 9:00 PM Tonight</span>
                <Clock className="w-3.5 h-3.5 text-[#86868b]" />
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white shadow-sm border border-black/5">
                <span className="font-medium text-[#1d1d1f]">Send 8:00 AM Tomorrow</span>
                <Clock className="w-3.5 h-3.5 text-[#0071e3]" />
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white shadow-sm border border-black/5 text-[#86868b]">
                <span>Send Later... (Custom time)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Remind Me */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-[#e5e5ea] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Remind Me</h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
              Get an email back to the top of your inbox when you're ready to address it. Pick 1 hour, tonight, tomorrow morning, or custom calendar dates.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-2 rounded-xl">
              <Bell className="w-4 h-4" />
              <span>Never miss an important pitch or follow-up deadline</span>
            </div>
          </div>

          {/* Card 4: Rich Links */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-[#e5e5ea] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Link2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Rich Links</h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
              Give your emails more dynamic visual context at a single glance with live interactive article cards, media previews, and product thumbnails.
            </p>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea]">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#0071e3] font-bold text-xs">
                NEWS
              </div>
              <div>
                <div className="text-xs font-bold text-[#1d1d1f]">Apple introduces iOS 16</div>
                <div className="text-[10px] text-[#86868b]">apple.com/newsroom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
