'use client';

import React, { useEffect } from "react";
import Banner from "../../components/layout/Banner";
import SectionHeading from "../../components/layout/SectionHeading";
import assets from "../../assets/assets";
import Header from "../../components/layout/Header";
import FAQGrid from "../../components/layout/FAQGrid";

const FaqData = [
  {
    id: 1,
    icon: assets.VideoIdVerification,
    title: "Account Verification",
    questions: ["How Do I Verify My Trading Account?"]
  },
  {
    id: 2,
    icon: assets.ReceiveDollar,
    title: "Bonuses & Promotions",
    questions: ["Does Finsai Trade Offer Any Bonuses Or Promotions?"]
  },
  {
    id: 3,
    icon: assets.CustomerSupport,
    title: "Customer Support",
    questions: ["How Can I Contact Customer Support?"]
  },
  {
    id: 4,
    icon: assets.WebApps,
    title: "Demo Accounts",
    questions: ["Can I Practice Trading With A Demo Account?"]
  },
  {
    id: 5,
    icon: assets.Deposit,
    title: "Deposits",
    questions: ["What Payment Methods Can I Use To Fund My Account?"]
  },
  {
    id: 6,
    icon: assets.Education,
    title: "Education",
    questions: ["Does Finsai Trade Provide Trading Courses Or Learning Material?"]
  },
  {
    id: 7,
    icon: assets.ProfitAnalysis,
    title: "Execution",
    questions: ["How Fast Are Trades Executed On The Platform?"]
  },
  {
    id: 8,
    icon: assets.Exchange,
    title: "Fees",
    questions: ["Are There Any Deposit, Withdrawal, Or Trading Fees?"]
  },
  {
    id: 9,
    icon: assets.Leverage,
    title: "Leverage",
    questions: ["What Leverage Options Are Available?"]
  },
  {
    id: 10,
    icon: assets.Iphone14,
    title: "Mobile Access",
    questions: ["Can I Trade Using A Mobile App Or Mobile Browser?"]
  },
  {
    id: 11,
    icon: assets.MoneyCirculation,
    title: "Negative Balance Protection",
    questions: ["Does Finsai Trade Offer Protection Against Going Into Negative Balance?"]
  },
  {
    id: 12,
    icon: assets.Classroom,
    title: "Orders",
    questions: ["What Types Of Orders Can I Place (Market, Limit, Stop-Loss)?"]
  },
  {
    id: 13,
    icon: assets.Cheque,
    title: "Platforms",
    questions: ["Which Trading Platforms Are Supported By Finsai Trade?"]
  },
  {
    id: 14,
    icon: assets.Exchange1,
    title: "Regulations",
    questions: ["Is Finsai Trade A Regulated Broker?"]
  },
  {
    id: 15,
    icon: assets.SecurityShield,
    title: "Security",
    questions: ["How Are My Funds And Personal Data Protected?"]
  },
  {
    id: 16,
    icon: assets.PriceTagUSD,
    title: "Spreads",
    questions: ["What Spreads Does Finsai Trade Offer On Different Assets?"]
  },
  {
    id: 17,
    icon: assets.Decline,
    title: "Swaps & Rollover",
    questions: ["What Are The Overnight Financing Charges?"]
  },
  {
    id: 18,
    icon: assets.Last24Hours,
    title: "Trading Hours",
    questions: ["What Are The Trading Hours For Forex, Crypto, And Stocks?"]
  },
  {
    id: 19,
    icon: assets.InstagramVerification,
    title: "Verification Time",
    questions: ["How Long Does It Take To Verify My Account?"]
  },
  {
    id: 20,
    icon: assets.Cheque,
    title: "Withdrawals",
    questions: ["How Can I Withdraw My Funds And How Long Does It Take?"]
  }
];

const ClientFAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[100px] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute sm:top-[45%] left-[40vw] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full blur-[200px] opacity-80" />
      </div>

      <Header isScrolled={false} isFixed={false} />

      <Banner
        heading="FAQ's"
        description="We Provide Solutions"
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
      />

      <SectionHeading
        heading="We Are Here to Help"
        description="Whether you have a trading query, need technical assistance, or want more information about our platform, our support team is available 24/7 to assist you."
        textAlign="center"
        maxWidth="7xl"
      />

      <FAQGrid
        tradeFaqs={FaqData}
        showTabs={false}
        columns={3}
        showIcons={true}
        viewAllText="View All"
      />

    </div>
  );
};

export default ClientFAQPage;


