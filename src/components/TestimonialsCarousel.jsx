import React, { useState, useEffect, useCallback } from 'react';
import assets from '../assets/assets';

// Testimonial Card Component - Updated for 3D Carousel with vertical offset
const TestimonialCard = ({ quote, name, category, avatar, position, totalItems }) => {
    // Determine position classes based on carousel position
    let positionClass = "";
    let sizeClass = "";

    if (position === 0) {
        // Center card - fully visible, elevated
        positionClass = "z-20 opacity-100";
        sizeClass = "w-[300px] h-[340px] sm:w-[320px] sm:h-[340px] md:w-[380px] md:h-[380px]";
    } else if (position === 1) {
        // Right card
        positionClass = "z-10 opacity-70 md:opacity-80";
        sizeClass = "w-[300px] h-[340px] sm:w-[320px] sm:h-[340px] md:w-[380px] md:h-[380px]";
    } else if (position === totalItems - 1) {
        // Left card
        positionClass = "z-10 opacity-70 md:opacity-80";
        sizeClass = "w-[300px] h-[340px] sm:w-[320px] sm:h-[340px] md:w-[380px] md:h-[380px]";
    } else {
        // Hidden cards
        positionClass = "hidden z-0 opacity-50";
        sizeClass = "w-[300px] h-[340px] sm:w-[320px] sm:h-[340px] md:w-[380px] md:h-[380px]";
    }

    // Calculate transform based on position - center is elevated, sides are lower
    const getTransform = () => {
        if (position === 0) {
            // Center card - slightly elevated (translateY negative = up)
            return 'translateX(-50%) translateX(0) translateY(-20px) scale(1)';
        } else if (position === 1) {
            // Right card - lower (translateY positive = down)
            return 'translateX(-50%) translateX(200px) translateY(30px) scale(0.85)';
        } else if (position === totalItems - 1) {
            // Left card - lower (translateY positive = down)
            return 'translateX(-50%) translateX(-200px) translateY(30px) scale(0.85)';
        }
        return 'translateX(-50%) scale(0.8)';
    };

    return (
        <div
            className={`
                absolute left-1/2 transform
                flex flex-col
                rounded-xl overflow-hidden
                
                border border-white/20
                transition-all duration-500 ease-in-out
                ${positionClass}
                ${sizeClass}
            `}
            style={{ transform: getTransform() }}
            data-position={position}
        >
            {/* Card Content */}
            <div className="flex flex-col h-full bg-[rgba(73,109,171,0.08)]">
                {/* Quote Icon */}
                <div className="mb-3 md:mb-4 transition-all duration-500">
                    <img
                        src={assets.TestimonialQuote}
                        alt="Quote"
                        className="object-contain transition-all ml-3 mt-2 duration-500 w-10 h-10 md:w-14 md:h-14"
                    />
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed flex-grow mb-4 p-5 transition-all duration-500 text-sm md:text-base">
                    "{quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#496DAB]/20 bg-white/5 p-5 ">
                    <div className="rounded-full overflow-hidden bg-white/5 flex-shrink-0 transition-all duration-500 w-12 h-12 md:w-14 md:h-14">
                        {avatar ? (
                            <img
                                src={avatar}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#A0EAF5] text-lg font-semibold">
                                {name?.charAt(0) || 'U'}
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="text-white font-semibold transition-all duration-500 text-sm md:text-base">
                            {name}
                        </h4>
                        <p className="text-[#A0EAF5] transition-all duration-500 text-xs md:text-sm">
                            {category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Carousel Dots Component
const CarouselDots = ({ total, current, onDotClick }) => (
    <div className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-0">
        {Array.from({ length: total }).map((_, index) => (
            <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`
                    w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
                    ${current === index
                        ? 'bg-[#496DAB]/60 scale-110'
                        : 'bg-[#ffffff]/10 border border-white/20 hover:bg-white/20'
                    }
                `}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
    </div>
);

// Testimonials Carousel Component - 3D Style with vertical offset
const TestimonialsCarousel = ({ testimonials, autoPlayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-play functionality (from PlatformCards)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, autoPlayInterval, testimonials.length]);

    // Touch interaction for mobile
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handleTouchStart = useCallback((e) => {
        if (!isMobile) return;
        setTouchStartX(e.touches[0].clientX);
    }, [isMobile]);

    const handleTouchMove = useCallback((e) => {
        if (!isMobile) return;
        setTouchEndX(e.touches[0].clientX);
    }, [isMobile]);

    const handleTouchEnd = useCallback(() => {
        if (!isMobile || touchStartX === 0) return;

        const distance = touchStartX - touchEndX;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                // Swipe left - next slide
                handleNext();
            } else if (distance < 0) {
                // Swipe right - previous slide
                handlePrev();
            }
        }

        setTouchStartX(0);
        setTouchEndX(0);
    }, [isMobile, touchStartX, touchEndX, handleNext, handlePrev]);

    return (
        <div className="w-full">
            {/* Responsive CSS for carousel positioning with vertical offset */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    /* Center card - elevated */
                    [data-position="0"] {
                        transform: translateX(-50%) translateX(0) translateY(-20px) scale(1) !important;
                    }

                    @media (max-width: 426px) {
                        [data-position="0"] {
                            transform: translateX(-50%) translateX(0) translateY(-30px) scale(1) !important;
                        }
                        [data-position="1"] {
                            transform: translateX(-50%) translateX(295px) translateY(40px) scale(0.85) !important;
                        }
                        [data-position="${testimonials.length - 1}"] {
                            transform: translateX(-50%) translateX(-295px) translateY(40px) scale(0.85) !important;
                        }
                    }

                    /* Responsive carousel positioning - side cards lower */
                    @media (min-width: 768px) {
                        [data-position="0"] {
                            transform: translateX(-50%) translateX(0) translateY(-30px) scale(1) !important;
                        }
                        [data-position="1"] {
                            transform: translateX(-50%) translateX(370px) translateY(40px) scale(0.85) !important;
                        }
                        [data-position="${testimonials.length - 1}"] {
                            transform: translateX(-50%) translateX(-370px) translateY(40px) scale(0.85) !important;
                        }
                    }
                    @media (min-width: 1024px) {
                        [data-position="0"] {
                            transform: translateX(-50%) translateX(0) translateY(-40px) scale(1) !important;
                        }
                        [data-position="1"] {
                            transform: translateX(-50%) translateX(380px) translateY(50px) scale(0.85) !important;
                        }
                        [data-position="${testimonials.length - 1}"] {
                            transform: translateX(-50%) translateX(-380px) translateY(50px) scale(0.85) !important;
                        }
                    }
                    @media (min-width: 1280px) {
                        [data-position="0"] {
                            transform: translateX(-50%) translateX(0) translateY(-10px) scale(1) !important;
                        }
                        [data-position="1"] {
                            transform: translateX(-50%) translateX(450px) translateY(60px) scale(1) !important;
                        }
                        [data-position="${testimonials.length - 1}"] {
                            transform: translateX(-50%) translateX(-450px) translateY(60px) scale(1) !important;
                        }
                    }
                `,
                }}
            />

            {/* Cards Container */}
            <div className="relative w-full max-w-7xl mx-auto">
                <div
                    className="relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] md:min-h-[520px] overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {testimonials.map((testimonial, index) => {
                        const position = (index - currentIndex + testimonials.length) % testimonials.length;

                        // Only show 3 cards at a time for proper carousel cycling
                        const isVisible = position === 0 || position === 1 || position === testimonials.length - 1;

                        if (!isVisible) return null;

                        return (
                            <TestimonialCard
                                key={index}
                                quote={testimonial.quote}
                                name={testimonial.name}
                                category={testimonial.category}
                                avatar={testimonial.avatar}
                                position={position}
                                totalItems={testimonials.length}
                            />
                        );
                    })}
                </div>
                <CarouselDots
                    total={testimonials.length}
                    current={currentIndex}
                    onDotClick={goToSlide}
                />
                {/* Navigation Arrows - Below Center Card */}
                {/* <div className="flex items-center justify-center gap-4 mt-4">
                    <NavArrowButton direction="left" onClick={() => handleNavClick('left')} />
                    <NavArrowButton direction="right" onClick={() => handleNavClick('right')} />
                </div> */}
            </div>

            {/* Dots Navigation */}
            {/* <CarouselDots
                total={testimonials.length}
                current={currentIndex}
                onDotClick={goToSlide}
            /> */}
        </div>
    );
};

export default TestimonialsCarousel;
