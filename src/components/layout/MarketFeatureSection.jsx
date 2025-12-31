import React from 'react';
import { Check} from 'lucide-react';

const MarketFeatureSection = ({
  heading = "Trade FX Starting From Just 0.5 Pips",
  features = [
    "Competitive Spreads On Majors, Minors, Exotics, Cryptos, And Spot Metals",
    "Premium Execution Quality For Every Forex Trade",
    "Receive Monthly Cash Rebates On Your FX Activity"
  ],
  mainImage = null,
  logos = [],
  pairNames = [],
  className = ""
}) => {
  return (
    <section 
      className={`relative w-full bg-transparent py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 overflow-hidden ${className}`}
      
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-6 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {heading}
            </h1>

            <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 ml-0">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
            </div>

            <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="flex-shrink-0 rounded-full bg-white bg-opacity-5 border-2 border-white/20 p-0.5 sm:p-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                    <Check size={14} className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-center overflow-hidden p-2 sm:p-3 md:p-4 ">
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-5">
              <div className="flex-1 w-full ">
                <div className="rounded-lg  flex items-center justify-center">
                  {mainImage && (
                    <img 
                      src={mainImage} 
                      alt="Trading Chart" 
                      className="w-full h-full object-cover aspect-auto rounded-lg shadow-2xl" 
                    />
                  )}
                </div>
              </div>

              {logos.length > 0 && (
                <div className="flex-none">
                  <div className="flex flex-row sm:flex-col gap-3 sm:gap-6 md:gap-8 items-center justify-center">
                    {logos.slice(0, 2).map((logo, index) => {
                      const pairName = pairNames[index] || 'N/A';

                      return (
                        <div
                          key={index}
                          className="bg-[#2a3847]/60 rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-center gap-1.5 sm:gap-2 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] h-[60px] sm:h-[70px] md:h-[80px]"
                        >
                          <div className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 flex items-center justify-center overflow-hidden">
                            <img
                              src={logo}
                              alt={pairName}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-white font-semibold text-xs sm:text-sm text-center">
                            {pairName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketFeatureSection;

