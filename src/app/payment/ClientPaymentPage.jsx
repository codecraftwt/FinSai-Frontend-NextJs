'use client';

import React, { useEffect } from "react";
import Banner from '../../components/layout/Banner';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FAQTabs from '../../components/layout/FAQTabs';
import PaymentOptions from '../../components/Trading/PaymentOptions';
import ReadyToTradeCTA from '../../components/Trading/ReadyToTradeCTA';
import ActionFooter from '../../components/LearnGrow/ActionFooter';
import assets from '../../assets/assets';

// Payment partner logos - replace with actual image paths
const paymentPartners = [
  [assets.visa, assets.gcash, assets.globePay, assets.pagsmile],
  [assets.skrill, assets.praxis, assets.paytrust, assets.allsWell],
  [assets.paypal, assets.mastercard, assets.alipay, assets.wechat],
  [assets.visa, assets.gcash, assets.globePay, assets.pagsmile],
  [assets.skrill, assets.praxis, assets.paytrust, assets.allsWell],
];

function PaymentPartners() {
  return (
    <div className="bg-transparent py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
        Our Payment Partners
      </h2>
      <div className="relative w-[80px] sm:w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-4 sm:mb-6 my-3 mx-auto">
        <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] bg-[#496DAB] rotate-45"></div>
      </div>

      <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
        Select From Multiple Payment Methods To Complete Your Transaction And Choose The Option That Fits Your Needs Best.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-7xl mx-auto">
        {paymentPartners.flat().map((partner, index) => (
          <div
            key={index}
            className="bg-[rgb(73,109,171,0.08)] border border-white/20 border-b-[3px] border-b-[#496DAB]/50 w-full h-[70px] sm:h-[80px] lg:h-[90px] hover:bg-[#272b44] transition-colors duration-300 rounded-lg py-3 sm:py-4 lg:py-6 flex items-center justify-center cursor-pointer"
          >
            <img
              src={partner}
              alt={`Payment partner ${index + 1}`}
              className="max-w-[60%] sm:max-w-[70%] lg:max-w-[80%] max-h-full object-contain p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientPaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "What is the minimum deposit amount?",
      answer: "The minimum deposit amount is $100 (or equivalent in other supported currencies)."
    },
    {
      question: "Are there any deposit or withdrawal fees?",
      answer: "We do not charge any deposit fees. Withdrawal fees may apply depending on the chosen payment method."
    },
    {
      question: "How long do deposits take to process?",
      answer: "Most deposits are processed instantly, while bank transfers may take 1–3 business days."
    },
    {
      question: "What currencies are accepted for deposits?",
      answer: "We accept USD, EUR, GBP, and several other major fiat currencies."
    },
    {
      question: "Can I fund my account using crypto?",
      answer: "Yes, we support deposits via popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), and USDT."
    },
    {
      question: "How do I withdraw my funds?",
      answer: "Log in to your account, go to the 'Withdrawal' section, select your preferred method, and follow the instructions."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, all payment information is encrypted and processed through PCI DSS-compliant providers for maximum security."
    },
    {
      question: "Can I use multiple payment methods?",
      answer: "Yes, you can add and use multiple payment methods for deposits and withdrawals."
    },
    {
      question: "What is the maximum deposit per transaction?",
      answer: "The maximum deposit per transaction varies by method, typically up to $50,000 (or equivalent)."
    },
    {
      question: "How long do withdrawals take to reach my account?",
      answer: "Withdrawals are processed within 24 hours; delivery time depends on the method (e.g., crypto: instant–1 hour, bank: 1–5 business days)."
    }
  ];

  return (
    <div className="bg-[#0D0D0E] relative z-20">

      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[35%] left-[45%] sm:top-[40%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[180px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <Header
        isScrolled={false}
        isFixed={false}
      />
      <Banner
        heading="Fund Your Account With Ease"
        backgroundImage={assets.paymentbanner}
        breadcrumbBase="HOME"
        maxWidthTitle="max-w-4xl"
        breadcrumbCurrent="Trading "

      />
      <PaymentOptions />
      <PaymentPartners />
      <FAQTabs
        titleAlign="left"
        faqData={faqData}
      />
      {/* <ReadyToTradeCTA /> */}
      <ActionFooter
        header="Ready to Trade Without Limits?"
        title="Fund your Finsai Trade account today with fast, flexible, and secure payment options. Start trading forex, crypto, indices, and metals in minutes."
        buttonText="Deposit Now"
        secondButtonText="Try Free Demo"
        imageSrc={assets.actionfooter}
        imageAlt="Market Analysis"
        backgroundColor="bg-[transparent]"
        buttonClassName="w-[185px] h-[49px] whitespace-nowrap"
        secondButtonClassName="w-[185px] h-[49px] whitespace-nowrap"
      />
      <Footer />
    </div>
  );
}


