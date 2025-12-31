import React from 'react';

/**
 * CTAButton - Reusable centered call-to-action button section
 * 
 * @param {string} text - Button text
 * @param {function} onClick - Click handler
 * @param {string} variant - 'primary' | 'outline' | 'secondary'
 * @param {string} bgColor - Background color for the section
 * @param {string} className - Additional className
 */
const CTAButton = ({
    text,
    onClick,
    variant = 'primary',
    bgColor = 'bg-transparent',
    className = ''
}) => {
    const getButtonStyles = () => {
        switch (variant) {
            case 'outline':
                return 'border-2 border-[#496DAB] text-white hover:bg-[#496DAB]/20';
            case 'secondary':
                return 'bg-white/10 border border-white/20 text-white hover:bg-white/20';
            case 'primary':
            default:
                return 'bg-[#496DAB] text-white hover:bg-[#496DAB]/90 hover:shadow-lg';
        }
    };

    return (
        <div className={`text-center py-8 md:py-12 ${bgColor} ${className}`}>
            <button 
                onClick={onClick}
                className={`px-6 md:px-8 py-3 md:py-4 font-semibold rounded-lg transition-all duration-300 ${getButtonStyles()}`}
            >
                {text}
            </button>
        </div>
    );
};

export default CTAButton;

