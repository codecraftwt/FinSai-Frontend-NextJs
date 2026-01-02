'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import MarketFeatureSection from '../../components/layout/MarketFeatureSection';
import ReasonsSection from '../../components/layout/ReasonsSection';
import FAQTabs from '../../components/layout/FAQTabs';
import Footer from '../../components/layout/Footer';
import assets from '../../assets/assets';

export default function WorldStocksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const worldStocksFeatures = [
    "Access shares from leading companies across global markets",
    "Competitive pricing and reliable trade execution",
    "Comprehensive data and stock analysis tools"
  ];

  const worldStocksLogos = [
    assets.APPLE,
    assets.AMAZON
  ];

  const worldStocksPairNames = [
    "APPLE",
    "AMAZON"
  ];

  const worldStocksReasons = [
    {
      title: "Global Equity Access",
      description: "Trade stocks from major exchanges worldwide, from US tech giants to European blue chips."
    },
    {
      title: "Easy-to-Use Platform",
      description: "Finsai Trade provides an intuitive interface that makes stock trading simple for both beginners and professionals."
    },
    {
      title: "Research and Analytics",
      description: "Stay ahead with financial reports, technical indicators, and live price data for world stocks."
    },
    {
      title: "Fast and Transparent Execution",
      description: "Finsai Trade ensures quick order processing with competitive spreads on global equities."
    },
    {
      title: "Risk and Learning Support",
      description: "Built-in risk controls, demo accounts, and educational resources help traders grow their skills while managing exposure."
    }
  ];

  const worldStocksFaqData = [
    {
      id: 1,
      question: "What are world stocks?",
      answer: "World stocks represent shares of companies listed on global exchanges. Finsai Trade gives you access to leading markets worldwide."
    },
    {
      id: 2,
      question: "Why trade stocks internationally?",
      answer: "Global stocks allow traders to diversify portfolios and capture opportunities across different economies."
    },
    {
      id: 3,
      question: "When can I trade stocks?",
      answer: "Trading hours depend on the exchange, but with Finsai Trade you can trade with accurate market timing and real-time updates."
    },
    {
      id: 4,
      question: "Is stock trading risky?",
      answer: "Yes, stock values fluctuate due to market and economic changes. Finsai Trade offers tools to help manage risk."
    },
    {
      id: 5,
      question: "Can I trade stocks with leverage?",
      answer: "Yes, Finsai Trade provides leverage on selected stocks, giving traders more flexibility while ensuring risk protection."
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
        heading="World Stocks"
        description=" "
        breadcrumbBase="HOME"
        backgroundImage={assets.coins}
      />

      <MarketFeatureSection
        heading="Trade World Stocks With Finsai Trade"
        features={worldStocksFeatures}
        mainImage={assets.AmazonScreen}
        logos={worldStocksLogos}
        pairNames={worldStocksPairNames}
        showBackgroundLines={true}
      />

      <ReasonsSection
        heading="More Reasons to Choose Finsai Trade for World Stocks"
        reasons={worldStocksReasons}
        backgroundImage={assets.CandleBg}
      />

      <FAQTabs
        faqData={worldStocksFaqData}
        showViewAllButton={false}
      />

      <Footer />
    </div>
  );
}
