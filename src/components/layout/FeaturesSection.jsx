import React from 'react';

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="flex items-start gap-4 md:gap-5 lg:gap-6">
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full backdrop-blur-sm flex items-center justify-center p-3 md:p-2 border-[#A0EAF5]/20 ">
            <img
                src={icon}
                alt={title}
                className="w-12 h-12 object-contain items-center justify-center"
            />
        </div>
        <div className="flex-1">
            <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-3 uppercase tracking-wide">
                {title}
            </h3>
            <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

// Features Section Component
const FeaturesSection = ({
    title,
    features = [],
    showTitle = true,
    showUnderline = true,
    className = "",
    sectionClassName = ""
}) => {
    return (
        <section className={`py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 xl:px-20 bg-transparent relative overflow-hidden ${sectionClassName}`}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                {showTitle && title && (
                    <div className="text-center mb-10 md:mb-12 lg:mb-16">
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                            {title}
                        </h2>
                        {showUnderline && (
                            <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-6 my-5 mx-auto">
                                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* Features Grid - 2 columns */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-white ${className}`}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;


