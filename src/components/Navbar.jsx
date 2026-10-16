import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(22,22,23,0.85)] backdrop-blur-md border-b border-[#333336]/60 transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between text-[12px] font-normal text-[#e8e8ed]">
        {/* Apple Logo */}
        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity p-1">
          <svg className="w-[14px] h-[18px] fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.74-11.98-14.1-5.74-8.5-10.15-18.17-13.23-29.02-3.08-10.84-4.63-21.22-4.63-31.13 0-14.15 3.52-26.04 10.55-35.68 7.04-9.64 16.09-14.54 27.16-14.7 4.9 0 10.16 1.3 15.78 3.9 5.63 2.61 9.4 3.96 11.31 4.07 1.52-.11 5.48-1.52 11.88-4.24 6.4-2.71 12.03-3.9 16.89-3.57 12.56.87 22.44 5.37 29.63 13.51-10.88 6.57-16.21 15.73-16 27.48.21 9.27 3.73 17.06 10.55 23.36 6.82 6.3 14.93 9.77 24.32 10.42-2.17 6.4-4.78 12.72-7.83 18.96zM119.22 31.84c0-7.39 2.64-14.41 7.92-21.07 5.28-6.66 11.9-10.47 19.86-11.43.11 1.2.16 2.17.16 2.93 0 7.28-2.77 14.47-8.31 21.57-5.54 7.1-12.24 10.99-20.1 11.68-.33-1.2-.53-2.43-.53-3.68z" />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between flex-1 px-8 space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#e8e8ed] opacity-80 hover:opacity-100 transition-opacity tracking-tight whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Icons: Search & Bag */}
        <div className="flex items-center space-x-6">
          <button className="opacity-80 hover:opacity-100 transition-opacity text-[#e8e8ed]">
            <Search className="w-3.5 h-3.5" />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity text-[#e8e8ed]">
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden opacity-80 hover:opacity-100 transition-opacity text-[#e8e8ed]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161617] border-t border-[#333336] px-6 py-6 space-y-4 text-base text-white animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <div key={link.name} className="py-2 border-b border-[#2d2d30]">
              <a href={link.href} className="text-lg font-medium opacity-90 hover:opacity-100">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
