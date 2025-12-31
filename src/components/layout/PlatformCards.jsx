import React, { useState, useEffect, forwardRef } from 'react';
import assets from '../../assets/assets.jsx';

const PlatformCards = forwardRef(({
  platforms = [],
  platformsDescription = "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
  platformsLearnMoreText = "Learn More",
  animationEnabled = true,
  showFeatures,
  checkIconSize,
}, ref) => {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  const iconMap = {
    license: assets.license,
    atm: assets.atm,
    phone: assets.phone,
    safebox: assets.safebox,
    metatrader: assets.metatrader,
    webtrader: assets.webtrader,
    mobileapp: assets.mobileapp
  };

  const handlePrev = () => {
    setCurrentPlatformIndex((prev) =>
      prev === 0 ? platforms.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPlatformIndex((prev) =>
      prev === platforms.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!animationEnabled) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentPlatformIndex, animationEnabled, platforms.length]);

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-8 xl:px-[20px] bg-transparent text-white overflow-hidden">
      <div className="max-w-[1500px] flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-5 text-center">
          Powerful Platforms
          <br />
          For Every Trader
        </h1>
        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-6 my-3 mx-auto">
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
        </div>
        <p className="text-base w-full md:text-lg opacity-80 max-w-4xl leading-relaxed mb-6 md:mb-8 text-center">
          {platformsDescription}
        </p>

        <div className="relative w-full max-w-9xl h-auto mx-auto mb-5 md:mb-1">
          <style
            dangerouslySetInnerHTML={{
              __html: `
              /* Responsive carousel positioning */
              @media (min-width: 768px) {
                [data-position="1"] {
                  transform: translateX(-50%) translateX(480px) scale(0.9) !important;
                }
                [data-position="${platforms.length - 1}"] {
                  transform: translateX(-50%) translateX(-480px) scale(0.9) !important;
                }
              }
              @media (min-width: 1024px) {
                [data-position="1"] {
                  transform: translateX(-50%) translateX(380px) scale(0.9) !important;
                }
                [data-position="${platforms.length - 1}"] {
                  transform: translateX(-50%) translateX(-380px) scale(0.9) !important;
                }
              }
              @media (min-width: 1280px) {
                [data-position="1"] {
                  transform: translateX(-50%) translateX(480px) scale(0.9) !important;
                }
                [data-position="${platforms.length - 1}"] {
                  transform: translateX(-50%) translateX(-480px) scale(0.9) !important;
                }
              }
            `,
            }}
          />
          <div className={`relative flex items-center justify-center ${showFeatures ? 'min-h-[800px] sm:min-h-[820px] md:min-h-[850px]' : 'min-h-[400px] sm:min-h-[420px] md:min-h-[450px]'} overflow-hidden`}>
            {platforms.map((platform, index) => {
              const position = (index - currentPlatformIndex + platforms.length) % platforms.length;
              let positionClass = "";

              if (position === 0) {
                positionClass = `z-20 md:w-[500px] w-[320px] ${showFeatures ? 'md:h-[650px] h-auto' : 'md:h-[345px] h-auto'} opacity-100`;
              } else if (position === 1 || position === platforms.length - 1) {
                positionClass = `z-10 md:w-[450px] w-[300px] ${showFeatures ? 'md:h-[600px] h-auto' : 'md:h-[280px] h-auto'} opacity-60 md:opacity-80`;
              } else {
                positionClass = "hidden z-0";
              }

              return (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center justify-between
                    bg-gray-700/30 backdrop-blur-md rounded-2xl p-6 md:p-2 lg:py-12
                    text-center border border-white/10 shadow-l
                    transition-all duration-500 ease-in-out
                    absolute left-1/2 transform -translate-x-1/2

                    overflow-hidden
                    ${positionClass}
                  `}
                  style={{
                    transform: `
                      translateX(-50%)
                      ${position === 0 ? 'translateX(0) scale(1)' :
                        position === 1 ? 'translateX(290px) scale(0.9)' :
                          position === platforms.length - 1 ? 'translateX(-290px) scale(0.9)' :
                            'translateX(-50%) scale(0.9)'}
                    `,
                  }}
                  data-position={position}
                >
                  <div className={`
                    rounded-full bg-blue-500/30 flex items-center justify-center
                    mx-auto mb-4 md:mb-6 transition-all duration-500
                    ${position === 0 ? 'w-[80px] h-[80px]' : 'w-[60px] h-[60px]'}
                  `}>
                    <img
                      src={iconMap[platform.icon]}
                      alt={platform.title}
                      className={`filter brightness-0 invert transition-all duration-500 ${position === 0 ? 'w-12 h-12' : 'w-8 h-8'}`}
                    />
                  </div>

                  <h4 className={`
                    font-bold mb-3 md:mb-4 transition-all duration-500
                    ${position === 0 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}
                  `}>
                    {platform.title}
                  </h4>

                  <p className={`
                    opacity-80 mb-4 md:mb-6 transition-all duration-500
                    ${position === 0 ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                  `}>
                    {platform.description}
                  </p>

                  {showFeatures && platform.features && platform.features.length > 0 && (
                    <ul className={`space-y-2 md:space-y-3 mb-4 md:mb-6 text-left w-full px-3 sm:px-10 mx-auto transition-all duration-500 ${position === 0 ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 rounded-full bg-white/10 border border-white/20 w-6 h-6 flex items-center justify-center mt-0.5">
                            {/* Replace with your Check icon component, e.g., from lucide-react */}
                            <svg width={checkIconSize} height={checkIconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {platform.footer && (
                    <p className={`
                      text-xs md:text-[16px]
                      ${position === 0 ? 'text-center' : 'text-center'}
                    `}>
                      {platform.footer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button className="bg-[#496DAB] w-full sm:w-[144px] h-[49px] text-white border-none px-3 py-3 rounded-md text-sm md:text-lg cursor-pointer font-bold hover:bg-[#5B21B6] transition-colors duration-300 whitespace-nowrap">
          {platformsLearnMoreText}
        </button>
      </div>
    </section>
  );
});

PlatformCards.displayName = 'PlatformCards';

export default PlatformCards;