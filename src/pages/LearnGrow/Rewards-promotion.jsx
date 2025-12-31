import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/layout/Banner";
import { FeaturesGrid } from "../../components/LearnGrow";
import FAQTabs from "../../components/layout/FAQTabs";
import assets from "../../assets/assets.jsx";

const steps = [
  {
    step: "1",
    text: "Open And Verify Your Live Account",
  },
  {
    step: "2",
    text: "Check For Eligible Promotions Under Your Account Dashboard",
  },
  {
    step: "3",
    text: "Follow Steps To Claim Or Participate",
  },
  {
    step: "4",
    text: "Enjoy Bonus Rewards!",
  },
];

function HowToAvail({ title = "How To Avail", stepsData = steps }) {
  return (
    <section className="w-full bg-transparent py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
              <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
                      {title}
                  </h2>
                  <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 mx-auto">
                      <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                  </div>
              </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className="relative h-[250px] rounded-lg bg-gradient-to-b from-[#496DAB] from-[31%] to-[#1F9FB2] px-6 py-5 text-white shadow-lg"
            >
              <div className="absolute top-2 left-0 w-[120px] h-[120px] pointer-events-none">
                {/* Outer triangle (border) */}
                <div
                  className="absolute top-0 left-0 w-0 h-0
              border-l-[96px] border-l-[#e1ebff73]
              border-t-[56px] border-t-transparent
              border-b-[56px] border-b-transparent"
                />

                {/* Inner triangle (fill) */}
                <div
                  className="absolute top-[4px] left-[3px] w-0 h-0
              border-l-[88px] border-l-[#5b82c6]
              border-t-[52px] border-t-transparent
              border-b-[52px] border-b-transparent"
                />
              </div>


              {/* Content */}
              <div className="relative z-10 flex flex-col gap-14 mt-6 z-[30]">
                <span className="text-2xl font-semibold opacity-90">
                  {item.step}
                </span>
                <p className="text-lg leading-relaxed opacity-95">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

const PromotionFeatures = [
    {
        id: 1,
        icon: assets.MediumRisk,
        title: "First Trade Risk-Free",
        description: "Place your first trade worry-free. If your first trade results in a loss, get up to 20% of the loss credited back as bonus.",
        features: [
            "Eligible only on first live trade",
            "Bonus credited with a 1-month lock-in",
            "Available on Forex, Crypto & more"
        ],
    },
    {
        id: 2,
        icon: assets.ReceiveDollar,
        title: "Bonus Hour",
        description: "Deposit during the special Bonus Hour and receive an extra 10% trading credit.",
        features: [
            "Time-sensitive, announced weekly",
            "Minimum deposit: $100",
            "Instant bonus credit added"
        ],
    }
];

const faqData = [
    {
        id: 1,
        question: "Who is eligible for promotions?",
        answer: "All verified account holders are eligible for promotions. New and existing clients can participate based on account type and trading activity."
    },
    {
        id: 2,
        question: "Are bonus funds withdrawable?",
        answer: "Bonus funds are subject to trading volume requirements before withdrawal. Check specific promotion terms for withdrawal conditions."
    },
    {
        id: 3,
        question: "Can I combine multiple promotions?",
        answer: "Some promotions can be combined, while others are mutually exclusive. Contact support to check compatibility of specific promotions."
    }
];

const RewardsPromotion = () => {
    const handleViewAll = (feature) => {
    };

    return (
        <div className="bg-[#0D0D0E]">
            <Header  isScrolled={false} isFixed={false}/>
           
        <Banner
          heading="Trade Smart, Earn Big – Explore Finsai Promotions"
          description="Maximize every move you make with our exclusive promotions. From risk-free trades to deposit rewards and flash bonus hours—every opportunity is designed to boost your trading journey."
          backgroundImage={assets.learngrow}
          breadcrumbBase="HOME"
          breadcrumbCurrent="LEARN & GROW"
          maxWidthTitle="max-w-5xl"
          maxWidthDescription="max-w-8xl"
        />
            <FeaturesGrid
               
                columns={2}
                viewAllText="Claim Now"
                onViewAll={handleViewAll}
                showIcons={true}
                showTabs={false}
                showIconBg={false}
                iconSize="w-20 h-20"
                showViewAllButton={false}
                features={PromotionFeatures}
            />
            <HowToAvail />

            <FAQTabs
                title="Frequently Asked Questions"
                showViewAllButton={false}
                allowMultipleOpen={false}
                initialOpenId={1}
                className="py-16"
                faqData={faqData}
                 titleAlign = "left"
            />

            <Footer />
        </div>
    )
}

export default RewardsPromotion;
export { HowToAvail };