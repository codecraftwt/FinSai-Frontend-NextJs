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

export default function ClientFinsaiCarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  const finsaiCareFaqData = [
    {
      id: 1,
      question: "What makes Finsai Care Centre ideal for UAE traders?",
      answer:
        "We offer 24/7 customer care support tailored to UAE trading preferences across Forex, Crypto, and Metals, including localised insights, live chat, and phone support.",
    },
    {
      id: 2,
      question: "How do I contact Finsai customer care in Dubai or Abu Dhabi?",
      answer:
        "Use our live chat on the platform, email us, or call our inbound support — all designed for traders in the UAE to get immediate help.",
    },
    {
      id: 3,
      question: "Can I speak to someone if my account has an issue?",
      answer:
        "Absolutely. Our inbound customer care support team is available 24/7 to help with account access, verification, and withdrawals.",
    },
    {
      id: 4,
      question:
        "What type of help does Finsai Care Centre offer new UAE traders?",
      answer:
        "We offer platform walkthroughs, margin tools, risk management training, and ongoing support via live chat or calls, ideal for UAE-based beginners.",
    },
    {
      id: 5,
      question:
        "Is technical support available for mobile and MT5 trading in the UAE?",
      answer:
        "Yes. Our tech support team can resolve MT5 login issues, mobile app errors, and trade execution concerns, specifically tuned to UAE users.",
    },
  ];

  useEffect(() => {
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
        heading="Where Real-Time Trading Meets Real-Time Support"
        description="Get expert help 24/7 — Finsai Care Centre is built for traders who never stop."
        breadcrumbBase="HOME"
        breadcrumbCurrent="ECOSYSTEM"
        backgroundImage={assets.learngrow}
      />

      <SectionHeading
        heading="Welcome To FINSAI Care Centre – Globle"
        description="At Finsai Trade, customer care isn't just a service — it's our strategy. The Finsai Care Centre is your dedicated support ecosystem, designed to empower Forex, Crypto, Indices, and Metals traders across the UAE. Whether you're fine-tuning your strategy or navigating the platform, our specialists are just a click, call, or chat away."
        textAlign="center"
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
      />

      <ContentAndImage
        title="Why FINSAI Care Centre Stands Out"
        description="In the high-speed world of online trading, support can't wait. Our Care Centre is engineered for immediacy — so every question is met with an expert answer, every issue is resolved in real time, and your trading momentum never breaks."
        image={assets.Ib}
        reverse={false}
        features={[
          "Always Available: 24/7 Multilingual Support.",
          "Locally Aligned: Tailored For Traders In Dubai, Abu Dhabi, Sharjah, And Across The Globe.",
          "Technically Backed: From App Glitches To Platform Bugs, We Resolve Them All Fast.",
        ]}
      />

      <SupportServicesSection columnsPerRow={2} />

      <HelpWithSection
        heading="What We Help With"
        items={[
          {
            id: 1,
            icon: assets.Platform,
            title: "PLATFORM NAVIGATION",
            description:
              "Learn To Navigate MetaTrader 5 And Our Web-Based Platform Like A Pro. We Offer Walkthroughs, Tips, And Personalised Assistance To Improve Your Trading Speed. Optimised For All UAE-Based Devices, Including Mobile And Desktop.",
          },
          {
            id: 2,
            icon: assets.Transfer,
            title: "ACCOUNT SETUP & VERIFICATION",
            description:
              "From Initial Registration To Full KYC Compliance, We Guide Every Step. Our Team Helps You With Secure Deposits, Withdrawals, And Document Submissions. Smooth Onboarding Designed Specifically For UAE Traders And Residents.",
          },
          {
            id: 3,
            icon: assets.Query,
            title: "TRADING QUERIES",
            description:
              "Have Questions About Leverage, Spreads, Or Market Hours? We Explain Complex Trading Terms In Clear, Actionable Language. Always Stay Informed — From Trading Conditions To Pricing Models.",
          },
          {
            id: 4,
            icon: assets.RiskAnalysis,
            title: "RISK MANAGEMENT SUPPORT",
            description:
              "We support your success with proactive risk control strategies.Learn to use stop-loss, margin level alerts, and volatility tools effectively.Minimise losses and protect your capital with expert advice in real time.",
          },
          {
            id: 5,
            icon: assets.Learning,
            title: "LEARNING & GROWTH",
            description:
              "We're not just here to fix problems — we help you grow.Access a library of tutorials, live demo sessions, and one-on-one coaching.Whether you're new to trading or scaling up, we're with you every step of the way.",
          },
        ]}
      />

      <ContentAndImage
        title="Builts For Fraders"
        description="With A Blend Of Industry Veterans And Forward-Thinking Professionals, FINSAI Care
Center Combines Years Of Trading Expertise With Innovative Problem-Solving. We
Understand The Urgency Of Trading And Provide Solutions That Are Fast, Reliable,
And Tailore
To Your Needs. lilored "
        image={assets.Experts}
        reverse={false}
      />

      <ContentAndImage
        title="Your Trading, Our Support"
        description="At Finsai Trade, We Believe That Traders Should Focus On The Markets, Not The
Mechanics. The FINSAI Care Center Ensures That No Question Goes Unanswered
And No Problem Goes Unresolved, So You Can Trade With Trust, Speed, And
Confidence.
Open Your Trading Account Today And Experience Support That Moves As Fast As
The Markets.
"
        image={assets.Ib}
        reverse={true}
        className="mt-10"
        primaryButtonLabel="Start Trading With Confidence"
        primaryButtonOnClick={() => console.log("Primary clicked")}
        secondaryButtonLabel="Access 24/7 Expert Help Now"
        secondaryButtonOnClick={() => console.log("Secondary clicked")}
      />

      <FAQTabs
        // sectionTitle="Frequently Asked tions"
        faqData={finsaiCareFaqData}
        showViewAllButton={false}
        titleAlign="left"
      />

      <ContactSupportForm 
        title="Contact Form" 
        simpleLayout={true}
        buttonText="Send Message"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}


