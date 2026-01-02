'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import MarketFeatureSection from '../../components/layout/MarketFeatureSection';
import ReasonsSection from '../../components/layout/ReasonsSection';
import FAQTabs from '../../components/layout/FAQTabs';
import Footer from '../../components/layout/Footer';
import assets from '../../assets/assets';

export default function ClientMetalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metalsFeatures = [
    "Gold, Silver, Oil, and Natural Gas available for trading",
    "Transparent pricing with low spreads",
    "Real-time data and analysis tools"
  ];

  const metalsLogos = [
    assets.GOLD,
    assets.SILVER
  ];

  const metalsPairNames = [
    "GOLD",
    "SILVER"
  ];

  const metalsReasons = [
    {
      title: "Diversification Options",
      description: "Access popular commodities like gold, silver, crude oil, and natural gas to diversify your portfolio."
    },
    {
      title: "Intuitive Trading Platform",
      description: "Finsai Trade's platform makes it easy to monitor commodity markets and place trades with precision."
    },
    {
      title: "Professional Tools",
      description: "Use advanced charting, technical indicators, and market insights to track trends in metals and energy markets."
    },
    {
      title: "Fast Order Execution",
      description: "Commodities move fast, and Finsai Trade ensures quick and reliable trade execution at competitive spreads."
    },
    {
      title: "Built-In Risk Controls",
      description: "Protect your capital with stop-loss orders, margin alerts, and transparent rollover information when trading commodities."
    }
  ];

  const metalsFaqData = [
    {
      id: 1,
      question: "What are spot metals and energies?",
      answer: "These are commodities like gold, silver, crude oil, and natural gas that can be traded at current market prices."
    },
    {
      id: 2,
      question: "Why trade metals and energies?",
      answer: "They act as hedges against inflation and provide diversification. Finsai Trade gives easy access to these assets."
    },
    {
      id: 3,
      question: "When can I trade commodities?",
      answer: "Most metals and energy markets are open almost 24 hours on trading days. Finsai Trade provides real-time access."
    },
    {
      id: 4,
      question: "Are commodities volatile?",
      answer: "Yes, prices can shift quickly based on supply and demand. Finsai Trade's tools help you manage this volatility."
    },
    {
      id: 5,
      question: "Can I trade with leverage?",
      answer: "Yes, Finsai Trade offers leverage on commodities with built-in risk management to support traders responsibly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0E] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[80%] left-[15%] w-[300px] h-[100px] md:w-[350px] md:h-[200px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        <div className="absolute top-[50%] left-1/2 sm:top-[20%] sm:left-[80%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[160px] opacity-100 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        <div className="absolute sm:top-[55%] left-[-5%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[140px] opacity-80 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute sm:top-[85%] left-[90%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[90px] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Header
        isScrolled={false}
        isFixed={false}
      />

      <Banner
        heading="Metals & Energies"
        description=" "
        breadcrumbBase="HOME"
        backgroundImage={assets.coins}
      />

      <MarketFeatureSection
        heading="Trade spot metals and energies with finsai trade"
        features={metalsFeatures}
        mainImage={assets.GoldScreen}
        logos={metalsLogos}
        pairNames={metalsPairNames}
        showBackgroundLines={true}
      />

      <ReasonsSection
        heading="More Reasons to Choose Finsai Trade for Metals and Energies"
        reasons={metalsReasons}
        backgroundImage={assets.CandleBg}
      />

      <FAQTabs
        faqData={metalsFaqData}
        showViewAllButton={false}
      />

      <Footer />
    </div>
  );
}


