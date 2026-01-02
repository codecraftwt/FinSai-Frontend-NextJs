'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import BlogsCard from '../../components/layout/BlogsCard';
import assets from '../../assets/assets.jsx';
import Footer from '../../components/layout/Footer.jsx';


const Blogs = () => {

  const   BlogsData = [
    {
      id: 1,
      image: assets.CryptoChristmas,
      format: "December 4, 2025",
      title: "Crypto & Christmas: Does The Santa Claus Rally Affect Cryptocurrency Markets?",
      description:
        "History doesn’t repeat itself, but it often rhymes. As the holiday season approaches, traders everywhere start wondering: will the markets deliver...",
      buttonType: "link",
    },
    {
      id: 2,
      image: assets.PropTrading,
      format: "November 29, 2025",
      title: "Prop Trading Vs Market Making: A Helpful Explanation (Without The Jargon)",
      description:
        "I keep hearing about prop firms and market makers… but which one actually matters to me as a trader? If you’ve ever asked yourself this...",
      buttonType: "link",
    },
    {
      id: 3,
      image: assets.Scalping,
      format: "November 23, 2025",
      title: "Scalping Vs Day Trading: What’s The Difference?",
      description:
        "Fast trades don’t always mean fast profits, but the right style can help you trade with more confidence, not more stress...",
      buttonType: "link",
    },
    {
      id: 4,
      image: assets.Authenticate,
      format: "November 20, 2025",
      title: "Is Finsai Trade Authentic? The Unvarnished Truth Exposed",
      description:
        "Is Finsai Trade authentic? The unvarnished truth exposed. Many traders are questioning whether Finsai Trade is an industry-filled...",
      buttonType: "link",
    },
    {
      id: 5,
      image: assets.Cfds,
      format: "October 16, 2025",
      title: "What Are CFDs And How Do They Work In Forex And Commodity Trading?",
      description:
        "It’s not just about owning an asset — it’s about understanding the movement behind it. That’s the essence of CFD trading...",
      buttonType: "link",
    },
    {
      id: 6,
      image: assets.FinsaiUpgrade,
      format: "October 10, 2025",
      title: "How The New Finsai Trade Upgrade Can Improve Your Trading Experience",
      description:
        "A trading experience designed for you — smarter, faster, and built to perform. I can finally see everything I need in one place...",
      buttonType: "link",
    },
    {
      id: 7,
      image: assets.Top10Mistakes,
      format: "September 22, 2025",
      title: "Top 10 Mistakes Beginners Make Without Proper Crypto Trading Education",
      description:
        "Crypto trading isn’t a lottery ticket — it’s a skillset. In 2025, crypto adoption is soaring across the globe, with over 420 million...",
      buttonType: "link",
    },
    {
      id: 8,
      image: assets.AIPowered,
      format: "September 1, 2025",
      title: "AI-Powered Forex Strategies: The Next Frontier In Automated Trading",
      description:
        "Edge isn’t found in a hunch — it’s engineered. In the fast-moving forex market, where daily turnover has been measured in the...",
      buttonType: "link",
    },
    {
      id: 9,
      image: assets.GlobalStockMarket,
      format: "July 15, 2025",
      title: "Global Stock Markets: Your Key To A Balanced Portfolio",
      description:
        "Did you know that relying solely on your home market could expose your investments to unnecessary risks? Global stock markets...",
      buttonType: "link",
    },
  ];



  return (
    <div className="min-h-screen bg-[#0D0D0E]">
      {/* Header */}
      <Header
        data={{
          headerIcon: assets.logo,
          openLiveAccountText: "OPEN LIVE ACCOUNT",
          tryFreeDemoText: "TRY FREE DEMO"
        }}
        isScrolled={false}
        isFixed={false}
      />

      {/* Banner */}
      <Banner
        heading="Welcome to Finsai Blog"
        description="Where we decode the market and provide you with practical tips and strategies for success"
        backgroundImage={assets.learngrow}
        breadcrumbBase="HOME"
        breadcrumbCurrent="LEARN GROW"
        maxWidthTitle="max-w-4xl"
      />

      {/* Blogs Content */}
      <BlogsCard
        items={BlogsData}
        // buttonText="Read More"
        buttonType="link"
      />
      <Footer />
    </div>
  );
};

export default Blogs;
