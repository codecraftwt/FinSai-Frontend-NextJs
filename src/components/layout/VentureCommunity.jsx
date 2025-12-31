import React from "react";

const timelineItems = [
  {
    buttonText: "INSIGHTS AND NEWS",
    cardText: "Read Financial Insights And Updates Through The Insights And News Sections",
    buttonFirst: true
  },
  {
    buttonText: "JOIN COMMUNITIES",
    cardText: "Join Communities Via Telegram, LinkedIn, And Other Social Channels For Real-Time Tips And Discussion",
    buttonFirst: false
  },
  {
    buttonText: "EXPLORE CAREERS",
    cardText: "Explore Careers To Connect With The Team Or Contribute",
    buttonFirst: true
  },
  {
    buttonText: "CONTACT US & SUBSCRIBE",
    cardText: "Use The Contact Us And Subscribe Features To Stay Informed",
    buttonFirst: false
  }
];

const VentureCommunity = () => {
  return (
    <section className="bg-transparent py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
      {/* TITLE */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
          Learn More & Stay Connected
        </h2>
        <div className="relative w-[100px] sm:w-[120px] h-[2px] bg-[#496DAB] rounded-md my-3 sm:my-4 md:my-6 mx-auto">
          <div className="absolute left-[-4px] sm:left-[-5px] top-1/2 -translate-y-1/2 w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] bg-[#496DAB] rotate-45" />
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl lg:max-w-6xl mx-auto">
        {/* Mobile: Single column layout */}
        <div className="block md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#A0EAF5] to-transparent -translate-x-1/2 z-0"></div>

          <div className="relative z-10 space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="space-y-4">
                <MobileTimelineItem isButton={true} content={item.buttonText} />
                <div className="flex justify-center">
                  <TimelineDot />
                </div>
                <MobileTimelineItem isButton={false} content={item.cardText} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] md:gap-y-12 lg:gap-y-14">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#A0EAF5] to-transparent"></div>

          {/* ITEM 1 */}
          <div className="flex justify-end items-start">
            <GradientButton text="INSIGHTS AND NEWS" />
          </div>
          <TimelineDot />
          <div className="flex justify-start items-start">
            <GradientCard>
              Read Financial Insights And Updates Through The Insights And News
              Sections
            </GradientCard>
          </div>

          {/* ITEM 2 */}
          <div className="flex justify-end items-start">
            <GradientCard>
              Join Communities Via Telegram, LinkedIn, And Other Social Channels
              For Real-Time Tips And Discussion
            </GradientCard>
          </div>
          <TimelineDot />
          <div className="flex justify-start items-start">
            <GradientButton text="JOIN COMMUNITIES" />
          </div>

          {/* ITEM 3 */}
          <div className="flex justify-end items-start">
            <GradientButton text="EXPLORE CAREERS" />
          </div>
          <TimelineDot />
          <div className="flex justify-start items-start">
            <GradientCard>
              Explore Careers To Connect With The Team Or Contribute
            </GradientCard>
          </div>

          {/* ITEM 4 */}
          <div className="flex justify-end items-start">
            <GradientCard>
              Use The Contact Us And Subscribe Features To Stay Informed
            </GradientCard>
          </div>
          <TimelineDot />
          <div className="flex justify-start items-start">
            <GradientButton text="CONTACT US & SUBSCRIBE" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* MOBILE TIMELINE ITEM */
const MobileTimelineItem = ({ isButton, content }) => (
  <div className="flex justify-center">
    {isButton ? (
      <GradientButton text={content} />
    ) : (
      <GradientCard>
        {content}
      </GradientCard>
    )}
  </div>
);

/* TIMELINE DOT */
const TimelineDot = () => (
  <div className="flex items-start justify-center pt-1">
    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#A0EAF5]" />
  </div>
);

/* GRADIENT BUTTON */
const GradientButton = ({ text }) => (
  <button className="rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5] px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-white whitespace-nowrap hover:shadow-lg hover:shadow-[#496DAB]/25 transition-all duration-300 transform hover:scale-105">
    {text}
  </button>
);

/* GRADIENT CARD */
const GradientCard = ({ children }) => (
  <div className="w-full max-w-xs sm:max-w-sm rounded-xl border border-white/20 bg-gradient-to-r from-[#496DAB]/20 to-[#A0EAF5]/20 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base leading-relaxed text-slate-100 backdrop-blur-md shadow-lg">
    {children}
  </div>
);

export default VentureCommunity;
