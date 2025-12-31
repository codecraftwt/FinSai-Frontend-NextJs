import logo from '../assets/logo.png';
import Laptop from '../assets/Laptop.png';
import phoneScreen from '../assets/phoneScreen.png';
import screenblur from '../assets/screenblur.png';
import metatrader from '../assets/metatrader.png';
import webtrader from '../assets/webtrader.png';
import mobileapp from '../assets/mobileapp.png';
import license from '../assets/license.png';
import atm from '../assets/atm.png';
import phone from '../assets/phone.png';
import safebox from '../assets/safebox.png';
import starBadge from '../assets/starBadge.png';
import playstore from '../assets/playstore.png';
import apple from '../assets/apple.png';
import Marketphone from '../assets/marketphone.png';
import Bitcoin from '../assets/bitcoin.png';
import stocks from '../assets/stocks.png';
import forex from '../assets/forex.png';
import commodities from '../assets/commodities.png';
import crypto from '../assets/crypto.png';
import indices from '../assets/indices.png';
import linear1 from '../assets/linear1.png';
import linear2 from '../assets/linear2.png';
import linear3 from '../assets/linear3.png';
import bitcoin2 from '../assets/bitcoin2.png';
import crypto2 from '../assets/crypto2.png';
import curve1 from '../assets/curve1.png';
import curve2 from '../assets/curve2.png';
import arrow from '../assets/arrow.png';
import badge from '../assets/badge.png';
import linearball from '../assets/linearball.png';
import earth from '../assets/earth.png'
import forex1 from '../assets/forex1.png';
import crypto1 from '../assets/crypto1.png';
import commodities1 from '../assets/commodities1.png';
import indices1 from '../assets/indices1.png';
import stocks1 from '../assets/stocks1.png';
import line from '../assets/line.png';
import Tabs from '../assets/Tabs.png';heade
import advance from '../assets/advance.png';
import curves from '../assets/curves.png';
import ibprogram from '../assets/ib-program.png';
import deals from '../assets/deals.png';
import innovativeStartup from '../assets/innovative-startup.png';
import toolsLaptop from '../assets/toolslaptop.png'
import plane from '../assets/plane.png';
import draft from '../assets/draft.png';
import Bonuses from '../assets/Bonuses.png';
import Accounts from '../assets/Accounts.png';
import Calendar from '../assets/Calendar.png';
import IBProgram from '../assets/IBProgram.png';
import News from '../assets/News.png';
import Analysis from '../assets/Analysis.png';
import WhyChooseUsScreen from '../assets/WhyChooseUsScreen.png';
// import europlaptop from '../assets/europlaptop.png';


import { Facebook, Twitter, Youtube, Linkedin, Instagram, ArrowRightIcon, CheckSquare, Send } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import {
  useAwardsAnimation,
  useMarketAnimation,
  usePhoneTextAnimation,
  usePlatformsAnimation,
  useTabAnimation,
  useStepAnimation,
  useToolAnimation
} from '../components/hooks/Animation';

