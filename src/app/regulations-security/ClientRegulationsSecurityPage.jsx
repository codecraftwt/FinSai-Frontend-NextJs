"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/layout/Banner";
import QuestionGrids from "../../components/layout/QuestionGrids";
import ContentAndImage from "../../components/layout/Content&Image";
import { ButtonField } from "../../components/layout/Form";
import assets from "../../assets/assets";
import ActionFooter from "../../components/LearnGrow/ActionFooter";
import { WhyChooseSection } from "../../components/LearnGrow";
import HelpCenterBanner from "../../components/layout/HelpCenterBanner";
import FAQTabs from "../../components/layout/FAQTabs";
import SecurityFeatures from "../../components/layout/SecurityFeatures";
import SectionHeading from "../../components/layout/SectionHeading";

const ClientRegulationsSecurityPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const faqsData = [
    {
      question: "Who Regulates Your Platform?",
      answer: "Our Trading Platform Is Regulated By The Nauru Union, A Recognized Financial Regulatory Authority.\nWe Adhere To Strict Regulatory Standards To Ensure A Safe And Transparent Trading Environment For Our Clients. We Have Regulations For All Our Products.",
    },
    {
      question: "How Can I Secure My Account?",
      answer: "You can secure your account by enabling Two-Factor Authentication (2FA), using a strong unique password, and regularly monitoring your account activity.\nOur platform also employs advanced encryption and security protocols to protect your information.",
    },
    {
      question: "How Do I Protect My Personal Data?",
      answer: "We utilize industry-leading encryption, secure servers, and strict data protection policies to safeguard your personal information.\nWe comply with international privacy regulations and never share your data without consent.",
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
        heading="Trade, Invest & Earn"
        description="Without a care in the world! Let Finsai Trade take care of your security."
        maxWidthTitle="max-w-3xl"
        breadcrumbBase="HOME"
        breadcrumbCurrent="COMPANY"
        headerDescriptionSpacing = "mb-4 sm:mb-6 md:mb-8"
        backgroundImage={assets.Companybanner}
        buttons={
          <>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              View Regulations
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB]  text-white font-semibold rounded-lg  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
              Open Accont
            </button>
          </>
        }
      />

      <ContentAndImage
        title="We keep your personal information Private, Safeand Secure."
        description="Trading is a fast-paced world where every second counts. Whether you are executing trades, managing risks, or funding your account, having reliable support can make all the difference. The FINSAI Care Center is designed to give traders peace of mind with real-time solutions, seamless assistance, and expert guidance at every step."
        image={assets.security}
        reverse={false}
      />
      <div className="flex justify-center mb-4">
        <ButtonField
          type="submit"
          variant="primary"
          className="w-[184px] h-[49px] whitespace-nowrap"
        >
          Open Account
        </ButtonField>
      </div>

      {/* QuestionGrids for first 3 items */}
      <QuestionGrids
        title="This Is How Finsai Trade Keeps You Secure."
        features={[
          {
            id: 1,
            title: "two-Factor authentication(2FA)",
            icon: assets.Authentication,
            description:
              "Adds an extra layer of security to your trading account by requiring a second verification step.",
          },
          {
            id: 2,
            title: "Secure socket layer (SSL) Encryption",
            icon: assets.SSL,
            description:
              "Protects your data with secure, encrypted connections.",
          },
          {
            id: 3,
            title: "Multy-layered firewall protection",
            icon: assets.Firewall,
            description:
              "Protects your trading account and data with multiple layers of security.",
          },
          {
            id: 4,
            title: "regular security assessments",
            icon: assets.Shield,
            description:
              "Continuously evaluates and strengthens platform security to keep your trading safe.",
          },
          {
            id: 5,
            title: "Compliance with industry regulations",
            icon: assets.Accountant,
            description:
              "Ensures all trading activities follow industry standards and legal requirements.",
          },
          {
            id: 6,
            title: "account activity monitoring",
            icon: assets.System,
            description:
              "Continuously tracks account activity to detect unusual or suspicious behavior.",
          },
        ]}
      />
      <ActionFooter
        header="Your Account Is All YOURS."
        showDivider="true"
        title="At Finsai Trade, we employ advanced encryption and masking technologies, along with rate-limiting measures in place to prevent unauthorized access to your account. Rest assured, your account's security is our top priority."
        buttonText="Read More"
        imageSrc={assets.RewardFooter}
        imageAlt="Market Analysis"
        backgroundColor="bg-[#0B152A]"
        buttonClassName="w-[185px] h-[49px] whitespace-nowrap"
        // className="my-16"
      />

      <WhyChooseSection
        // heading="Why Choose Finsai Incentives/ Rewards?"
        showButton={true}
        buttonText="Learn More"
        items={[
          {
            title: "PRIVACY & COOKIE POLICY",
            icon: assets.Privacy,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Competitive Rewards clicked");
            },
          },
          {
            title: "AML POLICY",
            icon: assets.PrivacyPolicy,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Instant Payouts clicked");
            },
          },

          {
            title: "REFUND POLICY",
            icon: assets.Refund,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Multi-Level Commissions clicked");
            },
          },
          {
            title: "RISK DISCLAIMER",
            icon: assets.Risk,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Competitive Rewards clicked");
            },
          },
          {
            title: "CONFLICT OF INTEREST",
            icon: assets.Percentage,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Instant Payouts clicked");
            },
          },
          {
            title: "UPFRONT DISCLOSURE",
            icon: assets.Checklist,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Multi-Level Commissions clicked");
            },
          },
          {
            title: "COMPLAINT MANAGEMENT",
            icon: assets.Complaint,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Competitive Rewards clicked");
            },
          },
          {
            title: "CLIENT AGREEMENT",
            icon: assets.Agreement,
            onButtonClick: () => {
              // Add your navigation or action here
              console.log("Instant Payouts clicked");
            },
          },
          {
            title: "TERMS & CONDITIONS",
            icon: assets.TC,
            onButtonClick: () => {
              console.log("Multi-Level Commissions clicked");
            },
          },
        ]}
      />
      <SecurityFeatures />
      <HelpCenterBanner
        title="Have A Question? We Are Here to Help You"
        description="An Introducing Broker (IB) Program allows partners to earn commissions by referring new traders to a brokerage. IBs benefit from revenue sharing, marketing support, and exclusive resources, while traders gain access to trusted services, creating a win–win network that drives growth and engagement for both parties."
        features={["CUSTOMER SUPPORT", "FREQUENTY ASKED QUETIONS", "FINSAI ACADEMY"]}
        buttonText="Become an IB Partner"
        image={assets.SecurityHaveaQuestion}
        reverse={true}
      />
      <FAQTabs
        sectionTitle="Frequently Asked tions"
        faqData={faqsData}
        showViewAllButton={false}
        titleAlign="left"
      />

      <Footer />
    </div>
  );
};

export default ClientRegulationsSecurityPage;


