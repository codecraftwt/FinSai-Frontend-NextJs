import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import SectionHeading from '../../components/layout/SectionHeading';
import QuestionGrids from '../../components/layout/QuestionGrids';
import BlogsCard from '../../components/layout/BlogsCard';
import ContentAndImage from '../../components/layout/Content&Image';
import { TrendingUp, BarChart3, Newspaper } from 'lucide-react';
import { ButtonField } from '../../components/layout/Form';
import assets from '../../assets/assets';
import FeaturedInsights from '../../components/LearnGrow/InsightCards';
import ActionFooter from '../../components/LearnGrow/ActionFooter';

const NewsAnalysis = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [isScrolled, setIsScrolled] = useState(false);


    const blogItems = [
        {
            id: 1,
            title: 'Market Volatility: Understanding Price Swings',
            description: 'Learn how to navigate volatile markets and identify opportunities during periods of high uncertainty and rapid price movements.',
            image: assets.NewsCard1,
            format: 'Market Analysis',
            buttonText: 'Read More',
            buttonType: 'link'
        },
        {
            id: 2,
            title: 'Economic Indicators That Move Markets',
            description: 'Discover the key economic indicators that influence market trends and learn how to interpret their impact on trading decisions.',
            image: assets.NewsCard2,    
            format: 'News Update',
            buttonText: 'Read More',
            buttonType: 'link'

        },
        {
            id: 3,
            title: 'Technical Analysis: Chart Patterns Explained',
            description: 'Master the most important chart patterns used by professional traders to predict market movements and timing entries.',
            image: assets.NewsCard3,
            format: 'Trading Guide',
            buttonText: 'Read More',
            buttonType: 'link'
        },
    ];

    const insights = [
        {
            time: 'Today',
            title: 'Emerging Market FX Volatility & Opportunities',
            description:
                'Emerging market currencies have gained attention as the U.S. dollar weakens, with assets like the Hungarian forint surging and global FX turnover rising sharply.',
            href: '',
        },
        {
            time: 'Today',
            title: 'UK Regulatory Shift Could Boost Electronic Traders',
            description:
                'Britain is considering reforms to capital rules for electronic trading firms like Citadel and XTX, aiming to align requirements with actual risk.',
            href: '',
        },
        {
            time: '6 Days Ago',
            title: 'Hedge Funds Betting On Volatility In 2026',
            description:
                'Hedge funds and state-backed investors are positioning for market volatility as a key source of return next year.',
            href: '',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D0E] text-white overflow-hidden relative z-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
                <div className="absolute sm:top-[24%] left-[30vw] w-[300px] h-[100px] md:w-[600px] md:h-[600px] bg-gradient-radial bg-radial-market rounded-full blur-[160px] opacity-50" />
                <div className="absolute sm:top-[50%] left-[30vw] w-[300px] h-[100px] md:w-[600px] md:h-[600px] bg-gradient-radial bg-radial-market rounded-full blur-[300px] opacity-40" />
            </div>

            {/* Header */}
            <Header isScrolled={isScrolled} />

            {/* Hero Section - Using Banner Component */}
            <Banner
                heading="Stay Ahead with Market News & Analysis"
                description="Daily updates, expert insights, and actionable strategies for Forex, Crypto, Indices, Metals, Energies, and Stocks."
                breadcrumbBase="HOME"
                breadcrumbCurrent="NEWS & ANALYSIS"
                backgroundImage={assets.learngrow}
                buttons={
                    <>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                            Read Latest Updates
                        </button>
                    </>
                }
            />

            <QuestionGrids
                title="Why Follow Our News & Analysis?"
                
                features={[
                    {
                        id: 1,
                        title: 'Timely coverage of global market events',
                        icon: assets.Newspaper
                    },
                    {
                        id: 2,
                        title: 'Expert commentary from seasoned traders',
                        icon: assets.Training
                    },
                    {
                        id: 3,
                        title: 'Actionable insights you can apply to your trading strategies',
                        icon: assets.NeutralTrading
                    }
                ]}
               
            />
            
            <SectionHeading
                heading="Latest News"
                maxWidth='7xl'
                className='mb-0'
            />

            <BlogsCard
                title="Latest Articles"
                description="Stay Updated With The Latest Market Insights And Trading Analysis"
                levelLabel="Trending"
                buttonType = "button"
                items={blogItems}
            />

            <ContentAndImage
                title="Forex Market Movements"
                description="The global forex market has seen heightened volatility in 2025, with emerging market currencies gaining attention as the US dollar shows signs of weakness and traders diversify away from traditional safe‑haven assets. Investor interest has surged in pairs like the Hungarian forint, which strengthened sharply against the dollar, while overall FX trading volumes increased as market participants seek opportunities"
                image={assets.ForexMovement}
                reverse={false}
            />

              <ContentAndImage
                title="Crypto Market Trends"
                description="Bitcoin and major cryptos have seen volatile price action, with Bitcoin bouncing back above $90,000 after significant declines and Ether showing strength above $3,000, though overall sentiment remains cautious. Traders are watching how macroeconomic factors and market structure influence crypto’s next moves."
                image={assets.CryptoMovement}
                reverse={true}
                className="mt-10"
            />

              <ContentAndImage
                title="Stock Market Movements"
                description="U.S. stock futures showed mixed signals as major indexes rebounded after tech sector sell‑offs, with gains in financials and industrials offsetting weakness in AI‑linked tech names. Analysts suggest cautious positioning amid divergent sector performance and upcoming key economic reports."
                image={assets.StocksMovement}
                reverse={false}
                className="my-10"
            />

            <QuestionGrids
                columns={3}
                maxWidthTitle="max-w-5xl"
                maxWidthDescription="max-w-4xl"
                maxWidthFeatureTitle="max-w-xs"
                maxWidthFeatureDescription="max-w-sm"
                titleSize="text-3xl md:text-4xl lg:text-5xl"
                features={[
                    {
                        id: 1,
                        title: 'Charts',
                        description: 'Visual representation of market data to identify price movements and patterns.',
                        icon: assets.NewsCharts
                    },
                    {
                        id: 2,
                        title: 'Technical Levels',
                        description: 'Key support and resistance points to guide entry, exit, and risk management.',
                        icon: assets.TechnicalSupport
                    },
                    {
                        id: 3,
                        title: 'Trend Breakdowns',
                        description: 'Analysis of market trends to spot reversals, continuations, and potential opportunities.',
                        icon: assets.Newsstocks
                    }
                ]}
                classNames={{
                    title: "text-4xl md:text-5xl font-bold",
                    description: "text-base md:text-lg leading-relaxed",
                    featureTitle: "font-semibold text-lg md:text-xl ",
                    featureDescription: "text-sm md:text-base max-w-xs"
                }}
            />

            <div className="flex justify-center mb-4">
                <ButtonField type="submit" variant="primary" className='w-[184px] h-[49px] whitespace-nowrap'>
                  View All Analysis
                </ButtonField>
            </div>

            <FeaturedInsights items={insights} />

            <ActionFooter
                title="Trade Smarter with Finsai News & Analysis"
                buttonText="Subscribe for Updates"
                imageSrc={assets.NewsAnalysis}
                imageAlt="Market Analysis"
                backgroundColor="bg-[#0B152A]"
                buttonClassName="w-[185px] h-[49px] whitespace-nowrap"
                className='my-8'
            />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default NewsAnalysis;
