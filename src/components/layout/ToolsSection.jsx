import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import assets from '../../assets/assets.jsx';

const ToolsSection = ({
  title = "All The Tools You Need In One Platform",
  description = "Our Platform Offers Everything You Need To Trade Efficiently And Stay Informed.",
  features = [
    "Advanced Charting Software For Real-Time Analysis",
    "Economic Calendar And News Feeds For Timely Decisions",
    "Pip Calculators, Volatility Meters, And Risk Controls",
    "Demo Accounts To Test Strategies Safely",
    "Copy Trading, Screener, And Community Insights",
    "Automation, Backtesting, And Performance Tracking",
    "IB Program - Bonuses"
  ],
  className = "",
  descriptionBelowFeatures = false,
  showlines = false,
  titleclassName = ""
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`bg-transparent py-8 md:py-10 lg:mt-10 lg:pb-16 xl:pb-[80px] relative ${className}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-3 md:mb-6 lg:mb-8 px-2 ${titleclassName}`}>
          {title}
        </h2>
        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 mx-auto">
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-[#496DAB] rotate-45"></div>
        </div>
        {!descriptionBelowFeatures && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center mb-8 md:mb-10 lg:mb-12 px-4">
            {description}
          </p>
        )}


        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
          <div className="w-[120%] md:w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-0 overflow-hidden">
            <img
              src={assets.Laptop}
              alt="Finsai Platform Screenshot"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute
                            top-[48%] sm:top-[40%] md:top-[47%]
                            left-[51%] sm:left-[51%] md:left-[50.5%] lg:left-[51%]
                            -translate-x-1/2 -translate-y-1/2
                            w-[64%] md:w-[65%] lg:w-[70%]
                            aspect-[475/310]
                            bg-gray-400">
              <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full absolute top-0 left-0 z-0">
                <motion.div
                  className="flex justify-center items-center "
                  variants={{
                    hidden: { opacity: 0, translateX: "-100%", translateY: 0 },
                    visible: { opacity: 1, translateX: 0, translateY: 0 },
                    slideOutUp: { opacity: 0, translateY: "-100%", translateX: 0 }
                  }}
                  animate={
                    currentStep === 0 ? "hidden" :
                      (currentStep === 2 ? "slideOutUp" :
                        (currentStep >= 1 ? "visible" : "hidden"))
                  }
                  transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.2 : 0 }}
                >
                  <img src={assets.Calendar} alt="Calendar" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                  className="flex justify-center items-center "
                  variants={{
                    expanded: { scale: 2, opacity: 1, translateX: 0, translateY: 0 },
                    normal: { scale: 1, opacity: 1, translateX: 0, translateY: 0 },
                    slideOutUp: { opacity: 0, translateY: "-100%", translateX: 0, scale: 1 }
                  }}
                  initial="expanded"
                  animate={
                    currentStep === 0 ? "expanded" :
                      (currentStep === 2 ? "slideOutUp" :
                        (currentStep >= 1 && currentStep <= 5 ? "normal" : "expanded"))
                  }
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ transformOrigin: "top right" }}
                >
                  <img src={assets.Analysis} alt="Analysis" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                  className="flex justify-center items-center "
                  variants={{
                    hidden: { opacity: 0, translateX: "-100%", scale: 1 },
                    visible: { opacity: 1, translateX: 0, scale: 1 },
                    expanded: { opacity: 1, translateX: 0, scale: 2 },
                    slideOutLeft: { opacity: 0, translateX: "-100%", scale: 1 },
                    slideOutRight: { opacity: 0, translateX: "100%", scale: 1 }
                  }}
                  animate={
                    currentStep === 0 ? "hidden" :
                      (currentStep === 4 ? "slideOutRight" :
                        (currentStep === 3 ? "slideOutLeft" :
                          (currentStep === 2 ? "expanded" :
                            (currentStep >= 1 ? "visible" : "hidden"))))
                  }
                  transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.2 : 0 }}
                  style={{ transformOrigin: "bottom left" }}
                >
                  <img src={assets.News} alt="News" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                  className="flex justify-center items-center "
                  variants={{
                    hidden: { opacity: 0, translateX: "100%", scale: 1 },
                    visible: { opacity: 1, translateX: 0, scale: 1 },
                    expanded: { opacity: 1, translateX: 0, scale: 2 },
                    slideOutRight: { opacity: 0, translateX: "100%", scale: 2 },
                    slideOutRightNormal: { opacity: 0, translateX: "100%", scale: 1 }
                  }}
                  animate={
                    currentStep === 0 ? "hidden" :
                      (currentStep === 4 ? "slideOutRight" :
                        (currentStep === 3 ? "expanded" :
                          (currentStep === 2 ? "slideOutRightNormal" :
                            (currentStep >= 1 ? "visible" : "hidden"))))
                  }
                  transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.4 : 0 }}
                  style={{ transformOrigin: "bottom right" }}
                >
                  <img src={assets.Accounts} alt="Accounts" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              <motion.div
                className="absolute top-0 left-0 w-[50%] h-[50%] flex justify-center items-center z-20"
                variants={{
                  hidden: { scale: 0, opacity: 1, translateX: 0 },
                  expanded: { scale: 2, opacity: 1, translateX: 0 },
                  slideOutLeft: { opacity: 0, translateX: "-200%", translateY: 0, scale: 2 }
                }}
                animate={
                  currentStep === 0 ? "hidden" :
                    (currentStep === 5 ? "slideOutLeft" :
                      (currentStep === 4 ? "expanded" : "hidden"))
                }
                transition={{ duration: currentStep === 0 ? 0 : 1, ease: "easeOut" }}
                style={{ transformOrigin: "top left" }}
              >
                <img src={assets.IBProgram} alt="IB Program" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-[50%] h-[50%] flex justify-center items-center bg-black z-20"
                variants={{
                  hidden: { scale: 0, opacity: 1 },
                  expanded: { scale: 2, opacity: 1 }
                }}
                animate={
                  currentStep === 0 ? "hidden" :
                    (currentStep === 5 ? "expanded" : "hidden")
                }
                transition={{ duration: currentStep === 0 ? 0 : 1, ease: "easeOut" }}
                style={{ transformOrigin: "top right" }}
              >
                <img src={assets.Bonuses} alt="Bonuses" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
            <ul className={`space-y-3 md:space-y-4 text-white text-sm sm:text-base md:text-lg ${descriptionBelowFeatures ? 'mt-0 md:mt-4' : ''}`}>
              {features.map((feature, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>{feature}</span>
                  </div>
                  {index < features.length - 1 && showlines && (
                    <div className="w-full h-[2px] bg-white/10  mt-2"></div>
                  )}
                </li>
              ))}
            </ul>
            {descriptionBelowFeatures && (
              <p className="text-sm sm:text-base md:text-lg text-white mt-6  px-4 lg:px-0">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
