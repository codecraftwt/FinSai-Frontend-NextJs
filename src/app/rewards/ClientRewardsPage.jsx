"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/layout/Header";
import Banner from "../../components/layout/Banner";
import RewardsGrid from "../../components/LearnGrow/RewardsGrid";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";
import ActionFooter from "../../components/LearnGrow/ActionFooter.jsx";
import WhyChooseSection from "../../components/LearnGrow/WhyChooseSection";
import assets from "../../assets/assets.jsx";
import Footer from "../../components/layout/Footer.jsx";

// Rewards Testimonials Data
const rewardsTestimonialsData = [
  {
    quote:
      "The rewards program has completely transformed my trading experience. I've earned significant bonuses that helped me grow my trading capital substantially.",
    name: "Alex Chen, Singapore",
    category: "Premium Trader",
    avatar: assets.TestimonialAvatar1,
  },
  {
    quote:
      "Finsai's loyalty rewards are incredible. Every trade I make earns me points that convert to real cash bonuses. It's like getting paid twice!",
    name: "Maria Rodriguez, Spain",
    category: "Active Trader",
    avatar: assets.TestimonialAvatar2,
  },
  {
    quote:
      "As an IB partner, the commission structure is unbeatable. The multi-level commissions have created a sustainable income stream for me.",
    name: "David Thompson, UK",
    category: "IB Partner",
    avatar: assets.TestimonialAvatar3,
  },
  {
    quote:
      "The welcome bonuses helped me start trading with confidence. The educational rewards program kept me motivated to learn and improve.",
    name: "Sarah Kim, South Korea",
    category: "New Trader",
    avatar: assets.TestimonialAvatar1,
  },
  {
    quote:
      "Fast payouts and transparent reward system. What you see is what you get - no hidden terms or complicated calculations.",
    name: "Michael Johnson, Canada",
    category: "Pro Trader",
    avatar: assets.TestimonialAvatar2,
  },
];

const ClientRewardsPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0D0D0E]">
      {/* Header */}
      <Header
        data={{
          headerIcon: assets.logo,
          openLiveAccountText: "OPEN LIVE ACCOUNT",
          tryFreeDemoText: "TRY FREE DEMO",
        }}
        isScrolled={false}
        isFixed={false}
      />

      {/* Banner */}
          <Banner
              heading="More Trades. More Rewards. More Growth"
              description="Take advantage of trading promotions, loyalty milestones, and earn commissions as our partner"
              backgroundImage={assets.learngrow}
              breadcrumbBase="HOME"
              breadcrumbCurrent="LEARN & GROW"
              maxWidthTitle="max-w-5xl"
              maxWidthDescription="max-w-5xl"
              buttons={
                  <>
                      <button
                          onClick={() => router.push('/rewards-promotion')}
                          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                      >
                          Explore Promotions

                      </button>
                      <button
                          onClick={() => router.push('/rewards')}
                          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB]  text-white font-semibold rounded-lg  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                      >
                          View Loyalty Program
                      </button>
                      <button
                          onClick={() => router.push('/rewards-ibprogram')}
                          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB]  text-white font-semibold rounded-lg  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                      >
                          Join as IB Partner
                      </button>
                  </>
              }
          />

      {/* Rewards Grid Section */}
      <RewardsGrid
        title="Promotions"
        description="Running and seasonal promotions in trading are designed to attract new traders and engage existing ones by offering limited-time incentives such as discounted courses, free webinars, or exclusive eBooks. These promotions capitalize on market interest during high-activity periods, providing added value while encouraging participation, learning, and stronger customer loyalty."
        features={["Bonus Hour", "Risk-Free First Trade", "Deposit Rewards"]}
        buttonText="view all promotions"
        onButtonClick={() => router.push("/rewards-promotion")}
        image={assets.promotion}
        reverse={false}
      />

      <RewardsGrid
        title="Loyalty Program Overview"
        description="A Trading loyalty program rewards consistent engagement and activity by offering perks such as exclusive market insights, priority access to webinars, discounts on courses, or trading tools. It encourages traders to stay active, build long-term relationships, and feel valued, turning regular participation into a mutually beneficial experience."
        features={["Cashback", "Trading volume milestones", "Rewards store"]}
        buttonText="Track Your Loyalty Level"

        image={assets.loyalityprogram}
        reverse={true}
      />

      <RewardsGrid
        title="IB Program"
        description="An Introducing Broker (IB) Program allows partners to earn commissions by referring new traders to a brokerage. IBs benefit from revenue sharing, marketing support, and exclusive resources, while traders gain access to trusted services, creating a win–win network that drives growth and engagement for both parties."
        features={["Multi-tier commissions", "Live Dashboards", "Promo Codes"]}
        buttonText="Become an IB Partner"
        onButtonClick={() => router.push('/rewards-ibprogram')}
        image={assets.Ibprogram}
        reverse={false}
      />

      {/* Why Choose Section */}
      <WhyChooseSection
        heading="Why Choose Finsai Incentives/ Rewards?"
        maxHeadingWidth = "max-w-2xl"
        items={[
          {
            title: "Competitive Rewards",
            icon: assets.Withdrawal,
          },
          {
            title: "Instant Payouts",
            icon: assets.Analyze,
          },
          {
            title: "Multi-Level Commissions",
            icon: assets.TraderCoins,
          },
        ]}
      />

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-10 xl:py-12 px-4 md:px-8 lg:px-12 xl:px-20 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <TestimonialsCarousel
            testimonials={rewardsTestimonialsData}
            autoPlayInterval={5000}
          />
        </div>
      </section>

      <ActionFooter
        title="Start Trading. Start Earning. Start Growing with Finsai."
        buttonText="Create Account Now"
        imageSrc={assets.RewardFooter}
        imageAlt="Market Analysis"
        backgroundColor="bg-[#0B152A]"
        buttonClassName="w-[185px] h-[49px] whitespace-nowrap"
        className="my-16"
      />

      <Footer />
    </div>
  );
};

export default ClientRewardsPage;


