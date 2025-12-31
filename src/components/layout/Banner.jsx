import React from 'react';
import { ChevronRight } from 'lucide-react';

const Banner = ({
  heading = "Page Title",
  description ,
  backgroundImage = null,
  breadcrumbBase = "HOME",
  breadcrumbCurrent = null,
  buttons = null,
  maxWidthTitle = "max-w-6xl",
  maxWidthDescription = "max-w-7xl",
  headerDescriptionSpacing = "mb-2 sm:mb-3 md:mb-4 lg:mb-20"
}) => {
  return (
    <div className="w-full">
      <section className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[480px] lg:h-[542px]  overflow-hidden">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-[#496DAB] via-[#496DAB]/40 to-[#496DAB]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-10 pt-[70px] sm:pt-[80px] md:pt-[75px]">
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  ${maxWidthTitle} font-extrabold text-white text-center tracking-wide  ligatures-none ${description ? headerDescriptionSpacing : ''}`}>
            {heading}
          </h1>

          {description && (
            <p className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl  text-white/90 text-center ${maxWidthDescription} px-3 sm:px-4 ${buttons ? 'mb-4 sm:mb-6 md:mb-8' : ''}`}>
              {description}
            </p>
          )}

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-6">
              {buttons}
            </div>
          )}
        </div>
      </section>

      <div className="w-full h-[45px] xs:h-[50px] sm:h-[55px] md:h-[65px] lg:h-[75px] xl:h-[87px] bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto h-full px-3 sm:px-4 md:px-6 lg:px-10 flex items-center">
          <nav className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 text-[10px] xs:text-xs sm:text-sm md:text-base text-white/80 ">
            <span className="hover:text-white cursor-pointer transition-colors uppercase tracking-wider ">
              {breadcrumbBase}
            </span>
            <ChevronRight size={14} className="xs:w-[16px] xs:h-[16px] sm:w-[18px] sm:h-[18px] text-white/60" />
            <span className="text-white font-medium uppercase tracking-wider">
              {breadcrumbCurrent || heading}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Banner;