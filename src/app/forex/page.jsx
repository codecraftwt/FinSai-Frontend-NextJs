'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import MarketFeatureSection from '../../components/layout/MarketFeatureSection';
import ReasonsSection from '../../components/layout/ReasonsSection';
import FAQTabs from '../../components/layout/FAQTabs';
import Footer from '../../components/layout/Footer';
import assets from '../../assets/assets';

export default function ForexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const forexFeatures = [
    "Competitive Spreads On Majors, Minors, Exotics, Cryptos, And Spot Metals",
    "Premium Execution Quality For Every Forex Trade",
    "Receive Monthly Cash Rebates On Your FX Activity"
  ];

  const forexLogos = [
    assets.EURUSD,
    assets.GBPUSD
  ];

  const forexPairNames = [
    "EUR/USD",
    "GBP/USD"
  ];

  const forexReasons = [
    {
      title: "TRUSTED SECURITY & REGULATION",
      description: "With Finsai Trade, Your Funds Are Protected Through Top-Tier Security Protocols, Advanced Encryption, And Compliance With Global Trading Standards, Giving You Confidence In Every Trade."
    },
    {
      title: "USER-FRIENDLY PLATFORM, ANYWHERE ACCESS",
      description: "Whether You Trade On Desktop Or Mobile, Finsai Trade Delivers A Smooth, Intuitive Interface That Makes Charting, Executing, And Managing Trades Effortless Even For Beginners."
    },
    {
      title: "ADVANCED CHARTING & ANALYTICS",
      description: "Finsai Trade Equips Traders With Professional-Grade Tools Including Multiple Chart Types, Technical Indicators, Drawing Tools, And Real-Time Data Helping You Spot Opportunities And Refine Strategies."
    },
    {
      title: "FAST EXECUTION & FLEXIBLE ORDERS",
      description: "Forex Moves Fast, And So Does Finsai Trade. Enjoy Lightning-Quick Execution, Minimal Slippage, And Access To Order Types Like Market, Limit, Stop-Loss, And Trailing Stops For Full Control."
    },
    {
      title: "RISK MANAGEMENT & LEARNING SUPPORT",
      description: "Trade Smarter With Finsai Trade's Built-In Risk Controls Like Stop-Loss, Margin Alerts, And Negative Balance Protection. Plus, Access Demo Accounts, Tutorials, And Insights To Sharpen Your Skills."
    }
  ];

  const forexFaqData = [
    {
      id: 1,
      question: "What is Forex trading?",
      answer: "Forex trading is the exchange of one currency for another in the world's largest financial market, open 24 hours a day, five days a week. With platforms like Finsai Trade, traders get direct access to this global market."
    },
    {
      id: 2,
      question: "How does Forex differ from other markets?",
      answer: "Unlike stocks or futures, Forex has no central exchange. Trading happens over-the-counter between banks, brokers, and traders. Finsai Trade simplifies this process by providing transparent pricing and reliable execution."
    },
    {
      id: 3,
      question: "What is a pip in Forex?",
      answer: "A pip is the smallest unit of price movement in Forex, usually equal to 0.0001 for most pairs and 0.01 for JPY pairs. Finsai Trade offers tight spreads starting from 0.5 pips."
    },
    {
      id: 4,
      question: "What are currency pairs?",
      answer: "In Forex, currencies are traded in pairs such as EUR/USD. The first is the base currency and the second is the quote currency. Finsai Trade supports majors, minors, and exotic pairs."
    },
    {
      id: 5,
      question: "When is the Forex market open?",
      answer: "The Forex market runs 24 hours a day, Monday to Friday, across sessions in Sydney, Tokyo, London, and New York. With Finsai Trade, you can access these sessions seamlessly from anywhere."
    },
    {
      id: 6,
      question: "What is a spread?",
      answer: "The spread is the difference between the buying price (ask) and the selling price (bid) of a currency pair. Finsai Trade keeps spreads competitive to help traders maximize potential profits."
    },
    {
      id: 7,
      question: "What is rollover in Forex?",
      answer: "Rollover, or swap, is the interest adjustment applied when positions are held overnight. Finsai Trade displays rollover costs clearly so traders always know their positions."
    },
    {
      id: 8,
      question: "What is leverage and margin?",
      answer: "Leverage lets traders control larger positions with a small deposit called margin. While it increases profit potential, it also adds risk. Finsai Trade provides flexible leverage options with built-in risk controls."
    },
    {
      id: 9,
      question: "What is automated trading?",
      answer: "Automated trading uses algorithms or pre-set strategies to place trades. With Finsai Trade, traders can also explore advanced tools and strategies to automate decisions."
    },
    {
      id: 10,
      question: "Is Forex trading risky?",
      answer: "Yes. Forex involves high volatility and leverage can magnify losses as well as gains. Finsai Trade offers risk management tools such as stop-loss and margin alerts to help protect traders."
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
        heading="Forex"
        description=" "
        breadcrumbBase="HOME"
        backgroundImage={assets.coins}
      />

      <MarketFeatureSection
        heading="Trade FX Starting From Just 0.5 Pips"
        features={forexFeatures}
        mainImage={assets.EurUsd}
        logos={forexLogos}
        pairNames={forexPairNames}
        showBackgroundLines={true}
      />

      <ReasonsSection
        heading="More Reasons To Choose Finsai Trade For Forex Trading"
        reasons={forexReasons}
        backgroundImage={assets.CandleBg}
      />

      <FAQTabs
        faqData={forexFaqData}
        showViewAllButton={false}
      />

      <Footer />
    </div>
  );
}
