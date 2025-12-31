import React from "react";
import Banner from "../../components/layout/Banner";
import SectionHeading from "../../components/layout/SectionHeading";
import BlogsCard from "../../components/layout/BlogsCard";
import QuestionGrids from "../../components/layout/QuestionGrids";
import assets from "../../assets/assets";
import Header from "../../components/layout/Header";
import { Check } from 'lucide-react';

const TutorialSection = ({
  heading = "Trade FX Starting From Just 0.5 Pips",
  features = [
    "Competitive Spreads On Majors, Minors, Exotics, Cryptos, And Spot Metals",
    "Premium Execution Quality For Every Forex Trade",
    "Receive Monthly Cash Rebates On Your FX Activity"
  ],
  mainImage ,
  logos = [],
  pairNames = [],
  className = ""
}) => {
  return (
    <section
      className={`relative w-full bg-transparent  py-4 sm:py-10 md:py-14 lg:py-16 xl:py-10 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 overflow-hidden ${className}`}

    >
      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-6 items-center">
          <div className="lg:col-span-3 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {heading}
            </h1>

            <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 ml-2">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
            </div>

            <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="flex-shrink-0 rounded-full bg-white bg-opacity-5 border-2 border-white/20 p-0.5 sm:p-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                    <Check size={14} className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 w-full flex justify-center">
            <div className="w-[470px] h-auto overflow-hidden shadow-lg">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Trading Chart"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0E]  relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute sm:top-[45%] left-[40vw] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full blur-[200px] opacity-80" />
      </div>

      <Header isScrolled={false} isFixed={false} />

      
      <Banner
        heading="Tutorials"
        description="We Provide Solutions"
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
      />

      <SectionHeading
        heading="Step-by-Step Trading Tutorials for Every Trader"
        description=" Learn Forex, Crypto, Indices, Metals, Energies, and Stocks with easy-to-follow tutorials designed for beginners and advanced traders."
        textAlign="center"
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
        button={{
          text: "Start Learning For Free",
          className: "w-[240px] h-[49px] px-4 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-[4px] transition-colors duration-200",
        }}
      />
        
      <BlogsCard
        items={[
          {
            id: 1,
            image: assets.ForexCard,
            title: "Forex Trading Tutorials",
            description: "Learn currency pairs, pips, spreads, and leverage.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
          {
            id: 2,
            image: assets.cryptocard,
            title: "Crypto Trading Guides",
            description: "Understand wallets, tokens, and market trends.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
          {
            id: 3,
            image: assets.stockcard,
            title: "Stock & Indices Basics",
            description: "Explore global equity and index trading.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
          {
            id: 4,
            image: assets.metalcard,
            title: "Metals & Energy Trading",
            description: "Safe-haven assets, oil, and commodities explained.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
          {
            id: 5,
            image: assets.RiskCard,
            title: "Risk Management Tutorials",
            description: "Protect capital with stop-loss, margin, and hedging.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
          {
            id: 6,
            image: assets.Platformcard,
            title: "Platform How-To Guides",
            description: "Step-by-step walkthroughs of Finsai trade tools.",
            buttonType: "button",
            buttonText: "Explore Category",
          },
        ]}
        
      />


      <QuestionGrids
        title="Learn Anytime, Anywhere"
        classNames={{
          title: "text-3xl md:text-4xl lg:text-6xl font-bold",
          // description: "text-lg",
          featureTitle: "text-base font-medium mt-6 max-w-sm",
          // featureDescription: "text-lg",
          icon : "w-[80px] h-[80px]"
        }}
        features={[
          {
            id: 1,
            title: 'Offer Clients Up To 1:500 Leverage To Boost Their Trading Potential.',
            icon: assets.FinancialGrowth
          },
          {
            id: 2,
            title: 'Low spreads starting from 0.0 pips for maximum profitability.',
            icon: assets.Spread
          },
          {
            id: 3,
            title: 'Offer Swap-free accounts, ensuring transparent pricing with no hidden costs.',
            icon: assets.fees
          }
        ]}
        columns={3}
      />

    </div>
  );
};

export default FAQPage;
