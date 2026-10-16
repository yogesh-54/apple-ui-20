import React, { useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import { 
  RotateCcw, 
  Pencil, 
  Mail, 
  Tv, 
  Send, 
  Smile, 
  Mic, 
  Camera, 
  ChevronLeft 
} from 'lucide-react';

export default function MessagesSection() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hey! Are we still grabbing dinner tonight?' },
    { id: 2, sender: 'me', text: 'Yes! Let’s meet at 6:30 PM outside the cinema.', isEdited: false },
    { id: 3, sender: 'them', text: 'Sounds perfect! Can you book the table?' }
  ]);

  const [messageToUndo, setMessageToUndo] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [showSharePlay, setShowSharePlay] = useState(false);

  // Edit action demo
  const triggerEdit = () => {
    setIsEdited(true);
    setMessages((prev) =>
      prev.map((m) =>
        m.id === 2
          ? { ...m, text: 'Yes! Let’s meet at 7:00 PM outside the cinema.', isEdited: true }
          : m
      )
    );
  };

  // Undo send action demo
  const sendAccidentalMessage = () => {
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: 'Oops, wrong chat! 😅',
      isTemporary: true
    };
    setMessageToUndo(newMsg);
    setMessages((prev) => [...prev, newMsg]);
  };

  const undoSend = () => {
    if (messageToUndo) {
      setMessages((prev) => prev.filter((m) => m.id !== messageToUndo.id));
      setMessageToUndo(null);
    }
  };

  const resetChat = () => {
    setIsEdited(false);
    setMessageToUndo(null);
    setShowSharePlay(false);
    setMessages([
      { id: 1, sender: 'them', text: 'Hey! Are we still grabbing dinner tonight?' },
      { id: 2, sender: 'me', text: 'Yes! Let’s meet at 6:30 PM outside the cinema.', isEdited: false },
      { id: 3, sender: 'them', text: 'Sounds perfect! Can you book the table?' }
    ]);
  };

  return (
    <section id="messages" className="py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            Messages
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Everyday messaging enhanced.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            You can now edit a message you just sent or unsend a recent message altogether. And mark a message as unread if you can't respond right away.
          </p>
        </div>

        {/* Interactive Sandbox */}
        <div className="bg-[#f5f5f7] rounded-[36px] p-6 sm:p-10 md:p-14 border border-[#e5e5ea] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#e5e5ea] shadow-sm">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
                Try the new Messages features
              </h3>
              <p className="text-sm text-[#6e6e73] mb-6">
                Interact with the buttons below to test message editing and undo send in real time.
              </p>

              <div className="space-y-3">
                <button
                  onClick={triggerEdit}
                  disabled={isEdited}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isEdited
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
                      : 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm active:scale-98'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Pencil className="w-4 h-4" />
                    {isEdited ? 'Message Edited (7:00 PM)' : 'Edit Sent Message (Change time to 7:00)'}
                  </span>
                  {isEdited && <span className="text-xs bg-emerald-200/60 px-2 py-0.5 rounded">Done</span>}
                </button>

                {!messageToUndo ? (
                  <button
                    onClick={sendAccidentalMessage}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-[#d2d2d7] text-[#1d1d1f] text-sm font-semibold hover:bg-[#f5f5f7] transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#0071e3]" />
                    Send accidental message
                  </button>
                ) : (
                  <button
                    onClick={undoSend}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md animate-bounce"
                  >
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Undo Send Message
                    </span>
                    <span className="text-xs bg-rose-900/40 px-2 py-0.5 rounded">Tap now</span>
                  </button>
                )}

                <button
                  onClick={() => setShowSharePlay(!showSharePlay)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold transition-all ${
                    showSharePlay
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-white border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7]'
                  }`}
                >
                  <Tv className="w-4 h-4 text-purple-600" />
                  {showSharePlay ? 'SharePlay Session Active' : 'Start SharePlay session in Messages'}
                </button>

                <div className="pt-2 text-center">
                  <button
                    onClick={resetChat}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] underline"
                  >
                    Reset chat demo
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Callout */}
            <div className="bg-white p-6 rounded-3xl border border-[#e5e5ea] shadow-sm">
              <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">SharePlay via Messages</h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Watch the latest episode of your favorite show or listen to a new album with friends while chatting about it in Messages. Shared playback controls keep you in sync.
              </p>
            </div>
          </div>

          {/* Messages Phone Mockup Right Column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-[300px] sm:w-[320px] h-[640px]">
              <IPhoneMockup className="w-full h-full shadow-apple-phone">
                <div className="relative w-full h-full bg-white dark:bg-[#1c1c1e] flex flex-col justify-between">
                  {/* iMessage Top Nav */}
                  <div className="pt-10 px-4 pb-3 bg-[#f6f6f6] dark:bg-[#2c2c2e] border-b border-[#e5e5ea] dark:border-[#38383a] flex items-center justify-between">
                    <div className="flex items-center text-[#0071e3] text-sm">
                      <ChevronLeft className="w-5 h-5 -ml-1" />
                      <span className="font-medium">12</span>
                    </div>

                    <div className="text-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 text-white font-bold text-xs flex items-center justify-center mx-auto shadow-sm">
                        EV
                      </div>
                      <div className="text-[11px] font-bold text-[#1d1d1f] dark:text-white mt-0.5">
                        Elena Vance
                      </div>
                    </div>

                    <div className="w-6" />
                  </div>

                  {/* SharePlay Banner if Active */}
                  {showSharePlay && (
                    <div className="bg-purple-600 text-white px-3 py-1.5 text-[10px] font-semibold flex items-center justify-between animate-in slide-in-from-top-2">
                      <div className="flex items-center gap-1.5">
                        <Tv className="w-3 h-3" />
                        <span>Ted Lasso • Season 3 Episode 1</span>
                      </div>
                      <span className="bg-purple-800 px-1.5 py-0.5 rounded text-[9px]">Synced</span>
                    </div>
                  )}

                  {/* Message Stream */}
                  <div className="flex-1 p-4 space-y-3 overflow-y-auto text-xs">
                    <div className="text-center text-[10px] text-[#86868b] my-1">
                      Today 9:41 AM
                    </div>

                    {messages.map((m) => {
                      const isMe = m.sender === 'me';
                      return (
                        <div
                          key={m.id}
                          className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} animate-in fade-in zoom-in-95 duration-200`}
                        >
                          <div
                            className={`max-w-[78%] px-3.5 py-2 rounded-2xl ${
                              isMe
                                ? 'bg-[#0071e3] text-white rounded-br-sm shadow-sm'
                                : 'bg-[#e9e9eb] dark:bg-[#3a3a3c] text-[#1d1d1f] dark:text-white rounded-bl-sm'
                            }`}
                          >
                            <p className="leading-relaxed">{m.text}</p>
                          </div>

                          {/* Edited Status Pill */}
                          {m.isEdited && (
                            <span className="text-[9px] font-medium text-[#86868b] mt-0.5 mr-1">
                              Edited
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* iMessage Input Bar */}
                  <div className="p-2.5 pb-7 bg-[#f6f6f6] dark:bg-[#2c2c2e] border-t border-[#e5e5ea] dark:border-[#38383a] flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#e5e5ea] dark:bg-[#3a3a3c] flex items-center justify-center text-[#86868b]">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div className="flex-1 bg-white dark:bg-[#1c1c1e] rounded-full px-3 py-1.5 flex items-center justify-between border border-[#d2d2d7] dark:border-[#48484a]">
                      <span className="text-[11px] text-[#86868b]">iMessage</span>
                      <Mic className="w-3.5 h-3.5 text-[#86868b]" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#0071e3] flex items-center justify-center text-white">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </IPhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
