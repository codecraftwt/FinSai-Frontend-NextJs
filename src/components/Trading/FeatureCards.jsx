import React from 'react';
import assets from '../../assets/assets';

const FeatureCards = ({ images = [] }) => {
  const features = [
    {
      title: "Beginner Mode: Guided Trades & Tutorials",
      image: assets.Tutorial
    },
    {
      title: "Seamless Switching Between Devices",
      image: assets.Switching
    },
    {
      title: "Pro Tools: Guided Trades & Tutorials",
      image: assets.Trades
    },
    {
      title: "Multi-Lingual Support (EN, Hindi, Arabic, Etc.)",
      image: assets.MultiSupport
    }
  ];

  return (
    <section className="w-full bg-black py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-[#0B0F19]
                border border-white/10
                p-6 
                flex 
                flex-col 
                items-center 
                text-center
                hover:bg-gray-700/90
                transition-colors
                duration-300
                min-h-[280px]
              "
            >
              {/* Heading */}
              <h3 className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {feature.title}
              </h3>

              {/* Image */}
              <div className="w-full flex-1 flex items-center justify-center">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-contain max-h-28"
                  />
                ) : (
                  <div className="w-full h-40 flex items-center justify-center text-gray-500 text-sm">
                    Image not provided
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

export default FeatureCards;

