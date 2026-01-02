'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import Footer from '../../components/layout/Footer';
import StartTradingSteps from '../../components/Trading/TradingSteps';
import PlatformCards from '../../components/layout/PlatformCards';
import BuiltForAllTraders from '../../components/Trading/BuiltForAllTraders';
import FAQGrid from '../../components/layout/FAQGrid';
import FAQTabs from '../../components/layout/FAQTabs';
import SectionHeading from '../../components/layout/SectionHeading';
import FeatureCards from '../../components/Trading/FeatureCards';
import HowToOpenAccount from '../../components/Trading/HowToOpenAccount';
import assets from '../../assets/assets';

export default function PlatformsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
    icon: "metatrader",
    title: "MetaTrader 5",
    description: "The gold standard in global trading terminals",
    features: [
      "Trade Forex, Crypto, Indices, And More",
      "Advanced Charts & 80+ Technical Indicators",
      "Multi-Window Terminal With Depth Of Market",
      "Algorithmic Trading Via Expert Advisors (EAs)",
      "Desktop, Web, And Mobile Versions Available"
    ],
    footer: "Perfect For Advanced Traders And Analysts"
  },
     {
    icon: "mobileapp",
    title: "Mobile App (Coming Soon)",
    description: "All-in-one trading from your smartphone.",
    features: [
      "Execute Trades Instantly From Anywhere",
      "Manage Funds, View Charts, And Receive Alerts",
      "Encrypted Security"
    ],
    footer: "Tailored For Mobile-First Investors And Active Traders."
  },
  {
    icon: "webtrader",
    title: "Finsai WebTrader",
    description: "No downloads. Just log in and trade. (This for desktop- you can check on our platform)",
    features: [
      "Intuitive Browser-Based Interface",
      "One-Click Trade Execution",
      "Real-Time Quotes, Charts, And Order Book",
      "Secure Access From Any Device"
    ],
    footer: "Ideal For Traders Who Want Quick Access On The Go."
  },
 
];


  return (
    <div className=" bg-black">
      <Header isScrolled={false} isFixed={false} />
      <Banner
        heading="Your Platform. Your Strategy. Total Control."
        description="Trade Forex, Crypto, Indices & more with lightning-fast execution, multi-device compatibility, and advanced trading tools — all under one secure ecosystem."
        breadcrumbBase="TRADING"
        breadcrumbCurrent="PLATFORMS"
        backgroundImage={assets.platformbanner}
        buttons={
          <>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              Open Live Account
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB]  text-white font-semibold rounded-lg  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              Try Free Demo
            </button>
          </>
        }
      />

      
      <PlatformCards
        platforms={platforms}
        platformsDescription="Trade seamlessly on the go or from your desktop with our cutting-edge platforms designed for every trader's needs."
        platformsLearnMoreText="Learn More"
        animationEnabled={true}
        showFeatures={true}
        checkIconSize={20}
      />

      {/* <BuiltForAllTraders /> */}

      <SectionHeading
        heading="Built For All Traders"
        description="Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you're a beginner or a pro, our platforms help you trade smarter and faster."
        textAlign="center"
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
      />

      <FeatureCards 
      
      />
      <StartTradingSteps />
      

      {/* <div className="px-4 sm:px-6 lg:px-8 mt-[200px]">
        <StartTradingSteps />
      </div> */}

      <FAQTabs
        sectionTitle="Frequently Asked tions"
        // faqData={faqs}
        showViewAllButton={false}
        titleAlign="left"

      />
      <Footer />

    </div>
  );
}
