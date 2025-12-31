import React from "react";

const steps = [
  {
    step: "1",
    title: "Apply And Verify As An IB",
  },
  {
    step: "2",
    title: "Share Your Unique Link Or Promo Code",
  },
  {
    step: "3",
    title: "Earn Commissions As Your Referrals Trade",
  },
  {
    step: "4",
    title: "Get Upgraded As You Grow",

  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-10 lg:py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-6 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How It Works
          </h2>
          <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md  my-6 mx-auto ">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center ">
          {steps.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="relative flex flex-col items-center text-center z-10 w-full sm:w-auto"
                style={{ zIndex: steps.length - index }}
              >
                {/* Circle */}
                <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[240px] sm:h-[240px] md:w-[250px] md:h-[250px]  rounded-full bg-gradient-to-b from-[#496DAB]/90 from-[31%] to-[#1F9FB2] flex flex-col gap-3 sm:gap-2 md:gap-4 lg:gap-5 items-center justify-center text-white shadow-xl relative">
                  <span className="text-2xl xs:text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-1 md:mb-3">
                    {item.step}
                  </span>
                  <p className="text-sm xs:text-base sm:text-xs md:text-sm lg:text-base px-4 sm:px-3 md:px-5 lg:px-6 leading-relaxed text-white/90 max-w-[180px] xs:max-w-[200px] sm:max-w-[160px] md:max-w-[160px] lg:max-w-[240px]">
                    {item.title}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex items-center justify-center z-0 relative">
                  {/* Vertical line for mobile/tablet */}
                  <div className="sm:hidden relative">
                    <div className="w-[2px] h-12 border-l-2 border-dashed border-cyan-400"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[1px] border-white/25 shadow-sm flex items-center justify-center bg-white">
                      <div className="w-3 h-3 rounded-full bg-[#496DAB]/35 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#496DAB]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal line for desktop */}
                  <div className="hidden sm:block relative">
                    <div className="h-[2px] w-24 border-t-2 border-dashed border-cyan-400"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[1px] border-white/25 shadow-sm flex items-center justify-center bg-white">
                      <div className="w-3 h-3 rounded-full bg-[#496DAB]/35 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#496DAB]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
