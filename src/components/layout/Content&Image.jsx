import React from 'react';
import { Check } from 'lucide-react';

const ContentAndImage = ({
  title,
  description,
  image,
  reverse = false,
  className = "",
  features = [],
  // Optional primary & secondary buttons
  primaryButtonLabel,
  primaryButtonOnClick,
  secondaryButtonLabel,
  secondaryButtonOnClick,
}) => {
  return (
    <section className={`relative w-full bg-transparent py-12 px-4 md:px-8 lg:px-16 ${className}`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col gap-8 items-center
        ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        {/* Text Content (60%) */}
        <div className="w-full lg:w-[60%]">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 text-center md:text-left">
            {title}
          </h2>
          <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md  my-6 mx-auto md:ml-2">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
          
          {/* Feature Points */}
          {features && features.length > 0 && (
            <div className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
          )}

          {/* Action Buttons */}
          {(primaryButtonLabel || secondaryButtonLabel) && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              {primaryButtonLabel && (
                <button
                  type="button"
                  onClick={primaryButtonOnClick}
                  className="px-6 py-3 rounded-[4px] bg-[#496DAB] text-white text-sm md:text-base font-semibold whitespace-nowrap shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[#3b5b8f] transition-colors duration-200"
                >
                  {primaryButtonLabel}
                </button>
              )}

              {secondaryButtonLabel && (
                <button
                  type="button"
                  onClick={secondaryButtonOnClick}
                  className="px-6 py-3 rounded-[4px] bg-[#496DAB] text-white text-sm md:text-base font-semibold whitespace-nowrap shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[#3b5b8f] transition-colors duration-200"
                >
                  {secondaryButtonLabel}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Image (40%) */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className=" w-[470px] h-auto overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentAndImage;
