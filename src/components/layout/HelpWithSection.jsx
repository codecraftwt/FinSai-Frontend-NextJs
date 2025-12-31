import React from 'react';

const HelpWithSection = ({
  heading = "What We Help With",
  items = [],
  className = "",
  maxheadingwidh ="max-w-6xl",
  showNumbers = false
}) => {
  return (
    <section className={`relative w-full bg-transparent py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 ">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 mx-auto ${maxheadingwidh}`}>
            {heading}
          </h2>
          <div className="relative w-[120px] h-[2px] bg-[#496DAB] rounded-md my-4 md:my-6 mx-auto">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45" />
          </div>
        </div>

        {/* Feature Items */}
        <div className="flex flex-col items-center space-y-8 md:space-y-10 lg:space-y-12">
          {items.map((item, index) => {
            const displayNumber = item.number !== undefined ? item.number : index + 1;
            
            return (
              <div key={item.id || index} className="flex items-start gap-6 md:gap-8 max-w-4xl w-full">
                {/* Number or Icon Container */}
                <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${showNumbers ? 'border-gray-500 bg-[#1a1a1a]' : 'border-[#2a2a2a] bg-transparent'} flex items-center justify-center`}>
                  {showNumbers ? (
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300">
                      {displayNumber}
                    </span>
                  ) : (
                    item.icon && (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                    )
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpWithSection;

