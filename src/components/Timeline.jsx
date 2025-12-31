import React from "react";
import { Check } from "lucide-react";

const Timeline = ({
  steps,
  className = "",
  stepLabel = "Step",
  showConnector = true,
  connectorHeight = "h-24",
  itemClassName = "",
  titleClassName = "",
  pointClassName = "",
  checkIconSize = 14
}) => {
  return (
    <section className={`relative bg-transparent overflow-hidden ${className}`}>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-32">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center ${itemClassName}`}
            >
              <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-row lg:flex-col items-center gap-3 lg:gap-0 mb-6 lg:mb-0 z-10">
                <span className="text-[12px] lg:text-[14px] tracking-widest text-white uppercase">
                  {stepLabel}
                </span>
                <span className="text-3xl sm:text-4xl xl:text-6xl font-bold text-white leading-none">
                  {item.step}
                </span>
                {showConnector && index !== steps.length - 1 && (
                  <span className={`hidden lg:block absolute top-full w-[1px] ${connectorHeight} bg-white mt-6`} />
                )}
              </div>

              <div className={`w-full lg:w-1/2 flex flex-col ${
                item.side === "left"
                ? "lg:pr-20 lg:items-end"
                : "lg:pl-20 lg:items-start lg:ml-auto"
              }`}>

                <h3 className={`text-lg sm:text-xl font-semibold tracking-wider text-white mb-6 uppercase w-full ${
                  item.side === "left" ? "lg:text-right" : "lg:text-left"
                } ${titleClassName}`}>
                  {item.title}
                </h3>

                <ul className="space-y-4 w-full max-w-md">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className={`text-sm sm:text-base text-white flex items-start gap-4 ${pointClassName}`}
                    >
                      <div className="flex-shrink-0 rounded-full bg-white/10 border border-white/20 w-6 h-6 flex items-center justify-center mt-0.5">
                        <Check size={checkIconSize} className="text-white" />
                      </div>

                      <span className="leading-relaxed text-left text-white">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {item.showButton && (
                  <div className="mt-3 w-full max-w-md flex justify-start">
                    <button
                      onClick={item.buttonAction}
                      className="w-[252px] h-[49px] text-[16px] flex items-center justify-center px-4 py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
