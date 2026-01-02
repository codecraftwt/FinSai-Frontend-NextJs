"use client";

import React, { useState, useEffect } from 'react';
import assets from '../../assets/assets';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';

// ============================================
// Team Member Card Component
// ============================================
const TeamMemberCard = ({ image, name, title }) => (
  <div className="group relative w-full h-full">
    <div className="h-full bg-gradient-to-b from-[#0d1f3c] to-[#0a1628] rounded-lg overflow-hidden border border-[#496DAB]/20 hover:border-[#496DAB]/40 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0d1f3c] via-[#152238] to-[#0a1628]">
        {image ? (
          <img
            src={image}
            alt={name || title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0d1f3c]/30" />
        )}
      </div>

      {/* Text */}
      <div className="px-4 py-5 bg-[#0a1628] flex flex-col justify-center flex-1">
        {name ? (
          <h3 className="text-white text-lg font-semibold mb-1 text-center">
            {name}
          </h3>
        ) : (
          <div className="h-6 mb-1" /> 
        )}
        <p className="text-gray-300 text-base text-center">{title}</p>
      </div>
    </div>
  </div>
);

// ============================================
// Team Members Data
// ============================================
const teamMembers = [
  { image: null, name: "", title: "Founder & CEO" },
  { image: null, name: "", title: "Chief Operating Officer (COO)" },
  { image: null, name: "", title: "Chief Technology Officer (CTO)" },
  { image: null, name: "", title: "Head Of Trading & Market Research" },
  { image: null, name: "", title: "Head Of Customer Experience" },
  { image: null, name: "", title: "Head Of Marketing & Growth" },
  { image: null, name: "", title: "Lead Educator, Finsai Academy" },
];

// ============================================
// Main Our Team Page Component - FIXED WITH YOUR FAQGRID PATTERN
// ============================================
const ClientOurTeamPage = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[10px] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[35%] left-[5%] w-[300px] h-[175px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full blur-[100px] md:blur-[140px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[65%] left-[45%] w-[300px] h-[300px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full blur-[160px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Header isScrolled={isScrolled} isFixed={true} />

      <Banner
        heading="Our Team"
        description="We Provide Solutions"
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
        breadcrumbCurrent="COMPANY"
      />

      {/* Team Section - Using the EXACT same pattern as your working FAQGrid */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center"
              >
                <div className="w-full max-w-[380px]">
                  <TeamMemberCard
                    image={member.image}
                    name={member.name}
                    title={member.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientOurTeamPage;


