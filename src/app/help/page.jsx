'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import FAQGrid from '../../components/layout/FAQGrid';
import assets from '../../assets/assets.jsx';
import { Search } from 'lucide-react';

export default function HelpCenterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Ageo_trial'] m-0 p-0 bg-[#0D0D0E] text-white relative overflow-hidden min-h-screen">

      <Header
        isScrolled={isScrolled}
        isFixed={false}
      />

      {/* Banner Section */}
      <Banner
        heading="Help Center"
        description="Find Answers, Get Support, and Trade with Confidence"
        backgroundImage={assets.HelpCenter}
      />

      <div className="bg-transparent py-4 px-4 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-12">
            How May We Assist You?
          </h2>

          <div className="w-full max-w-[749px] sm:w-full h-[63px] flex items-center justify-center mx-auto bg-white/20 rounded-md border border-gray-700 overflow-hidden mb-6 sm:px-0">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Type Your Question Here"
                className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-3 sm:px-5 text-md sm:text-[18px] focus:outline-none"
              />
            </div>
            <div className="px-2 sm:px-3 bg-white/10 h-full flex items-center justify-center flex-shrink-0">
              <button className="text-gray-400 hover:text-cyan-400 transition-colors p-1 sm:p-2">
                <Search size={24} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Grid Section */}
      <FAQGrid columns={3} viewAllText="View All" onViewAll={() => {}} showIcons={true} className="bg-transparent" showTabs={true} 
        
        />

      {/* Footer Section*/}
      <Footer />
    </div>
  );
}
