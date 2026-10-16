import React from 'react';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Hero from './components/Hero';
import LockScreenSection from './components/LockScreenSection';
import NotificationsSection from './components/NotificationsSection';
import FocusSection from './components/FocusSection';
import PhotosSection from './components/PhotosSection';
import MessagesSection from './components/MessagesSection';
import MailSection from './components/MailSection';
import SafariSection from './components/SafariSection';
import LiveTextSection from './components/LiveTextSection';
import CoreFeaturesGrid from './components/CoreFeaturesGrid';
import BentoFeatures from './components/BentoFeatures';
import AppleFooter from './components/AppleFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white overflow-x-hidden">
      {/* Global Apple Navigation */}
      <Navbar />

      {/* Sticky iOS 16 Local Bar */}
      <SubNav />

      {/* Main Page Content */}
      <main>
        <Hero />
        <LockScreenSection />
        <NotificationsSection />
        <FocusSection />
        <PhotosSection />
        <MessagesSection />
        <MailSection />
        <SafariSection />
        <LiveTextSection />
        <CoreFeaturesGrid />
        <BentoFeatures />
      </main>

      {/* Comprehensive Apple Global Footer */}
      <AppleFooter />
    </div>
  );
}

export default App;
