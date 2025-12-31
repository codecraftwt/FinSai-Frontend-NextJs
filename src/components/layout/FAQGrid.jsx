import React, { useState } from 'react';
import assets from '../../assets/assets';

const finsaiTradeFaqs = [
  {
    id: 1,
    icon: assets.About,
    title: "About Us FAQ's",
    questions: [
      "Who Are We?",
      "Where Are You Based?",
      "What Are Your Business Hours?",
      "Are You Regulated?",
      "What Is Your Liquidity?"
    ]
  },
  {
    id: 2,
    icon: assets.Community,
    title: "Accounts FAQ's",
    questions: [
      "What Types Of Accounts Do You Offer?",
      "How Can I Upgrade My Account Type?",
      "Can I Have More Than One Account?",
      "How Can I Close My Account?",
      "How Do I Make A Deposit Into My Account?"
    ]
  },
  {
    id: 3,
    icon: assets.Ecommerce,
    title: "Getting Started FAQ's",
    questions: [
      "What Is Trading Platforms?",
      "What Types Of Accounts Do You Offer?",
      "How To Swap-Free Accounts?",
      "What Are Administration Charges?",
      "Can I Customize My Account?"
    ]
  },
  {
    id: 4,
    icon: assets.Omnichannel,
    title: "IB Referral FAQ's",
    questions: [
      "What Is An Introducing Broker (IB)?",
      "How Can I Promote Your Services As An IB?",
      "What Revenue Will I Get As An IB?",
      "What Is The Cost To Become An IB?",
      "Can I Refer Myself As A Client?"
    ]
  },
  {
    id: 5,
    icon: assets.Scales,
    title: "Legal And Regulatory FAQ's",
    questions: [
      "Who Regulates Your Platform?",
      "What Are The Legal Risks Of Trading CFDs?",
      "What Is Your Policy On Tax Reporting?",
      "What Is Protection To Keep A Complaint?",
      "How Do You Handle Customer Funds?"
    ]
  },
  {
    id: 6,
    icon: assets.Handshake,
    title: "Loyalty Program FAQ's",
    questions: [
      "What's The Loyalty Program?",
      "How Do I Enroll In This Loyalty Program?",
      "How Are Loyalty Points Calculated?",
      "How Can I Check My Loyalty Points Balance?",
      "How Do I Redeem My Loyalty Points?"
    ]
  },
  {
    id: 7,
    icon: assets.CreditCard,
    title: "Payments FAQ's",
    questions: [
      "What Is The Minimum Deposit Amount?",
      "Can I Withdraw Funds To Myself?",
      "How Do I Make A Deposit?",
      "How Do I Request A Withdrawal?",
      "Are Third Party Payments Allowed?"
    ]
  },
  {
    id: 8,
    icon: assets.iphone14,
    title: "Platforms FAQ's",
    questions: [
      "What Trading Platforms Do You Offer?",
      "What Are The Unique Features Of MetaTrader?",
      "Is There A Mobile App Available For Trading?",
      "Can I Conduct Backtesting On The Platform?",
      "Does The Platform Offer One Click Trading?"
    ]
  },
  {
    id: 9,
    icon: assets.Tags,
    title: "Pricing FAQ's",
    questions: [
      "What Are The Trading Fees On Your Platform?",
      "What Spreads Do You Offer?",
      "Are There Any Hidden Fees?",
      "What Are The Overnight/Swap Fees?",
      "What Is The Commission Per Lot?"
    ]
  },
  {
    id: 10,
    icon: assets.HighRisk,
    title: "Risk Management FAQ's",
    questions: [
      "What Is Risk Management Tools?",
      "What Is A Stop-Loss Order And How Do I Use It?",
      "What Is Margin And How Does It Work?",
      "What Is Leverage And How Can I Use It?",
      "What Is Negative Balance Protection?"
    ]
  },
  {
    id: 11,
    icon: assets.Securityshield,
    title: "Security FAQ's",
    questions: [
      "How Can I Secure My Account?",
      "How Do You Protect My Personal Data?",
      "Are My Funds Insured?",
      "Are My Transactions Secured?",
      "Do You Use Cookies?"
    ]
  },
  {
    id: 12,
    icon: assets.StocksGrowth,
    title: "Trading Basics FAQ's",
    questions: [
      "What Is Forex Trading?",
      "What Are Majors/Minors/And Exotics In Forex?",
      "What Is A CFD Trading?",
      "What's A Spread?",
      "What Is Leverage?"
    ]
  }
];

