import React from 'react';

/**
 * SectionTitle - Reusable section title component
 * 
 * @param {string} title - Main title
 * @param {string} subtitle - Subtitle text
 * @param {string} align - 'center' | 'left' | 'right'
 * @param {string} className - Additional className
 */
const SectionTitle = ({
    title,
    subtitle,
    align = 'center',
    className = ''
}) => {
    const alignClasses = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right'
    };

    return (
        <div className={`mb-12 ${alignClasses[align]} ${className}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-white/80">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;

