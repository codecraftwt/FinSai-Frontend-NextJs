import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/layout/Banner";
import SectionHeading from "../../components/layout/SectionHeading";
import assets from "../../assets/assets";
import Header from "../../components/layout/Header";
import Timeline from "../../components/Timeline";

const steps = [
  {
    step: "01",
    side: "left",
    title: "OUR REGULATORY COMMITMENT",
    points: [
      "Statement On Operating Under Strict Financial Guidelines.",
      "Emphasis On Security, Compliance, And Ethical Practices",
    ],
  },
  {
    step: "02",
    side: "right",
    title: "LICENSING & AUTHORISATIONS",
    points: [
      "Details Of Licenses, Registrations, Or Affiliations With Recognized Financial Authorities",
    ],
  },
  {
    step: "03",
    side: "left",
    title: "CLIENT FUND PROTECTION",
    points: [
      "Explanation Of Fund Segregation",
      "Use Of Top-Tier Banks And Custodians",
      "Negative Balance Protection",
    ],
  },
  {
    step: "04",
    side: "right",
    title: "SECURITY & TRANSPARENCY",
    points: [
      "Advanced Encryption",
      "Compliance With International AML (Anti-Money Laundering) And KYC (Know Your Customer) Standards",
    ],
  },
  {
    step: "05",
    side: "left",
    title: "REGULAR AUDITS & REPORTING",
    points: [
      "Note On External Audits And Regulatory Reporting To Maintain Accountability",
    ],
  },
  {
    step: "06",
    side: "right",
    title: "GLOBAL STANDARDS COMPLIANCE",
    points: [
      "Statement On Following Industry Best Practices For Fair Trading",
    ],
  },
  {
    step: "07",
    side: "left",
    title: "CONTACT & SUPPORT FOR REGULATORY QUERIES",
    points: [
      "Have Questions About Our Regulatory Framework? ",
    ],
    showButton: true,
    buttonText: "Contact Support",
    buttonAction: () => navigate('/contact-support')
  },
];



const RegulationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[100px] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[35%] left-[5%] sm:top-[41%] sm:left-[-10%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[150px] bg-gradient-radial bg-radial-market rounded-full filter blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[65%] left-[45%] sm:top-[60%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[950px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[320px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <Header isScrolled={false} isFixed={false} />

      <Banner
        heading="Regulations"
        description="Navigating Compliance and Regulations."
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
      />

      <SectionHeading
        heading="Trading with Confidence, Backed by Global Standards"
        description="Finsai Trade is committed to transparency, regulatory compliance, and robust user protection, ensuring a secure, fair, and trustworthy trading environment for all users."
        textAlign="center"
        maxWidth="7xl"
        headingWidth= "5xl"
        className="mb-10"
      />

      <Timeline steps={steps} connectorHeight={'h-[200px] lg:h-[120px]'} />
    </div>
  );
};

export default RegulationsPage;