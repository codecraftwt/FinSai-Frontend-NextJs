'use client';

import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/layout/Banner";
import SectionHeading from "../../components/layout/SectionHeading";
import QuestionGrids from "../../components/layout/QuestionGrids";
import SupportServicesSection from "../../components/layout/SupportServicesSection";
import SectorExpertisePerformance from "../../components/layout/SectorExpertisePerformance";
import assets from "../../assets/assets";
import VenturesSteps from "../../components/layout/VenturesSteps";
import VentureCommunity from "../../components/layout/VentureCommunity";
import FAQTabs from "../../components/layout/FAQTabs";
import HelpWithSection from "../../components/layout/HelpWithSection";

export default function FinsaiVenturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  const ventureServices = [
    {
      id: 1,
      title: "INVESTMENT ADVISORY",
      description:
        "Our advisory experts craft data-informed investment strategies designed around your specific goals. From building diversified portfolios to navigating market cycles, we help you invest with insight, not instinct. Stay confident with decisions rooted in professional guidance and real-time market intelligence.",
      icon: assets.Investment,
    },
    {
      id: 2,
      title: "FUND MANAGEMENT",
      description:
        "Your capital deserves precision and protection. Our team manages assets with a balanced approach — targeting returns while keeping risks in check. Expect active monitoring, tactical rebalancing, and agile decision-making across UAE-regulated structures.",
      icon: assets.Fund,
    },
    {
      id: 3,
      title: "FINANCIAL PLANNING",
      description:
        "Your life goals need a roadmap — we build it with you. Our financial planning services cover everything from retirement to liquidity forecasting. Structured around your aspirations, we offer adaptive strategies that evolve as you do.",
      icon: assets.Financial,
    },
    {
      id: 4,
      title: "FINANCIAL CONSULTANCY",
      description:
        "Need clarity on complex financial landscapes or business funding decisions? Finsai's consultancy arm offers scenario planning, strategic budgeting, and operational financial insights. It's intelligent support for both personal finance and business capital optimisation in the UAE market.",
      icon: assets.Consultation,
    },
  ];

  const venturesFaqData = [
    {
      id: 1,
      question:
        "What types of financial planning services does Finsai Ventures offer in the UAE?",
      answer:
        "World stocks represent shares of companies listed on global exchanges. Finsai Trade gives you access to leading markets worldwide.",
    },
    {
      id: 2,
      question:
        "How does Finsai Ventures approach investment advisory in the UAE markets?",
      answer:
        "Finsai Ventures' financial consultancy services, they emphasize tailored financial guidance, market analysis, and strategic support for investors and businesses.",
    },
    {
      id: 3,
      question: "Can Finsai Ventures manage funds for businesses in the UAE?",
      answer:
        "Yes, Finsai Ventures can offer fund management and financial advisory services for businesses in the UAE, including strategic planning, portfolio monitoring, and asset allocation as part of their financial consultancy and investment advisory offerings.",
    },
    {
      id: 4,
      question:
        "Is financial consultancy different from investment advice at Finsai Ventures?",
      answer:
        "Yes, at Finsai Ventures, financial consultancy focuses on broad financial planning, feasibility, cash-flow strategies, and business financial solutions, while investment advice specifically targets market-related guidance, portfolio recommendations, and asset allocation tailored to investment goals.",
    },
    {
      id: 5,
      question: "Is Finsai Ventures regulated in the UAE?",
      answer:
        "Finsai Ventures does not appear to be officially regulated by UAE financial authorities like the SCA or DFSA.",
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
        <div className="absolute sm:top-[24%] left-[30vw] w-[300px] h-[100px] md:w-[600px] md:h-[600px] bg-gradient-radial bg-radial-market rounded-full blur-[200px] opacity-30" />
      </div>

      {/* Header */}
      <Header isScrolled={isScrolled} isFixed={false} />

      {/* Hero Section - Using Banner Component */}
      <Banner
        heading="Finsai Ventures-Empowering Your Financial Future"
        description="Finsai Ventures presents itself as a trusted financial services hub dedicated to guiding both individuals and businesses toward a more secure and prosperous financial future. It offers a full suite of services including Investment Advisory, Fund Management, Financial Planning, and Financial Consultancy delivered through a tailored, client-first approach.
"
        breadcrumbBase="HOME"
        breadcrumbCurrent="ECOSYSTEM"
        backgroundImage={assets.learngrow}
      />

      <SectionHeading
        // heading="Welcome To FINSAI Care Centre – Globle"
        description="Finsai Ventures is more than just a financial service provider — it's your long-term partner in wealth growth. Designed for both individual investors and enterprises, we offer tailored Investment Advisory, Fund Management, Financial Planning, and Financial Consultancy services. Everything we do is grounded in transparency, strategy, and performance — so you can build financial strength with confidence in the UAE."
        textAlign="center"
        maxWidth="7xl"
        headingWidth="4xl"
        descWidth="7xl"
      />

      <SupportServicesSection
        heading="Our Core Services"
        services={ventureServices}
      />

      {/* QuestionGrids for first 3 items */}
      <QuestionGrids
        title="Our Strategic Approach"
        features={[
          {
            id: 1,
            title: "Initial Consultation",
            icon: assets.Initialconsulation,
            description:
              "We begin with a deep dive into your financial vision. Our experts assess goals, risk tolerance, and timelines to chart a clear direction forward .This step sets the foundation for a partnership built on mutual understanding and trust.",
          },
          {
            id: 2,
            title: "Tailored Proposal & Strategy",
            icon: assets.Goal,
            description:
              "No one-size-fits-all here — every proposal is bespoke. We design a strategic financial blueprint backed by projections, asset allocation plans, and performance metrics. Everything aligns with your real-world goals, with full transparency and flexibility.",
          },
          {
            id: 3,
            title: "Implementation & Collaboration",
            icon: assets.Collaboration,
            description:
              "Execution is just the beginning. We manage, monitor, and report on performance consistently while adapting to evolving markets . Enjoy open communication, regular check-ins, and clarity at every step.",
          },
        ]}
      />

      <SectorExpertisePerformance />

      <HelpWithSection
        heading="Why Choose Finsai Ventures?"
        maxheadingwidh="max-w-xl"
        showNumbers={true}
        items={[
          {
            id: 1,
            title: "REGULATED FUND STRUCTURES",
            description:
              "Operate Confidently Under Dubai's Meydan Free Zone Authority.",
          },
          {
            id: 2,
            title: "DIVERSIFIED INVESTMENT MODELS",
            description:
              "Hedge Market Swings Through Cross-Asset, Cross-Industry Strategies.",
          },
          {
            id: 3,
            title: "STRONG INSTITUTIONAL ACCESS",
            description:
              "Leverage Exclusive Network Connections And Global Insights.",
          },
          {
            id: 4,
            title: "ELITE FINANCIAL EXPERTS",
            description:
              "Work With Professionals Skilled In Trading, Wealth Planning, And Macroeconomic Analysis.",
          },
          {
            id: 5,
            title: "CLIENT-FIRST COMMITMENT",
            description:
              "We Prioritise Transparency, Integrity, And Open Dialogue Across Every Transaction.",
          },
        ]}
      />

      <VenturesSteps />

      {/* <LearnMoreStayConnected /> */}
      <VentureCommunity />

      <FAQTabs
        // sectionTitle="Frequently Asked tions"
        faqData={venturesFaqData}
        showViewAllButton={false}
        titleAlign="left"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
