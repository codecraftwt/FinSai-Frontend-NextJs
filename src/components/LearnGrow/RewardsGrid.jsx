import React from "react";
import { Check } from "lucide-react";

const RewardsGrid = ({
  title,
  description = "Running and seasonal promotions in trading are designed to attract new traders and engage existing ones by offering limited-time incentives such as discounted courses, free webinars, or exclusive eBooks. These promotions capitalize on market interest during high-activity periods, providing added value while encouraging participation, learning, and stronger customer loyalty.",
  features = [
    "Bonus Hour",
    "Risk-Free First Trade",
    "Deposit Rewards",
  ],
  buttonText = "View All Promotions",
  onButtonClick,
  image,
  reverse = false,
}) => {
  return (
    <section className="relative w-full bg-[#0b0f14] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
              {title}
            </h2>

            <div className="relative w-[90px] h-[2px] bg-[#496DAB] mx-auto mt-4 item">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#496DAB] rotate-45" />
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>

          {/* CONTENT */}
          <div className={`space-y-6  ${reverse ? 'lg:col-start-2' : ''}`}>
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-xl">
              {description}
            </p>

            {/* FEATURES */}
            <div className="space-y-3 pt-2 ">
              {features.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                      <Check size={14} className="text-white" />
                    </span>
                    <span className="text-base sm:text-xl text-gray-300">
                      {item}
                    </span>
                  </div>
                  <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-[2px] bg-white/20"></div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center justify-center rounded-md bg-[#496DAB] px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#3d5f9a] transition"
              >
                {buttonText}
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className={`flex justify-center ${reverse ? 'lg:justify-start lg:col-start-1' : 'lg:justify-end'}`}>
            <div className="w-full max-w-[560px] h-full">
              {image && (
                <img
                  src={image}
                  alt="Promotions Illustration"
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default RewardsGrid;
