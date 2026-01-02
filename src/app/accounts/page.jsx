'use client';

import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/layout/Banner";
import SectionHeading from "../../components/layout/SectionHeading";
import ContentAndImage from "../../components/layout/Content&Image";
import SupportServicesSection from "../../components/layout/SupportServicesSection";
import HelpWithSection from "../../components/layout/HelpWithSection";
import assets from "../../assets/assets";
import FAQTabs from "../../components/layout/FAQTabs";
import ContactSupportForm from "../../components/layout/ContactSupportForm";
import DepositeAndSmart from "../../components/Trading/DepositeAndSmart";
import FeaturesSection from "../../components/layout/FeaturesSection";
import HowToOpenAccount from "../../components/Trading/HowToOpenAccount";
import AccountsTable from "../../components/Trading/AccountsTable";

export default function AccountsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  const finsaiCareFaqData = [
    {
      id: 1,
      question: "Can I upgrade or switch my account type later?",
      answer:
        "Absolutely. Globle traders can upgrade or change account types anytime. Just contact our customer support team via chat or email for seamless assistance.",
    },
    {
      id: 2,
      question: "Are there any fees for deposits or withdrawals in the Globle?",
      answer:
        "For Finsai / Fino Glob (Globle) accounts, there are no fees charged by the platform for deposits or withdrawals. Fees depend only on the payment method or bank you use (if any).",
    },
    {
      id: 3,
      question: "What documents do I need to verify my Finsai Trade account?",
      answer:
        "You need a valid government-issued photo ID (like a passport or driver's license) and a proof of address (such as a recent utility bill or bank statement).",
    },
    {
      id: 4,
      question:
        "How is Smart Pro different from Smart ECN?",
      answer:
        "Smart Pro is designed for experienced traders with a lower minimum deposit and generally tighter spreads than basic accounts, while Smart ECN requires a higher minimum deposit and offers raw ECN-style pricing with even tighter spreads and direct market access geared toward high-volume or advanced traders.",
    },
    {
      id: 5,
      question:
        "Is the Smart Elite account available to all traders in the Globle?",
      answer:
        "No, Smart Elite isn't automatically available to all traders; access depends on meeting specific eligibility requirements set by Finsai (like meeting minimum deposit or account criteria) rather than being offered by default to every registered user.",
    },
  ];

  const featuresData = [
  // Left Column
  {
    icon: assets.FastForward,
    title: "Fast & Reliable Execution",
    description:
      "Ultra-fast execution with no requotes across all account types.",
  },
  {
    icon: assets.Accountant,
    title: "Accounts for Every Trader",
    description:
      "From Smart Start to Smart VIP, designed for beginners to professionals.",
  },
  {
    icon: assets.Depth,
    title: "Raw Spreads & Deep Liquidity",
    description:
      "Institutional-grade liquidity with raw spreads on Pro, Elite, and VIP accounts.",
  },
  {
    icon: assets.HiddenFees,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no deposit or withdrawal charges.",
  },
  {
    icon: assets.SwapPaths,
    title: "Swap-Free Trading",
    description:
      "Swap-free options available on all accounts.",
  },
  {
    icon: assets.Business,
    title: "trade anywhere",
    description:
      "MT5 on mobile, desktop, and web with consistent performance.",
  },
  {
    icon: assets.OnlineSupport,
    title: "Priority Support",
    description:
      "24/7 support, with concierge-level service for Elite and VIP clients.",
  },
];


  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-white overflow-hidden relative z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute sm:top-[24%] left-[30vw] w-[300px] h-[100px] md:w-[600px] md:h-[600px] bg-gradient-radial bg-radial-market rounded-full blur-[160px] opacity-50" />
        <div className="absolute sm:top-[50%] left-[30vw] w-[300px] h-[100px] md:w-[600px] md:h-[600px] bg-gradient-radial bg-radial-market rounded-full blur-[300px] opacity-40" />
      </div>

      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Hero Section - Using Banner Component */}
      <Banner
        heading="Trade Smart. Choose the Account That Suits You"
        description="Finsai Trade offers account types tailored to every trader, from beginners to professionals. Whether you're trading casually or scaling strategies, our accounts are built to support your growth Globally."
        breadcrumbBase="HOME"
        breadcrumbCurrent="TRADING"
        backgroundImage={assets.tradingaccountbanner}
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

      <SectionHeading
        heading="Explore Finsai Trade Accounts"
        description="Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you're a beginner or a pro, our platforms help you trade smarter and faster."
        textAlign="center"
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
      />

      <AccountsTable/>

      <FeaturesSection
        title="About Finsai Trade"
        features={featuresData}
        showTitle={true}
        showUnderline={true}
      />

      <HowToOpenAccount />
      
      <DepositeAndSmart
        heading="Deposit & Withdrawal"
        description="At Finsai Trade, we make deposits and withdrawals simple, fast, and secure — because seamless money movement is critical to successful trading."
        features={[
          {
            title: "Multiple Deposit Methods",
            description:
              "Choose from trusted payment gateways, e-wallets, and cryptocurrencies, including USDT and BTC. Whatever your preference, we support flexible and accessible options for UAE-based traders.",
          },
          {
            title: "Secure & Encrypted Transactions",
            description:
              "Your financial data and transfers are protected by industry-grade encryption and secure handling protocols. All client funds are held in segregated accounts for added safety.",
          },
          {
            title: "Fast Withdrawal Processing",
            description:
              "Withdrawal requests are processed within 24 business hours. No delays, no unnecessary hold-ups — just smooth access to your funds when you need them.",
          },
          {
            title: "Transparent Fee Structure",
            description:
              "We do not charge internal deposit or withdrawal fees. The amount you see is the amount you get, with no hidden deductions or last-minute surprises.",
          },
        ]}
        subdescription="Please note: Withdrawal timelines may vary based on your selected payment method and location."
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
        
      />

      <DepositeAndSmart
        heading="Smart Elite - VIP Access On Request"
        description="Smart Elite is a premium account offering for high-volume or institutional-grade traders looking for tailored advantages beyond standard accounts."
        features={[
          {
            title: "Custom Leverage & Spread Options",
            description:
              "Set trading conditions that match your risk profile and strategy. Get raw spreads and higher leverage potential customised to your trading style.",
          },
          {
            title: "Priority Execution & Withdrawals",
            description:
              "Enjoy faster trade execution and expedited fund withdrawals to keep your operations efficient and uninterrupted.",
          },
          {
            title: "Dedicated Account Manager",
            description:
              "Gain access to a personal support specialist to assist with platform use, strategy integration, and real-time account management.",
          },
          {
            title: "Strategic Tools & Market Insights",
            description:
              "Receive curated market data, high-impact trading alerts, and privileged access to advanced analytics designed for performance-driven traders.",
          },
        ]}
        subdescription="Interested in Smart Elite? Contact our support team to discuss eligibility and begin your upgrade."
        button={{
          text: "Request Access",
          onClick: () => console.log("Access requested"),
        }}
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
        
      />
      <FAQTabs
        // sectionTitle="Frequently Asked tions"
        faqData={finsaiCareFaqData}
        showViewAllButton={false}
        titleAlign="left"
      />


      {/* Footer */}
      <Footer />
    </div>
  );
}
