'use client';

import React, { useEffect } from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import assets from '../../assets/assets.jsx';
import ActionFooter from '../../components/LearnGrow/ActionFooter.jsx';
import IBFeatureCardCarousel from '../../components/layout/IBFeatureCard';
import HowItWorks from '../../components/layout/HowItWorks';
import QuestionGrids from '../../components/layout/QuestionGrids';
import FAQTabs from '../../components/layout/FAQTabs';

const ClientRewardsIbprogramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const referralFAQ = [
    {
      id: 1,
      question: "What's The Minimum Number Of Referrals To Start Earning?",
      answer: "There is no minimum number of referrals required to start earning. You begin earning commissions as soon as your first referred client opens a live account and starts trading."
    },
    {
      id: 2,
      question: "How Are Commissions Paid?",
      answer: "Commissions are calculated daily based on your referred clients' trading volume and paid directly to your partner wallet or trading account weekly or monthly, depending on your chosen payout schedule."
    },
    {
      id: 3,
      question: "Can I Refer Clients From Any Country?",
      answer: "Yes, you can refer clients from any country where Finsai Trade accepts traders. There are no geographic restrictions for partners, allowing you to build a global referral network."
    }
  ];
  return (
    <div className="min-h-screen bg-[#0D0D0E]">
      {/* Header */}
      <Header
        data={{
          headerIcon: assets.logo,
          openLiveAccountText: "OPEN LIVE ACCOUNT",
          tryFreeDemoText: "TRY FREE DEMO"
        }}
        isScrolled={false}
        isFixed={false}
      />

      {/* Banner */}
      <Banner
        heading="Refer. Earn. Repeat. Start Your IB Journey Today"
        description="Are you a trader, influencer, educator, or content creator? Finsai's IB Program lets you earn high commissions for every client you bring in. Simple onboarding, real-time tracking, and multi-tier rewards designed for scale."
        backgroundImage={assets.learngrow}
        breadcrumbBase="HOME"
        breadcrumbCurrent="IB PROGRAM"
        maxWidthTitle="max-w-6xl"
        maxWidthDescription="max-w-5xl"
      />

      {/* IB Features Section */}
      <IBFeatureCardCarousel />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Question Grids Section */}
      <QuestionGrids
                title="Marketing Support"
                columns={2}
                maxWidthFeatureTitle="max-w-sm"
                features={[
                    {
                        id: 1,
                        title: 'Customizable banners and social creatives',
                        icon: assets.socialmedia
                    },
                    {
                        id: 2,
                        title: 'Real-time tracking dashboard',
                        icon: assets.Dashboard
                    },
                    {
                        id: 3,
                        title: 'Dedicated IB manager',
                        icon: assets.manager
                    },
                     {
                        id: 4,
                        title: 'Multilingual promo assets',
                        icon: assets.ribbon
                    }
                ]}
            />    

      {/* Action Footer */}
      <ActionFooter
        title="Start Trading. Start Earning. Start Growing with Finsai."
          fontSize = "text-base md:text-2xl lg:text-3xl font-normal"
        buttonText="Become an IB Partner"
        secondButtonText="Learn More"
        imageSrc={assets.RewardFooter}
        imageAlt="IB Partnership"
        backgroundColor="bg-[#0B152A]"
        buttonClassName="w-[220px] h-[49px] whitespace-nowrap text-base"
        secondButtonClassName="w-[220px] h-[49px] whitespace-nowrap text-base"
        className='my-16 text-white '
      />

        {/* FAQ Section */}
        <FAQTabs
        faqData={referralFAQ}
        titleAlign="left"
        />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClientRewardsIbprogramPage;


