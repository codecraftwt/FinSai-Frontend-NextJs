import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import assets from '../../assets/assets';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import FeaturesSection from '../../components/layout/FeaturesSection';
// ============================================
// Reusable Components
// ============================================

// Story Section Component - Reusable for Our Story sections
const StorySection = ({
    image,
    imageAlt = "Story Image",
    title,
    paragraphs = [],
    imagePosition = 'left', // 'left' or 'right'
    showUnderline = false,
    className = ""
}) => (
    <section className={`px-4 md:px-8 lg:px-12 xl:px-20 ${className}`}>
        <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-10 lg:gap-16`}>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                    {title && (
                        <>
                            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
                                {title}
                            </h2>
                            {showUnderline && (
                                <div className="relative w-[80px] md:w-[100px] h-[3px] bg-[#496DAB] mb-6 md:mb-8">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#496DAB] rotate-45"></div>
                                </div>
                            )}
                        </>
                    )}

                    <div className="space-y-4 md:space-y-6">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Growth Section Component - Figma: 1497.82px × 621px
const GrowthSection = ({ image, imageAlt = "Growth Image" }) => (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto">
            {/* Container with same height and width for both sections */}
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[621px] rounded-lg overflow-hidden">
                {/* Image Section - Full width, behind (lower z-index) */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover object-[center_30%] lg:object-center"
                    />
                </div>

                {/* Gradient Section - 50% width, in front (higher z-index) */}
                <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-10">
                    <div
                        className="relative h-full w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex items-center"
                        style={{
                            background: 'linear-gradient(to right, rgba(73, 109, 171, 0.8) 31%, rgba(31, 159, 178, 0.8) 100%)'
                        }}
                    >
                        {/* Content */}
                        <div className="max-w-[420px] w-full relative z-10">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-bold leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                                <span className="text-[#A0EAF5]">Modern, Efficient</span> And{' '}
                                <span className="text-[#A0EAF5]">Consistent</span> Financial Growth.
                            </h2>

                            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
                                We Want To Provide Our Clients With An Efficient Way Of Managing Their Finances By Combining All Of These Elements Into A Single Financial Ecosystem.
                            </p>

                            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                                In The Quickly Evolving Economic Environment Of Today, Our Dedication To Innovation, Security, And Top-Notch Customer Service Positions Us As A Leading Provider Of Holistic Financial Solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// Banner Component for About Page
const AboutBanner = ({ heading, subtitle, backgroundImage }) => (
    <div className="w-full">
        <section className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[542px] xl:h-[629px] overflow-hidden">
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-10 pt-[80px] md:pt-[75px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center tracking-wide mb-3 md:mb-4 lg:mb-6">
                    {heading}
                </h1>

                {subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 text-center max-w-3xl px-4">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[87px] bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto h-full px-4 md:px-6 lg:px-10 flex items-center">
                <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-white/80">
                    <span className="hover:text-white cursor-pointer transition-colors uppercase tracking-wider">
                        HOME
                    </span>
                    <ChevronRight size={16} className="text-white/60 sm:w-[18px] sm:h-[18px]" />
                    <span className="text-white font-medium uppercase tracking-wider">
                        COMPANY
                    </span>
                </nav>
            </div>
        </div>
    </div>
);

// ============================================
// Features Data - Ordered to match screenshot layout
// Left Column: Innovative, User-Friendly, Expert, Support
// Right Column: Secure, Compliance, Accessible, Pricing
// ============================================
const featuresData = [
    // Left Column
    {
        icon: assets.AboutFrame1,
        title: "Innovative Financial Solutions",
        description: "Invest In A Range Of Financial Instruments, Including Forex, Stocks, Commodities, Indices, And Cryptocurrencies. Finsai Trade Offers Innovative Financial Solutions Tailored To Your Unique Needs."
    },
     {
        icon: assets.AboutFrame7,
        title: "Secure And Reliable",
        description: "Finsai Trade Takes Security And Reliability Seriously, With State-Of-The-Art Security Measures And Fast, Secure Transactions."
    },
    {
        icon: assets.AboutFrame2,
        title: "User-Friendly Platform",
        description: "Our Easy-To-Use Platform Includes A Range Of Advanced Trading Tools To Help You Make Informed Investment Decisions."
    },
     {
        icon: assets.AboutFrame6,
        title: "Compliance With Regulations",
        description: "We're Committed To Compliance With All Relevant Regulations And Standards, Including AML And KYC Regulations, To Protect Your Assets."
    },
    {
        icon: assets.AboutFrame3,
        title: "Expert Investment Advice",
        description: "Our Experienced Investment Professionals Are Dedicated To Helping You Achieve Your Financial Goals Through Active And Passive Management Strategies."
    },
    {
        icon: assets.AboutFrame5,
        title: "Accessible To Everyone",
        description: "Finsai Trade Believes That Everyone Should Have Access To The Financial Markets, With Low Minimum Deposits And No Hidden Fees."
    },
    {
        icon: assets.AboutFrame8,
        title: "Dedicated Customer Support",
        description: "Our 24/7 Customer Support Team Is Available To Answer Your Questions And Help You With Any Issues You May Have."
    },
    {
        icon: assets.AboutFrame4,
        title: "Transparent Pricing",
        description: "We Offer Competitive Pricing On Our Financial Products And Services, With No Hidden Fees Or Charges."
    }
];

// Story paragraphs data
const storyParagraphs = {
    main: [
        "Finsai Trade Was Born Out Of A Simple Idea Shared By A Group Of Passionate Traders And Investors To Make Trading Smarter, Simpler, And Accessible For Everyone. With Years Of Experience Across Global Markets And A Track Record Of Successful Exits, This Team Knew Firsthand The Struggles And Complexities That Often Keep People Away From Trading Opportunities.",
        "Finsai Trade Was Born Out Of A Simple Idea Shared By A Group Of Passionate Traders And Investors To Make Trading Smarter, Simpler, And Accessible For Everyone. With Years Of Experience Across Global Markets And A Track Record Of Successful Exits, This Team Knew Firsthand The Struggles And Complexities That Often Keep People Away From Trading Opportunities."
    ],
    secondary: [
        "But The Journey Doesn't End At Trading. At Finsai Trade, Knowledge Is Just As Important As Execution. That's Why Finsai Academy Offers Courses, Ebooks, Coaching, And Live Webinars To Empower Users With Insights That Transform Their Trading Journey.",
        "Finsai Trade Is More Than A Platform. It's A Community, A Guide, And A Partner For Those Who Believe In Taking Charge Of Their Financial Future."
    ]
};

// ============================================
// Main About Page Component
// ============================================
const AboutPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D0E] pb-[10px] relative overflow-hidden z-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
                {/* <div className="absolute top-[30%] left-[10%] w-[350px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[300px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div> */}
                <div className="absolute top-[35%] left-[5%] sm:top-[65%] sm:left-[-10%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full filter blur-[100px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute top-[65%] left-[45%] sm:top-[90%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[180px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>

                {/* <div className="absolute bottom-[25%] left-[15%] w-[250px] h-[100px] sm:w-[300px] sm:h-[150px] md:w-[400px] md:h-[200px] bg-gradient-radial bg-radial-account-sm rounded-full filter blur-[80px] opacity-65 -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"></div> */}
                {/* <div className="absolute top-[80%] left-[70%] w-[200px] h-[80px] sm:w-[250px] sm:h-[100px] md:w-[350px] md:h-[150px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[70px] opacity-55 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]"></div> */}
            </div>

            {/* Header */}
            <Header isScrolled={isScrolled} isFixed={true} />

            {/* Banner Section */}
            <Banner
                heading="About"
                description="We Provide Solutions"
                backgroundImage={assets.Companybanner}
                breadcrumbBase="HOME"
            />

            {/* <AboutBanner
                heading="About Us"
                subtitle="We Provide Solutions"
                backgroundImage={assets.CareerBanner}
            /> */}

            {/* Our Story Section - Image Left */}
            <div className='py-12 md:py-16 lg:py-20 '>
                <StorySection
                    // image={assets.CompanyGroup}
                    image={assets.CompanyFrame}
                    imageAlt="Finsai Trade Team Illustration"
                    title="Our Story"
                    paragraphs={storyParagraphs.main}
                    imagePosition="left"
                    showUnderline={true}
                    className="mb-20"
                />

                {/* Secondary Story Section - Image Right */}
                <StorySection
                    // image={assets.CompanyFrame}
                    image={assets.CompanyGroup}
                    imageAlt="Finsai Academy Illustration"
                    paragraphs={storyParagraphs.secondary}
                    imagePosition="right"
                    showUnderline={false}
                />
            </div>



            {/* About Finsai Trade Features Section */}
            <FeaturesSection
                title="About Finsai Trade"
                features={featuresData}
                showTitle={true}
                showUnderline={true}
            />

            {/* Growth Section with Hand Holding Coin Image */}
            <GrowthSection
                image={assets.CompanyHandCoin}
                imageAlt="Hand Holding Cryptocurrency Coins"
            />

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default AboutPage;

