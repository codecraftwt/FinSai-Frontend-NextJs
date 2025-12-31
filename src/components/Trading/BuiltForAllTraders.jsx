import React from 'react';

const BuiltForAllTraders = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-[#0f172a] text-[#e2e8f0] h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Half */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex flex-col justify-center bg-[#496DAB]/10 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl  font-extrabold leading-[1.1] mb-4 sm:mb-6 md:mb-8 text-white">
            Built For All<br className="hidden sm:block" />Traders
          </h1>
          <div className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-0.5 sm:h-1 bg-[#3b82f6] mb-6 sm:mb-8 md:mb-10 lg:mb-12"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-[#cbd5e1] max-w-2xl">
            Finsai Trade Platforms Are Engineered To Deliver Seamless Execution,
            Institutional-Level Tools, And Reliable Uptime — So You Stay In Control,
            Wherever You Trade. Whether You're A Beginner Or A Pro, Our Platforms
            Help You Trade Smarter And Faster.
          </p>
        </div>

        {/* Right Half - 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#496DAB]/10 h-full">
          <div className="flex flex-col justify-center items-center text-center p-4 sm:p-3 md:p-4 lg:p-5 border-b sm:border-b-0 sm:border-r border-[#334155]/50 bg-white/5 hover:bg-white/10 transition-colors duration-300">
            <strong className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight text-center">
              Beginner Mode: Guided Trades & Tutorials
            </strong>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 sm:p-3 md:p-4 lg:p-5 xl:p-12 border-b border-[#334155]/50 bg-white/10 hover:bg-white/15 transition-colors duration-300">
            <strong className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight text-center">
              Pro Tools: Advanced Analytics & Strategies
            </strong>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 sm:p-3 md:p-4 lg:p-5 xl:p-12 border-r border-[#334155]/50 bg-white/10 hover:bg-white/15 transition-colors duration-300">
            <strong className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight text-center">
              Seamless Switching Between Devices
            </strong>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 sm:p-3 md:p-4 lg:p-5 xl:p-12 bg-white/5 hover:bg-white/10 transition-colors duration-300">
            <strong className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight text-center">
              Multi-Lingual Support (EN, Hindi, Arabic, Etc.)
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltForAllTraders;
