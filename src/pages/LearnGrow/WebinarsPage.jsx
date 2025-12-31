import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';

// Import reusable components
import { HeroWithImage } from '../../components/LearnGrow';

// Import assets
import GrowthImage from '../../assets/LearnGrow/Webinars/Growth.png';
import WebinarsImg1 from '../../assets/LearnGrow/Webinars/WebinarsImg1.png';
import WebinarsImg2 from '../../assets/LearnGrow/Webinars/WebinarsImg2.png';
import WebinarsImg3 from '../../assets/LearnGrow/Webinars/WebinarsImg3.png';
import LaptopIcon from '../../assets/LearnGrow/Webinars/LaptopWithCursor.png';
import Icon1 from '../../assets/LearnGrow/Webinars/Icon1.png';
import LawyerIcon from '../../assets/LearnGrow/Webinars/Lawyer.png';
import MeetingImage2 from '../../assets/LearnGrow/AcademyPage/two-young-worker-leading-business-meeting-about-cryptocurrencies-office 1.png';

const WebinarsPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [upcomingIndex, setUpcomingIndex] = useState(0);
    const [pastIndex, setPastIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Why Join features data
    const features = [
        {
            icon: LawyerIcon,
            title: 'LEARN FROM INDUSTRY EXPERTS IN REAL TIME'
        },
        {
            icon: Icon1,
            title: 'ASK QUESTIONS AND GET INSTANT ANSWERS'
        },
        {
            icon: LaptopIcon,
            title: 'GAIN PRACTICAL INSIGHTS INTO LIVE MARKET CONDITIONS'
        }
    ];

    // Upcoming Webinars data
    const upcomingWebinars = [
        {
            id: 1,
            image: WebinarsImg1,
            date: 'December 30, 2025',
            topic: 'Topic',
            speaker: 'Name Of The Speaker'
        },
        {
            id: 2,
            image: WebinarsImg2,
            date: 'December 31, 2025',
            topic: 'Topic',
            speaker: 'Name Of The Speaker'
        },
        {
            id: 3,
            image: WebinarsImg3,
            date: 'December 29, 2025',
            topic: 'Topic',
            speaker: 'Name Of The Speaker'
        }
    ];

    // Past Webinars data
    const pastWebinars = [
        {
            id: 1,
            image: WebinarsImg1,
            description: 'Start Learning With Top-Tier Investing And Trading Webinars Designed For Real Market Success. Gain Practical Strategies And Expert Insights You Can Apply With Confidence.'
        },
        {
            id: 2,
            image: WebinarsImg2,
            description: 'Join 7 Intraday Trading Webinars Designed To Master Fast-Paced Market Opportunities. Learn Practical Setups, Risk Management, And Execution Strategies For Trading.'
        },
        {
            id: 3,
            image: WebinarsImg3,
            description: 'Join The Top 5 Wing Trading Webinars To Master Stock Market Strategies And Intraday Setups. Learn Technical Analysis, And Trading Psychology For Consistent Profits.'
        }
    ];

    const handlePrevUpcoming = () => {
        setUpcomingIndex((prev) => (prev === 0 ? upcomingWebinars.length - 1 : prev - 1));
    };

    const handleNextUpcoming = () => {
        setUpcomingIndex((prev) => (prev === upcomingWebinars.length - 1 ? 0 : prev + 1));
    };

    const handlePrevPast = () => {
        setPastIndex((prev) => (prev === 0 ? pastWebinars.length - 1 : prev - 1));
    };

    const handleNextPast = () => {
        setPastIndex((prev) => (prev === pastWebinars.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-[#0D0D0E] text-white overflow-x-hidden">
            {/* Header */}
            <Header isScrolled={isScrolled} />

            {/* Banner */}
            <Banner
                heading="Learn Live With Finsai Academy Webinars"
                description="Interactive Sessions With Trading Experts On Forex, Crypto, Indices, Metals, Energies, And Stocks"
                backgroundImage={MeetingImage2}
                breadcrumbBase="HOME"
                breadcrumbCurrent="LEARN & GROW"
                buttons={
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                        Register For Upcoming Webinar
                    </button>
                }
            />

            {/* Why Join Our Webinars Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0a1628]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Why Join Our Webinars?
                        </h2>
                        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 align-middle mx-auto">
                            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 flex items-center justify-center">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                    />
                                </div>
                                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white uppercase tracking-wide leading-relaxed">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Webinars Section */}
            <section className="relative py-10 md:py-12 px-4 md:px-8 lg:px-16 bg-[#0D0D0E]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Upcoming Webinars
                        </h2>
                        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 align-middle mx-auto">
                            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrevUpcoming}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 -translate-x-2 md:-translate-x-6"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-8 md:px-12">
                            {upcomingWebinars.map((webinar) => (
                                <div
                                    key={webinar.id}
                                    className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#A0EAF5]/30 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="p-4 bg-[#0D0D0E]">
                                        <div className="h-40 md:h-48 rounded-lg overflow-hidden">
                                            <img
                                                src={webinar.image}
                                                alt={webinar.topic}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6  ">
                                        <div><p className="text-sm text-gray-400 mb-2 ">{webinar.date}</p>
                                            <h3 className="text-lg font-bold text-white mb-2 text-left">{webinar.topic}</h3>
                                            <p className="text-sm text-gray-400 mb-6 text-left">{webinar.speaker}</p></div>
                                        <div className="flex justify-center">
                                            <button className="px-6 py-2.5 border border-[#496DAB] text-white text-sm font-medium rounded-lg bg-[#496DAB] hover:bg-[#496DAB]/20 transition-all duration-300">
                                                Reserve Your Spot
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNextUpcoming}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 translate-x-2 md:translate-x-6"
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Past Webinars Section */}
            <section className="relative py-10 md:py-12 px-4 md:px-8 lg:px-16 bg-[#0D0D0E]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                            Past Webinars
                        </h2>
                        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 align-middle mx-auto">
                            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrevPast}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 -translate-x-2 md:-translate-x-6"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-8 md:px-12">
                            {pastWebinars.map((webinar) => (
                                <div
                                    key={webinar.id}
                                    className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#A0EAF5]/30 transition-all duration-300 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="p-4 bg-[#0D0D0E]">
                                        <div className="h-40 md:h-48 rounded-lg overflow-hidden">
                                            <img
                                                src={webinar.image}
                                                alt="Past Webinar"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-1">
                                            {webinar.description}
                                        </p>
                                        <div className="flex justify-center">
                                            <button className="px-6 py-2.5 bg-[#496DAB] text-white text-sm font-medium rounded-lg hover:bg-[#496DAB]/20 transition-all duration-300 w-fit">
                                                Watch Replay
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNextPast}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 translate-x-2 md:translate-x-6"
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <HeroWithImage
                title="Don't Miss The Next Live Session"
                buttonText="Register Now"
                onButtonClick={() => console.log('Registering for session')}
                image={GrowthImage}
                imageAlt="Trading Growth"
                imageOnLeft={false}
                bgColor="bg-[#0B152A]"
            />

            {/* Spacer */}
            <div className="bg-transparent py-6"></div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default WebinarsPage;
