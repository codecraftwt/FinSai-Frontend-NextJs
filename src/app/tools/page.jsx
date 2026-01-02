'use client';

import React, { useEffect } from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import ToolsGrid from '../../components/Trading/ToolsGrid.jsx';
import ToolsSection from '../../components/layout/ToolsSection.jsx';
import FAQTabs from '../../components/layout/FAQTabs.jsx';
import Banner from '../../components/layout/Banner.jsx';
import assets from '../../assets/assets.jsx';

export default function ToolsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data matching the image sections exactly

  // Charting And Technical Analysis Tools
  const chartingTools = [
    {
      title: "TradingView",
      description: "Join millions of traders using TradingView's dynamic charts, 100+ indicators, Pine Script coding, and real-time data across Forex, Crypto, and Global Stocks. Ideal for building, testing, and refining your trading strategies visually. Social sentiment features and idea sharing help you stay aligned with market trends—all accessible on mobile, tablet, or desktop for UAE-based traders on the go.",
    },
    {
      title: "Finsai Trade Portal",
      description: "Get daily technical analysis directly within the Finsai Trade Portal, covering market trends, key support and resistance levels, and actionable trade setups. Updated every trading day to help you analyse markets and trade with confidence.",
    },
  ];

  // Market Data And News Tools
  const marketDataTools = [
    {
      title: "Economic Calendar",
      description: "Stay ahead of market-moving events with the integrated economic calendar inside the Finsai Trade Portal. Track key global releases such as interest rate decisions, inflation data, and employment reports—helping you anticipate volatility and plan trades across Forex, Crypto, and Indices.",
    },
    {
      title: "Real-Time News Feeds",
      description: "Access curated financial news directly within your trading dashboard. From central bank updates to major market developments, real-time news feeds keep you informed so you can react quickly to opportunities as they unfold across global markets.",
    },
  ];

  // Risk And Position Management Tools
  const riskTools = [
    {
      title: "Pip Calculator",
      description: "Quickly calculate pip values based on currency pair, lot size, and account type. Especially vital for Forex traders in the UAE, this tool enables precise position sizing and risk targeting. It's the first step to professional money management and smarter stop-loss placement.",
    },
    {
      title: "Volatility Calculator",
      description: "Gauge the average price movement of assets like BTC, Gold, or major currency pairs. Our volatility calculator helps traders adjust risk exposure based on market conditions, offering essential foresight before placing trades. UAE traders use it to fine-tune strategy and timing.",
    },
    {
      title: "Risk Meters & Margin Alerts",
      description: "Know when to play defence. Risk meters show if markets are in "risk-on" or "risk-off" mode, helping you adjust exposure. Auto-margin alerts and smart stop-loss tools notify you before issues arise—providing critical protection in fast-moving markets like Forex and Crypto.",
    },
  ];

  // Strategy And Automation Tools
  const strategyTools = [
    {
      title: "Demo Accounts",
      description: "Test your strategies in a live-like environment—without risking capital. Perfect for new traders building confidence or experimenting with automated systems. Our demo accounts mirror real-time market behaviour and execution, giving you a safe space to learn and adapt.",
    },
    {
      title: "Backtesting Software",
      description: "Run your strategy through historical data to see how it would've performed in past market conditions. Backtesting eliminates guesswork and boosts confidence. Whether you're trading gold, Ethereum, or Tesla stock, Finsai's backtesting tools help you optimise every trade plan.",
    },
    {
      title: "Automation Tools",
      description: "Remove emotion from trading with rule-based automation tools. Use MT5 Expert Advisors, PowerLanguage, or Pine Script to execute trades exactly as planned. UAE traders use automation to stay consistent, trade across time zones, and scale strategies efficiently.",
    },
  ];

  // Community And Insight Tools
  const communityTools = [
    {
      title: "Trading Journals",
      description: "Track performance like a pro with trading journals like TradesViz or TraderSync. Document entry/exit points, psychology, and results to improve over time. Finsai makes it easy for UAE traders to stay accountable, recognise patterns, and refine strategies with each session.",
    },
  ];

  // FAQ Data for Trading Tools
  const toolsFAQ = [
    {
      id: 1,
      question: "What Trading Tools Are Best For UAE Traders In 2025?",
      answer: "The Most Effective Tools Include Real-Time Charting Platforms Like TradingView, Economic Calendars, Pip Calculators, And MT5 Integration. Finsai Trade Offers All Of These For UAE-Based Traders."
    },
    {
      id: 2,
      question: "Can I Trade Global Stocks With Advanced Tools On Finsai Trade?",
      answer: "Yes, Finsai Trade provides access to global stocks alongside advanced charting, technical indicators, and risk management tools tailored for UAE traders seeking international exposure."
    },
    {
      id: 3,
      question: "Does Finsai Trade Offer Automation Tools For Crypto And Forex?",
      answer: "Yes, automation tools including Expert Advisors (EAs), backtesting, and rule-based execution are available for both crypto and forex trading on the platform."
    },
    {
      id: 4,
      question: "How Do Demo Accounts Work On Finsai Trade?",
      answer: "Demo accounts provide virtual funds in a real-market environment, allowing you to practice strategies, test tools, and explore the platform risk-free before trading live."
    },
    {
      id: 5,
      question: "Are The Trading Tools Available On Mobile For UAE Users?",
      answer: "Yes, all essential trading tools—including charts, calculators, news feeds, and execution—are fully optimized and accessible via our mobile app for UAE users."
    }
  ];

  return (
    <>
      <div className="font-['Ageo trial'] m-0 p-0 bg-[#0D0D0E] text-white relative overflow-hidden z-20">
        {/* Header */}
        <Header
          isScrolled={true}
          isFixed={false}
        />

        {/* Banner Section */}
        <Banner
          heading="Explore Our Trading Tools"
          description="No matter your experience level, Finsai's tools adapt to your strategy—helping you master the markets in Forex, Crypto, World Stocks, Indices, and Metals."
          backgroundImage={assets.learngrow}
        />

        {/* Main Hero Section */}
        <ToolsSection
          title="Explore Our Trading Tools"
          features={[
            "Advanced Charting Software For Real-Time Analysis",
            "Economic Calendar And News Feeds For Timely Decisions",
            "Pip Calculators, Volatility Meters, And Risk Controls",
            "Demo Accounts To Test Strategies Safely",
            "Backtesting, Automation, And Performance Tracking",
            "Trading Journals And Community Insights",
          ]}
          descriptionBelowFeatures={true}
          description="No matter your experience level, Finsai's tools adapt to your strategy—helping you master the markets in Forex, Crypto, World Stocks, Indices, and Metals."
        />

        {/* Charting And Technical Analysis Tools */}
        <ToolsGrid
          title="Charting And Technical Analysis Tools"
          gridItems={chartingTools}
          columns={2}
          laptopImage={assets.Laptop}
          overlayImage={assets.Analysis}
        />

        {/* Market Data And News Tools */}
        <ToolsGrid
          title="Market Data And News Tools"
          gridItems={marketDataTools}
          columns={2}
          laptopImage={assets.Laptop}
          overlayImage={assets.News}
        />

        {/* Risk And Position Management Tools */}
        <ToolsGrid
          title="Risk And Position Management Tools"
          gridItems={riskTools}
          columns={3}
          laptopImage={assets.Laptop}
          overlayImage={assets.Risktool}
        />

        {/* Strategy And Automation Tools */}
        <ToolsGrid
          title="Strategy And Automation Tools"
          gridItems={strategyTools}
          columns={3}
          laptopImage={assets.Laptop}
          overlayImage={assets.Automationtool}
        />

        {/* Community And Insight Tools */}
        <ToolsGrid
          title="Community And Insight Tools"
          gridItems={communityTools}
          columns={1} // Only one item, centered
          laptopImage={assets.Laptop}
          overlayImage={assets.Insighttool}
        />

        {/* Why Use Finsai tools  */}
        <ToolsSection
          title="Why Use Finsai Trade's Tools"
          titleclassName="max-w-3xl mx-auto"
          features={[
            "Built for UAE traders – secure, multilingual, and mobile-optimised",
            "Integrates with MetaTrader 5 and web app",
            "Covers global markets: Forex, Crypto, Indices, World Stocks, Metals",
            "Negative Balance Protection built-in",
            "Seamless UI with 24/7 Live Support ",
          ]}
          descriptionBelowFeatures={true}
          description="Trade with tools designed to protect your capital, empower your strategy, and enhance your edge—only with Finsai."
          showlines={true}
        />

        {/* FAQ Section */}
        <FAQTabs
          title="Frequently asked questions"
          faqData={toolsFAQ}
          showViewAllButton={false}
          titleAlign='left'
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
