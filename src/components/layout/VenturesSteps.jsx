import React from 'react';

const VenturesSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Regulated Fund Management Under Dubai's Meydan Free Zone Authority"
    },
    {
      number: "02",
      title: "Diversified Portfolio Strategies To Mitigate Risk"
    },
    {
      number: "03",
      title: "Access To Strong Institutional Networks And Industry Insights"
    },
    {
      number: "04",
      title: "A Team Of Seasoned, Knowledgeable Financial Professionals"
    },
    {
      number: "05",
      title: "Commitment To Transparency, Client Trust, And Open Communication"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 leading-tight">
          Why Choose Finsai
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Ventures?
        </h2>

        <div className="relative w-[80px] sm:w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-4 sm:mb-6 my-3 mx-auto">
          <div className="absolute left-[-4px] sm:left-[-5px] top-1/2 -translate-y-1/2 w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] bg-[#496DAB] rotate-45"></div>
        </div>

        {/* Steps List */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 relative"
            >
              <div className="flex flex-shrink-0 items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white relative ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16">
                {step.number}
                <div className="absolute right-[-6px] sm:right-[-8px] md:right-[-10px] top-1 sm:top-2 bottom-1 sm:bottom-2 w-[1px] h-[70%] sm:h-[75%] md:h-[80%] bg-white"></div>
              </div>

              <div className="flex flex-1 min-h-[60px] sm:min-h-[80px] md:min-h-[96px] lg:min-h-[112px] pt-2 sm:pt-3 md:pt-4 pl-3 sm:pl-4 md:pl-6 lg:pl-8 items-start">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed uppercase tracking-wide text-white">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSteps;