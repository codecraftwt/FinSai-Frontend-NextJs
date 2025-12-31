'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import assets from '../../assets/assets.jsx';

const Footer = ({ data = {} }) => {
  const {
    footerLogo = assets.logo,
    footerDescription = "At Finsai Trade, We Bridge Traditional Finance With Cutting-edge Trading Technology, Whether You're A Beginner Or A Seasoned Trader, Our Platform Offers The Perfect Mix Of Reliability, Innovation, And Growth Opportunity.",
    quickLinks = ["About Us", "Feature", "Career", "Contact Us"],
    helpLinks = ["Customer Support", "Terms", "Privacy", "FAQs"],
    otherLinks = ["Start Trading", "Earn Free Crypto", "Crypto Wallet", "Payment Option"],
    copyrightText = "© Copyright 2025, all right reserved by finsaitrade",
    socialLinks = [
      { icon: "Facebook", label: "Facebook" },
      { icon: "Twitter", label: "Twitter" },
      { icon: "Youtube", label: "Youtube" },
      { icon: "Linkedin", label: "LinkedIn" },
      { icon: "Instagram", label: "Instagram" }
    ],
    googlePlayText = "Get it on",
    googlePlaySubtext = "Google Play",
    appStoreText = "Download on the",
    appStoreSubtext = "App Store"
  } = data;

  // Mapping of link text to routes
  const getLinkPath = (linkText) => {
    const linkMap = {
      "Contact Us": "/contact-support",
      "Career": "/career",
      "About Us": "/about",
      "Payment Option": "/payment",
      "Privacy": "/regulations-security",
      "FAQs": "/faq",
      "Customer Support": "/contact-support"
    };
    return linkMap[linkText] || "#";
  };

  return (
    <footer className="bg-[#0b152a] text-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="pt-3 md:pt-5 max-w-7xl mx-auto text-[#86AAE3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 mb-8 w-full items-start justify-items-start lg:justify-items-center xl:justify-items-start">
          <div className="lg:col-span-1 xl:col-span-1 w-full">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img src={footerLogo} alt="Finsai Group Logo" className="w-[140px] h-[56px] md:w-[160px] md:h-[64px] lg:w-[160px] lg:h-[64px] xl:w-[185px] xl:h-[74px]" />
            </div>
            <p className="text-xs md:text-sm lg:text-sm xl:text-base text-gray-400 leading-relaxed max-w-xs md:max-w-md lg:max-w-sm xl:max-w-md">
              {footerDescription}
            </p>
          </div>

          <div className="lg:col-span-2 xl:col-span-2 xl:w-full">
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-4 xl:gap-8 2xl:gap-12">
              <div>
                <h3 className="font-semibold text-white mb-4 md:mb-5 text-sm md:text-base lg:text-base xl:text-lg">Quick Link</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-400 text-[10px] md:text-xs lg:text-xs xl:text-sm">
                  {quickLinks.map((item) => {
                    const path = getLinkPath(item);
                    return (
                      <li key={item}>
                        {path !== "#" ? (
                          <Link href={path} className="hover:text-cyan-400 transition">{item}</Link>
                        ) : (
                          <a href="#" className="hover:text-cyan-400 transition">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4 md:mb-5 text-sm md:text-base lg:text-base xl:text-lg">Help</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-400 text-[10px] md:text-xs lg:text-xs xl:text-sm">
                  {helpLinks.map((item) => {
                    const path = getLinkPath(item);
                    return (
                      <li key={item}>
                        {path !== "#" ? (
                          <Link href={path} className="hover:text-cyan-400 transition">{item}</Link>
                        ) : (
                          <a href="#" className="hover:text-cyan-400 transition">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4 md:mb-5 text-sm md:text-base lg:text-base xl:text-lg">Others</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-400 text-[10px] md:text-xs lg:text-xs xl:text-sm">
                  {otherLinks.map((item) => {
                    const path = getLinkPath(item);
                    return (
                      <li key={item}>
                        {path !== "#" ? (
                          <Link href={path} className="hover:text-cyan-400 transition">{item}</Link>
                        ) : (
                          <a href="#" className="hover:text-cyan-400 transition">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 xl:col-span-1 xl:w-full">
            <h3 className="font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">Download App</h3>
            <div className="flex flex-row gap-3 md:gap-4 lg:flex-col lg:gap-3 xl:gap-4 w-full max-w-full lg:max-w-[200px] xl:max-w-[220px]">
              <a href="#" className="flex items-center bg-[#FFFFFF] backdrop-blur-sm border border-gray-700 rounded-lg px-2.5 py-2 lg:px-3 lg:py-2.5 hover:bg-black/60 transition space-x-2 flex-1 lg:flex-none min-w-0">
                <img src={assets.playstore} alt="Google Play" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] md:text-xs text-black truncate">{googlePlayText}</div>
                  <div className="text-xs md:text-sm font-medium text-[#0D0D0E] truncate">{googlePlaySubtext}</div>
                </div>
              </a>
              <a href="#" className="flex items-center bg-[#FFFFFF] backdrop-blur-sm border border-gray-700 rounded-lg px-2.5 py-2 lg:px-3 lg:py-2.5 hover:bg-black/60 transition space-x-2 flex-1 lg:flex-none min-w-0">
                <img src={assets.apple} alt="App Store" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] md:text-xs text-black truncate">{appStoreText}</div>
                  <div className="text-xs md:text-sm font-medium text-[#0D0D0E] truncate">{appStoreSubtext}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 md:gap-8 lg:gap-12">
        <p className="text-center text-[14px] sm:text-md md:text-left flex-1">{copyrightText}</p>
               <div className="flex space-x-4 md:space-x-8 lg:space-x-10">
          {socialLinks.map(({ icon, label }) => {
            const IconComponent = { Facebook, Twitter, Youtube, Linkedin, Instagram }[icon];
            return (
              <a key={label} href="#" className="hover:text-cyan-400 transition" aria-label={label}>
                {IconComponent && <IconComponent size={24} className="w-8 h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 text-white bg-white bg-opacity-15 rounded-md p-1"/>}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
