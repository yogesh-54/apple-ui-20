import React from 'react';

export default function AppleFooter() {
  const footnoteList = [
    '1. Available on iPhone 8 and later.',
    '2. Live Text in video and Visual Look Up require iPhone with A12 Bionic or later.',
    '3. Some features may not be available in all regions or all languages.',
    '4. Apple Pay Later is subject to eligibility checks and approvals. Available only in the U.S. for qualifying purchases.',
    '5. Passkeys are created using WebAuthn standards and synchronized through end-to-end encrypted iCloud Keychain.',
    '6. Matter smart home accessories require an Apple home hub such as HomePod, HomePod mini, or Apple TV.',
    '7. Fitness app on iPhone utilizes built-in motion sensors to estimate calories burned and distance traveled.',
    '8. Next-generation CarPlay vehicle integration announcements will begin rolling out with participating automakers.',
  ];

  const directoryColumns = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
      secondTitle: 'Account',
      secondLinks: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Order Status', 'Shopping Help']
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[11px] border-t border-[#d2d2d7]/60 pt-10 pb-16">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes Section */}
        <div className="space-y-2 pb-8 border-b border-[#d2d2d7]/50 leading-relaxed text-[#86868b]">
          {footnoteList.map((note, idx) => (
            <p key={idx}>{note}</p>
          ))}
          <p className="pt-2">
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Breadcrumb row */}
        <div className="flex items-center gap-2 py-4 text-[#424245]">
          <span className="font-semibold text-[#1d1d1f]"></span>
          <span>&gt;</span>
          <span className="hover:text-[#1d1d1f] cursor-pointer">iOS</span>
          <span>&gt;</span>
          <span className="text-[#1d1d1f] font-medium">iOS 16</span>
        </div>

        {/* Directory Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-6 border-b border-[#d2d2d7]/50">
          {directoryColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <div>
                <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-[#1d1d1f] hover:underline transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {col.secondTitle && (
                <div className="pt-2">
                  <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2">{col.secondTitle}</h4>
                  <ul className="space-y-2">
                    {col.secondLinks.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-[#1d1d1f] hover:underline transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[#86868b]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-x-3">
              <a href="#" className="hover:text-[#1d1d1f] hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#1d1d1f] hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-[#1d1d1f] hover:underline">Sales Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#1d1d1f] hover:underline">Legal</a>
              <span>|</span>
              <a href="#" className="hover:text-[#1d1d1f] hover:underline">Site Map</a>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="hover:text-[#1d1d1f] hover:underline font-medium">
              United States
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
