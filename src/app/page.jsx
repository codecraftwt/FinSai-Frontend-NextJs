'use client';

import assets from '../assets/assets.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import PlatformCards from '../components/layout/PlatformCards.jsx';
import ToolsSection from '../components/layout/ToolsSection.jsx';

import { ArrowRightIcon, CheckSquare, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import React, { useState, useEffect, useRef } from 'react';
import {
  useAwardsAnimation,
  useMarketAnimation,
  usePhoneTextAnimation,
  usePlatformsAnimation,
  useTabAnimation,
  useToolAnimation
} from '../components/hooks/Animation';
import StepsSection from '../components/StepsSection';

const FinsaiHomepage = ({ data = {}, scrollToSection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLogoPairIndex, setCurrentLogoPairIndex] = useState(0);

  const tabImages = {
    tab1: [assets.EurUsd, assets.Usdjpy],
    tab2: [assets.GoldScreen, assets.SilverScreen],
    tab3: [assets.AmazonScreen, assets.NvidiaScreen],
    tab4: [assets.US30Screen, assets.US500Screen],
    tab5: [assets.BrentOil, assets.Crudoil, assets.NaturalGas],
    tab6: [assets.BtcUsd, assets.EthUsd, assets.SolUsd]
  };

  const tabLogos = {
    tab1: [assets.AUDUSD, assets.GBPUSD],
    tab2: [assets.GOLD, assets.SILVER],
    tab3: [assets.AMAZON, assets.NVIDIA],
    tab4: [assets.US30, assets.US500],
    tab5: [assets.USOSPOT, assets.NATGAS],
    tab6: [assets.BITCOIN, assets.ETHEREUM, assets.LITECOIN]
  };

  const tabPairNames = {
    tab1: ['AUD/USD', 'GBP/USD'],
    tab2: ['GOLD', 'SILVER'],
    tab3: ['AMZN', 'NVDA'],
    tab4: ['US30', 'US500'],
    tab5: ['WTI', 'NATURAL GAS'],
    tab6: ['BTC/USD', 'ETH/USD', 'LTC/USD']
  };

  const [rotation, setRotation] = useState(0);
  const rotations = [
    [0, 1, 2],
    [1, 2, 0],
    [2, 0, 1]
  ];
  const distances = [-500, 0, 500];

  const sectionRefs = useRef([]);
  const laptopRef = useRef(null);
  const pairsRef = useRef(null);
  const isMountedRef = useRef(true);

  // NEW: Refs and state for responsive tabs
  const tabsContainerRef = useRef(null);
  const [tabGroupIndex, setTabGroupIndex] = useState(0);
  const [visibleTabCount, setVisibleTabCount] = useState(3);
  const [maxGroups, setMaxGroups] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

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
    license: assets.license,
    atm: assets.atm,
    phone: assets.phone,
    safebox: assets.safebox,
    metatrader: assets.metatrader,
    webtrader: assets.webtrader,
    mobileapp: assets.mobileapp
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
      { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders", icon: assets.linear1 },
      { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders", icon: assets.linear2 },
      { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers", icon: assets.linear3 },
      { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals", icon: assets.linear1 }
    ],
    awards = [
      { title: "World Forex Award 2025", subtitle: "Best IB Program" },
      { title: "World Financial Award 2025", subtitle: "Trusted Financial Services" },
      { title: "Iconic Finance Expo 2023", subtitle: "Innovative Startup In Finance" }
    ],
    footerLogo = assets.logo,
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

  const cardTexts = [
    "Quick Processing So You Receive Your Funds Without Delay.",
    "Access A Wide Range Of Markets - All In One Platform.",
    "Get Assistance Anytime From Our Dedicated Support Team.",
    "Your Funds Are Protected With Advanced Security Systems.",
    "Trade Confidently With A Fully Compliant And Regulated Broker.",
    "Clear, Competitive Pricing With No Hidden Charges."
  ];

  const cardOrder = [0, 3, 1, 4, 2, 5];

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
        { name: 'EUR/USD' },
        { name: 'USD/JPY' }
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
      { title: "AUD/USD", icon: assets.AUDUSD, bidPrice: "1.41111", spread: "0.2", askPrice: "1.41111" },
      { title: "GBP/USD", icon: assets.GBPUSD, bidPrice: "1.2749", spread: "0.3", askPrice: "1.2752" },
      { title: "AUD/USD", icon: assets.AUDUSD, bidPrice: "1.0849", spread: "0.2", askPrice: "1.0851" },
      { title: "NZD/USD", icon: assets.NZDUSD, bidPrice: "0.80793", spread: "0.4", askPrice: "0.80797" },
      { title: "USD/CAD", icon: assets.USDCAD, bidPrice: "1.41111", spread: "0.2", askPrice: "1.4113" },
    ],
    tab2: [
      { title: "XAUUSD", description: "Gold", icon: assets.GOLD, price: "$4158.79", percent: "102.46%" },
      { title: "XAUUSD", description: "Silver", icon: assets.SILVER, price: "$53.2362", percent: "129.31%" },
      { title: "XPTUSD", description: "Platinum", icon: assets.PLATINUM, price: "$1605.47", percent: "74.92%" },
      { title: "XPDUSD", description: "Palladium", icon: assets.PALLADIUM, price: "$1426.66", percent: "45.51%" },
    ],
    tab3: [
      { title: "AAPL.CO", description: "Apple Inc.", icon: assets.APPLE, price: "$175.50", percent: "+1.20%" },
      { title: "META.OQ", description: "Meta Inc", icon: assets.META, price: "$220.30", percent: "44.90%" },
      { title: "MSFT.OQ", description: "Microsoft Corp.", icon: assets.WINDOWS, price: "$135.80", percent: "25.23%" },
      { title: "AMZN.OQ", description: "Amazon.com", icon: assets.AMAZON, price: "$3,850.00", percent: "-100.00%" },
      { title: "NFLX.OQ", description: "Netflix Inc.", icon: assets.NETFLIX, price: "$580.40", percent: "-100.00%" },
      { title: "NVDA.oq", description: "NVIDIA Corp.", icon: assets.NVIDIA, price: "$0", percent: "-100.00%" },
    ],
    tab4: [
      { title: "DE30", description: "", icon: assets.DE30, price: "$0", percent: "-100.00%" },
      { title: "UT100", description: "", icon: assets.UT100, price: "$25252.8", percent: "+50.05%" },
      { title: "UK100", description: "", icon: assets.UK100, price: "$9669.75", percent: "27.32%" },
      { title: "US30", description: "", icon: assets.US30, price: "$113", percent: "4.54%" },
      { title: "US500", description: "", icon: assets.US500, price: "$6813", percent: "42.54%" }
    ],
    tab5: [
      { title: "USOSPOT", description: "Crude Oil", icon: assets.USOSPOT, price: "$78.50", percent: "-1.10%" },
      { title: "NATGAS", description: "Natural Gas", icon: assets.NATGAS, price: "$3.45", percent: "+2.60%" },
      { title: "USOSPOT", description: "Crude Oil", icon: assets.USOSPOT, price: "$78.50", percent: "-1.10%" },
      { title: "NATGAS", description: "Natural Gas", icon: assets.NATGAS, price: "$3.45", percent: "+2.60%" },
    ],
    tab6: [
      { title: "BTCUSD", description: "Bitcoin", icon: assets.BITCOIN, price: "$91475.2", percent: "113.32%" },
      { title: "LTCUSD", description: "Litecoin", icon: assets.LITECOIN, price: "$86.56", percent: "23.60%" },
      { title: "ETHUSD", description: "Etherum", icon: assets.ETHEREUM, price: "$3030.45", percent: "19.75%" },
      { title: "DOGUSD", description: "Doge Coin", icon: assets.DOGUSD, price: "$0.15336", percent: "88.47%" },
      { title: "RPLUSD", description: "Ripple Coin", icon: assets.RIPPLECOIN, price: "$2.1966", percent: "276.23%" },
    ],
  };

  const accountypes = [
    { id: 1, title: "Advanced charting software for real-time analysis", img: assets.advance },
    { id: 2, title: "Ultra-fast trade execution with low latency", img: assets.advance },
    { id: 3, title: "Institutional grade liquidity & deep order books", img: assets.advance },
    { id: 4, title: "Smart risk management tools for professionals", img: assets.advance },
  ];

  const { currentIndex } = useAwardsAnimation();
  const { activeIndex, tickerRef } = useMarketAnimation();
  const { listRef, currentIndex: phoneTextIndex, visibleCards } = usePhoneTextAnimation(features);
  const { currentCardIndex } = usePlatformsAnimation(platforms);
  const { activeTab, setActiveTab } = useTabAnimation(tabsData);
  const { activeToolIndex, toolAnimationState } = useToolAnimation(accountypes.length);

  const laptopControls = useAnimation();
  const pairsControls = useAnimation();

  const currentTool = accountypes[activeToolIndex];

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  const currentTabImages = tabImages[activeTab] || tabImages.tab1;
  const currentTabLogos = tabLogos[activeTab] || tabLogos.tab1;
  const currentTabPairNames = tabPairNames[activeTab] || tabPairNames.tab1;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateTabLayout = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      const newVisibleCount = width <= 425 ? 2 : 3;
      setVisibleTabCount(newVisibleCount);
      const totalGroups = Math.ceil(tabsData.length / newVisibleCount);
      setMaxGroups(totalGroups - 1 || 0);
      setTabGroupIndex(0);
      if (tabsContainerRef.current) {
        tabsContainerRef.current.scrollLeft = 0;
      }
    };

    updateTabLayout();
    window.addEventListener('resize', updateTabLayout);
    return () => window.removeEventListener('resize', updateTabLayout);
  }, [tabsData.length]);

  const scrollTabs = (direction) => {
    if (!tabsContainerRef.current) return;

    const container = tabsContainerRef.current;
    const firstTab = container.querySelector('button');
    if (!firstTab) return;

    const tabWidth = firstTab.offsetWidth + 8;
    const scrollAmount = tabWidth * visibleTabCount;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setTabGroupIndex((prev) => Math.max(0, prev - 1));
    } else {
      container.scrollLeft += scrollAmount;
      setTabGroupIndex((prev) => Math.min(maxGroups, prev + 1));
    }
  };

  useEffect(() => {
    if (scrollToSection) {
      const sectionIndex = sectionMap[scrollToSection];
      if (sectionIndex !== undefined) {
        setTimeout(() => {
          if (sectionRefs.current[sectionIndex]) {
            sectionRefs.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, [scrollToSection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(0);
      setCurrentLogoPairIndex(0);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isSmallScreen = window.innerWidth < 640;

    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentTabImages.length);
        setCurrentLogoPairIndex((prev) => (prev + 1) % Math.max(currentTabLogos.length - 1, 1));
      }, 4500); 

      return () => clearInterval(interval);
    } else {
      if (!laptopRef.current || !pairsRef.current) return;

      const getDimensions = () => ({
        laptopWidth: laptopRef.current.offsetWidth,
        pairsWidth: pairsRef.current.offsetWidth,
      });

      let dimensions = getDimensions();
      let isAnimating = true;
      let animationTimeout;

      const animateCycle = async () => {
        if (!isAnimating) return;

        dimensions = getDimensions();

        await Promise.all([
          laptopControls.start({
            x: 0,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
          }),
          pairsControls.start({
            x: 0,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
          })
        ]);

        await new Promise(resolve => setTimeout(resolve, 500));

        for (let i = 0; i < 2; i++) {
          if (!isAnimating) return;

          const moveAnimation = Promise.all([
            laptopControls.start({
              x: dimensions.pairsWidth + 30,
              transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
            }),
            pairsControls.start({
              x: -dimensions.laptopWidth,
              transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
            })
          ]);

          setTimeout(() => {
            if (isAnimating) {
              setCurrentImageIndex((prev) => (prev + 1) % currentTabImages.length);
              setCurrentLogoPairIndex((prev) => (prev + 1) % Math.max(currentTabLogos.length - 1, 1));
            }
          }, 350);

          await moveAnimation;
          await new Promise(resolve => setTimeout(resolve, 600));

          const returnAnimation = Promise.all([
            laptopControls.start({
              x: 0,
              transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
            }),
            pairsControls.start({
              x: 0,
              transition: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
            })
          ]);

          setTimeout(() => {
            if (isAnimating) {
              setCurrentImageIndex((prev) => (prev + 1) % currentTabImages.length);
              setCurrentLogoPairIndex((prev) => (prev + 1) % Math.max(currentTabLogos.length - 1, 1));
            }
          }, 390);

          await returnAnimation;
          await new Promise(resolve => setTimeout(resolve, 600));
        }

        if (isAnimating) {
          animationTimeout = setTimeout(animateCycle, 400);
        }
      };

      animationTimeout = setTimeout(animateCycle, 50);

      const handleResize = () => {
        dimensions = getDimensions();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        isAnimating = false;
        if (animationTimeout) {
          clearTimeout(animationTimeout);
        }
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
    }
  }, [activeTab, currentTabImages.length, currentTabLogos.length]);



  const iconMapMarkets = {
    forex: assets.forex1,
    crypto: assets.crypto1,
    commodities: assets.commodities1,
    indices: assets.indices1,
    stocks: assets.stocks1
  };

  const iconMapAnimated = {
    bitcoin2: assets.bitcoin2,
    crypto2: assets.crypto2
  };

  const curveMap = {
    curve1: assets.curve1,
    curve2: assets.curve2
  };

  const MarketsData = data.marketsData ? data.marketsData.map(market => ({
    category: market.category,
    assets: market.assets,
    iconSrc: iconMapMarkets[market.icon] || assets.forex1,
    highlight: false
  })) : [
    { category: 'Forex', assets: 'Major & Minor Currency Pairs', iconSrc: assets.forex1, highlight: false },
    { category: 'Cryptocurrencies', assets: 'BTC, ETH, XCH & More', iconSrc: assets.crypto1, highlight: false },
    { category: 'Commodities', assets: 'Gold, Oil, Silver', iconSrc: assets.commodities1, highlight: false },
    { category: 'Indices', assets: 'S&P 500, NASDAQ, FTSE', iconSrc: assets.indices1, highlight: false },
    { category: 'Stocks', assets: 'Top-tier & second equities', iconSrc: assets.stocks1, highlight: false },
  ];

  const accountTypes = data.accounts ? data.accounts.map((acc, idx) => ({
    id: idx + 1,
    title: acc.type.toUpperCase()
  })) : [
    { id: 1, title: 'SMART START', subtitle: 'Beginners', description: '(FIRST-TIME TRADERS)', buttonText: 'Open Account' },
    { id: 2, title: 'SMART CHOICE', subtitle: 'New Retail Clients', description: '', buttonText: 'Open Account' },
    { id: 3, title: 'SMART PRO', subtitle: 'Mid-level Traders', description: '', buttonText: 'Open Account' },
    { id: 4, title: 'SMART ELITE', subtitle: 'Advanced Traders', description: 'Prop Traders', buttonText: 'Open Account' },
    { id: 5, title: 'SMART VIP', subtitle: 'Passive Investors', description: '', buttonText: 'Open Account' }
  ];

  const marketData = data.marketData ? data.marketData.map(m => ({
    icon: iconMapAnimated[m.icon] || assets.bitcoin2,
    title: m.title,
    price: m.price,
    percent: m.percent,
    graph: curveMap[m.graph] || assets.curve1
  })) : [
    { icon: assets.bitcoin2, title: "Forex", price: "$56,623.54", percent: "+1.41%", graph: assets.curve1 },
    { icon: assets.crypto2, title: "Crypto", price: "$4,267.90", percent: "+2.22%", graph: assets.curve2 },
    { icon: assets.bitcoin2, title: "Indices", price: "$1,289.33", percent: "-0.44%", graph: assets.curve1 },
    { icon: assets.crypto2, title: "Metals", price: "$2,143.11", percent: "+0.67%", graph: assets.curve2 },
    { icon: assets.crypto2, title: "Stocks", price: "$823.77", percent: "+3.12%", graph: assets.curve2 },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % rotations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotations.length]);

  const [isSmart, setIsSmart] = useState(true);
  const [isSmartBlue, setIsSmartBlue] = useState(false);

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


          {/* <div className='rounded-full '
            style={{
              position: 'absolute',
              left: '55vw',
              top: '280px',
              width: '50vw',
              height: '50vw',
              maxWidth: '800px',
              maxHeight: '800px',
              background: 'linear-gradient(to right, text-[#496DAB] 97%, text-[#496DAB] 100%)',
              filter: 'blur(54px)',
              opacity: 0.1,
              transform: 'translate(-50%, -50%)',
            }}
          /> */}


          {/* <div
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
          /> */}

          {/* <div className='rounded-full opacity-20'
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
          /> */}


          {/* <div className="pointer-events-none absolute top-[3225px] left-[50%] w-[90vw] max-w-[993px] h-[365px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-3xl opacity-15 -translate-x-1/2 -translate-y-1/2"></div> */}

          {/* <div className="pointer-events-none absolute top-[4000px] right-10 w-[400px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-[70px] opacity-10 -translate-x-1/3 -translate-y-1/3"></div> */}
          {/* <div className="pointer-events-none absolute top-[4050px] right-20 w-[200px] h-[200px] bg-gradient-to-r from-[text-[#496DAB]] to-[text-[#496DAB]] rounded-full blur-[60px] opacity-40 -translate-x-1/3 -translate-y-1/3"></div> */}

          {/* <div className="pointer-events-none absolute top-[4000px] left-10 w-[400px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-full blur-[70px] opacity-10 -translate-x-1/3 -translate-y-1/3"></div> */}


          {/* <div className="pointer-events-none absolute top-[4600px] left-[50%] w-[90vw] max-w-[1000px] h-[400px] bg-gradient-to-r from-[#2865FF] to-[text-[#496DAB]] rounded-sm blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div> */}
        </div>

        {/* <div className="absolute inset-0 pointer-events-none z-10">
          <img
            src={linearball}
            alt="bg3"
            className="absolute top-[1850px] right-10 md:right-20 w-48 h-48 md:w-[300px] md:h-[300px] object-cover rounded-3xl opacity-100"
          />
        </div> */}

        {/* Header / Navbar Section */}
        <Header
          data={data}
          isScrolled={isScrolled}
        />

        {/* Hero Section  */}
        <section ref={(el) => sectionRefs.current[0] = el} className="
          relative
          w-full max-w-full mx-auto
          flex flex-col lg:flex-row items-center justify-between
          pt-32 md:pt-10 lg:pt-[120px]
          pb-12 md:pb-8 lg:pb-24
          px-4 md:px-8 lg:px-16
          bg-transparent min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
        ">
          {/* <div className="absolute top-[80%] left-[15%] w-[300px] h-[100px] md:w-[350px] md:h-[200px] bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 z-[-10] rotate-[45deg] "></div> */}
          <div className="absolute top-[80%] left-[15%] w-[300px] h-[100px] md:w-[350px] md:h-[200px] bg-gradient-radial bg-linear-hero  rounded-full filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 z-[-10] rotate-[45deg] "></div>
          <div className="absolute top-[50%] left-1/2 sm:top-[20%] sm:left-[80%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-gradient-radial bg-linear-hero  rounded-full filter blur-[160px] opacity-100 -translate-x-1/2 -translate-y-1/2 z-[-10] rotate-[45deg] "></div>
        
          <div className="w-full lg:w-[50%] max-w-[625px] text-center lg:text-left">
            <h1 className="
              font-bold leading-tight
              text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl
              mb-4 md:mb-5
              overflow-visible
            ">
              {heroHeading}
            </h1>

            <p className="
      text-lg 
      sm:text-xl 
      md:text-2xl 
      lg:text-xl 
      xl:text-2xl 
      2xl:text-3xl
      leading-relaxed 
      text-[#86AAE3] 
      font-light 
      max-w-2xl 
      mx-auto lg:mx-0
    ">
              {heroSubheading}
            </p>
          </div>

          <div className="
  w-full lg:w-1/2 
  flex flex-col items-center lg:flex-row lg:justify-end 
  mt-12 lg:mt-0
">

            <img
              src={assets.Tabs || data.heroImage}
              alt="Finsai Trade Platform"
              className="
      w-full 
      max-w-sm 
      sm:max-w-md 
      md:max-w-lg 
      lg:max-w-xl 
      xl:max-w-2xl 
      2xl:max-w-4xl
      h-auto 
      object-contain 
      drop-shadow-2xl
      select-none 
      pointer-events-none
    "
            />

            <div className="flex flex-col sm:flex-row gap-2 md:gap-2.5 mt-6 md:hidden">
              <button className="
      px-8 py-3 md:px-8 md:py-2 
      rounded-md border-none cursor-pointer 
      bg-gradient-to-t from-[#496DAB] to-[#A0EAF5] text-white font-semibold hover:bg-blue-600 transition
      text-[16px] 
      w-[300px] 
      h-[44px] 
    ">
                {openLiveAccountText}
              </button>

              <button className="
      px-8 py-3 md:px-4 md:py-2.5 
      rounded-md border border-white cursor-pointer 
      bg-transparent text-white hover:bg-white/10 transition
      text-[16px] 
      w-[300px] 
      h-[44px] 
    ">
                {tryFreeDemoText}
              </button>
            </div>
          </div>
        </section>

        {/* Market Section  */}
        <section className="bg-transparent pb-12 lg:pb-2 w-full relative pt-8 sm:pt-2">
          <div className="absolute sm:top-[55%] left-[-5%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[140px] opacity-80 -translate-x-1/2 -translate-y-1/2 z-[-10]  "></div>
          <div className="absolute sm:top-[85%] left-[90%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-to-r  rounded-full filter blur-[90px] opacity-60 -translate-x-1/2 -translate-y-1/2 z-[-10]  "></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-wider mb-2">
                {marketTitle}
              </h1>

              <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 mx-auto">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
              </div>
            </div>


            <div className="w-full max-w-[1500px] mx-auto overflow-x-auto">
              <div
                className="bg-[#496DAB] bg-opacity-20 shadow-lg min-w-max md:min-w-0 w-full rounded-lg"
                style={{ display: windowWidth > 426 ? 'block' : 'none' }}
              >
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

              <div
                className="bg-[#496DAB] bg-opacity-20 shadow-lg w-full rounded-lg py-4"
                style={{ display: windowWidth <= 426 ? 'block' : 'none' }}
              >
                <div className="flex items-center justify-center px-4">
                  <button
                    onClick={() => {
                      const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabsData.length - 1;
                      setActiveTab(tabsData[prevIndex].id);
                    }}
                    className="p-2 text-white/30 hover:text-[#00d4ff] transition-colors"
                    aria-label="Previous market"
                  >
                    <ArrowLeft size={24} />

                  </button>

                  <div className="flex-1 text-center mx-4">
                    <div className="text-2xl md:text-3xl font-extrabold text-white">
                      {tabsData.find(tab => tab.id === activeTab)?.name || 'Forex'}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
                      const nextIndex = currentIndex < tabsData.length - 1 ? currentIndex + 1 : 0;
                      setActiveTab(tabsData[nextIndex].id);
                    }}
                    className="p-2 text-white/30 hover:text-[#00d4ff] transition-colors"
                    aria-label="Next market"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div key={activeTab} className="mt-5 animate-fadeIn bg-[#496DAB] bg-opacity-20 shadow-lg w-full rounded-lg px-1 md:px-4 lg:px-10">
              <div className="flex flex-col  lg:flex-row h-[620px] sm:h-[600px] lg:min-h-[400px] lg:h-auto rounded-xl shadow-lg overflow-hidden ">
                <div className="w-full lg:w-[50%] flex flex-col items-start justify-center text-white p-2 md:p-8 lg:p-10">
                  <h1 className="text-xl md:text-3xl lg:text-4xl mb-4 md:mb-5 text-left">
                    {activeTabData.title}
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed text-left mb-6 md:mb-8 text-gray-300">
                    {activeTabData.description}
                  </p>
                  <button
                    className="bg-[#496DAB] text-white border-none px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded cursor-pointer transition-colors duration-300 hover:bg-[#00b8e6] w-full md:w-auto">
                    Start Trading Now
                  </button>
                </div>

                <div className="w-full lg:w-[50%] flex items-center justify-center overflow-hidden p-4">
                  <div className="sm:hidden w-full relative overflow-hidden" style={{ perspective: '1000px' }}>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={`mobile-${activeTab}-${currentImageIndex}`}
                        initial={{ x: '100%', opacity: 0, rotateY: 25, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ x: '-100%', opacity: 1, rotateY: -25, scale: 0.9 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col items-center gap-6 w-full"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="rounded-lg w-full max-w-[300px] flex items-center justify-center">
                          <img 
                            src={currentTabImages[currentImageIndex % currentTabImages.length]} 
                            alt="Trading Chart" 
                            className="w-full h-full object-cover rounded-lg" 
                          />
                        </div>

                        <div className="flex flex-row gap-4 items-center justify-center">
                          {[0, 1].map((pairIndex) => {
                            const logoIndex = (currentLogoPairIndex + pairIndex) % currentTabLogos.length;
                            const pairName = currentTabPairNames[logoIndex] || 'N/A';

                            return (
                              <div
                                key={pairIndex}
                                className="bg-[#2a3847]/60 rounded-lg px-4 py-3 flex flex-col items-center gap-2  min-w-[120px] h-[80px]"
                              >
                                <div className="w-12 h-8 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={currentTabLogos[logoIndex % currentTabLogos.length]}
                                    alt={pairName}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <span className="text-white font-semibold text-sm text-center">{pairName}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="hidden sm:flex sm:flex-row w-full items-center justify-center gap-4">
                    <motion.div
                      animate={laptopControls}
                      className="flex-1"
                    >
                      <div ref={laptopRef} className="rounded-lg w-full flex items-center justify-center">
                        <img src={currentTabImages[currentImageIndex % currentTabImages.length]} alt="Trading Chart" className="w-[80%] md:w-[90%] lg:w-full h-full object-cover aspect-auto" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={pairsControls}
                      className="flex-none"
                    >
                      <div ref={pairsRef} className="flex flex-col gap-8 items-center justify-center min-w-[140px]">
                        {[0, 1].map((pairIndex) => {
                          const logoIndex = (currentLogoPairIndex + pairIndex) % currentTabLogos.length;
                          const pairName = currentTabPairNames[logoIndex] || 'N/A';

                          return (
                            <div
                              key={pairIndex}
                              className="bg-[#2a3847]/60 rounded-lg px-4 py-3 flex flex-col items-center gap-2 min-w-[140px] h-[80px] "
                            >
                              <div className="w-12 h-8 flex items-center justify-center overflow-hidden">
                                <img
                                  src={currentTabLogos[logoIndex % currentTabLogos.length]}
                                  alt={pairName}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-white font-semibold text-sm text-center">{pairName}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </div>


              </div>
              <div className="scroller-wrapper ">
                <div className=" scroller inline-flex items-center gap-4 px-10 py-10 ">
                  {tabMarketData[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-[357px] h-[113px] flex items-center text-white"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-[78px] h-[78px] Convenience rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-2 px-4">
                          <h3 className="text-lg font-extrabold">{item.title}</h3>
                          {item.description && (
                            <span className="text-sm text-gray-400">{item.description}</span>
                          )}
                        </div>

                        {item.bidPrice && item.spread && item.askPrice ? (
                          <>
                            <div className="flex justify-between text-sm text-[#387AFF] mb-1">
                              <span>BID PRICE</span>
                              <span>SPREAD</span>
                              <span>ASK PRICE</span>
                            </div>

                            <div className="flex justify-between text-base font-medium">
                              <span className="text-white">{item.bidPrice}</span>
                              <span className="text-cyan-400">{item.spread}</span>
                              <span className="text-white">{item.askPrice}</span>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-between px-4">
                            <p className="text-xl font-bold">{item.price}</p>

                            {item.percent && (
                              <span
                                className={`text-md font-medium ${item.percent
                                  }`}
                              >
                                {item.percent}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {tabMarketData[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-[357px] h-[113px] flex items-center text-white"
                    >
                      {/* Left side: Icon */}
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-[78px] h-[78px] Convenience rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-2 px-4">
                          <h3 className="text-lg font-extrabold">{item.title}</h3>
                          {item.description && (
                            <span className="text-sm text-gray-400">{item.description}</span>
                          )}
                        </div>

                        {item.bidPrice && item.spread && item.askPrice ? (
                          <>
                            <div className="flex justify-between text-sm text-[#387AFF] mb-1">
                              <span>BID PRICE</span>
                              <span>SPREAD</span>
                              <span>ASK PRICE</span>
                            </div>

                            <div className="flex justify-between text-base font-medium">
                              <span className="text-white">{item.bidPrice}</span>
                              <span className="text-cyan-400">{item.spread}</span>
                              <span className="text-white">{item.askPrice}</span>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-between px-4">
                            <p className="text-xl font-bold">{item.price}</p>

                            {item.percent && (
                              <span
                                className={`text-md font-medium ${item.percent
                                  }`}
                              >
                                {item.percent}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose Us Section  */}
        <section className="pt-12 md:pt-20 lg:pt-[100px] px-4 md:px-8 bg-transparent relative  min-h-screen flex flex-col items-center">
          {/* <div className="absolute top-1/2 left-1/2 w-[900px] h-[300px] md:w-[900px] md:h-[310px] bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div> */}
          <div className="absolute top-1/2 left-1/2 rounded-full blur-[140px] opacity-30 -translate-x-1/2 -translate-y-1/2 bg-radial-account-sm w-[350px] h-[150px] md:bg-radial-account-md md:w-[700px] md:h-[280px] lg:bg-radial-account-lg lg:w-[1038px] lg:h-[458px]"></div>
          <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6 lg:gap-8 max-[1023px]:hidden">

              {/* CARD 1 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(0) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    {cardTexts[0]}
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(1) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    {cardTexts[1]}
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={`relative flex items-start justify-end transition-opacity duration-1000 transform-none ${visibleCards.includes(2) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="bg-gradient-to-r from-[#496DAB]/30 to-transparent p-6 text-white mr-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pl-10">
                    {cardTexts[2]}
                  </p>
                </div>

                <div className="absolute right-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
            </div>


            {/* PHONE SECTION (middle unchanged) */}
            <div className="flex flex-col lg:flex-row justify-center items-center relative z-20 gap-10">
              <div className="relative w-full  py-4 pl-4 text-center z-[60] flex items-center min-[1023px]:hidden ml-2">
                <div className="absolute left-[-10px] top-[35%] w-6 h-6 rounded-full border-4 border-[#496DAB] flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="w-[100%] py-2 px-4 h-[70px] rounded-md bg-[#496DAB]/20 text-white ml-4 ">
                  <p className="text-base font-medium leading-relaxed">
                    {cardTexts[cardOrder[phoneTextIndex]]}
                  </p>
                </div>
              </div>

              <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[600px] md:w-[320px] md:h-[650px]">

                <img src={assets.WhyChooseUsPhone} className="w-full h-full object-cover rounded-[40px]" alt="Phone" />

                {/* <div className="absolute top-0 left-2 right-2 bottom-2 md:left-2.5 md:right-2.5 md:bottom-2.5 z-30">
                  <img src={assets.WhyChooseUsScreen} className="w-full pt-1 h-full rounded-lg" alt="Screen blur" />
                </div> */}

                <div className="absolute inset-0 rounded-[40px] z-50 pointer-events-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[48px]">
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      <div className="absolute w-[90%] h-[63px] bg-gradient-to-b from-[#496DAB] to-[#A0EAF5] rounded-md z-10"></div>
                      <h2 className="text-black text-lg font-bold text-center mt-3 whitespace-nowrap w-full">
                        Why Choose Finsai Trade
                      </h2>
                      <div className="relative w-[280px] max-w-[110vw] h-[80%] flex items-center justify-center overflow-hidden z-20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-[23px]">
                            <div ref={listRef} className="absolute top-[-60px] left-0 w-full text-center">
                              {features.map((text, i) => (
                                <div
                                  key={i}
                                  className={`h-[100px] flex items-center justify-center font-medium transition-all duration-300 ${
                                    i === phoneTextIndex
                                      ? ' font-bold sm:text-[18px] drop-shadow-lg text-[16px] px-8 sm:px-2'
                                      : 'text-white text-[12px]'
                                  }`}
                                >
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
            </div>



            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6 lg:gap-8 max-[1023px]:hidden">

              {/* CARD 4 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(3) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    {cardTexts[3]}
                  </p>
                </div>

              </div>

              {/* CARD 5 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(4) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    {cardTexts[4]}
                  </p>
                </div>

              </div>

              {/* CARD 6 */}
              <div className={`relative flex items-start justify-start transition-opacity duration-1000 transform-none ${visibleCards.includes(5) ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#496DAB]
                         flex items-center justify-center transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-l from-[#496DAB]/30 to-transparent p-6 text-white ml-10 relative rounded-xl">
                  <p className="text-base md:text-lg leading-relaxed pr-10">
                    {cardTexts[5]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Tools Section */}
        <ToolsSection />

        {/* Account hover Section */}
        <section className="bg-[#496DAB]/10 text-white py-12 md:py-16 lg:py-20 px-4 md:px-5 min-h-screen flex items-center justify-center">
          <div className="max-w-[1160px] w-full mx-auto">
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6 md:mb-8 lg:mb-10 tracking-tight px-4">
              {accountsTitle}
            </h1>

            <div className="relative w-[60px] md:w-[80px] lg:w-[100px] h-[1.5px] md:h-[2px] bg-[#496DAB] rounded-md my-6 md:my-8 lg:my-10 mx-auto">
              <div className="absolute left-[-4px] md:left-[-5px] top-1/2 -translate-y-1/2 w-[5px] md:w-[6px] h-[5px] md:h-[6px] bg-[#496DAB] rotate-45"></div>
            </div>

            <p className="text-[#a8b2d1] text-sm md:text-base lg:text-lg xl:text-xl text-center mb-10 md:mb-12 lg:mb-16 font-light px-4 md:px-6 lg:px-8">
              {accountsSubtitle}
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 justify-center mb-8 md:mb-10 lg:mb-12 h-[500px] md:h-[410px] items-stretch overflow-hidden md:overflow-visible">
              {accountTypes.map((account) => {
                const isActive = activeAccountIndex === account.id - 1;
                return (
                  <div
                    key={account.id}
                    className={`bg-[#496DAB] bg-opacity-10 border rounded-sm transition-all duration-1000 ease-out overflow-hidden flex items-center justify-center
                   md:w-[100px] lg:w-[140px] md:px-[30px] lg:px-[54px] w-full
                   ${isActive
                        ? 'md:flex-1 border-[rgba(91,127,199,0.6)] shadow-[0_10px_30px_rgba(91,127,199,0.3)] md:flex-row md:gap-8 lg:gap-14 md:px-[15px] lg:px-[20px] flex-col gap-3 py-5 px-5 min-h-[180px]'
                        : 'border-[rgba(91,127,199,0.2)] py-3 px-5 min-h-[60px]'
                      }`}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setActiveAccountIndex(account.id - 1);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => {
                      setActiveAccountIndex(account.id - 1);
                      setIsHovered(true);
                      setTimeout(() => setIsHovered(false), 2400);
                    }}
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
                        className={`text-sm md:text-base lg:text-xl font-semibold text-[#B6B6B6] uppercase tracking-wide transition-opacity duration-1000 ease-out md:whitespace-normal lg:whitespace-nowrap text-center md:text-left break-words ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {account.subtitle}
                      </p>
                      <p
                        className={`text-[#B6B6B6] text-xs md:text-sm lg:text-md transition-opacity duration-1000 ease-out leading-relaxed text-center md:text-left break-words ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {account.description}
                      </p>
                      <button
                        className={`mt-1 py-1.5 px-4 md:py-2 md:px-5 lg:py-2 lg:px-6 bg-transparent text-[#496DAB] text-xs md:text-sm lg:text-md font-semibold cursor-pointer transition-opacity duration-1000 ease-out flex items-center gap-2 ${isActive ? 'opacity-100' : 'opacity-0'
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

            <div className="w-full mx-auto mb-6 md:mb-7 lg:mb-8 px-4 md:px-0">
              <div className="bg-gradient-to-b from-[#496DAB] to-[#A0EAF5] rounded-full h-1.5 md:h-2 overflow-hidden">
                <div
                  className="bg-[#D9D9D9] h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeAccountIndex + 1) / accountTypes.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full md:w-[146px] h-[46px] block mx-auto py-3 px-8 md:py-2 md:px-2 bg-[#496DAB] text-white border-none rounded-md text-base md:text-lg font-semibold cursor-pointer">
              Learn More
            </button>
          </div>
        </section>

        {/* Awards Section  */}
        <section
          className="bg-transparent text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 min-h-screen flex items-center justify-center relative">
          <div className="absolute top-[40%] sm:top-[50%] left-[50%] w-[250px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[500px] bg-gradient-radial bg-radial-market rounded-full filter blur-[1000px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-[-10]"></div>

          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[90vw] mx-auto items-center justify-center">
            <h1
              className="text-white text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 sm:mb-4 md:mb-5 tracking-tight px-2">
              {awardsTitle}
            </h1>

            <div
              className="relative w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-[2px] bg-[#496DAB] rounded-md my-4 sm:my-6 md:my-8 lg:my-10 mx-auto">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#496DAB] rotate-45"></div>
            </div>

            <p className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl text-center mb-4 sm:mb-6 md:mb-8 font-medium px-2 sm:px-4">
              {awardsdescription}
            </p>

            <div className="w-full p-2 sm:p-4 md:p-5 relative overflow-hidden" style={{ minHeight: '250px' }}>
              <style>
                {`
                        .award-scroller {
                          position: relative;
                          width: 100%;
                          height: 100%;
                          overflow: hidden;
                        }

                        .award-item {
                          position: absolute;
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          justify-content: center;
                          transition: all 0.9s cubic-bezier(0.5, 0, 0.2, 1);
                          pointer-events: none;
                        }

                        .award-item img {
                          max-width: 90%;
                          max-height: 80%;
                          object-fit: cover;
                        }

                        .award-item.active {
                          transform: translateY(40px);
                          opacity: 1;
                          z-index: 20;
                        }

                        .award-item.next {
                          transform: translateY(300px);
                          opacity: 0.6;
                          z-index: 10;
                        }

                        .award-item.new {
                          transform: translateY(400px);
                          opacity: 0;
                          z-index: 1;
                        }

                        .award-item.prev {
                          transform: translateY(-250px);
                          opacity: 0;
                          z-index: 5;
                        }

                        .award-item.hidden {
                          transform: translateY(750px);
                          opacity: 0;
                          z-index: 0;
                        }

                        .award-item.transitioning {
                          transition: all 0.8s cubic-bezier(0.5, 0, 0.3, 1);
                        }

                        .award-container {
                          overflow: hidden;
                          position: relative;
                          height: 100%;
                        }

                        @media (min-width: 767px) and (max-width: 1025px) {
                          .award-scroller {
                            height: 100%;
                            overflow: hidden;
                          }

                          .award-item img {
                            max-width: 85%;
                            max-height: 70%;
                          }

                          .award-item.active {
                            transform: translateY(75px);
                          }

                          .award-item.next {
                            transform: translateY(300px);
                            opacity: 0.6;
                          }

                          .award-item.new {
                            transform: translateY(350px);
                            opacity: 0;
                          }

                          .award-item.prev {
                            transform: translateY(-200px);
                            opacity: 0;
                          }

                          .award-item.hidden {
                            transform: translateY(600px);
                            opacity: 0;
                          }
                        }

                        @media (max-width: 426px) {
                          .award-scroller {
                            height: 100%;
                            overflow: hidden;
                          }

                          .award-item img {
                            max-width: 80%;
                            max-height: 50%;
                          }

                          .award-item.active {
                            transform: translateY(30px);
                          }

                          .award-item.next {
                            transform: translateY(240px);
                            opacity: 0.5;
                          }

                          .award-item.new {
                            transform: translateY(250px);
                            opacity: 0;
                          }

                          .award-item.prev {
                            transform: translateY(-150px);
                            opacity: 0;
                          }

                          .award-item.hidden {
                            transform: translateY(400px);
                            opacity: 0;
                          }
                        }
                      `}
              </style>

              {(() => {
                const leftAwardImages = [
                  { id: 1, src: assets.award1, alt: "World Forex Award 2025" },
                  { id: 2, src: assets.award2, alt: "Iconic Finance Expo 2023" },
                  { id: 3, src: assets.award3, alt: "World Financial Award 2025" },
                  { id: 4, src: assets.award4, alt: "World Forex Award 2025" },
                ];

                const rightAwardImages = [
                  { id: 1, src: assets.award4, alt: "Iconic Finance Expo 2023" },
                  { id: 2, src: assets.award3, alt: "World Financial Award 2025" },
                  { id: 3, src: assets.award2, alt: "World Forex Award 2025" },
                  { id: 4, src: assets.award1, alt: "Iconic Finance Expo 2023" },
                ];

                const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
                const [isAwardTransitioning, setIsAwardTransitioning] = useState(false);

                useEffect(() => {
                  const transitionTime = 1200;
                  const visibleTime = 3000;

                  const interval = setInterval(() => {
                    setIsAwardTransitioning(true);

                    setTimeout(() => {
                      setCurrentAwardIndex((prevIndex) => (prevIndex + 1) % leftAwardImages.length);

                      setTimeout(() => {
                        setIsAwardTransitioning(false);
                      }, 50);

                    }, transitionTime);

                  }, transitionTime + visibleTime);

                  return () => clearInterval(interval);
                }, []);

                const getAwardItemClass = (index) => {
                  const totalItems = leftAwardImages.length;
                  const relativePosition = (index - currentAwardIndex + totalItems) % totalItems;

                  switch (relativePosition) {
                    case 0: return 'active';
                    case 1: return 'next';
                    case 2: return 'new';
                    case totalItems - 1: return 'prev';
                    default: return 'hidden';
                  }
                };

                return (
                  <div className="w-full bg-transparent min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-7xl flex flex-col md:flex-row h-[760px] lg:h-[800px] sm:h-[900px] items-center gap-[50px] lg:gap-4">

                      <div className="w-full lg:w-[30%] bg-transparent h-[400px] sm:h-[450px] lg:h-[280px] flex items-center justify-center overflow-hidden relative">
                        <div className="award-container w-full h-full ">
                          <div className="award-scroller">
                            {leftAwardImages.map((img, index) => (
                              <div
                                key={`${img.id}-${index}`}
                                className={`award-item ${getAwardItemClass(index)} ${isAwardTransitioning ? 'transitioning' : ''}`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>


                      <div className="w-full h-[480px] sm:h-[380px] md:h-[615px] lg:w-[40%] bg-[#496DAB]/10 rounded-2xl  flex items-center justify-center overflow-hidden relative">
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
                    
                    .text-carousel-item.new {
                      transform: translateY(300px); 
                      opacity: 0;
                      z-index: 1;
                    }
                    
                    .text-carousel-item.hidden {
                      transform: translateY(900px);
                      opacity: 0;
                      z-index: 0;
                    }
                    
                    .text-carousel-item.transitioning {
                      transition: all 0.7s cubic-bezier(0.5, 0, 0.2, 1);
                    }
        
                    @media (max-width: 640px) { 
                    .text-carousel-container {
                      height: 300px;
                    }
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
        
                    @media (min-width: 641px) and (max-width: 768px) {
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
        
                    @media (min-width: 769px) { 
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
                            { id: 1, number: "168M<span class='plus-sign'>+</span>", description: "Monthly Deals" },
                            { id: 2, number: "3M<span class='plus-sign'>+</span>", description: "Monthly Worldwide" },
                            { id: 3, number: "$650B<span class='plus-sign'>+</span>", description: "Monthly Volume" }
                          ];

                          const [currentIndex, setCurrentIndex] = useState(0);
                          const [isTransitioning, setIsTransitioning] = useState(false);

                          useEffect(() => {
                            const transitionTime = 600;
                            const visibleTime = 1800;

                            const interval = setInterval(() => {
                              setIsTransitioning(true);

                              setTimeout(() => {
                                setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);

                                setTimeout(() => {
                                  setIsTransitioning(false);
                                }, 50);

                              }, transitionTime);

                            }, transitionTime + visibleTime);

                            return () => clearInterval(interval);
                          }, []);

                          const getItemClass = (index) => {
                            const totalItems = textItems.length;
                            const relativePosition = (index - currentIndex + totalItems) % totalItems;

                            switch (relativePosition) {
                              case 0: return 'active';
                              case 1: return 'next';
                              case 2: return 'new';
                              case totalItems - 1: return 'prev';
                              default: return 'hidden';
                            }
                          };

                          return (
                            <div className="text-carousel-container">
                              {textItems.map((item, index) => (
                                <div
                                  key={item.id}
                                  className={`text-carousel-item ${getItemClass(index)} ${isTransitioning ? 'transitioning' : ''}`}
                                >
                                  <div className="text-carousel-number" dangerouslySetInnerHTML={{ __html: item.number }}></div>
                                  <div className="text-carousel-description">{item.description}</div>
                                </div>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                      <div className="w-full lg:w-[30%] bg-transparent h-[400px] sm:h-[480px] lg:h-[280px] flex items-center justify-center overflow-hidden relative">
                        <div className="award-container w-full h-full">
                          <div className="award-scroller">
                            {rightAwardImages.map((img, index) => (
                              <div
                                key={`${img.id}-${index}`}
                                className={`award-item ${getAwardItemClass(index)} ${isAwardTransitioning ? 'transitioning' : ''}`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Step Section  */}
        <StepsSection />

        {/* Platforms Section */}
        <PlatformCards
          ref={(el) => sectionRefs.current[4] = el}
          platforms={platforms}
          platformsDescription={platformsDescription}
          platformsLearnMoreText={platformsLearnMoreText}
          animationEnabled={true}
        />


        {/* Signup Form Section */}
        <section className="bg-transparent  px-4 md:px-8 pb-12 sm:pb-14">
          <div className="max-w-7xl mx-auto">

            <div className="lg:hidden bg-[#87B3FF]/10 rounded-lg px-6 py-10 text-center space-y-8">
              <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
                Sign Up to stay in the<br className="sm:hidden" /> Loop with FINSAI Trade
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">

                <div className="relative w-full">
                  <img
                    src={assets.draft}
                    alt=""
                    className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 pointer-events-none z-10"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-[#FFFFFF]/10 text-white placeholder-white/60 pl-14 pr-5 py-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                </div>

                <button className="w-full sm:w-auto bg-[#496DAB] hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                  Get Updates
                </button>
              </div>

              <img
                src={assets.plane}
                alt="Send"
                className="mx-auto w-48 h-auto transition-transform duration-300 hover:translate-x-10 hover:-translate-y-4 hover:rotate-2"
              />
            </div>

            <div className="hidden lg:flex max-w-7xl h-[232px] mx-auto items-center justify-center gap-[100px] bg-[#87B3FF]/10 rounded-lg">
              <h3 className="text-white text-2xl font-semibold leading-tight">
                Sign Up to stay in the<br /> Loop with FINSAI Trade
              </h3>

              <div className="flex items-center gap-2 w-[700px]">

                <div className="relative">
                  <img
                    src={assets.draft}
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 pointer-events-none z-10"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-[#FFFFFF]/10 text-white px-4 py-2 pl-14 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-[330px]"
                  />
                </div>

                <button className="bg-[#496DAB] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 w-[176px] whitespace-nowrap">
                  Get Updates
                </button>

                <img
                  src={assets.plane}
                  alt="Send"
                  className="pl-4 w-[230px] h-[177px] transition-transform duration-300 hover:translate-x-10 hover:-translate-y-4 hover:rotate-2"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Footer Section */}
        <Footer data={data} />

      </div>
    </>
  );
};

export default FinsaiHomepage;