const finsaiAcademyFaqs = [
  {
    id: 1,
    icon: assets.About,
    title: "Courses FAQ's",
    questions: [
      "What Courses Are Available?",
      "How Long Are The Courses?",
      "Are Courses Self-Paced?",
      "Do I Get A Certificate?",
      "Can I Access Courses On Mobile?"
    ]
  },
  {
    id: 2,
    icon: assets.Community,
    title: "Enrollment FAQ's",
    questions: [
      "How Do I Enroll In A Course?",
      "What Are The Prerequisites?",
      "Can I Enroll In Multiple Courses?",
      "Is There A Trial Period?",
      "How Do I Cancel My Enrollment?"
    ]
  },
  {
    id: 3,
    icon: assets.Ecommerce,
    title: "Learning Resources FAQ's",
    questions: [
      "What Learning Materials Are Provided?",
      "Are There Video Tutorials?",
      "Can I Download Resources?",
      "Are There Practice Exercises?",
      "Is There A Community Forum?"
    ]
  },
  {
    id: 4,
    icon: assets.Handshake,
    title: "Instructor FAQ's",
    questions: [
      "Who Are The Instructors?",
      "Can I Contact Instructors Directly?",
      "Are There Live Sessions?",
      "How Experienced Are The Instructors?",
      "Do Instructors Provide Feedback?"
    ]
  },
  {
    id: 5,
    icon: assets.Tags,
    title: "Pricing & Plans FAQ's",
    questions: [
      "What Are The Subscription Plans?",
      "Is There A Free Plan?",
      "Can I Get A Refund?",
      "Are There Any Discounts?",
      "What Payment Methods Are Accepted?"
    ]
  }
];

const FAQGrid = ({
  title = "",
  subtitle = "",
  columns = 3,
  viewAllText = "View All",
  onViewAll = () => {},
  showIcons = true,
  showTabs = true,
  tradeFaqs = finsaiTradeFaqs,
  academyFaqs = finsaiAcademyFaqs,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState('trade');
  const currentCategories = activeTab === 'trade' ? tradeFaqs : academyFaqs;

  const itemWidths = {
    1: 'lg:w-full',
    2: 'lg:w-1/2',
    3: 'lg:w-1/3',
    4: 'lg:w-1/4',
  };

  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {showTabs && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={() => setActiveTab('trade')}
              className={`w-full sm:w-auto sm:min-w-[140px] md:min-w-[155px] h-[44px] px-4 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-300
                         ${activeTab === 'trade' ? 'bg-[#496DAB] text-white' : 'bg-transparent border border-white/20 text-white hover:border-[#496DAB]'}`}
            >
              Finsai Trade
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`w-full sm:w-auto sm:min-w-[140px] md:min-w-[170px] h-[44px] px-4 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-300
                         ${activeTab === 'academy' ? 'bg-[#496DAB] text-white' : 'bg-transparent border border-white/20 text-white hover:border-[#496DAB]'}`}
            >
              Finsai Academy
            </button>
          </div>
        )}

        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">{title}</h2>}
            {subtitle && <p className="text-base md:text-xl text-[#8892b0] max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

      
        <div className="flex flex-wrap justify-center -mx-4 ">
          {currentCategories.map((category) => (
            <div
              key={category.id}
              className={`p-4 sm:p-10  w-full md:w-1/2 ${itemWidths[columns]} flex flex-col `}
            >
              <div className="group bg-transparent hover:border-[rgba(73,109,171,0.4)] transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 flex flex-col h-full items-start">

                {showIcons && category.icon && (
                  <div className="mb-6 p-2 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/15 transition-colors duration-300">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-10 h-10 sm:w-13 sm:h-13 object-contain"
                    />
                  </div>
                )}

                <h3 className="text-xl md:text-[22px] lg:text-[20px] font-extrabold text-white mb-4 uppercase tracking-wide text-left">
                  {category.title}
                </h3>

                <ul className="space-y-2 md:space-y-3 mb-6 flex-grow text-left">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex}>
                      <a
                        href="#"
                        className="text-white text-md md:text-[18px] leading-relaxed hover:text-[#a0d4f5] transition-colors duration-200 block font-medium"
                      >
                        {question}
                      </a>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onViewAll(category)}
                  className="text-[#496DAB] text-base md:text-xl font-semibold hover:text-[#7eb8da]
                             transition-colors duration-200 flex items-center gap-1 mt-auto
                             border-b-2 border-[#496DAB] w-fit"
                >
                  {viewAllText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQGrid;
