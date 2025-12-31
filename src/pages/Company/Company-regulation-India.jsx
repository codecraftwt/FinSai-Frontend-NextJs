import React from "react";
import SectionWithFeatures from "../../components/layout/SectionWithFeatures";
import SectionHeading from "../../components/layout/SectionHeading";
import RegulatoryTabs from "../../components/layout/RegulatoryTabs";
import Banner from "../../components/layout/Banner";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import assets from "../../assets/assets";

const CompanyRegulationIndia = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[10px] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[45%] left-[5%] sm:top-[20%] sm:left-[-10%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[150px] bg-gradient-radial bg-radial-market rounded-full filter blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[65%] left-[45%] sm:top-[30%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[550px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[240px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[95%] left-[45%] sm:top-[70%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[550px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[240px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
      </div>

      {/* HEADER */}
      <Header isScrolled={false} isFixed={true} />

      {/* BANNER HEADER */}
      <Banner
        heading="Secure Forex Trading India Starts Here"
        maxWidthTitle = "max-w-5xl"
        maxWidthDescription = "max-w-5xl"
        description="As a regulated forex broker in India, Finsai commits to transparency, strong AML/KYC, and ethical trade execution."
        breadcrumbBase="HOME"
        backgroundImage={assets.Companybanner}
        breadcrumbCurrent="REGULATIONS"
        buttons={
          <button
            className="px-8 py-4 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                     >
          Learn More About Our Compliance
          </button>
        }
      />

      {/* OUR REGULATORY COMMITMENT */}
      <SectionWithFeatures
        heading="Our Regulatory Commitment"
        subheading="A Secure Foundation For Every Indian Trader"
        description="In The Volatile World Of Financial Markets, Trust Starts With Regulation. At Finsai Trade, We Strive To Operate In Line With Global Best Practices And Indian Expectations For A Regulated Forex Broker In India. We Maintain Rigorous AML/KYC Standards And Disclose Policies Clearly. Our Goal Is To Offer Confidence, Transparency, And Fairness — Because Every Indian Trader Deserves More Than Just Promises."
        features={[
          "Strict Adherence To AML And KYC Protocols",
          "Transparent Fee Structures And Risk Disclosures",
          "Ethical Trade Execution For All Clients",
          "Robust Logging & Oversight Under Trading Compliance In India",
        ]}
      />

      {/* LICENSING & AUTHORISATIONS */}
      <SectionWithFeatures
        heading="Licensing & Authorisations"
        subheading="Clarity & Credibility Through Licensing"
        description="Finsai Trade Ltd Is Licensed Under The International Services Authority Of Nauru (ISA), License No. 052943-033. While This Isn’t A Domestic Indian Regulator, We Voluntarily Uphold Operational Discipline, Meeting Expectations For Forex Trading License India-Style Disclosure. We Document And Share Policies Openly To Reflect Trust And Clarity — Key Traits In Regulated Entities Catering To Indian Traders."
        features={[
          "Offshore Licence With International Oversight",
          "Transparent Operational Framework In Line With Compliance Expectations",
          "Internal Checks And Balances Mirroring Trading Compliance With India Norms",
          "Clear Policies On Client Safety, Account Handling, And Funds Custody",
        ]}
      />

      {/* CLIENT FUND PROTECTION */}
      <SectionWithFeatures
        heading="Client Fund Protection"
        subheading="Safeguarding Your Capital"
        description="Secure Forex Trading In India Means Knowing Your Funds Are Safe. We Separate Client Funds From Company Capital. Negative Balance Protection Ensures You Will Not Lose More Than What You Invest—Even In Turbulent Markets. We Partner With Reputable Banks And Use Secure Custody Arrangements. Withdrawals And Fund Transfers Are Governed By Clear Policies To Avoid Delays Or Ambiguity."
        features={[
          "Full Fund Segregation From Operational Accounts",
          "Negative Balance Protection For Every Account",
          "Reliable Bank Custody With Strong Security Controls",
          "Transparent Withdrawal Process",
        ]}
      />

      {/* SECURITY & TRANSPARENCY */}
      <SectionWithFeatures
        heading="Security & Transparency"
        subheading="Technology That Works With You, Not Against You"
        description="Every Access Point To Your Account Is Safeguarded Using Strong Encryption, Multi-Factor Control, And Real-Time Logging. We Publish Our Spreads, Fees, And Execution Rules In A Way That Indian Traders Can Easily Access And Verify. Our Trade Execution Is Consistent, And Risk Frameworks Are Clearly Stated. Transparency Isn’t Just A Word — It’s A Practice Here."
        features={[
          "Bank-Grade SSL/TLS Encryption",
          "2-Factor Authentication (2FA)",
          "Audit Trails For Trades, Pricing, And Policies",
          "Publicly Visible Spread & Fee Tables",
        ]}
      />

      {/* REGULAR AUDITS & REPORTING */}
      <SectionWithFeatures
        heading="Regular Audits & Reporting"
        subheading="Accountability You Can See"
        description="To Maintain Our Commitment To Indian Traders, We Undergo Periodic Internal And Third-Party Audits Focusing On Execution Quality, Compliance With AML/KYC, Volume Consistency, And Risk Management. We Also Review & Report On Anomalies And Continuously Refine Our Systems Under Trading Compliance India Standards."
        features={[
          // No bullet list in the image for this section, so empty array
        ]}
      />

      {/* GLOBAL STANDARDS COMPLIANCE */}
      <SectionWithFeatures
        heading="Global Standards Compliance"
        subheading="Aligning With Global Norms, Respecting Local Relevance"
        description="Although Not Currently Regulated By Indian Licensing Bodies, Our Operational Model Reflects Global Expectations—Transparent Customer Agreements, Risk Disclosures, Ethical Practices, And Compliance. These Align Well With What Indian Traders Expect In A Truly Secure Forex Trading India Platform."
          />

      {/* CONTACT SUPPORT SECTION */}
      <SectionHeading
        heading="Contact & Support For Regulatory Queries"
        description="Have Questions About How We Protect Your Capital, Maintain License Standards, Or Meet Trading Compliance India Requirements? Our Team Is Here To Clarify Every Detail."
        button={{
          text: "Contact Compliance Team",
        }}
      />

    {/* FOOTER */}
    <Footer />
  </div>
  );
};

export default CompanyRegulationIndia;