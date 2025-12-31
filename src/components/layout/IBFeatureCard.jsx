import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Megaphone,
  Monitor,
  User,
} from "lucide-react";
import assets from "../../assets/assets.jsx";

const ibCards = [
  {
    id: 1,
    title: "Fast Commission Withdrawals",
    description:
      "Fast commission withdrawals ensure quick and hassle-free access to your earnings, keeping your cash flow smooth and reliable.",
    icon: assets.Withdrawal,
  },
  {
    id: 2,
    title: "Marketing Materials and Support",
    description:
      "Marketing materials and dedicated support help you promote effectively, attract more traders, and grow your business with confidence.",
    icon: assets.handshake,
  },
  {
    id: 3,
    title: "Live Tracking of Referrals",
    description:
      "Live tracking of referrals and performance gives you real-time visibility into sign-ups, activity, and earnings for better control and growth.",
    icon:assets.laptoppackage,
  },
  {
    id: 4,
    title: "Dedicated Account Manager",
    description:
      "Get personalized assistance from a dedicated account manager whenever you need expert guidance.",
    icon: assets.Dashboard,
  },
];

export const IBFeaturesData = ibCards;

export const IBFeatureCard = ({ icon, title, description }) => {
  const isReactComponent = typeof icon === 'function' || (typeof icon === 'object' && icon.$$typeof);
  const Icon = isReactComponent ? icon : null;

  return (
    <div className="min-h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-b from-[#496DAB] from-[30%] to-[#1F9FB2] rounded-[8px] p-4 md:p-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center text-center">
      <div className="mb-4 md:mb-6 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center">
        {isReactComponent ? (
          <Icon className="h-full w-full md:h-7 md:w-7 text-cyan-200" />
        ) : (
          <img
            src={icon}
            alt={title}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      <h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase mb-3 md:mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-base text-white leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const IBFeatureCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 640 ? 1 : 3);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ibCards.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= ibCards.length - visibleCards ? 0 : prev + 1
    );
  };

  const getVisibleCards = () => {
    return ibCards.slice(currentIndex, currentIndex + visibleCards);
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4">
            Why Join IB Program
          </h2>
          <div className="relative w-[80px] md:w-[100px] h-[2px] bg-[#496DAB] rounded-md my-4 md:my-6 mx-auto">
            <div className="absolute left-[-4px] md:left-[-5px] top-1/2 -translate-y-1/2 w-[6px] md:w-[8px] h-[6px] md:h-[8px] bg-[#496DAB] rotate-45"></div>
          </div>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center -translate-x-2 md:-translate-x-4 lg:-translate-x-6 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Cards */}
          <div className={`grid grid-cols-${visibleCards} gap-6 md:gap-8 px-6 md:px-8`}>
            {getVisibleCards().map((card) => {
              const isReactComponent = typeof card.icon === 'function' || (typeof card.icon === 'object' && card.icon.$$typeof);
              const Icon = isReactComponent ? card.icon : null;
              return (
                <div
                  key={card.id}
                  className="min-h-[350px] md:h-[400px] lg:h-[400px] bg-gradient-to-b from-[#496DAB] from-[31%] to-[#1F9FB2] rounded-[8px] p-3 md:p-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center text-center"
                >
                  <div className="mb-4 md:mb-6 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center ">
                    {isReactComponent ? (
                      <Icon className="h-full w-full md:h-7 md:w-7 text-cyan-200" />
                    ) : (
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>

                  <h3 className="text-sm md:text-base lg:text-xl font-semibold uppercase mb-3 md:mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-base text-white leading-relaxed ">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center translate-x-2 md:translate-x-4 lg:translate-x-6 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Navigation Dots - Only show when 1 card is visible */}
          {visibleCards === 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {ibCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#496DAB] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default IBFeatureCardCarousel;