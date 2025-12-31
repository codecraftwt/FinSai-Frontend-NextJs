import React from "react";
import SectionWithFeatures from "../../components/layout/SectionWithFeatures";
import SectionHeading from "../../components/layout/SectionHeading";
import RegulatoryTabs from "../../components/layout/RegulatoryTabs";
import Banner from "../../components/layout/Banner";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import assets from "../../assets/assets";


const CompanyRegulations = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[10px] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[45%] left-[5%] sm:top-[20%] sm:left-[-10%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[150px] bg-gradient-radial bg-radial-market rounded-full filter blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[65%] left-[45%] sm:top-[30%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[550px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[240px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[95%] left-[45%] sm:top-[60%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[550px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[240px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
      </div>

      {/* HEADER */}
      <Header
        isScrolled={false}
        isFixed={false}
      />

      {/* BANNER HEADER */}
      <Banner
        heading="Trusted by Traders, Backed by Best Practices"
        description="Finsai delivers secure trading with client fund protection, daily monitoring, and transparent systems — built for UAE-based traders who demand more."
        breadcrumbBase="HOME"
        backgroundImage= {assets.Companybanner}
        breadcrumbCurrent="REGULATIONS"
        buttons={
          <button
            className="px-8 py-4 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            
          >
            Explore Our Compliance Standards    
          </button>
        }
      />

      {/* OUR REGULATORY COMMITMENT */}
      <SectionWithFeatures
        heading="Our Regulatory Commitment"
        subheading="A Secure Foundation For Every Trader"
        description="We operate with integrity, guided by global principles of ethical trading and compliance. Our commitment ensures UAE traders benefit from secure protocols, responsible policies, and full transparency."
        features={[
          "Strict adherence to AML and KYC processes",
          "Transparent fee structures and risk disclosures",
          "Ethical trade execution for every client",
          "Dedicated to building trust with every transaction",
        ]}
        sectionFooter="Designed for traders seeking real Forex broker support UAE"
      />

      {/* LICENSING & AUTHORISATIONS */}
      <SectionWithFeatures
        heading="Licensing & Authorisations"
        subheading="Clarity On Who We Are & Where We Operate"
        description="Finsai Trade Ltd operates through multiple incorporated and registered entities across St. Lucia, Nauru, the United States, Canada, and Mauritius, holding relevant registrations and licenses with local authorities including International Business Companies (St. Lucia), the International Service Authority of Nauru, FinCEN (USA), MSB registration in Canada, and the Financial Services Commission Mauritius, reflecting its multi-jurisdictional regulatory presence."
        features={[
          "Offshore registration with regulatory adherence",
          "Transparent operational structure",
          "Internal controls aligned with forex compliance UAE guidelines",
          "Oversight of financial, customer, and trading policies",
        ]}
        sectionFooter="Licensing that supports secure, reliable access for UAE users."
      />

      {/* CLIENT FUND PROTECTION */}
      <SectionWithFeatures
        heading="Client Fund Protection"
        subheading="Your Money, Always in Safe Hands"
        description="We separate client funds from operational capital and hold them in top‑tier banks. With negative balance protection, you’ll never lose more than your deposit — no matter the market."
        features={[
          "Full fund segregation from company accounts",
          "Secure and transparent fund custody",
          "Negative balance protection for all accounts",
          "Withdrawal processing aligned with compliance standards",
        ]}
        sectionFooter="Trusted fund management for safety-conscious UAE traders."
      />

      {/* SECURITY & TRANSPARENCY */}
      <SectionWithFeatures
        heading="Security & Transparency"
        subheading="Technology That Works With You, Not Against You"
        description="We go beyond encryption. From 2FA logins to real-time risk alerts, every layer of our platform is built for visibility and trust."
        features={[
          "Advanced SSL/TLS encryption",
          "Two-Factor Authentication (2FA)",
          "Full audit trail for trading activity",
          "Transparent spreads, fees, and execution logic",
        ]}
        sectionFooter="Security-first operations for a dependable forex compliance UAE experience."
      />

      {/* REGULAR AUDITS & REPORTING */}
      <SectionWithFeatures
        heading="Regular Audits & Reporting"
        subheading="Accountability That Goes Deeper"
        description="To maintain standards and earn your trust, we run regular internal and external audits — from execution tracking to policy adherence."
        features={[
            "Annual external audit assessments",
            "Daily monitoring for compliance irregularities",
            "Reports on spread accuracy and trade execution",
            "Continuous improvement driven by audit findings",
          ]}
        sectionFooter=" Designed for traders who demand proof — not promises."
      />

      {/* GLOBAL STANDARDS COMPLIANCE */}
      <SectionWithFeatures
        heading="Global Standards Compliance"
        subheading="We Meet International Trading Expectations"
        description="Finsai may not be UAE-licensed, but our standards reflect those of top global regulators. From AML to data privacy, we operate with fairness and foresight."
        features={[
            "AML/KYC protocols",
            "Best execution and client-first trading standards",
            "Complaint resolution frameworks",
            "Ethical business conduct policies",
          ]}
        sectionFooter="Built for traders who value structure, stability, and long-term trust."
      />

      {/* CONTACT SUPPORT SECTION */}
      <SectionHeading
        heading="Contact & Support for Regulatory Queries"
        description="Have a compliance question or want to understand our protections better? Reach out to our dedicated support team anytime — we’re here to ensure your confidence."
        button={{
          text: "Contact Compilance Team",

        }}
      />

      {/* REGULATORY OVERVIEW SECTION */}
      <div className="regulatory-tabs">
        <RegulatoryTabs />
      </div>

    {/* FOOTER */}
    <Footer />
    </div>
  );
};

export default CompanyRegulations;
