import React from 'react';
import { BookOpen } from 'lucide-react';

const defaultFeatures = [ 
  {
    id: 1,
    icon: 'educational',
    title: 'Extensive Educational Resources',
    description: 'Access A Wealth Of Extensive Educational Resources Designed To Enhance Your Trading Skills, From Beginner Tips To Advanced Strategies.'
  },
  {
    id: 2,
    icon: 'instructors',
    title: 'Skilled Instructors',
    description: 'Learn From Skilled Instructors With Years Of Market Experience, Offering Personalized Guidance To Help You Master Trading Strategies.'
  },
  {
    id: 3,
    icon: 'discussion',
    title: 'Virtual Discussion Platforms',
    description: 'Engage In Dynamic Virtual Discussion Platforms Where Traders Can Share Insights, Ask Questions, And Collaborate In Real Time.'
  },
  {
    id: 4,
    icon: 'courses',
    title: 'Courses For All Levels',
    description: 'Explore A Wide Range Of Courses Designed For All Levels, From Beginner Basics To Advanced Trading Techniques.'
  },
  {
    id: 5,
    icon: 'practice',
    title: 'Real Life Trading Practice',
    description: 'Gain Hands-On Experience With Real-Life Trading Practice, Using Simulated Environments That Mirror Actual Market Conditions.'
  },
  {
    id: 6,
    icon: 'certification',
    title: 'Certification',
    description: 'Earn Recognized Certification Upon Completing Courses, Validating Your Trading Expertise And Enhancing Your Credibility In The Financial World.'
  }
];

const FeatureIcon = ({ type, className }) => {
  const iconProps = {
    className: `${className}`,
    strokeWidth: 1.5
  };

  switch (type) {
    case 'educational':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="32" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="35" cy="35" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M32 35h6M35 32v6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'instructors':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="38" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M6 24c0-2.21 1.79-4 4-4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M42 24c0-2.21-1.79-4-4-4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'discussion':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="10" y="12" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="18" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="28" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="30" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="30" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="30" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'courses':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="12" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="26" y="12" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M13 6v6M35 6v6" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="8" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="8" y1="26" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="30" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="30" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M21 38l2 2 4-4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'practice':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M13 8h6M29 8h6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M14 8l2-4 2 4M30 8l2-4 2 4" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="21" y1="22" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="18" y1="28" x2="22" y2="30" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="30" y1="28" x2="26" y2="30" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'certification':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="26" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="35" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M32 38l2 2 4-4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    default:
      return <BookOpen {...iconProps} />;
  }
};

const LearnWithFinsai = ({
  title = "Choose To Learn With Finsai Trade",
  subtitle = "Here's What Makes Us Stand Out",
  features = defaultFeatures,
  className = ""
}) => {
  return (
    <section 
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #0d1e35 50%, #0a1628 100%)'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(73, 109, 171, 0.08) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-tight px-2"
            style={{ fontStyle: 'italic' }}
          >
            {title}
          </h2>
          <p className="text-[#8892b0] text-sm sm:text-base md:text-lg font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-8 rounded-lg transition-all duration-300 hover:bg-[rgba(73,109,171,0.05)]"
            >
              <div className="mb-4 sm:mb-5 md:mb-6 relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <FeatureIcon 
                    type={feature.icon} 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#7eb8da] transition-colors duration-300 group-hover:text-[#a0d4f5]"
                  />
                </div>
              </div>

              <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-3 sm:mb-4 leading-tight">
                {feature.title}
              </h3>

              <p className="text-[#8892b0] text-xs sm:text-sm leading-relaxed font-light max-w-[280px] sm:max-w-[300px] capitalize">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnWithFinsai;
