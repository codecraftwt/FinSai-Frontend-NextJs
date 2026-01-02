'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import MarketFeatureSection from '../../components/layout/MarketFeatureSection';
import ReasonsSection from '../../components/layout/ReasonsSection';
import FAQTabs from '../../components/layout/FAQTabs';
import Footer from '../../components/layout/Footer';
import assets from '../../assets/assets';

export default function ClientIndicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const indicesFeatures = [
    "Access global indices including S&P 500, Nasdaq, FTSE, and more",
    "Competitive spreads and low trading costs",
    "Real-time pricing and analysis tools"
  ];

  const indicesLogos = [
    assets.US500,
    assets.US30
  ];

  const indicesPairNames = [
    "US500",
    "US30"
  ];

  const indicesReasons = [
    {
      title: "Global Market Access",
      description: "Trade leading indices that reflect the performance of top economies worldwide, all from one platform."
    },
    {
      title: "User-Friendly Platform",
      description: "Whether on desktop or mobile, Finsai Trade provides a clean and intuitive interface for tracking index performance."
    },
    {
      title: "Analytical Depth",
      description: "Advanced charting, technical indicators, and economic calendars help you understand market movements with ease."
    },
    {
      title: "Fast and Accurate Execution",
      description: "Finsai Trade ensures minimal slippage and rapid order processing so you can capitalize on index volatility."
    },
    {
      title: "Risk Management Tools",
      description: "Manage exposure with stop-loss, margin alerts, and negative balance protection while trading global indices."
    }
  ];

  const indicesFaqData = [
    {
      id: 1,
      question: "What are indices in trading?",
      answer: "Indices measure the performance of a group of stocks, such as the S&P 500. Finsai Trade lets you trade major and minor indices worldwide."
    },
    {
      id: 2,
      question: "Why trade indices?",
      answer: "Indices provide exposure to an entire market sector rather than individual stocks, reducing the need to track multiple assets."
    },
    {
      id: 3,
      question: "When can I trade indices?",
      answer: "Trading hours vary by index, but with Finsai Trade, you get extended access with real-time market updates."
    },
    {
      id: 4,
      question: "Is indices trading risky?",
      answer: "Yes, indices can be volatile, especially during global events. Finsai Trade offers risk controls to help safeguard your positions."
    },
    {
      id: 5,
      question: "Can I use leverage on indices?",
      answer: "Yes, Finsai Trade offers leverage on select indices to help amplify potential returns while managing risk carefully."
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
        heading="Indices"
        description=" "
        breadcrumbBase="HOME"
        backgroundImage={assets.coins}
      />

      <MarketFeatureSection
        heading="Trade Global Indices With Precision"
        features={indicesFeatures}
        mainImage={assets.US500Screen}
        logos={indicesLogos}
        pairNames={indicesPairNames}
        showBackgroundLines={true}
      />

      <ReasonsSection
        heading="More Reasons To Choose Finsai Trade For Indices Trading"
        reasons={indicesReasons}
        backgroundImage={assets.CandleBg}
      />

      <FAQTabs
        faqData={indicesFaqData}
        showViewAllButton={false}
      />

      <Footer />
    </div>
  );
}


