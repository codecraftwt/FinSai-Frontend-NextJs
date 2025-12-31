import React, { useState, useEffect } from 'react';
import assets from '../assets/assets.jsx';
import { useStepAnimation } from './hooks/Animation';

const StepsSection = () => {
  const { activeStep } = useStepAnimation();
  const [activeMobileStep, setActiveMobileStep] = useState(0);

  const desktopSteps = [
    { id: 1, title: 'SignUp', image: assets.Step1 },
    { id: 2, title: 'Complete the KYC to Verify your Account', image: assets.Step2 },
    { id: 3, title: 'Deposit', image: assets.Step3 },
    { id: 4, title: 'Trade', image: assets.Step4 }
  ];

  const mobileSteps = [
    { number: "1", title: "SignUp", image: assets.Step1 },
    { number: "2", title: "Verify", image: assets.Step2 },
    { number: "3", title: "Fund", image: assets.Step3 },
    { number: "4", title: "Trade", image: assets.Step4 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileStep((prev) => (prev + 1) % mobileSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [mobileSteps.length]);

  const currentMobileStep = mobileSteps[activeMobileStep];

  return (
    <section className="bg-[#496DAB]/20 py-8 sm:py-10 md:py-12 w-full max-w-7xl mx-auto">
      <div className="w-full block max-[1023px]:hidden px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-2">
          <div className="w-full lg:w-[20%] flex flex-col items-center lg:items-start justify-center h-[320px] sm:h-[400px] lg:h-[645px]">
            <div className="relative w-full flex items-center justify-center lg:justify-between mb-4 pl-10">
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center">
                <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white">
                  {[1, 2, 3, 4].map((num) => (
                    <span
                      key={num}
                      className={`absolute top-1/2 left-[100px] transform -translate-x-1/2 -translate-y-1/2
                        transition-all duration-1200 ease-in-out ${activeStep === num ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                      {num}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] flex items-center justify-center h-[320px] sm:h-[400px] lg:h-[645px]">
            <div className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[320px] lg:h-[645px]">
              {desktopSteps.map((step) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={`phone step ${step.id}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-1200 ease-in-out ${
                    activeStep === step.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col justify-center h-[320px] sm:h-[400px] lg:h-[645px] overflow-hidden">
            <div className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                4 steps to get started
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {desktopSteps.map((step) => (
                  <button
                    key={step.id}
                    className={`h-[85px] w-[695px] rounded-full font-semibold text-left px-8
                      transition-all duration-700 ease-in-out text-base sm:text-lg md:text-xl ${
                        activeStep === step.id
                          ? 'bg-[#496DAB] text-white shadow-lg ml-10'
                          : 'bg-[#387AFF]/10 text-gray-300 ml-44'
                      }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Mobile View Ui */}
      <div className="max-[768px]:block min-[769px]:hidden px-4">
        <div className="flex flex-col items-center py-8">
          <div className="flex items-center sm:gap-4 mb-6 w-full">
            <div className="text-7xl font-bold text-white ml-8">
              {currentMobileStep.number}
            </div>
            <div className="flex-1 bg-[#5B7FC7] rounded-l-full px-6 py-4 min-w-[330px] md:min-w-[340px] md:ml-14  ml-8">
              <h3 className="text-2xl font-bold text-white text-start pl-4">
                {currentMobileStep.title}
              </h3>
            </div>
          </div>

          <div className="w-full max-w-[280px] mx-auto">
            <div className="relative">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={currentMobileStep.image}
                  alt={currentMobileStep.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;


