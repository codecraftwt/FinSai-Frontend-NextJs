import React from "react";
import { Check } from "lucide-react";

const HelpCenterBanner = ({
  title,
  description = "Running and seasonal promotions in trading are designed to attract new traders and engage existing ones by offering limited-time incentives such as discounted courses, free webinars, or exclusive eBooks. These promotions capitalize on market interest during high-activity periods, providing added value while encouraging participation, learning, and stronger customer loyalty.",
  features = ["Bonus Hour", "Risk-Free First Trade", "Deposit Rewards"],
  buttonText = "View All Promotions",
  onButtonClick,
  image,
  reverse = false,
}) => {
  return (
    <section className="relative w-full bg-transparent py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* CONTENT */}
          <div className={`space-y-6  ${reverse ? "lg:col-start-2" : ""}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white">
              {title}
            </h2>

            {/* FEATURES */}
            <div className="space-y-3 pt-2 pl-20 sm:pl-20">
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
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div
            className={`flex justify-center ${
              reverse ? "lg:justify-start lg:col-start-1" : "lg:justify-end"
            }`}
          >
            <div className="w-full max-w-[560px] h-auto">
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

export default HelpCenterBanner;
