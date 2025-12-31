import React from "react";

const LearnMoreStayConnected = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-sans">
            Learn More & Stay Connected
          </h2>
          <div className="w-24 md:w-32 h-[1px] bg-[#496DAB] mx-auto"></div>
        </div>

        {/* Main Content with Vertical Line */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-6xl">
            {/* Vertical Blue Line - spans the entire height */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-[calc(100%-2rem)] bg-[#496DAB] top-8 z-0"></div>

            {/* Content Container */}
            <div className="relative space-y-16 md:space-y-20">
              {/* First Pair - Top */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[120px]">
                {/* Left: Button */}
                <div className="w-full md:w-[42%] flex justify-end relative z-10">
                  <button className="w-full md:w-auto px-8 py-4 bg-[#A0EAF5] text-[#1a3a5c] font-bold text-sm md:text-base rounded-lg hover:bg-[#8dd5e0] transition-colors uppercase tracking-wider font-sans shadow-lg">
                    INSIGHTS AND NEWS
                  </button>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#496DAB] rounded-full z-20 border-2 border-black"></div>

                {/* Right: Description Box */}
                <div className="w-full md:w-[42%] flex justify-start relative z-10">
                  <div className="w-full md:w-auto bg-[#2a2a2e] text-white px-6 md:px-8 py-5 rounded-lg border border-[#3a3a3e]">
                    <p className="text-sm md:text-base leading-relaxed font-sans">
                      Read Financial Insights And Updates Through The Insights
                      And News Sections
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Pair - Middle */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[120px]">
                {/* Left: Description Box */}
                <div className="w-full md:w-[42%] flex justify-end relative z-10">
                  <div className="w-full md:w-auto bg-[#2a2a2e] text-white px-6 md:px-8 py-5 rounded-lg border border-[#3a3a3e]">
                    <p className="text-sm md:text-base leading-relaxed font-sans">
                      Join Communities Via Telegram, LinkedIn, And Other Social
                      Channels For Real-Time Tips And Discussion
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#496DAB] rounded-full z-20 border-2 border-black"></div>

                {/* Right: Button */}
                <div className="w-full md:w-[42%] flex justify-start relative z-10">
                  <button className="w-full md:w-auto px-8 py-4 bg-[#A0EAF5] text-[#1a3a5c] font-bold text-sm md:text-base rounded-lg hover:bg-[#8dd5e0] transition-colors uppercase tracking-wider font-sans shadow-lg">
                    JOIN COMMUNITIES
                  </button>
                </div>
              </div>

              {/* Third Pair - Bottom */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[120px]">
                {/* Left: Button */}
                <div className="w-full md:w-[42%] flex justify-end relative z-10">
                  <button className="w-full md:w-auto px-8 py-4 bg-[#A0EAF5] text-[#1a3a5c] font-bold text-sm md:text-base rounded-lg hover:bg-[#8dd5e0] transition-colors uppercase tracking-wider font-sans shadow-lg">
                    EXPLORE CAREERS
                  </button>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#496DAB] rounded-full z-20 border-2 border-black"></div>

                {/* Right: Description Box */}
                <div className="w-full md:w-[42%] flex justify-start relative z-10">
                  <div className="w-full md:w-auto bg-[#2a2a2e] text-white px-6 md:px-8 py-5 rounded-lg border border-[#3a3a3e]">
                    <p className="text-sm md:text-base leading-relaxed font-sans">
                      Explore Careers To Connect With The Team Or Contribute
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Elements Below Third Pair */}
            <div className="relative mt-12 md:mt-16">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12">
                {/* Left: Additional Description Box */}
                <div className="w-full md:w-[42%] flex justify-end">
                  <div className="w-full md:w-auto bg-[#2a2a2e] text-white px-6 md:px-8 py-5 rounded-lg border border-[#3a3a3e]">
                    <p className="text-sm md:text-base leading-relaxed font-sans">
                      Use The Contact Us And Subscribe Features To Stay Informed
                    </p>
                  </div>
                </div>

                {/* Right: Contact Us & Subscribe Button */}
                <div className="w-full md:w-[42%] flex justify-start">
                  <button className="w-full md:w-auto px-8 py-4 bg-[#A0EAF5] text-[#1a3a5c] font-bold text-sm md:text-base rounded-lg hover:bg-[#8dd5e0] transition-colors uppercase tracking-wider font-sans shadow-lg">
                    CONTACT US & SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreStayConnected;
