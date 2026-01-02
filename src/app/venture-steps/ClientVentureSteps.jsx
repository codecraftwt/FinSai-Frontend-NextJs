"use client";

import React, { useEffect } from 'react';

const ClientVentureSteps = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-12 bg-[#0D0D0E] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12 lg:mb-16 leading-tight">
          Why Choose Finsai
          <br />
          Ventures?
        </h2>

        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-6 my-3 mx-auto">
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
        </div>

        {/* Steps List */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20 max-w-6xl mx-auto ">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-8 md:gap-12 lg:gap-12 relative"
            >

              <div className="flex flex-shrink-0 items-center justify-center w-20 sm:w-24 md:w-28 h-24 sm:h-24 md:h-28 text-2xl sm:text-3xl md:text-6xl font-semibold text-white relative ml-8 sm:ml-12 md:ml-16">
                {step.number}
                <div className="absolute right-[-10px] top-2 bottom-2 w-[1px] h-full bg-white"></div>
              </div>

              <div className="flex flex-1 h-24 sm:h-24 md:h-28 pl-6 md:pl-4 items-center">
                <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl font-semibold leading-relaxed uppercase tracking-wide text-white whitespace-nowrap">
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

export default ClientVentureSteps;