const FinsaiHomepage = ({ data = {}, scrollToSection }) => {
  console.log('Homepage received data:', data);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Laptop, Laptop, Laptop, Laptop]; 

  const sectionRefs = useRef([]);
  const laptopRef = useRef(null);
  const pairsRef = useRef(null);
  const isMountedRef = useRef(true);

  const sectionMap = {
    'hero': 0,
    'whyChoose': 1,
    'animatedMarket': 2,
    'market': 3,
    'platforms': 4,
    'accounts': 5,
    'awards': 6,
    'footer': 7
  };

  const iconMap = {
    license: license,
    atm: atm,
    phone: phone,
    safebox: safebox,
    metatrader: metatrader,
    webtrader: webtrader,
    mobileapp: mobileapp
  };

  const {
    heroHeading = "Trade Secure With Finsai Trade.",
    heroSubheading = "Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.",
    openLiveAccountText = "Open Live Account",
    tryFreeDemoText = "Try Free Demo",
    whyChooseTitle = "Why Choose Finsai Trade",
    whyChooseDescription = "At Finsai Trade, we bridge traditional finance with cutting-edge trading technology. Whether you're a beginner or seasoned trader, our platform offers the perfect mix of reliability, innovation, and growth opportunity.",
    learnMoreText = "Learn More",
    AlltoolsTitle = "All The Tools You Need In One Platform",
    Alltoolsdescription = "Our platform offers everything you need to trade efficiently and stay informed.",
    platformsTitle = "Powerful Platforms for Every Trader",
    platformsDescription = "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
    platformsLearnMoreText = "Learn More",
    accountsTitle = "Choose The Right Account For You",
    accountsSubtitle = "Start Your Journey With An Account Tailored To Your Goals",
    accountsLearnMoreText = "Learn More",
    awardsTitle = "Recognized For Excellence",
    awardsdescription = "At Finsai Trade, we take pride in being acknowledged for our commitment to excellence, innovation, and trusted financial services. These awards reflect the strength of our platform.",
    marketTitle = "Markets You Can Trade",
    marketDescription = "Gain Access To A Diverse Range of Global Assets Across Multiple Financial Markets.",
    features = [
      "Ultra-Fast Withdrawal",
      "Secure Deposits",
      "Regulated By Multiple Authorities",
      "10,000+ Assets",
      "24/7 Expert Support",
      "Transparent Pricing With Zero Hidden Fees"
    ],
    platforms = [
      { icon: "mobileapp", title: "Mobile App (Coming Soon)", description: "Fast, secure, and intuitive" },
      { icon: "metatrader", title: "MetaTrader 5", description: "Pro-grade tools for advanced traders" },
      { icon: "webtrader", title: "Finsai WebTrader", description: "Browser-based, no downloads needed" }
    ],
    accounts = [
      { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders", icon: linear1 },
      { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders", icon: linear2 },
      { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers", icon: linear3 },
      { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals", icon: linear1 }
    ],
    awards = [
      { title: "World Forex Award 2025", subtitle: "Best IB Program" },
      { title: "World Financial Award 2025", subtitle: "Trusted Financial Services" },
      { title: "Iconic Finance Expo 2023", subtitle: "Innovative Startup In Finance" }
    ],
    footerLogo = logo,
    footerDescription = "At Finsai Trade, We Bridge Traditional Finance With Cutting-edge Trading Technology, Whether You're A Beginner Or A Seasoned Trader, Our Platform Offers The Perfect Mix Of Reliability, Innovation, And Growth Opportunity.",
    quickLinks = ["About Us", "Feature", "Career", "Contact Us"],
    helpLinks = ["Customer Support", "Terms", "Privacy", "FAQs"],
    otherLinks = ["Start Trading", "Earn Free Crypto", "Crypto Wallet", "Payment Option"],
    copyrightText = "© Copyright 2025, all right reserved by finsaitrade",
    socialLinks = [
      { icon: "Facebook", label: "Facebook" },
      { icon: "Twitter", label: "Twitter" },
      { icon: "Youtube", label: "Youtube" },
      { icon: "Linkedin", label: "LinkedIn" },
      { icon: "Instagram", label: "Instagram" }
    ],
    googlePlayText = "Get it on",
    googlePlaySubtext = "Google Play",
    appStoreText = "Download on the",
    appStoreSubtext = "App Store"
  } = data;



  const tabsData = [
    {
      id: 'tab1',
      name: 'Forex',
      title: 'Trade global currency pairs with tight spreads and fast execution.',
      description: 'Access the world\'s most liquid financial market and trade majors, minors, and exotics 24/5 with real-time pricing and advanced tools.',
      buttonText: 'Start Trading Now',
      chartIcon: '📊',
      chartText: 'Trading Chart Preview',
      pairs: [
        { name: 'EUR/USD', status: 'green' },
        { name: 'USD/JPY', status: 'green' }
      ]
    },
    {
      id: 'tab2',
      name: 'Metals',
      title: 'Strengthen your portfolio with Gold, Silver, and other precious metals.',
      description: 'Metals act as safe-haven assets and provide stability during market volatility, helping you diversify your trading strategies.',
      buttonText: 'Explore Crypto Markets',
      chartIcon: '₿',
      chartText: 'Crypto Chart Preview',
      pairs: [
        { name: 'BTC/USD', status: 'green' },
        { name: 'ETH/USD', status: 'red' }
      ]
    },
    {
      id: 'tab3',
      name: 'Shares',
      title: 'Trade top global company stocks without owning the asset.',
      description: 'Speculate on the price movements of major brands across the US, Europe, and Asia with flexible leverage and competitive pricing.',
      buttonText: 'Start Investing Today',
      chartIcon: '📈',
      chartText: 'Stock Chart Preview',
      pairs: [
        { name: 'AAPL', status: 'green' },
        { name: 'TSLA', status: 'green' }
      ]
    },
    {
      id: 'tab4',
      name: 'Indices',
      title: 'Capture the performance of the world\'s biggest economies.',
      description: 'Trade popular indices like US30, NAS100, S&P500, and FTSE100 to benefit from overall market trends rather than individual stock movements.',
      buttonText: 'Trade Commodities',
      chartIcon: '🛢️',
      chartText: 'Commodity Chart',
      pairs: [
        { name: 'GOLD', status: 'green' },
        { name: 'OIL', status: 'red' }
      ]
    },
    {
      id: 'tab5',
      name: 'Commodities',
      title: 'Trade essential energy and agricultural markets.',
      description: 'Access instruments like crude oil, natural gas, wheat, and coffee. Commodity prices are influenced by global supply, demand, and geopolitical events.',
      buttonText: 'Trade Indices Now',
      chartIcon: '📊',
      chartText: 'Index Chart Preview',
      pairs: [
        { name: 'S&P 500', status: 'green' },
        { name: 'NASDAQ', status: 'green' }
      ]
    }, 
    {
      id: 'tab6',
      name: 'Digital Assets',
      title: 'A complete suite of diversified trading instruments, all in one place.',
      description: 'Choose from forex, metals, shares, indices, and commodities to create a balanced trading portfolio tailored to your goals.',
      buttonText: 'Browse ETFs',
      chartIcon: '📊',
      chartText: 'ETF Chart Preview',
      pairs: [
        { name: 'SPY', status: 'green' },
        { name: 'QQQ', status: 'green' }
      ]
    }
  ];



  const tabMarketData = {
  tab1: [
    {
      icon: forex1,
      title: "EUR/USD",
      price: "$1.0850",
      percent: "+0.15%",
      graph: curve1,
      spread: "0.2",
      bidPrice: "1.0849",
      askPrice: "1.0851",
    },
    {
      icon: forex1,
      title: "GBP/USD",
      price: "$1.2750",
      percent: "-0.08%",
      graph: curve2,
      spread: "0.3",
      bidPrice: "1.2749",
      askPrice: "1.2752",
    },
    {
      icon: forex1,
      title: "USD/JPY",
      price: "¥145.20",
      percent: "+0.22%",
      graph: curve1,
      spread: "0.4",
      bidPrice: "145.19",
      askPrice: "145.23",
    },
  ],
  tab2: [
    {
      icon: crypto1,
      title: "BTC/USD",
      price: "$45,000",
      percent: "+2.5%",
      graph: curve1,
      spread: "5.2",
      bidPrice: "44,995",
      askPrice: "45,005",
    },
    {
      icon: crypto1,
      title: "ETH/USD",
      price: "$2,800",
      percent: "+1.8%",
      graph: curve2,
      spread: "2.1",
      bidPrice: "2,799",
      askPrice: "2,801",
    },
    {
      icon: crypto1,
      title: "XRP/USD",
      price: "$0.85",
      percent: "-0.5%",
      graph: curve1,
      spread: "0.01",
      bidPrice: "0.8495",
      askPrice: "0.8505",
    },
  ],
  tab3: [
    {
      icon: stocks1,
      title: "AAPL",
      price: "$175.50",
      percent: "+1.2%",
      graph: curve1,
      spread: "0.05",
      bidPrice: "175.48",
      askPrice: "175.53",
    },
    {
      icon: stocks1,
      title: "TSLA",
      price: "$220.30",
      percent: "-0.9%",
      graph: curve2,
      spread: "0.10",
      bidPrice: "220.25",
      askPrice: "220.35",
    },
    {
      icon: stocks1,
      title: "GOOGL",
      price: "$135.80",
      percent: "+0.7%",
      graph: curve1,
      spread: "0.07",
      bidPrice: "135.77",
      askPrice: "135.84",
    },
  ],
  tab4: [
    {
      icon: commodities1,
      title: "GOLD",
      price: "$1,950",
      percent: "+0.3%",
      graph: curve1,
      spread: "0.5",
      bidPrice: "1,949.75",
      askPrice: "1,950.25",
    },
    {
      icon: commodities1,
      title: "OIL",
      price: "$78.50",
      percent: "-1.1%",
      graph: curve2,
      spread: "0.10",
      bidPrice: "78.45",
      askPrice: "78.55",
    },
    {
      icon: commodities1,
      title: "SILVER",
      price: "$23.20",
      percent: "+0.5%",
      graph: curve1,
      spread: "0.02",
      bidPrice: "23.19",
      askPrice: "23.21",
    },
  ],
  tab5: [
    {
      icon: indices1,
      title: "S&P 500",
      price: "4,450",
      percent: "+0.8%",
      graph: curve1,
      spread: "0.5",
      bidPrice: "4,449.75",
      askPrice: "4,450.25",
    },
    {
      icon: indices1,
      title: "NASDAQ",
      price: "13,800",
      percent: "+1.0%",
      graph: curve2,
      spread: "1.0",
      bidPrice: "13,799.50",
      askPrice: "13,800.50",
    },
    {
      icon: indices1,
      title: "DOW",
      price: "34,500",
      percent: "+0.6%",
      graph: curve1,
      spread: "1.5",
      bidPrice: "34,498.75",
      askPrice: "34,500.25",
    },
  ],
  tab6: [
    {
      icon: stocks1,
      title: "SPY",
      price: "$445",
      percent: "+0.8%",
      graph: curve1,
      spread: "0.02",
      bidPrice: "444.99",
      askPrice: "445.01",
    },
    {
      icon: stocks1,
      title: "QQQ",
      price: "$380",
      percent: "+1.0%",
      graph: curve2,
      spread: "0.03",
      bidPrice: "379.98",
      askPrice: "380.01",
    },
    {
      icon: stocks1,
      title: "VOO",
      price: "$420",
      percent: "+0.7%",
      graph: curve1,
      spread: "0.02",
      bidPrice: "419.99",
      askPrice: "420.01",
    },
  ],
};

  const accountypes = [
    {
      id: 1,
      title: "Advanced charting software for real-time analysis",
      img: advance,
    },
    {
      id: 2,
      title: "Ultra-fast trade execution with low latency",
      img: advance,
    },
    {
      id: 3,
      title: "Institutional grade liquidity & deep order books",
      img: advance,
    },
    {
      id: 4,
      title: "Smart risk management tools for professionals",
      img: advance,
    },
  ];

  // Custom animation hooks - moved after all data is defined
  const { currentIndex } = useAwardsAnimation();
  const { activeIndex, tickerRef } = useMarketAnimation();
  const { listRef, currentIndex: phoneTextIndex, visibleCards } = usePhoneTextAnimation(features);
  const { currentCardIndex } = usePlatformsAnimation(platforms);
  const { activeTab, setActiveTab } = useTabAnimation(tabsData);
  const { activeStep } = useStepAnimation();
  const { activeToolIndex, toolAnimationState } = useToolAnimation(accountypes.length);

  const laptopControls = useAnimation();
  const pairsControls = useAnimation();

  // Get the current active tool
  const currentTool = accountypes[activeToolIndex];

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  useEffect(() => {
    if (scrollToSection) {
      const sectionIndex = sectionMap[scrollToSection];
      if (sectionIndex !== undefined) {
        // Use setTimeout to ensure DOM is fully rendered and iframe is scaled
        setTimeout(() => {
          if (sectionRefs.current[sectionIndex]) {
            sectionRefs.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, [scrollToSection]);

  useEffect(() => {
    if (!laptopRef.current || !pairsRef.current) return;

    const laptopWidth = laptopRef.current.offsetWidth;
    const pairsWidth = pairsRef.current.offsetWidth;

    let cycleCount = 0;

    const animateCycle = async () => {
      await Promise.all([
        laptopControls.start({ x: 0, transition: { duration: 0 } }),
        pairsControls.start({ x: 0, transition: { duration: 0 } })
      ]);

      for (let i = 0; i < 2; i++) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);

        await Promise.all([
          laptopControls.start({ 
            x: pairsWidth, 
            transition: { duration: 0.8, ease: 'easeInOut' } 
          }),
          pairsControls.start({ 
            x: -laptopWidth , 
            transition: { duration: 0.8, ease: 'easeInOut' } 
          })
        ]);
        await new Promise(resolve => setTimeout(resolve, 1000));

        setCurrentImageIndex((prev) => (prev + 1) % images.length);

        await Promise.all([
          laptopControls.start({ 
            x: 0, 
            transition: { duration: 0.8, ease: 'easeInOut' } 
          }),
          pairsControls.start({ 
            x: 0, 
            transition: { duration: 0.8, ease: 'easeInOut' } 
          })
        ]);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      cycleCount++;
      if (cycleCount < 4) {
        await animateCycle(); 
      } else {
        
        const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabsData.length;
        setActiveTab(tabsData[nextIndex].id);
      }
    };

    animateCycle();
  }, [activeTab, laptopControls, pairsControls, setActiveTab]);


  const iconMapMarkets = {
    forex: forex1,
    crypto: crypto1,
    commodities: commodities1,
    indices: indices1,
    stocks: stocks1
  };

  const iconMapAnimated = {
    bitcoin2: bitcoin2,
    crypto2: crypto2
  };

  const curveMap = {
    curve1: curve1,
    curve2: curve2
  };

  const MarketsData = data.marketsData ? data.marketsData.map(market => ({
    category: market.category,
    assets: market.assets,
    iconSrc: iconMapMarkets[market.icon] || forex1,
    highlight: false
  })) : [
    { category: 'Forex', assets: 'Major & Minor Currency Pairs', iconSrc: forex1, highlight: false },
    { category: 'Cryptocurrencies', assets: 'BTC, ETH, XCH & More', iconSrc: crypto1, highlight: false },
    { category: 'Commodities', assets: 'Gold, Oil, Silver', iconSrc: commodities1, highlight: false },
    { category: 'Indices', assets: 'S&P 500, NASDAQ, FTSE', iconSrc: indices1, highlight: false },
    { category: 'Stocks', assets: 'Top-tier & second equities', iconSrc: stocks1, highlight: false },
  ];

  const accountTypes = data.accounts ? data.accounts.map((acc, idx) => ({
    id: idx + 1,
    title: acc.type.toUpperCase()
  })) : [
    { id: 1, title: 'SMART START', subtitle: 'Beginners', description: '(FIRST-TIME TRADERS)', buttonText: 'Open Account' },
    { id: 2, title: 'SMART CHOICE', subtitle: 'New Retail Clients', description: '', buttonText: 'Open Account' },
    { id: 3, title: 'SMART PRO', subtitle: 'Mid-level Active Traders', description: '', buttonText: 'Open Account' },
    { id: 4, title: 'SMART ELITE', subtitle: 'Advanced Traders', description: 'Prop Traders', buttonText: 'Open Account' },
    { id: 5, title: 'SMART VIP', subtitle: 'Passive Investors', description: '', buttonText: 'Open Account' }
  ];

  const marketData = data.marketData ? data.marketData.map(m => ({
    icon: iconMapAnimated[m.icon] || bitcoin2,
    title: m.title,
    price: m.price,
    percent: m.percent,
    graph: curveMap[m.graph] || curve1
  })) : [
    {
      icon: bitcoin2,
      title: "Forex",
      price: "$56,623.54",
      percent: "+1.41%",
      graph: curve1,
    },
    {
      icon: crypto2,
      title: "Crypto",
      price: "$4,267.90",
      percent: "+2.22%",
      graph: curve2,
    },
    {
      icon: bitcoin2,
      title: "Indices",
      price: "$1,289.33",
      percent: "-0.44%",
      graph: curve1,
    },
    {
      icon: crypto2,
      title: "Metals",
      price: "$2,143.11",
      percent: "+0.67%",
      graph: curve2,
    },
    {
      icon: crypto2,
      title: "Stocks",
      price: "$823.77",
      percent: "+3.12%",
      graph: curve2,
    },
  ];



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setActiveCard(null);
      else if (activeCard === null && accountTypes.length > 0) setActiveCard(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [accountTypes.length]);

  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveAccountIndex((prevIndex) => (prevIndex + 1) % accountTypes.length);
      }, 2400);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, accountTypes.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6); 
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [platforms.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add after existing states around line 85
  const [isSmart, setIsSmart] = useState(true);
  const [isSmartBlue, setIsSmartBlue] = useState(false);

  // Add new useEffect after the last one around line 702
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSmart(prev => {
        if (!prev) {
          setIsSmartBlue(true);
          setTimeout(() => setIsSmartBlue(false), 600);
        }
        return !prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="font-['Ageo trial'] m-0 p-0 bg-[#0D0D0E] text-white relative overflow-hidden z-20">

        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
          <div
            className="absolute rounded-full opacity-30"
            style={{
              left: '78vw',
              top: '200px',
              width: '75vw',
              height: '75vw',
              maxWidth: '1200px',
              maxHeight: '1200px',
              background: 'linear-gradient(to right, #2C4FAC 0%, #3481CF 50%, #41ABE7 75%, #48C3F4 100%)',
              filter: 'blur(48px)',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>

          <div className='rounded-full opacity-20 '
            style={{
              position: 'absolute',
              left: '75vw',
              top: '280px',
              width: '50vw',
              height: '50vw',
              maxWidth: '800px',
              maxHeight: '800px',
              background: 'linear-gradient(to right, text-[#496DAB] 67%, text-[#496DAB] 100%)',
              filter: 'blur(54px)',
              opacity: 0.7,
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "500px",
              width: "90vw",
              maxWidth: "798px",
              height: "150px",
              background: "linear-gradient( #000000 80%, #000000 60%)",
              opacity: 0.4,
              filter: "blur(30px)",
              transform: "translateX(-50%)",
            }}
          />

          <div
            className="rounded-full z-[-15]"
            style={{
              position: "absolute",
              left: "10vw",
              top: "950px",
              width: "25vw",
              height: "25vw",
              maxWidth: "400px",
              maxHeight: "400px",
              // background: "linear-gradient(90deg, #2863F6 37%, #2863F6 100%)",
              background: "#2863F6",
              opacity: 0.2,
              filter: "blur(54px)",
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className='rounded-full opacity-20'
            style={{
              position: 'absolute',
              left: '300px',
              top: '2650px',
              width: '610px',
              height: '510px',
              background: 'linear-gradient(to right, text-[#496DAB] 67%, text-[#496DAB] 100%)',
              filter: 'blur(104px)',
              opacity: 0.7,
              transform: 'translate(-50%, -50%)',
              display: 'none'
            }}
          />

          <div className="absolute top-[200px] left-[8%] w-[300px] h-[300px] md:w-[310px] md:h-[310px] bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="pointer-events-none absolute top-[3225px] left-[50%] w-[90vw] max-w-[993px] h-[365px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-3xl opacity-15 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="pointer-events-none absolute top-[4000px] right-10 w-[400px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-[70px] opacity-10 -translate-x-1/3 -translate-y-1/3"></div>
          <div className="pointer-events-none absolute top-[4050px] right-20 w-[200px] h-[200px] bg-gradient-to-r from-[text-[#496DAB]] to-[text-[#496DAB]] rounded-full blur-[60px] opacity-40 -translate-x-1/3 -translate-y-1/3"></div>

          <div className="pointer-events-none absolute top-[4000px] left-10 w-[400px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-[70px] opacity-10 -translate-x-1/3 -translate-y-1/3"></div>


          <div className="pointer-events-none absolute top-[4600px] left-[50%] w-[90vw] max-w-[1000px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-sm blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* <div className="absolute inset-0 pointer-events-none z-10">
          <img
            src={linearball}
            alt="bg3"
            className="absolute top-[1850px] right-10 md:right-20 w-48 h-48 md:w-[300px] md:h-[300px] object-cover rounded-3xl opacity-100"
          />
        </div> */}

        {/* Header / Navbar Section */}
        <header className={`fixed flex justify-between items-center w-full h-[80px] md:h-[75px] top-0 z-50 px-4 md:px-6 lg:px-10 py-4 md:py-5 transition-colors duration-300 ${isScrolled ? 'bg-[#496DAB]/20' : 'bg-transparent'}`}>
          <img src={logo || data.headerIcon} alt="Finsai Logo" className="w-[100px] h-[40px] md:w-[120px] md:h-[48px] lg:w-[150px] lg:h-[60px] object-contain" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-4 xl:gap-6">
            {['Home', 'Trading', 'Ecosystem', 'Learn & Grow', 'Company'].map((item) => (
              <li key={item} className="cursor-pointer text-white text-sm xl:text-base hover:border-b-2 hover:border-[#ffffff] transition">
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex gap-2 md:gap-2.5">
            {/* Open Live Account Btn */}
            <button className="
    px-3 py-2 md:px-4 md:py-2.5 
    rounded-lg border-none cursor-pointer 
    bg-[#387AFF] text-white font-semibold hover:bg-blue-600 transition
    text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base
    w-[100px] md:w-[140px] lg:w-[180px] 
    h-[36px] md:h-[44px] lg:h-[48px]
  ">
              {openLiveAccountText}
            </button>

            {/* Try Free Demo Btn */}
            <button className="
    hidden sm:block 
    px-3 py-2 md:px-4 md:py-2.5 
    rounded-lg border border-white cursor-pointer 
    bg-transparent text-white hover:bg-white/10 transition
    text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base
    w-[80px] md:w-[120px] lg:w-[150px]
    h-[36px] md:h-[44px] lg:h-[48px]
  ">
              {tryFreeDemoText}
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0D0E] border-t border-white/10 px-4 py-6 z-40">
            <ul className="flex flex-col gap-4">
              {['Home', 'Trading', 'Ecosystem', 'Learn & Grow', 'Company'].map((item) => (
                <li key={item} className="cursor-pointer text-white text-base py-2 border-b border-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hero Section  */}
        <section ref={(el) => sectionRefs.current[0] = el} className="
          w-full max-w-7xl mx-auto
          flex flex-col lg:flex-row items-center justify-between
          pt-12 md:pt-10 lg:pt-[120px]
          pb-12 md:pb-16 lg:pb-[100px]
          px-4 md:px-8 lg:px-16 xl:px-[100px]
          bg-transparent min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
        ">
          <div className="w-full lg:w-[50%] max-w-[625px] text-center lg:text-left md:pt-10">
            <h1 className="
              font-semibold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 
              mb-4 md:mb-5
            ">
              Trade
              <AnimatePresence mode="wait">
                {isSmart ? (
                  <motion.span
                    key="smart"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, color: isSmartBlue ? '#3B82F6' : '#FFFFFF' }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {' Smart '}
                  </motion.span>
                ) : (
                  <motion.span
                    key="secure"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {' Secure '}
                  </motion.span>
                )}
              </AnimatePresence>
              With Finsai Trade.
            </h1>

            <p className="
              text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed 
              mb-6 md:mb-8 lg:mb-10 
              mx-auto lg:mx-0
              max-w-[625px] 
              text-[#86AAE3]
            ">
              {heroSubheading}
            </p>
          </div>

          <div className="w-full lg:w-[50%] text-center mt-8 lg:mt-0">
            <img
              src={Tabs || data.heroImage}
              alt="Finsai Tabs"
              className="
                w-full h-auto mx-auto
                max-w-[673px]
                object-contain
              "
            />
          </div>
        </section>

        {/* Market Section  */}
        <section className="bg-transparent py-12 lg:py-16 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider mb-2">
                {marketTitle}
              </h1>

              <div className="relative w-[100px] h-[2px] bg-[text-[#496DAB]] rounded-md my-6 mx-auto">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[text-[#496DAB]] rotate-45"></div>
              </div>
            </div>

            {/* Tabs Navigation - Fixed */}
            <div className="w-full max-w-[1500px] mx-auto overflow-x-auto">
              <div className="bg-[#496DAB] bg-opacity-20 shadow-lg min-w-max md:min-w-0 w-full rounded-lg">
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-around gap-1 py-2">
                  {tabsData.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-3 md:px-5 md:py-4 font-bold text-sm md:text-base transition-all duration-300 rounded-md
                           whitespace-nowrap ${activeTab === tab.id
                          ? 'text-blue-600 bg-[#A0EAF5] bg-opacity-15 w-[208px] h-[61px]'
                          : 'text-white border-transparent hover:text-blue-600'
                        }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div key={activeTab} className="mt-5 animate-fadeIn bg-[#496DAB] bg-opacity-20 shadow-lg w-full rounded-lg">
              <div className="flex flex-col lg:flex-row min-h-[400px] rounded-xl shadow-lg overflow-hidden ">
                <div className="w-full lg:w-[50%] flex flex-col items-start justify-center text-white p-6 md:p-8 lg:p-10">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-5 text-left">
                    {activeTabData.title}
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed text-left mb-6 md:mb-8 text-gray-300">
                    {activeTabData.description}
                  </p>
                  <button
                    className="bg-[#00d4ff] text-[#1a1a2e] border-none px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded cursor-pointer transition-colors duration-300 hover:bg-[#00b8e6] w-full md:w-auto">
                    Start Trading Now
                  </button>
                </div>

                <div className="w-full lg:w-[60%] flex items-center justify-center overflow-hidden p-10">
                  {/* Large Chart Image */}
                  <motion.div 
                    animate={laptopControls} 
                    className="flex-1"
                  >
                    <div ref={laptopRef} className="rounded-lg w-full flex items-center justify-center">
                      <img src={images[currentImageIndex]} alt="Laptop" className="w-full h-full object-cover aspect-auto" />
                    </div>
                  </motion.div>

                  {/* Pair Indicators */}
                  <motion.div 
                    animate={pairsControls} 
                    className="flex-none"
                  >
                    <div ref={pairsRef} className="flex flex-col gap-4 items-center justify-center min-w-[140px]">
                      {activeTabData.pairs.map((pair, index) => (
                        <div
                          key={index}
                          className="bg-[#2a3847]/60 rounded-lg px-6 py-4 flex items-center gap-3 min-w-[140px]"
                        >
                          <span className={`text-2xl ${pair.status === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                            ●
                          </span>
                          <span className="text-white font-semibold">{pair.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>


              </div>
              <div className="scroller-wrapper ">
                <div className="scroller inline-flex items-center gap-4 px-10 py-10 ">
                  {tabMarketData[activeTab].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-[357px] h-[113px] flex items-center text-white">
                      {/* Left side: Icon/Large Image */}
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-[82px] h-[82px] rounded-full  flex items-center justify-center">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-1">
                        {/* Title Row */}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <span className={`text-sm font-medium px-2 py-1 rounded ${item.percent.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {item.percent}
                          </span>
                        </div>

                        {/* Price Row */}
                        <div className="mb-2">
                          <p className="text-xl font-semibold">{item.price}</p>
                        </div>

                        {/* Bottom Row: Additional Info */}
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          {item.spread && (
                            <span>Spread: {item.spread}</span>
                          )}
                          {item.askPrice && item.bidPrice && (
                            <div className="flex gap-4">
                              <span>Bid: {item.bidPrice}</span>
                              <span>Ask: {item.askPrice}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right side: Graph */}
                      <div className="flex-shrink-0 ml-4">
                        <img
                          src={item.graph}
                          alt="graph"
                          className="w-16 h-8 object-contain"
                        />
                      </div>
                    </div>
                  ))}
                  {tabMarketData[activeTab].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-[357px] h-[113px] flex items-center text-white">
                      {/* Left side: Icon/Large Image */}
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-[82px] h-[82px] rounded-full flex items-center justify-center">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        {/* Title Row */}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <span className={`text-sm font-medium px-2 py-1 rounded ${item.percent.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {item.percent}
                          </span>
                        </div>

                        {/* Price Row */}
                        <div className="mb-2">
                          <p className="text-xl font-semibold">{item.price}</p>
                        </div>

                        {/* Bottom Row: Additional Info */}
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          {item.spread && (
                            <span>Spread: {item.spread}</span>
                          )}
                          {item.askPrice && item.bidPrice && (
                            <div className="flex gap-4">
                              <span>Bid: {item.bidPrice}</span>
                              <span>Ask: {item.askPrice}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right side: Graph */}
                      <div className="flex-shrink-0 ml-4">
                        <img
                          src={item.graph}
                          alt="graph"
                          className="w-16 h-8 object-contain"
                        />
                      </div>
                    </div>
                  ))} 
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Why choose Us Section  */}
        <section className="pt-12 md:pt-20 lg:pt-[100px] px-4 md:px-8 bg-transparent relative overflow-hidden min-h-screen flex flex-col items-center">
          <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">


            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6 lg:gap-8">

              {/* CARD 1 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(0) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    Quick Processing So You Receive Your Funds Without Delay.
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(1) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    Access A Wide Range Of Markets - All In One Platform.
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(2) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    Get Assistance Anytime From Our Dedicated Support Team.
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
            </div>


            {/* PHONE SECTION (middle unchanged) */}
            <div className="flex justify-center items-center relative z-20">
              <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[600px] md:w-[320px] md:h-[650px]">

                <img src={phoneScreen} className="w-full h-full object-cover rounded-[40px]" alt="Phone" />

                <div className="absolute top-0 left-2 right-2 bottom-2 md:left-2.5 md:right-2.5 md:bottom-2.5 z-30">
                  <img src={WhyChooseUsScreen} className="w-full pt-1 h-full rounded-lg" alt="Screen blur" />
                </div>

                <div className="absolute inset-0 rounded-[40px] z-50 pointer-events-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#212d5c]/90 rounded-[48px]">
                    <div className="absolute w-[90%] h-[63px] bg-white/30 backdrop-blur-[10px] rounded-md z-10"></div>

                    <h2 className="text-white text-xl font-bold text-center mt-3">Why Choose<br />Finsat Trade</h2>

                    <div className="relative w-[280px] max-w-[110vw] h-[80%] flex items-center justify-center overflow-hidden z-20">
                      {/* <div className="absolute top-[-10px] left-0 right-0 h-[130px] bg-gradient-to-b from-[#212d5c] to-transparent z-30"></div>
                      <div className="absolute bottom-[-30px] left-0 right-0 h-[130px] bg-gradient-to-t from-[#212d5c] to-transparent z-30"></div> */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-[23px]">
                          <div ref={listRef} className="absolute top-[-70px] left-0 w-full text-center">
                            {features.map((text, i) => (
                              <div key={i} className="h-[100px] flex items-center justify-center text-white text-[17px] font-medium">
                                {text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>



            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6 lg:gap-8">

              {/* CARD 4 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(3) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    Your Funds Are Protected With Advanced Security Systems.
                  </p>
                </div>

              </div>

              {/* CARD 5 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(4) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    Trade Confidently With A Fully Compliant And Regulated Broker.
                  </p>
                </div>

              </div>

              {/* CARD 6 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(5) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    Clear, Competitive Pricing With No Hidden Charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Tools Section */}
        <section className="bg-transparent py-8 md:py-10 lg:py-12 xl:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 md:mb-4 px-2">
              All The Tools You Need In One Platform
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center mb-8 md:mb-10 lg:mb-12 px-4">
              Our Platform Offers Everything You Need To Trade Efficiently And Stay Informed.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
              <div className="w-[120%] md:w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-0">
                <img
                  src={Laptop}
                  alt="Finsai Platform Screenshot"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute 
                        top-[48%] sm:top-[40%] md:top-[47%] 
                        left-[51%] sm:left-[51%] md:left-[50.5%] lg:left-[51%] 
                        -translate-x-1/2 -translate-y-1/2 
                        w-[64%] md:w-[65%] lg:w-[70%]
                        aspect-[475/310]
                        bg-gray-400">
                  <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full absolute top-0 left-0 z-0">
                    <motion.div
                      className="flex justify-center items-center bg-[#e74c3c]"
                      variants={{
                        hidden: { opacity: 0, translateX: "-100%", translateY: 0 },
                        visible: { opacity: 1, translateX: 0, translateY: 0 },
                        slideOutUp: { opacity: 0, translateY: "-100%", translateX: 0 }
                      }}
                      animate={
                        currentStep === 0 ? "hidden" :
                          (currentStep === 2 ? "slideOutUp" :
                            (currentStep >= 1 ? "visible" : "hidden"))
                      }
                      transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.2 : 0 }}
                    >
                      <img src={Calendar} alt="Calendar" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                      className="flex justify-center items-center bg-[#f39c12]"
                      variants={{
                        expanded: { scale: 2, opacity: 1, translateX: 0, translateY: 0 },
                        normal: { scale: 1, opacity: 1, translateX: 0, translateY: 0 },
                        slideOutUp: { opacity: 0, translateY: "-100%", translateX: 0, scale: 1 }
                      }}
                      initial="expanded"
                      animate={
                        currentStep === 0 ? "expanded" :
                          (currentStep === 2 ? "slideOutUp" :
                            (currentStep >= 1 && currentStep <= 5 ? "normal" : "expanded"))
                      }
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{ transformOrigin: "top right" }}
                    >
                      <img src={Analysis} alt="Analysis" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                      className="flex justify-center items-center bg-[#27ae60]"
                      variants={{
                        hidden: { opacity: 0, translateX: "-100%", scale: 1 },
                        visible: { opacity: 1, translateX: 0, scale: 1 },
                        expanded: { opacity: 1, translateX: 0, scale: 2 },
                        slideOutLeft: { opacity: 0, translateX: "-100%", scale: 1 },
                        slideOutRight: { opacity: 0, translateX: "100%", scale: 1 }
                      }}
                      animate={
                        currentStep === 0 ? "hidden" :
                          (currentStep === 4 ? "slideOutRight" :
                            (currentStep === 3 ? "slideOutLeft" :
                              (currentStep === 2 ? "expanded" :
                                (currentStep >= 1 ? "visible" : "hidden"))))
                      }
                      transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.2 : 0 }}
                      style={{ transformOrigin: "bottom left" }}
                    >
                      <img src={News} alt="News" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                      className="flex justify-center items-center bg-[#2980b9]"
                      variants={{
                        hidden: { opacity: 0, translateX: "100%", scale: 1 },
                        visible: { opacity: 1, translateX: 0, scale: 1 },
                        expanded: { opacity: 1, translateX: 0, scale: 2 },
                        slideOutRight: { opacity: 0, translateX: "100%", scale: 2 },
                        slideOutRightNormal: { opacity: 0, translateX: "100%", scale: 1 }
                      }}
                      animate={
                        currentStep === 0 ? "hidden" :
                          (currentStep === 4 ? "slideOutRight" :
                            (currentStep === 3 ? "expanded" :
                              (currentStep === 2 ? "slideOutRightNormal" :
                                (currentStep >= 1 ? "visible" : "hidden"))))
                      }
                      transition={{ duration: 1, ease: "easeOut", delay: currentStep === 1 ? 0.4 : 0 }}
                      style={{ transformOrigin: "bottom right" }}
                    >
                      <img src={Accounts} alt="Accounts" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute top-0 left-0 w-[50%] h-[50%] flex justify-center items-center bg-orange-200 z-20"
                    variants={{
                      hidden: { scale: 0, opacity: 1, translateX: 0 },
                      expanded: { scale: 2, opacity: 1, translateX: 0 },
                      slideOutLeft: { opacity: 0, translateX: "-200%", translateY: 0, scale: 2 }
                    }}
                    animate={
                      currentStep === 0 ? "hidden" :
                        (currentStep === 5 ? "slideOutLeft" :
                          (currentStep === 4 ? "expanded" : "hidden"))
                    }
                    transition={{ duration: currentStep === 0 ? 0 : 1, ease: "easeOut" }}
                    style={{ transformOrigin: "top left" }}
                  >
                    <img src={IBProgram} alt="IB Program" className="w-full h-full object-cover" />
                  </motion.div>

                  <motion.div
                    className="absolute top-0 right-0 w-[50%] h-[50%] flex justify-center items-center bg-black z-20"
                    variants={{
                      hidden: { scale: 0, opacity: 1 },
                      expanded: { scale: 2, opacity: 1 }
                    }}
                    animate={
                      currentStep === 0 ? "hidden" :
                        (currentStep === 5 ? "expanded" : "hidden")
                    }
                    transition={{ duration: currentStep === 0 ? 0 : 1, ease: "easeOut" }}
                    style={{ transformOrigin: "top right" }}
                  >
                    <img src={Bonuses} alt="Bonuses" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
                <ul className="space-y-3 md:space-y-4 text-white text-sm sm:text-base md:text-lg">
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Advanced Charting Software For Real-Time Analysis</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Economic Calendar And News Feeds For Timely Decisions</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Pip Calculators, Volatility Meters, And Risk Controls</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Demo Accounts To Test Strategies Safely</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Copy Trading, Screener, And Community Insights</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Automation, Backtesting, And Performance Tracking</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <CheckSquare className="text-[#496DAB] mr-2 sm:mr-3 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>IB Program - Bonuses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Account hover Section */}
        <section className="bg-[#496DAB]/10 text-white py-12 md:py-16 lg:py-20 px-4 md:px-5 min-h-screen flex items-center justify-center">
          <div className="max-w-[1160px] w-full mx-auto">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 md:mb-8 lg:mb-10 tracking-tight px-4">
              {accountsTitle}
            </h1>

            <div className="relative w-[60px] md:w-[80px] lg:w-[100px] h-[1.5px] md:h-[2px] bg-[#496DAB] rounded-md my-6 md:my-8 lg:my-10 mx-auto">
              <div className="absolute left-[-4px] md:left-[-5px] top-1/2 -translate-y-1/2 w-[5px] md:w-[6px] h-[5px] md:h-[6px] bg-[#496DAB] rotate-45"></div>
            </div>

            <p className="text-[#a8b2d1] text-sm md:text-base lg:text-lg xl:text-xl text-center mb-10 md:mb-12 lg:mb-16 font-light px-4 md:px-6 lg:px-8">
              {accountsSubtitle}
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 justify-center mb-8 md:mb-10 lg:mb-12 md:min-h-[410px] items-stretch">
              {accountTypes.map((account) => {
                const isActive = activeAccountIndex === account.id - 1;
                return (
                  <div
                    key={account.id}
                    className={`bg-[#496DAB] bg-opacity-10 border rounded-sm transition-all duration-1000 ease-out overflow-hidden flex items-center justify-center
            md:w-[100px] lg:w-[140px] md:px-[30px] lg:px-[54px] w-full
            ${isActive
                        ? 'md:flex-1 border-[rgba(91,127,199,0.6)] md:-translate-y-1 shadow-[0_10px_30px_rgba(91,127,199,0.3)] md:flex-row md:gap-8 lg:gap-14 md:px-[15px] lg:px-[20px] flex-col gap-3 py-5 px-5 min-h-[180px]'
                        : 'border-[rgba(91,127,199,0.2)] py-3 px-5 min-h-[60px]'
                      }`}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setActiveAccountIndex(account.id - 1);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setActiveAccountIndex(account.id - 1)}
                  >
                    <div className={`flex items-center justify-center w-full md:w-auto ${isActive ? 'md:flex-shrink-0' : ''}`}>
                      <h2
                        className={`text-base md:text-xl lg:text-2xl font-semibold tracking-[0.125rem] uppercase whitespace-nowrap transition-all duration-1000 ease-out md:[writing-mode:vertical-rl] md:rotate-180 ${isActive ? 'text-[#7a9dd9]' : 'text-[#5b7fc7]'
                          }`}
                      >
                        {account.title}
                      </h2>
                    </div>

                    <div
                      className={`transition-all duration-1000 ease-out flex flex-col items-center md:items-start justify-center gap-2 flex-1 overflow-hidden ${isActive
                        ? 'opacity-100 md:max-h-[400px] max-h-none w-full'
                        : 'opacity-0 max-h-0 w-0 md:w-0'
                        }`}
                    >
                      <p
                        className={`text-sm md:text-base lg:text-xl font-semibold text-[#a8b2d1] uppercase tracking-wide transition-opacity duration-1000 ease-out md:whitespace-normal lg:whitespace-nowrap text-center md:text-left break-words ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {account.subtitle}
                      </p>
                      <p
                        className={`text-[#8892b0] text-xs md:text-sm lg:text-md transition-opacity duration-1000 ease-out leading-relaxed text-center md:text-left break-words ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {account.description}
                      </p>
                      <button
                        className={`mt-1 py-1.5 px-4 md:py-2 md:px-5 lg:py-2 lg:px-6 bg-transparent text-[#5b7fc7] text-xs md:text-sm lg:text-md font-semibold cursor-pointer transition-opacity duration-1000 ease-out flex items-center gap-2 ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {account.buttonText}
                        <ArrowRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full mx-auto mb-6 md:mb-7 lg:mb-8 px-4 md:px-0">
              <div className="bg-gradient-to-b from-[#496DAB] to-[#A0EAF5] rounded-full h-1.5 md:h-2 overflow-hidden">
                <div
                  className="bg-[#D9D9D9] h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeAccountIndex + 1) / accountTypes.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <button className="block mx-auto py-3 px-8 md:py-4 md:px-12 bg-[#5b7fc7] text-white border-none rounded-lg text-base md:text-lg font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(91,127,199,0.3)] hover:bg-[#7a9dd9] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(91,127,199,0.4)]">
              Learn More
            </button>
          </div>
        </section>

        {/* Awards Section  */}
        <section
          className="bg-transparent text-white py-10 sm:py-16 md:py-20 px-4 sm:px-5 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[90vw] mx-auto items-center justify-center">
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-5 tracking-tight px-2">
              {awardsTitle}
            </h1>

            <div
              className="relative w-[80px] sm:w-[90px] md:w-[100px] h-[2px] bg-[text-[#496DAB]] rounded-md my-6 sm:my-8 md:my-10 mx-auto">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[text-[#496DAB]] rotate-45"></div>
            </div>

            <p className="text-[#ffffff] text-base sm:text-lg md:text-xl text-center mb-10 sm:mb-12 md:mb-16 font-medium px-4">
              {awardsdescription}
            </p>

            {/* Animation wrapper for Awards Side Images */}
            <div className="w-full p-5 relative overflow-hidden" style={{ minHeight: '300px' }}>
              <style>
                {`
                .award-sequence-entering {
                  animation: awardSlideIn 1.5s ease-out forwards;
                }
                .award-sequence-visible {
                  transform: translateY(0);
                  opacity: 1;
                }
                .award-sequence-exiting {
                  animation: awardSlideOut 1.5s ease-in forwards;
                }
                @keyframes awardSlideIn {
                  0% {
                    transform: translateY(120%);
                    opacity: 0;
                  }
                  100% {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
                @keyframes awardSlideOut {
                  0% {
                    transform: translateY(0);
                    opacity: 1;
                  }
                  100% {
                    transform: translateY(-120%);
                    opacity: 0;
                  }
                }
              `}
              </style>

              {/* Sequential animation with minimal gap */}
              {(() => {
                const leftAwardImages = [
                  { id: 1, src: ibprogram, alt: "World Forex Award 2025" },
                  { id: 2, src: innovativeStartup, alt: "Iconic Finance Expo 2023" },
                  { id: 3, src: deals, alt: "World Financial Award 2025" }
                ];

                const rightAwardImages = [
                  { id: 1, src: innovativeStartup, alt: "Iconic Finance Expo 2023" },
                  { id: 2, src: deals, alt: "World Financial Award 2025" },
                  { id: 3, src: ibprogram, alt: "World Forex Award 2025" }
                ];

                // Use a custom state for this component only
                const [currentIndex, setCurrentIndex] = useState(0);
                const [animationState, setAnimationState] = useState('visible');
                const [nextIndex, setNextIndex] = useState(1);

                useEffect(() => {
                  let interval;

                  const cycleImages = () => {
                    // Start exit animation for current image
                    setAnimationState('exiting');

                    // After 50% of exit animation, start next image entering
                    setTimeout(() => {
                      setCurrentIndex((prevIndex) => (prevIndex + 1) % leftAwardImages.length);
                      setAnimationState('entering');

                      // After enter animation completes, stay visible
                      setTimeout(() => {
                        setAnimationState('visible');
                      }, 1500); // Enter animation duration

                    }, 750); // Half of exit animation (overlap timing)
                  };

                  // Start the first cycle after initial delay
                  const startDelay = setTimeout(() => {
                    interval = setInterval(cycleImages, 3000); // Reduced total cycle time
                  }, 1000);

                  return () => {
                    clearTimeout(startDelay);
                    clearInterval(interval);
                  };
                }, []);

                return (
                  <div className="w-full bg-transparent min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-7xl flex flex-col lg:flex-row h-[615px] items-center gap-10 lg:gap-8">

                      {/* Left Side (30%) */}
                      <div className="w-full lg:w-[30%] bg-transparent h-[250px] lg:h-[250px] flex items-center justify-center overflow-hidden relative">
                        {leftAwardImages.map((img, index) => (
                          <img
                            key={img.id}
                            src={img.src}
                            alt={img.alt}
                            className={`absolute max-w-[90%] max-h-[90%] object-contain award-sequence-${animationState}`}
                            style={{
                              display: index === currentIndex ? 'block' : 'none'
                            }}
                          />
                        ))}
                      </div>

                      {/* Center (40%) - Static */}

                      <div className="w-full h-[280px] md:h-[615px] lg:w-[40%] bg-[#496DAB]/10 rounded-2xl  flex items-center justify-center overflow-hidden relative">
                        <style>
                          {`
            .text-carousel-container {
              position: relative;
              width: 100%;
              height: 300px;
              overflow: hidden;
            }
            
            .text-carousel-item {
              position: absolute;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              transition: all 0.6s ease-in-out;
              pointer-events: none;
            }
            
            .text-carousel-number {
              font-size: 5rem;
              font-weight: bold;
              color: white;
              margin-bottom: 0.75rem;
              transition: all 0.6s ease-in-out;
              line-height: 1;
            }
            
            .text-carousel-description {
              font-size: 1.5rem;
              color: #86AAE3;
              transition: all 0.6s ease-in-out;
              line-height: 1.2;
            }
            
            /* Active item */
            .text-carousel-item.active {
              transform: translateY(0);
              opacity: 1;
              z-index: 20;
            }
            
            .text-carousel-item.active .text-carousel-number {
              font-size: 5.5rem;
              opacity: 1;
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
            }
            
            .text-carousel-item.active .text-carousel-description {
              opacity: 1;
              transform: translateY(0);
            }
            
            /* Next item (coming from below, visible with gap) */
            .text-carousel-item.next {
              transform: translateY(180px); 
              opacity: 0.6;
              z-index: 10;
            }
            
            .text-carousel-item.next .text-carousel-number {
              font-size: 3.5rem;
              opacity: 0.4;
            }
            
            .text-carousel-item.next .text-carousel-description {
              opacity: 0.3;
              transform: translateY(5px);
            }
            
            /* Previous item (hidden above) */
            .text-carousel-item.prev {
              transform: translateY(-180px);
              opacity: 0;
              z-index: 5;
            }
            
            .text-carousel-item.prev .text-carousel-number {
              font-size: 3.5rem;
              opacity: 0;
            }
            
            .text-carousel-item.prev .text-carousel-description {
              opacity: 0;
              transform: translateY(-10px);
            }
            
            /* New item (coming from even further below) */
            .text-carousel-item.new {
              transform: translateY(300px); /* Start from way below */
              opacity: 0;
              z-index: 1;
            }
            
            /* Hidden items */
            .text-carousel-item.hidden {
              transform: translateY(900px);
              opacity: 0;
              z-index: 0;
            }
            
            /* Animation for transition between states */
            .text-carousel-item.transitioning {
              transition: all 0.7s cubic-bezier(0.5, 0, 0.2, 1);
            }

            /* Responsive adjustments */
            @media (max-width: 640px) { /* sm */
              .text-carousel-number {
                font-size: 3rem !important;
              }
              .text-carousel-description {
                font-size: 1rem !important;
              }
              .text-carousel-item.active .text-carousel-number {
                font-size: 3.5rem !important;
              }
              .text-carousel-item.next .text-carousel-number {
                font-size: 2rem !important;
              }
              .text-carousel-item.active {
                transform: translateY(70px) !important;
              }
              .text-carousel-item.next {
                transform: translateY(200px) !important; 
              }
              .text-carousel-item.new {
                transform: translateY(230px) !important;
              }
              .text-carousel-item.prev {
                transform: translateY(-70px) !important;
              }
              .text-carousel-item.hidden {
                transform: translateY(630px) !important;
              }
            }

            @media (min-width: 641px) and (max-width: 768px) { /* md */
              .text-carousel-number {
                font-size: 4rem !important;
              }
              .text-carousel-description {
                font-size: 1.25rem !important;
              }
              .text-carousel-item.active .text-carousel-number {
                font-size: 4.5rem !important;
              }
              .text-carousel-item.next .text-carousel-number {
                font-size: 3rem !important;
              }
              .text-carousel-item.active {
                transform: translateY(40px) !important;
              }
              .text-carousel-item.next {
                transform: translateY(180px) !important;
              }
              .text-carousel-item.new {
                transform: translateY(290px) !important;
              }
              .text-carousel-item.prev {
                transform: translateY(-100px) !important;
              }
              .text-carousel-item.hidden {
                transform: translateY(790px) !important;
              }
            }

            @media (min-width: 769px) { /* lg and up */
              .text-carousel-number {
                font-size: 5rem !important;
              }
              .text-carousel-description {
                font-size: 1.5rem !important;
              }
              .text-carousel-item.active .text-carousel-number {
                font-size: 5.5rem !important;
              }
              .text-carousel-item.next .text-carousel-number {
                font-size: 3.5rem !important;
              }
              .text-carousel-item.active {
                transform: translateY(50px) !important;
              }
              .text-carousel-item.next {
                transform: translateY(230px) !important;
              }
              .text-carousel-item.new {
                transform: translateY(350px) !important;
              }
              .text-carousel-item.prev {
                transform: translateY(-130px) !important;
              }
              .text-carousel-item.hidden {
                transform: translateY(950px) !important;
              }
            }
          `}
                        </style>

                        {(() => {
                          const textItems = [
                            { id: 1, number: "168M+", description: "Monthly Deals" },
                            { id: 2, number: "3M+", description: "Monthly Worldwide" },
                            { id: 3, number: "$650B+", description: "Monthly Volume" }
                          ];

                          const [currentIndex, setCurrentIndex] = useState(0);
                          const [isTransitioning, setIsTransitioning] = useState(false);

                          useEffect(() => {
                            const transitionTime = 600; // 0.6 seconds
                            const visibleTime = 1800; // 1.8 seconds visible

                            const interval = setInterval(() => {
                              setIsTransitioning(true);

                              // After transition completes, move to next item
                              setTimeout(() => {
                                setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);

                                // Reset transitioning state
                                setTimeout(() => {
                                  setIsTransitioning(false);
                                }, 50);

                              }, transitionTime);

                            }, transitionTime + visibleTime); // Total: 2.4 seconds per item

                            return () => clearInterval(interval);
                          }, []);

                          // Calculate positions for each item
                          const getItemClass = (index) => {
                            const totalItems = textItems.length;
                            const relativePosition = (index - currentIndex + totalItems) % totalItems;

                            switch (relativePosition) {
                              case 0: return 'active';           // Current center item
                              case 1: return 'next';             // Next item (coming from below)
                              case 2: return 'new';              // New item (coming from further below)
                              case totalItems - 1: return 'prev'; // Previous item (hidden above)
                              default: return 'hidden';          // Others
                            }
                          };

                          return (
                            <div className="text-carousel-container">
                              {textItems.map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`text-carousel-item ${getItemClass(index)} ${isTransitioning ? 'transitioning' : ''}`}
                                >
                                  <div className="text-carousel-number">{item.number}</div>
                                  <div className="text-carousel-description">{item.description}</div>
                                </div>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                      {/* Right Side (30%) */}
                      <div className="w-full lg:w-[30%] bg-transparent h-[250px] lg:h-[250px] flex items-center justify-center overflow-hidden relative">
                        {rightAwardImages.map((img, index) => (
                          <img
                            key={img.id}
                            src={img.src}
                            alt={img.alt}
                            className={`absolute max-w-[90%] max-h-[90%] object-contain award-sequence-${animationState}`}
                            style={{
                              display: index === currentIndex ? 'block' : 'none'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
        
        {/* Step Section  */}
        <section className="bg-[#496DAB]/20 py-8 sm:py-10 md:py-12 w-full max-w-7xl mx-auto">
          <div className="w-full block max-[1023px]:hidden px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-2">
              <div
                className="w-full lg:w-[20%] flex flex-col items-center lg:items-start justify-center h-[320px] sm:h-[400px] lg:h-[645px]">
                <div className="relative w-full flex items-center justify-center lg:justify-between mb-4 pl-10">
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center">
                    <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white">
                      {[1, 2, 3, 4].map((num) => (
                        <span key={num} className={`absolute top-1/2 left-[100px] transform -translate-x-1/2 -translate-y-1/2
                          transition-all duration-1200 ease-in-out ${activeStep === num ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-90'}`}>
                          {num}
                        </span>
                      ))}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[30%] flex items-center justify-center h-[320px] sm:h-[400px] lg:h-[645px]">
                <div
                  className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[320px] lg:h-[645px]">
                  {[
                    { id: 1, image: phoneScreen },
                    { id: 2, image: screenblur },
                    { id: 3, image: phoneScreen },
                    { id: 4, image: screenblur }
                  ].map((step) => (
                    <img key={step.id} src={step.image} alt={`phone step ${step.id}`} className={`absolute inset-0 w-full h-full
              object-contain transition-all duration-1200 ease-in-out ${activeStep === step.id ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'}`} />
                  ))}
                </div>
              </div>

              <div
                className="w-full lg:w-[45%] flex flex-col justify-center h-[320px] sm:h-[400px] lg:h-[645px] overflow-hidden">
                <div className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    4 steps to get started
                  </h3>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {[
                      { id: 1, title: 'SignUp' },
                      { id: 2, title: 'Complete the KYC to Verify your Account' },
                      { id: 3, title: 'Deposit' },
                      { id: 4, title: 'Trade' }
                    ].map((step) => (
                      <button key={step.id} className={`h-[85px] w-[675px] rounded-full font-semibold text-left px-8
                transition-all duration-700 ease-in-out text-base sm:text-lg md:text-xl ${activeStep === step.id
                          ? 'bg-[#496DAB] text-white shadow-lg ml-10' : 'bg-[#387AFF]/10 text-gray-300 ml-44'}`}>
                        {step.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-[768px]:block min-[769px]:hidden px-4">
            {(() => {
              const [activeMobileStep, setActiveMobileStep] = useState(0);
              const mobileSteps = [
                {
                  number: "1",
                  title: "SignUp",
                  image: phoneScreen,
                },
                {
                  number: "2",
                  title: "Verify",
                  image: screenblur,
                },
                {
                  number: "3",
                  title: "Fund",
                  image: phoneScreen,
                },
                {
                  number: "4",
                  title: "Trade",
                  image: screenblur,
                }
              ];

              useEffect(() => {
                const timer = setInterval(() => {
                  setActiveMobileStep((prev) => (prev + 1) % mobileSteps.length);
                }, 3000);
                return () => clearInterval(timer);
              }, []);

              const currentStep = mobileSteps[activeMobileStep];

              return (
                <div className="flex flex-col items-center py-8">
                  {/* Step Number and Title */}
                  <div className="flex items-center gap-4 sm:gap-10 mb-6 w-full">
                    <div className="text-7xl font-bold text-white ml-4">
                      {currentStep.number}
                    </div>
                    <div className="flex-1 bg-[#5B7FC7] rounded-full px-6 py-4 min-w-[300px] min-[424px]:ml-20 ml-10">
                      <h3 className="text-xl font-bold text-white text-center">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  {/* Phone Mockup */}
                  <div className="w-full max-w-[280px] mx-auto">
                    <div className="relative">
                      {/* Phone Notch */}
                      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-3xl z-10"></div> */}

                      {/* Phone Screen */}
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={currentStep.image}
                          alt={currentStep.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

          {/* Platforms Section */}
        <section ref={(el) => sectionRefs.current[4] = el} className="py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-12 xl:px-[140px] bg-transparent text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-tight mb-4 md:mb-5 text-center">
              Powerful Platforms
              <br />
              For Every Trader
            </h1>
            <p className="text-base md:text-lg opacity-80 max-w-xl leading-relaxed mb-6 md:mb-8 text-center whitespace-nowrap">
              {platformsDescription}
            </p>
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-8 mb-8 md:mb-10">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center bg-gray-700/30 backdrop-blur-md rounded-xl p-6 w-full text-center border border-white/10 shadow-lg ${
                    index === 1 ? 'md:w-[500px] md:h-[345px]' : 'md:w-[450px] md:h-[280px]'
                  }`}
                >
                  <div className={`rounded-full bg-blue-500/30 flex items-center justify-center mx-auto mb-4 ${
                    index === 1 ? 'w-[70px] h-[70px]' : 'w-[57px] h-[57px]'
                  }`}>
                    <img src={iconMap[platform.icon]} alt={platform.title} className={`filter brightness-0 invert ${index === 1 ? 'w-7 h-7' : 'w-5 h-5'}`} />
                  </div>
                  <h4 className={`font-bold mb-2 ${index === 1 ? 'text-xl' : 'text-lg'}`}>{platform.title}</h4>
                  <p className={`opacity-80 ${index === 1 ? 'text-base' : 'text-sm'}`}>{platform.description}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#6D28D9] text-white border-none px-6 md:px-8 py-2.5 md:py-3 rounded-xl text-sm md:text-base cursor-pointer font-semibold">
              {platformsLearnMoreText}
            </button>
          </div>
        </section>

         {/* Signup Form Section */ }
        <section className="bg-transparent py-4 px-4 md:px-8">
          <div className="max-w-7xl h-[232px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[100px] bg-[#87B3FF]/10 rounded-lg">
            <h3 className="text-white text-base md:text-2xl font-semibold ">
            Sign Up to stay in the <br/> Loop with FINSAI Trade
            </h3>
            <div className="flex items-center gap-2 w-[700px] md:w-[700px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-[#FFFFFF]/10 text-white px-4 py-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-[500px] "
              />
              <button className="bg-[#496DAB] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 w-[176px]">
                Get Updates
              </button>
              <img src={plane} alt="Send" className="pl-4 w-[230px] h-[177px] transition-transform duration-300 hover:translate-x-10 hover:-translate-y-4 hover:rotate-2" />
            </div>
          </div>
        </section>

          {/* Footer Section   */}
        <footer className="bg-transparent text-white py-8 md:py-10 lg:py-12 px-4 md:px-6">
          <div className="pt-3 md:pt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 text-[#86AAE3]">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <img src={footerLogo} alt="Finsai Group Logo" className="w-[140px] h-[56px] md:w-[160px] md:h-[64px] lg:w-[185px] lg:h-[74px]" />
              </div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs">
                {footerDescription}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="pt-0 lg:pt-8 font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">Quick Link</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                {quickLinks.map((item) => (
                  <li key={item}><a href="#" className="hover:text-cyan-400 transition">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="pt-0 lg:pt-8 font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">Help</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                {helpLinks.map((item) => (
                  <li key={item}><a href="#" className="hover:text-cyan-400 transition">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="pt-0 lg:pt-8 font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">Others</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                {otherLinks.map((item) => (
                  <li key={item}><a href="#" className="hover:text-cyan-400 transition">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="pt-0 lg:pt-8 font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">Download App</h3>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <a href="#" className="flex items-center bg-[#FFFFFF] backdrop-blur-sm border border-gray-700 rounded-lg px-3 md:px-4 py-2.5 md:py-3 hover:bg-black/60 transition space-x-2 md:space-x-3">
                  <img src={playstore} alt="Google Play" className="w-8 h-8 md:w-10 md:h-10" />
                  <div>
                    <div className="text-[10px] md:text-xs text-black">{googlePlayText}</div>
                    <div className="text-xs md:text-sm font-medium text-[#0D0D0E]">{googlePlaySubtext}</div>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-[#FFFFFF] backdrop-blur-sm border border-gray-700 rounded-lg px-3 md:px-4 py-2.5 md:py-3 hover:bg-black/60 transition space-x-2 md:space-x-3">
                  <img src={apple} alt="App Store" className="w-8 h-8 md:w-10 md:h-10" />
                  <div>
                    <div className="text-[10px] md:text-xs text-black">{appStoreText}</div>
                    <div className="text-xs md:text-sm font-medium text-[#0D0D0E]">{appStoreSubtext}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="max-w-7xl mx-auto mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 md:gap-0">
            <p className="text-center md:text-left">{copyrightText}</p>
            <div className="flex space-x-4 md:space-x-6">
              {socialLinks.map(({ icon, label }) => {
                const IconComponent = { Facebook, Twitter, Youtube, Linkedin, Instagram }[icon];
                return (
                  <a key={label} href="#" className="hover:text-cyan-400 transition" aria-label={label}>
                    {IconComponent && <IconComponent size={18} className="md:w-5 md:h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </footer>
        
      </div>
    </>
  );
};

export default FinsaiHomepage;