import React from 'react';

/**
 * WebinarCard - Reusable card for webinars/events
 * 
 * @param {string} image - Card image source
 * @param {string} imageAlt - Image alt text
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} date - Event date
 * @param {string} time - Event time
 * @param {string} buttonText - Button text
 * @param {function} onButtonClick - Button click handler
 * @param {string} tag - Optional tag/label (e.g., "Live", "Upcoming")
 */
const WebinarCard = ({
    image,
    imageAlt = "Webinar Image",
    title,
    description,
    date,
    time,
    buttonText = "Register Now",
    onButtonClick,
    tag
}) => {
    return (
        <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#A0EAF5]/30 transition-all duration-300 flex flex-col">
            {/* Image Section */}
            <div className="relative p-4 bg-[#0D0D0E]">
                <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-contain"
                    />
                    {tag && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-[#496DAB] text-white text-xs font-semibold rounded-full">
                            {tag}
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 bg-[#1a1a2e]/60 flex-1 flex flex-col">
                {/* Date & Time */}
                {(date || time) && (
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                        {date && <span>{date}</span>}
                        {date && time && <span>•</span>}
                        {time && <span>{time}</span>}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-1">{description}</p>

                {/* Button */}
                <div className="flex justify-center mt-auto">
                    <button
                        onClick={onButtonClick}
                        className="w-full max-w-[196px] h-[49px] bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 transition-all duration-300"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebinarCard;

