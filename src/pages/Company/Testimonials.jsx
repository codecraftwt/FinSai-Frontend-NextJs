import React, { useState, useEffect } from 'react';
import assets from '../../assets/assets';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

// ============================================
// Testimonials Data
// ============================================

// ============================================
// Testimonials Data
// ============================================
const testimonialsData = [
    {
        quote: "I've Tried Multiple Trading Platforms, But Finsai Trade Feels Different. The Interface Is Clean And Intuitive, Making It So Easy To Track Trades.",
        name: "Rohan M., India",
        category: "Retail Investors",
        avatar: assets.TestimonialAvatar1
    },
    {
        quote: "The Webinars Are Incredibly Valuable. I Learned Strategies In One Session That I Applied The Very Next Day With Great Results.",
        name: "Sarah L., UK",
        category: "Retail Investors",
        avatar: assets.TestimonialAvatar2
    },
    {
        quote: "Customer Support Actually Listens And Resolves Issues Quickly. It Feels Like A Platform That Really Cares About Its Traders.",
        name: "David K., Australia",
        category: "Professional Trainers",
        avatar: assets.TestimonialAvatar3
    },
    {
        quote: "The market analysis tools are exceptional. I've improved my trading accuracy by 40% since switching to Finsai Trade.",
        name: "Michael R., Canada",
        category: "Day Traders",
        avatar: assets.TestimonialAvatar1
    },
    {
        quote: "What impressed me most is the transparency. No hidden fees, clear pricing, and excellent execution speeds.",
        name: "Emma T., Germany",
        category: "Swing Traders",
        avatar: assets.TestimonialAvatar2
    },
    {
        quote: "As a beginner, the educational resources and demo account helped me gain confidence before trading with real money.",
        name: "James W., USA",
        category: "New Investors",
        avatar: assets.TestimonialAvatar3
    },
    {
        quote: "The mobile app is fantastic! I can manage my portfolio on the go without missing any opportunities.",
        name: "Priya S., Singapore",
        category: "Mobile Traders",
        avatar: assets.TestimonialAvatar1
    },
    {
        quote: "Fast withdrawals and deposits. Finally a platform that values my time and doesn't make me wait for my money.",
        name: "Carlos M., Brazil",
        category: "Active Traders",
        avatar: assets.TestimonialAvatar2
    },
    {
        quote: "The risk management tools have saved me from significant losses multiple times. Essential for any serious trader.",
        name: "Anna K., Netherlands",
        category: "Risk-Conscious Traders",
        avatar: assets.TestimonialAvatar3
    }
];

// ============================================
// Main Testimonials Page Component
// ============================================
const TestimonialsPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D0E]">
            {/* Header */}
            <Header isScrolled={isScrolled} isFixed={true} />

            {/* Banner Section */}
            <Banner
                heading="Testimonials"
                description="We Provide Solutions"
                backgroundImage={assets.Companybanner}
                breadcrumbBase="HOME"
                breadcrumbCurrent="COMPANY"
            />

            {/* Testimonials Carousel Section */}
            <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-12 xl:px-20 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <TestimonialsCarousel
                        testimonials={testimonialsData}
                        autoPlayInterval={3000}
                    />
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}

        </div>
    );
};

export default TestimonialsPage;

