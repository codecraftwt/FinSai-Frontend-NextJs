'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import MarketFeatureSection from '../../components/layout/MarketFeatureSection';
import ReasonsSection from '../../components/layout/ReasonsSection';
import FAQTabs from '../../components/layout/FAQTabs';
import Footer from '../../components/layout/Footer';
import assets from '../../assets/assets';

export default function ClientCryptoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cryptoFeatures = [
    "Wide selection of cryptocurrencies including Bitcoin, Ethereum, and popular altcoins",
    "Tight spreads and transparent pricing across digital assets",
    "Secure storage and fast withdrawals for peace of mind"
  ];

  const cryptoLogos = [
    assets.BITCOIN,
    assets.ETHEREUM
  ];

  const cryptoPairNames = [
    "BTC/USD",
    "ETH/USD"
  ];

  const cryptoReasons = [
    {
      title: "Institutional-Grade Security",
      description: "Finsai Trade uses advanced encryption, secure wallets, and industry-leading standards to keep your crypto assets safe at all times."
    },
    {
      title: "Seamless Trading Experience",
      description: "Trade crypto pairs on an intuitive platform that works effortlessly on both desktop and mobile, making buying and selling simple for every trader."
    },
    {
      title: "Advanced Market Tools",
      description: "Access real-time charts, technical indicators, and data feeds to analyze price movements and track volatility across all major cryptocurrencies."
    },
    {
      title: "Fast Execution and Liquidity",
      description: "Benefit from deep liquidity and lightning-fast order execution so you never miss opportunities in fast-moving crypto markets."
    },
    {
      title: "Education and Risk Controls",
      description: "Finsai Trade provides demo accounts, trading insights, and risk management features such as stop orders to help protect your capital while trading digital assets."
    }
  ];

  const cryptoFaqData = [
    {
      id: 1,
      question: "What is crypto trading?",
      answer: "Crypto trading is the buying and selling of digital currencies like Bitcoin and Ethereum. With Finsai Trade, you get secure and reliable access to the crypto market."
    },
    {
      id: 2,
      question: "How are cryptocurrencies traded?",
      answer: "Cryptocurrencies are traded in pairs such as BTC/USD or ETH/USDT. Finsai Trade offers multiple pairs with competitive spreads."
    },
    {
      id: 3,
      question: "Is crypto trading available 24/7?",
      answer: "Yes, unlike traditional markets, crypto is open 24 hours a day, seven days a week. Finsai Trade gives you round-the-clock access."
    },
    {
      id: 4,
      question: "What risks are involved in crypto trading?",
      answer: "Crypto is highly volatile and prices can change quickly. Finsai Trade provides risk tools to help traders manage exposure."
    },
    {
      id: 5,
      question: "Can I trade crypto with leverage?",
      answer: "Yes, Finsai Trade offers flexible leverage options on select crypto pairs so you can maximize your trading potential responsibly."
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
        heading="Crypto"
        description=" "
        breadcrumbBase="HOME"
        backgroundImage={assets.coins}
      />

      <MarketFeatureSection
        heading="Trade Crypto with finsai trade"
        features={cryptoFeatures}
        mainImage={assets.BtcUsd}
        logos={cryptoLogos}
        pairNames={cryptoPairNames}
        showBackgroundLines={true}
      />

      <ReasonsSection
        heading="More Reasons To Choose Finsai Trade For Crypto Trading"
        reasons={cryptoReasons}
        backgroundImage={assets.CandleBg}
      />

      <FAQTabs
        faqData={cryptoFaqData}
        showViewAllButton={false}
      />

      <Footer />
    </div>
  );
}


