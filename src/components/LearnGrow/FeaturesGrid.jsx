import React, { useState } from 'react';
import { Check } from 'lucide-react';
import assets from '../../assets/assets';

const finsaiTradeFeatures = [
  {
    id: 1,
    icon: assets.metatrader,
    title: "MetaTrader 5",
    description: "Advanced trading platform with powerful tools",
    features: [
      "Real-time market data",
      "Advanced charting tools",
      "Automated trading (EA support)",
      "Multiple order types",
      "Risk management tools"
    ],
  },
  {
    id: 2,
    icon: assets.webtrader,
    title: "WebTrader",
    description: "Trade directly from your browser without downloads",
    features: [
      "No installation required",
      "Full trading functionality",
      "Real-time execution",
      "Advanced analytics",
      "Secure encrypted connection"
    ],
  },
  ];

const finsaiAcademyFeatures = [
  {
    id: 1,
    icon: assets.Community,
    title: "Interactive Courses",
    description: "Learn trading with hands-on interactive courses",
    features: [
      "Video lessons with experts",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate upon completion",
      "Lifetime access"
    ],
    footer: "Learn at your own pace"
  },
  {
    id: 2,
    icon: assets.Ecommerce,
    title: "Market Analysis",
    description: "Daily market analysis and trading insights",
    features: [
      "Daily market reports",
      "Technical analysis videos",
      "Economic calendar",
      "Trading signals",
      "Expert webinars"
    ],
    footer: "Stay informed with market updates"
  },
  {
    id: 3,
    icon: assets.Handshake,
    title: "Community Support",
    description: "Join our thriving trading community",
    features: [
      "Discussion forums",
      "Mentor support",
      "Live trading sessions",
      "Peer learning",
      "Success stories"
    ],
    footer: "Learn together, trade together"
  },
  {
    id: 4,
    icon: assets.Tags,
    title: "Premium Resources",
    description: "Access exclusive trading tools and resources",
    features: [
      "Advanced indicators",
      "Strategy templates",
      "Trading bots",
      "Historical data",
      "Backtesting tools"
    ],
    footer: "Everything you need to succeed"
  },
  {
    id: 5,
    icon: assets.Securityshield,
    title: "Risk Management",
    description: "Learn essential risk management techniques",
    features: [
      "Position sizing strategies",
      "Stop-loss techniques",
      "Risk-reward ratios",
      "Portfolio diversification",
      "Psychology of trading"
    ],
    footer: "Trade smart, trade safe"
  }
];

const FeaturesGrid = ({
  title = "",
  subtitle = "",
  columns = 3,
  viewAllText = "Learn More",
  onViewAll = () => {},
  showIcons = true,
  showIconBg = true,
  showTabs = true,
  showViewAllButton = true,
  tradeFeatures = finsaiTradeFeatures,
  academyFeatures = finsaiAcademyFeatures,
  features = null,
  checkIconSize = 12,
  iconSize = "w-10 h-10 sm:w-13 sm:h-13",
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState('trade');
  const currentFeatures = features ? features : (activeTab === 'trade' ? tradeFeatures : academyFeatures);

  const itemWidths = {
    1: 'lg:w-full',
    2: 'lg:w-1/2',
    3: 'lg:w-1/3',
    4: 'lg:w-1/4',
  };

  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {showTabs && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={() => setActiveTab('trade')}
              className={`w-full sm:w-auto sm:min-w-[140px] md:min-w-[155px] h-[44px] px-4 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-300
                         ${activeTab === 'trade' ? 'bg-[#496DAB] text-white' : 'bg-transparent border border-white/20 text-white hover:border-[#496DAB]'}`}
            >
              Finsai Trade
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`w-full sm:w-auto sm:min-w-[140px] md:min-w-[170px] h-[44px] px-4 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-300
                         ${activeTab === 'academy' ? 'bg-[#496DAB] text-white' : 'bg-transparent border border-white/20 text-white hover:border-[#496DAB]'}`}
            >
              Finsai Academy
            </button>
          </div>
        )}

        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">{title}</h2>}
            {subtitle && <p className="text-base md:text-xl text-[#8892b0] max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="flex flex-wrap justify-center -mx-4">
          {currentFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`p-4 w-full md:w-1/2 ${itemWidths[columns]} flex flex-col relative`}
            >
              <div className="group bg-transparent hover:border-[rgba(73,109,171,0.4)] transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 flex flex-col h-full items-start rounded-lg">

                {showIcons && feature.icon && (
                  <div className={`mb-6 p-2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-colors duration-300 ${showIconBg ? 'bg-white/10 group-hover:bg-white/15' : ''}`}>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className={`${iconSize} object-contain`}
                    />
                  </div>
                )}

                <h3 className="text-xl md:text-[22px] lg:text-[20px] font-extrabold text-white mb-3 uppercase tracking-wide text-left">
                  {feature.title}
                </h3>

                <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed text-left">
                  {feature.description}
                </p>

                {feature.features && feature.features.length > 0 && (
                  <ul className="mb-6 flex-grow text-left">
                    {feature.features.map((featureItem, fIndex) => (
                      <li key={fIndex} className="flex flex-col gap-3 py-2 md:py-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 rounded-full bg-white/10 border border-white/20 w-5 h-5 flex items-center justify-center mt-0.5">
                            <Check size={checkIconSize} className="text-[#496DAB]" />
                          </div>
                          <span className="text-white text-sm md:text-base leading-relaxed hover:text-[#a0d4f5] transition-colors duration-200">
                            {featureItem}
                          </span>
                        </div>
                        {fIndex < feature.features.length - 1 && (
                          <div className="w-3/4 h-px bg-white/40 ml-8"></div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {showViewAllButton && (
                  <button
                    onClick={() => onViewAll(feature)}
                    className="text-[#496DAB] text-base md:text-xl font-semibold hover:text-[#7eb8da]
                               transition-colors duration-200 flex items-center gap-1 mt-auto
                               border-b-2 border-[#496DAB] w-fit"
                  >
                    {viewAllText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
