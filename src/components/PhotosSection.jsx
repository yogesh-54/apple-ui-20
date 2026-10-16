import React from 'react';
import { Users, Camera, Sparkles, SlidersHorizontal, Heart, Trash2 } from 'lucide-react';

export default function PhotosSection() {
  const familyMembers = [
    { name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    { name: 'David', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    { name: 'Emma', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
    { name: 'Liam', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
      caption: 'Lake Tahoe Sunset',
      contributor: 'David'
    },
    {
      src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
      caption: 'Big Sur Highway 1',
      contributor: 'Sarah'
    },
    {
      src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
      caption: 'Alpine Canoe Trip',
      contributor: 'Emma'
    },
  ];

  return (
    <section id="photos" className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#0071e3] mb-2">
            iCloud Shared Photo Library
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            A smarter way to share.
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
            Share photos and videos seamlessly with up to five other people, so everyone can collaborate on the family’s collection and enjoy more complete memories.
          </p>
        </div>

        {/* Big Showcase Card */}
        <div className="bg-white rounded-[36px] p-6 sm:p-10 md:p-14 border border-[#e5e5ea] shadow-sm mb-12">
          {/* Top Bar with Avatars */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#f5f5f7]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {familyMembers.map((member) => (
                  <img
                    key={member.name}
                    src={member.avatar}
                    alt={member.name}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1d1d1f]">The Anderson Family Library</h4>
                <p className="text-xs text-[#86868b]">4 contributors • 1,482 shared memories</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#0071e3] text-xs font-semibold w-fit">
              <Users className="w-3.5 h-3.5" />
              Shared Library Active
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {galleryImages.map((img) => (
              <div key={img.caption} className="group relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold">{img.caption}</div>
                      <div className="text-[11px] text-white/80">Added by {img.contributor}</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#f5f5f7]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#1d1d1f] font-bold text-base">
                <Camera className="w-4 h-4 text-[#0071e3]" />
                Share straight from Camera
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Choose to send photos to the Shared Library automatically with a toggle in the Camera app, or let Bluetooth detect when family is near.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-[#1d1d1f] font-bold text-base">
                <Sparkles className="w-4 h-4 text-[#0071e3]" />
                Smart Sharing Suggestions
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Receive intelligent recommendations in the For You tab to seamlessly contribute memorable past trips and celebrations.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-[#1d1d1f] font-bold text-base">
                <SlidersHorizontal className="w-4 h-4 text-[#0071e3]" />
                Equal editing permissions
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Everyone has equal permission to add, favorite, crop, caption, or organize photos. Edits sync instantly across everyone's devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
