import React from 'react';

/**
 * FeatureBox - Reusable feature/benefit box component
 * 
 * @param {string|React.Element} icon - Icon image source or React element
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 * @param {string} className - Additional className
 */
const FeatureBox = ({
    icon,
    title,
    description,
    className = ''
}) => {
    return (
        <div className={`backdrop-blur-sm p-6 md:p-8 text-center hover:border-[#A0EAF5]/50 transition-all duration-300 ${className}`}>
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center">
                {typeof icon === 'string' ? (
                    <img src={icon} alt={title} className="w-12 h-12 md:w-14 md:h-14" />
                ) : (
                    icon
                )}
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white uppercase">
                {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {description}
            </p>
        </div>
    );
};

export default FeatureBox;

