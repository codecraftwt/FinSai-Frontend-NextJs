import React from 'react';

/**
 * HeroWithImage - Reusable hero section with text and image
 * 
 * @param {string} title - Main title text (optional)
 * @param {string} description - Description text
 * @param {string} buttonText - CTA button text
 * @param {function} onButtonClick - Button click handler
 * @param {string} image - Image source
 * @param {string} imageAlt - Image alt text
 * @param {boolean} imageOnLeft - If true, image on left; default is right
 * @param {string} bgColor - Background color class
 * @param {string} className - Additional className for section
 */
const HeroWithImage = ({
    title,
    description,
    buttonText,
    onButtonClick,
    image,
    imageAlt = "Hero Image",
    imageOnLeft = false,
    bgColor = "bg-[#0B152A]",
    className = ""
}) => {
    return (
        <section className={`relative py-8 md:py-14 px-4 md:px-8 lg:px-16 ${bgColor} ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className={`${imageOnLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                        {title && (
                            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white ${description ? 'mb-6' : 'mb-8'}`}>
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                                {description}
                            </p>
                        )}
                        {buttonText && (
                            <button 
                                onClick={onButtonClick}
                                className="px-6 md:px-8 py-3 md:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 hover:shadow-lg transition-all duration-300"
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>

                    {/* Image */}
                    <div className={`flex justify-center ${imageOnLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full max-w-2xl h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWithImage;

