'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Video, Users, Target, TrendingUp, Shield, Check } from 'lucide-react';
import Header from '../../components/layout/Header';
import AcademyFooter from '../../components/layout/AcademyFooter';
import Banner from '../../components/layout/Banner';
import QuestionGrids from '../../components/layout/QuestionGrids';
import BlogsCard from '../../components/layout/BlogsCard';
import ActionFooter from '../../components/LearnGrow/ActionFooter';
import assets from '../../assets/assets';


export default function AcademyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);
    const [currentEbookIndex, setCurrentEbookIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Ebooks data
    const ebooks = [
        {
            id: 1,
            title: 'Level Intermediate',
            // subtitle: 'Mastering Technical Analysis',
            description: 'This book will teach you about trends, patterns, fibonacci and more techniques and effective trading',
            image: assets.Ebook1,
            // level: 'Intermediate'
        },
        {
            id: 2,
            title: 'Level Advance',
            // subtitle: 'Quick Start Guide To Forex & Currency Markets',
            description: 'This book will impact your knowledge about crypto mining and mechanisms of crypto exchanges',
            image: assets.Ebook2,
            // level: 'Advance'
        },
        {
            id: 3,
            title: 'Level Intermediate',
            // subtitle: 'Mastering Trading Stress',
            description: 'focuses on managing emotional pressure, building mental resilience, and performing under trading stress',
            image: assets.Ebook3,
            // level: 'Intermediate'
        }
    ];

    // Courses data
    const courses = [
        {
            id: 1,
            title: 'Foundations Of Stock Trading',
            description: 'Learn The Core Principles Of Stock Markets, Chart Reading, And Risk Management. This Course Builds A Strong Trading Foundation And Helps Beginners Develop Disciplined Trading Habits.',
            image: assets.CryptoChristmas,
            format: 'Video Format',
            buttonText: 'Enroll Now',
            buttonType: 'button'
        },
        {
            id: 2,
            title: 'Technical Analysis & Trade Setups',
            description: 'Master Price Action, Indicators, And High-Probability Trade Setups. Designed For Intermediate Traders Looking To Improve Entry, Exit, And Timing Strategies.',
            image: assets.PropTradingVSMarketMaking,
            format: 'Video Format',
            buttonText: 'Enroll Now',
            buttonType: 'button'
        },
        {
            id: 3,
            title: 'Risk Management & Trading Psychology',
            description: 'Focus On Protecting Capital And Controlling Emotions. This Course Teaches Position Sizing, Stop-Loss Strategies, And Mindset Techniques For Consistent, Long-Term Trading Success.',
            image: assets.ScalpiingVsDayTrading,
            format: 'Video Format',
            buttonText: 'Enroll Now',
            buttonType: 'button'
        }
    ];

    // Coaching options
    const coachingOptions = [
        {
            id: 1,
            title: 'TAILORED STRATEGIES',
            description: 'Get Personalized Trading Plans Based On Your Experience And Goals',
            icon: Target
        },
        {
            id: 2,
            title: 'RISK MANAGEMENT GUIDANCE',
            description: 'Learn How To Protect Your Capital And Trade With Confidence',
            icon: Shield
        },
        {
            id: 3,
            title: 'LIVE Q&A SESSIONS',
            description: 'Ask Questions, Discuss Markets, And Get Real-Time Feedback',
            icon: Users
        }
    ];

    const handlePrevEbook = () => {
        setCurrentEbookIndex((prev) => (prev === 0 ? ebooks.length - 1 : prev - 1));
    };

    const handleNextEbook = () => {
        setCurrentEbookIndex((prev) => (prev === ebooks.length - 1 ? 0 : prev + 1));
    };

    const getVisibleEbooks = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentEbookIndex + i) % ebooks.length;
            visible.push(ebooks[index]);
        }
        return visible;
    };

    return (
        <div className="min-h-screen bg-[#0D0D0E] text-white overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
            </div>

            {/* Header */}
            <Header isScrolled={isScrolled} />

            {/* Hero Section - Using Banner Component */}
            <Banner
                heading="Master Trading And Investing With Finsai Academy"
                description="Learn Forex, Crypto, Indices, Metals, Investing And Stocks. With Expert-Led Courses, Ebooks And Coaching"
                backgroundImage={assets.AcademyWorker}
                breadcrumbBase="HOME"
                breadcrumbCurrent="LEARN & GROW"
                buttons={
                    <>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                            Explore Courses
                        </button>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB]  text-white font-semibold rounded-lg  transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                            Download Free E-Book
                        </button>
                    </>
                }
            />

            {/* Why Finsai Academy Section */}
            <QuestionGrids
                title="Why Finsai Academy?"
                description="Empowering traders through knowledge builds confidence, discipline, and long-term success in the markets. When traders understand market structure, risk management, and their own psychology, they shift from reacting emotionally to making informed, strategic decisions. Knowledge transforms uncertainty into opportunity, enabling traders to adapt to changing conditions, protect capital, and consistently execute their plans with clarity and purpose."
                features={[
                    {
                        id: 1,
                        title: 'EXPERT MENTORS WITH INDUSTRY EXPERIENCE',
                        icon: assets.AcademyIcon1
                    },
                    {
                        id: 2,
                        title: 'PRACTICAL LEARNING WITH REAL MARKET INSIGHTS',
                        icon: assets.AcademyIcon2
                    },
                    {
                        id: 3,
                        title: 'FLEXIBLE FORMATS: EBOOKS, COURSES, AND COACHING',
                        icon: assets.education
                    }
                ]}
            />

            {/* Featured Ebooks Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Featured Ebooks
                        </h2>
                        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 align-middle mx-auto">
                            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                        </div>
                        <p className="text-lg text-gray-300">
                            Start With Knowledge Grow With Confidence
                        </p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrevEbook}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center duration-300 -translate-x-6"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                            {getVisibleEbooks().map((ebook, index) => (
                                <div
                                    key={ebook.id}
                                    className=" flex flex-col border-2 border-[#3D3F44] rounded-2xl"
                                >
                                    <div className="mb-6 bg-[#496DAB]/10 backdrop-blur-sm  rounded-t-2xl p-6 hover:border-[#A0EAF5]/50 transition-all duration-300">
                                        <img
                                            src={ebook.image}
                                            alt={ebook.title}
                                            className="w-full h-64 object-contain rounded-lg"
                                        />
                                    </div>
                                    <div className="text flex flex-col flex-1 bg-[496DAB]/12 px-6 pb-6 rounded-b-2xl">
                                        <h4 className="text-sm text-[#A0EAF5] font-semibold mb-2">{ebook.level}</h4>
                                        <h3 className="text-xl font-bold mb-3">{ebook.title}</h3>
                                        <p className="text-sm text-gray-300 mb-6 flex-1 first-letter:uppercase">{ebook.description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button className="w-[170px] h-[49px] py-3 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 transition-all duration-300">
                                                Download Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNextEbook}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12  rounded-full flex items-center justify-center  transition-colors duration-300 translate-x-6"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Free Resource Section */}
            <section className="relative py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-[#0D0D0E]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Book Image with Border */}
                        <div className="flex justify-center">
                            <div className="relative">
                                {/* Bright blue border around the ebook - matching screenshot */}
                                <div className="border-2 border-[#3D3F44] rounded-lg  pt-8 pb-8 pl-20 pr-20 bg-[#12151B]">
                                    <img
                                        src={assets.FreeEbook}
                                        alt="Free Trading Strategies Book"
                                        className="w-full max-w-md h-auto object-contain rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Benefits List */}
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white uppercase tracking-wide">
                                WITH THIS RESOURCE, YOU'LL GET:
                            </h2>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Free EBook: The Big Book Of Stock Trading Strategies',
                                    'Understand Market Structure And Trade Setups',
                                    'Learn Proven Strategies To Trade With Confidence And Clarity',
                                    'Improve Risk Management And Decision-Making',
                                    'Designed For Both Beginners And Growing Traders'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-500">
                                            <Check className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <span className="text-base md:text-lg text-white/80 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 transition-all duration-300 text-base md:text-lg">
                                Get Your Free E-Book
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="relative py-12 md:py-12 px-4 md:px-8 lg:px-16 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                            Courses
                        </h2>
                        <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 align-middle mx-auto">
                            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
                        </div>
                        <p className="text-lg text-white/80 mb-8">
                            Structured Learning For Every Trader
                        </p>

                        {/* Level Dropdown Button */}
                        <div className="flex justify-center mb-12">
                            <button className="px-6 py-3 bg-[#496DAB]/20 border border-[#496DAB]/40 text-white font-medium rounded-lg hover:bg-[#496DAB]/30 transition-all duration-300 flex items-center gap-2">
                                Beginner
                                <ChevronRight className="w-4 h-4 rotate-90" />
                            </button>
                        </div>
                    </div>

                    <BlogsCard
                        items={courses}
                        buttonText="Browse All Courses"
                    />
                </div>
            </section>

            {/* Coaching Section */}
            <section className="relative py-10 md:py-10 px-4 md:px-8 lg:px-16 bg-[#0D0D0E]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Coaching
                        </h2>
                        <p className="text-lg text-gray-300">
                            Learn Directly From Experts
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {coachingOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                                <div
                                    key={option.id}
                                    className="w-full sm:w-[357px] h-[248px] bg-gradient-to-r from-[#496DAB] to-[#1F9FB2] backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
                                >
                                    <div className="w-16 h-16 mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-base font-bold mb-3 text-white uppercase tracking-wide">{option.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">{option.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <button className="px-8 py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                            Book A Coaching Session
                        </button>
                    </div>
                </div>
            </section>

            <ActionFooter
                title="Dive into the dynamic world of trading with our comprehensive courses. As a token of achievement, upon successfully completing any course and passing the final exam, we reward you with a special trading bonus. It's more than learning - it's about getting a jump start into your trading future with us."
                buttonText="Start Your Trading Journey With Finsai Today"
                imageSrc={assets.TradingStats}
                imageAlt="Trading Meeting"
                backgroundColor="bg-[#0B152A]"
                buttonClassName="md:w-[400px] w-[542px] h-[49px] whitespace-nowrap"
            />
            <div className="bg-transparent py-10">
            </div>

            {/* Footer */}
            <AcademyFooter />
        </div>
    );
}
