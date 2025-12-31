import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Save, Eye, Expand, ChevronDown } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import { Section, InputField } from '../components/EditorComponents';

const defaultData = {
    headerIcon: "/assets/logo.png",
    openLiveAccountText: "Open Live Account",
    tryFreeDemoText: "Try Free Demo",
    navItems: ["Home", "Trading", "MARKET", "ECOSYSTEM", "LEARN & GROW", "Company"],
    heroHeading: "Trade Secure With Finsai Trade.",
    heroSubheading: "Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.",
    heroImage: "/assets/hero-image.png",
    whyChooseTitle: "Why Choose Finsai Trade",
    whyChooseDescription: "At Finsai Trade, we bridge traditional finance with cutting-edge trading technology. Whether you're a beginner or seasoned trader, our platform offers the perfect mix of reliability, innovation, and growth opportunity.",
    learnMoreText: "Learn More",
    AlltoolsTitle: "All The Tools You Need In One Platform",
    Alltoolsdescription: "Our platform offers everything you need to trade efficiently and stay informed.",
    platformsTitle: "Powerful Platforms for Every Trader",
    platformsDescription: "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
    platformsLearnMoreText: "Learn More",
    accountsTitle: "Choose The Right Account For You",
    accountsSubtitle: "Start Your Journey With An Account Tailored To Your Goals",
    accountsLearnMoreText: "Learn More",
    awardsTitle: "Recognized For Excellence",
    awardsdescription: "At Finsai Trade, we take pride in being acknowledged for our commitment to excellence, innovation, and trusted financial services. These awards reflect the strength of our platform.",
    marketTitle: "Markets You Can Trade",
    marketDescription: "Gain Access To A Diverse Range of Global Assets Across Multiple Financial Markets.",
    features: [
        "Ultra-Fast Withdrawal",
        "Secure Deposits",
        "Regulated By Multiple Authorities",
        "10,000+ Assets",
        "24/7 Expert Support",
        "Transparent Pricing With Zero Hidden Fees"
    ],
    platforms: [
        { icon: "mobileapp", title: "Mobile App (Coming Soon)", description: "Fast, secure, and intuitive" },
        { icon: "metatrader", title: "MetaTrader 5", description: "Pro-grade tools for advanced traders" },
        { icon: "webtrader", title: "Finsai WebTrader", description: "Browser-based, no downloads needed" }
    ],
    accounts: [
        { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders", icon: "linear1" },
        { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders", icon: "linear2" },
        { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers", icon: "linear3" },
        { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals", icon: "linear1" }
    ],
    awards: [
        { title: "World Forex Award 2025", subtitle: "Best IB Program" },
        { title: "World Financial Award 2025", subtitle: "Trusted Financial Services" },
        { title: "Iconic Finance Expo 2023", subtitle: "Innovative Startup In Finance" }
    ],
    footerLogo: "/assets/logo.png",
    footerDescription: "At Finsai Trade, We Bridge Traditional Finance With Cutting-edge Trading Technology, Whether You're A Beginner Or A Seasoned Trader, Our Platform Offers The Perfect Mix Of Reliability, Innovation, And Growth Opportunity.",
    quickLinks: ["About Us", "Feature", "Career", "Contact Us"],
    helpLinks: ["Customer Support", "Terms", "Privacy", "FAQs"],
    otherLinks: ["Start Trading", "Earn Free Crypto", "Crypto Wallet", "Payment Option"],
    copyrightText: "© Copyright 2025, all right reserved by finsaitrade",
    socialLinks: [
        { icon: "Facebook", label: "Facebook" },
        { icon: "Twitter", label: "Twitter" },
        { icon: "Youtube", label: "Youtube" },
        { icon: "Linkedin", label: "LinkedIn" },
        { icon: "Instagram", label: "Instagram" }
    ],
    googlePlayText: "Get it on",
    googlePlaySubtext: "Google Play",
    appStoreText: "Download on the",
    appStoreSubtext: "App Store",
    tradingItems: [
        { name: 'Platforms', path: '/platforms' },
        { name: 'Payment Options', path: '/payment' },
        { name: 'Accounts', path: '/accounts' },
        { name: 'Tools', path: '/tools' },
    ],
    ecoSystemItems: [
        { name: 'Finsai Venture', path: '/finsai-venture' },
        { name: 'Finsai Care', path: '/finsai-care' },
    ],
    marketSubItems: [
        { name: 'Forex', path: '/forex' },
        { name: 'Crypto', path: '/crypto' },
        { name: 'Indices', path: '/indices' },
        { name: 'Spot Metals And Energies', path: '/metals' },
        { name: 'World Stocks', path: '/worldstocks' },
    ],
    companySubItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Testimonial/Awards', path: '/testimonials' },
        { name: 'Career', path: '/career' },
    ],
    regulationsSubItems: [
        { name: 'Security', path: '/regulations-security' },
    ],
    helpSupportSubItems: [
        { name: 'Support/Contact Us', path: '/contact-support' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Tutorials', path: '/tutorials' },
    ],
    learnGrowSubItems: [
        { name: 'Finsai Academy', path: '/academy' },
        { name: 'Webinars', path: '/webinars' },
        { name: 'Blog', path: '/blogs' },
        { name: 'News & Analysis', path: '/news-analysis' },
        { name: 'Glossary', path: '/glossary' },
    ],
    rewardsSubItems: [
        { name: 'Promotions', path: '/rewards-promotion' },
        { name: 'Loyalty Programs', path: '/rewards' },
        { name: 'IB Program', path: '/rewards-ibprogram' },
    ],
    marketTabs: [
        {
            title: "Forex",
            description: "Trade major and minor currency pairs with competitive spreads",
            buttonText: "Start Trading",
            animationImage: "/assets/forex-animation.png",
            speed: "normal",
            icon: "forex",
            carouselItems: [
                { icon: "EURUSD", text: "EUR/USD", subtext: "Euro vs US Dollar", price: "1.0856", change: "+0.12%" },
                { icon: "GBPUSD", text: "GBP/USD", subtext: "British Pound vs US Dollar", price: "1.2654", change: "-0.08%" },
                { icon: "USDJPY", text: "USD/JPY", subtext: "US Dollar vs Japanese Yen", price: "157.23", change: "+0.45%" }
            ]
        },
        {
            title: "Crypto",
            description: "Access popular cryptocurrencies with advanced trading tools",
            buttonText: "Trade Crypto",
            animationImage: "/assets/crypto-animation.png",
            speed: "normal",
            icon: "crypto",
            carouselItems: [
                { icon: "bitcoin", text: "Bitcoin", subtext: "BTC/USD", price: "43,250", change: "+2.1%" },
                { icon: "ethereum", text: "Ethereum", subtext: "ETH/USD", price: "2,650", change: "+1.8%" },
                { icon: "solana", text: "Solana", subtext: "SOL/USD", price: "98.45", change: "+3.2%" }
            ]
        },
        {
            title: "Indices",
            description: "Trade major stock indices from around the world",
            buttonText: "Trade Indices",
            animationImage: "/assets/indices-animation.png",
            speed: "normal",
            icon: "indices",
            carouselItems: [
                { icon: "us30", text: "US 30", subtext: "Dow Jones Industrial", price: "34,250", change: "+0.8%" },
                { icon: "sp500", text: "S&P 500", subtext: "Standard & Poor's 500", price: "4,320", change: "+0.6%" },
                { icon: "nasdaq", text: "NASDAQ", subtext: "Technology Index", price: "13,450", change: "+1.2%" }
            ]
        },
        {
            title: "Commodities",
            description: "Invest in commodities like gold, oil, and silver",
            buttonText: "Trade Commodities",
            animationImage: "/assets/commodities-animation.png",
            speed: "normal",
            icon: "commodities",
            carouselItems: [
                { icon: "gold", text: "Gold", subtext: "XAU/USD", price: "1,950", change: "+0.3%" },
                { icon: "oil", text: "Crude Oil", subtext: "WTI", price: "78.45", change: "-0.5%" },
                { icon: "silver", text: "Silver", subtext: "XAG/USD", price: "23.80", change: "+0.7%" }
            ]
        },
        {
            title: "Stocks",
            description: "Access thousands of stocks from global markets",
            buttonText: "Trade Stocks",
            animationImage: "/assets/stocks-animation.png",
            speed: "normal",
            icon: "stocks",
            carouselItems: [
                { icon: "apple", text: "Apple", subtext: "AAPL", price: "175.20", change: "+1.5%" },
                { icon: "tesla", text: "Tesla", subtext: "TSLA", price: "245.80", change: "+2.3%" },
                { icon: "amazon", text: "Amazon", subtext: "AMZN", price: "155.40", change: "+0.9%" }
            ]
        },
        {
            title: "ETFs",
            description: "Diversify with exchange-traded funds",
            buttonText: "Trade ETFs",
            animationImage: "/assets/etfs-animation.png",
            speed: "normal",
            icon: "etfs",
            carouselItems: [
                { icon: "spdr", text: "SPDR S&P 500", subtext: "SPY", price: "432.50", change: "+0.6%" },
                { icon: "qqq", text: "Invesco QQQ", subtext: "QQQ", price: "385.20", change: "+1.1%" },
                { icon: "iwm", text: "iShares Russell 2000", subtext: "IWM", price: "198.75", change: "+0.4%" }
            ]
        }
    ],
};

// Desktop viewport dimensions for true desktop preview
const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 1050;
const MOBILE_WIDTH = 375;
const MOBILE_HEIGHT = 667;

export default function EditorPage() {
    const [data, setData] = useState(defaultData);
    const [openSections, setOpenSections] = useState({ header: true, hero: true, market: true }); // track which sections are open
    const [showPreview, setShowPreview] = useState(true);
    const [viewMode, setViewMode] = useState('desktop');
    const [previewScale, setPreviewScale] = useState(0.5);
    const [isUpdatingContent, setIsUpdatingContent] = useState(false);
    const [isIframeReady, setIsIframeReady] = useState(false);
    const containerRef = useRef(null);
    const iframeRef = useRef(null);

    const updateField = (field, value) => {
        setIsUpdatingContent(true);
        setData(prev => ({ ...prev, [field]: value }));
    };

    const updateArrayItem = (arrayName, index, field, value) => {
        setIsUpdatingContent(true);
        setData(prev => {
            const newArray = [...prev[arrayName]];
            if (typeof newArray[index] === 'object') {
                newArray[index] = { ...newArray[index], [field]: value };
            } else {
                newArray[index] = value;
            }
            return { ...prev, [arrayName]: newArray };
        });
    };

    const addArrayItem = (arrayName, initialValue) => {
        setIsUpdatingContent(true);
        setData(prev => ({
            ...prev,
            [arrayName]: [...prev[arrayName], initialValue]
        }));
    };

    const removeArrayItem = (arrayName, index) => {
        setIsUpdatingContent(true);
        setData(prev => ({
            ...prev,
            [arrayName]: prev[arrayName].filter((_, i) => i !== index)
        }));
    };

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleSave = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(data, null, 2)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "homepage-data.json";
        link.click();
    };

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current && viewMode === 'desktop') {
                const containerWidth = containerRef.current.offsetWidth - 40;
                const scale = Math.min(containerWidth / DESKTOP_WIDTH, 0.65);
                setPreviewScale(scale);
            } else if (containerRef.current && viewMode === 'mobile') {
                const containerWidth = containerRef.current.offsetWidth - 40;
                const scale = Math.min(containerWidth / MOBILE_WIDTH, 0.9);
                setPreviewScale(scale);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, [viewMode]);

    // Reset updating state when iframe loads
    useEffect(() => {
        if (isUpdatingContent) {
            setIsUpdatingContent(false);
        }
    }, [data]);

    // Send data updates to iframe via postMessage
    useEffect(() => {
        if (!isIframeReady) {
            console.log('EditorPage: Iframe not ready yet, skipping postMessage');
            return;
        }

        // Small delay to ensure iframe is fully ready
        const timeoutId = setTimeout(() => {
            console.log('EditorPage: Sending data update to ready iframe:', data);
        if (iframeRef.current && iframeRef.current.contentWindow) {
                console.log('EditorPage: Sending postMessage');
            iframeRef.current.contentWindow.postMessage({
                type: 'UPDATE_DATA',
                data: data
            }, '*');
            } else {
                console.log('EditorPage: Cannot send postMessage - iframe ref issue');
            }
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [data, isIframeReady]);

    const getIframeUrl = () => {
        // Don't include data in URL initially - let postMessage handle it
        return `/preview`;
    };

    // Function to open full page preview
    const openFullPreview = () => {
        window.open(getIframeUrl(), '_blank');
    };

    return (
        <div className="flex h-screen bg-[#0D0D0E] overflow-hidden font-sans">
            {/* Left Sidebar - Editor Controls */}
            <div className="w-2/5 flex-shrink-0 border-r border-gray-800 flex flex-col bg-[#131315]">
                <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#0D0D0E] z-10">
                    <h2 className="text-white font-bold text-lg">Page Editor</h2>
                    <button
                        onClick={handleSave}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 flex items-center gap-1"
                    >
                        <Save size={16} /> Save
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    {/* Header/Navbar Section */}
                    <Section
                        title="Header/Navbar Section"
                        isOpen={openSections.header}
                        onToggle={() => toggleSection('header')}
                    >
                        <ImageUploader
                            label="Header Icon (Logo)"
                            value={data.headerIcon}
                            onChange={(v) => updateField('headerIcon', v)}
                        />
                        <InputField
                            label="Open Live Account Button Text"
                            value={data.openLiveAccountText}
                            onChange={(v) => updateField('openLiveAccountText', v)}
                        />
                        <InputField
                            label="Try Free Demo Button Text"
                            value={data.tryFreeDemoText}
                            onChange={(v) => updateField('tryFreeDemoText', v)}
                        />
                        <div className="mt-4 space-y-4">
                            <label className="text-xs text-gray-400 uppercase font-medium tracking-wider block mb-2">Navigation Items</label>
                            {data.navItems.map((item, idx) => (
                                <div key={idx} className="bg-[#2A2A2E] p-3 rounded border border-gray-700 relative group">
                                    <div className="flex items-center justify-between mb-2">
                                    <input
                                            className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                        value={item}
                                        onChange={(e) => updateArrayItem('navItems', idx, null, e.target.value)}
                                            placeholder="Navigation Item"
                                        />
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => {
                                                    const newState = { ...openSections };
                                                    newState[`nav-${idx}`] = !newState[`nav-${idx}`];
                                                    setOpenSections(newState);
                                                }}
                                                className="text-gray-400 hover:text-white p-2 transition"
                                                title={openSections[`nav-${idx}`] ? "Hide Sub-items" : "Show Sub-items"}
                                            >
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform ${openSections[`nav-${idx}`] ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                    <button
                                        onClick={() => removeArrayItem('navItems', idx)}
                                        className="text-red-400 hover:text-red-300 p-2"
                                                title="Delete Navigation Item"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                        </div>

                                    {/* Sub-items dropdown */}
                                    {openSections[`nav-${idx}`] && (
                                        <div className="mt-3 pt-3 border-t border-gray-600 space-y-3">
                                            {item === 'Trading' && (
                                                <div>
                                                    <label className="text-xs text-gray-500 block mb-2">Trading Sub-items</label>
                                                    {data.tradingItems.map((subItem, subIdx) => (
                                                        <div key={subIdx} className="flex gap-2 mb-2">
                                                            <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Name"
                                                                value={subItem.name}
                                                                onChange={(e) => updateArrayItem('tradingItems', subIdx, 'name', e.target.value)}
                                                            />
                                    <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Path"
                                                                value={subItem.path}
                                                                onChange={(e) => updateArrayItem('tradingItems', subIdx, 'path', e.target.value)}
                                    />
                                    <button
                                                                onClick={() => removeArrayItem('tradingItems', subIdx)}
                                        className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                        onClick={() => addArrayItem('tradingItems', { name: "New Item", path: "/new-path" })}
                                                        className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                        + Add Trading Item
                            </button>
                        </div>
                                            )}

                                            {item === 'MARKET' && (
                                                <div>
                                                    <label className="text-xs text-gray-500 block mb-2">Market Sub-items</label>
                                                    {data.marketSubItems.map((subItem, subIdx) => (
                                                        <div key={subIdx} className="flex gap-2 mb-2">
                                                            <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Name"
                                                                value={subItem.name}
                                                                onChange={(e) => updateArrayItem('marketSubItems', subIdx, 'name', e.target.value)}
                                                            />
                                                            <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Path"
                                                                value={subItem.path}
                                                                onChange={(e) => updateArrayItem('marketSubItems', subIdx, 'path', e.target.value)}
                                                            />
                                    <button
                                                                onClick={() => removeArrayItem('marketSubItems', subIdx)}
                                                                className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                        onClick={() => addArrayItem('marketSubItems', { name: "New Item", path: "/new-path" })}
                                                        className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                        + Add Market Item
                            </button>
                        </div>
                                            )}

                                            {item === 'ECOSYSTEM' && (
                                                <div>
                                                    <label className="text-xs text-gray-500 block mb-2">Ecosystem Sub-items</label>
                                                    {data.ecoSystemItems.map((subItem, subIdx) => (
                                                        <div key={subIdx} className="flex gap-2 mb-2">
                                                            <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Name"
                                                                value={subItem.name}
                                                                onChange={(e) => updateArrayItem('ecoSystemItems', subIdx, 'name', e.target.value)}
                                                            />
                                                            <input
                                                                className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                placeholder="Path"
                                                                value={subItem.path}
                                                                onChange={(e) => updateArrayItem('ecoSystemItems', subIdx, 'path', e.target.value)}
                                                            />
                                    <button
                                                                onClick={() => removeArrayItem('ecoSystemItems', subIdx)}
                                                                className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                        onClick={() => addArrayItem('ecoSystemItems', { name: "New Item", path: "/new-path" })}
                                                        className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                        + Add Ecosystem Item
                            </button>
                        </div>
                                            )}

                                            {item === 'Company' && (
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="text-xs text-gray-500 block mb-1">Company</label>
                                                        {data.companySubItems.map((subItem, subIdx) => (
                                                            <div key={subIdx} className="flex gap-2 mb-2">
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Name"
                                                                    value={subItem.name}
                                                                    onChange={(e) => updateArrayItem('companySubItems', subIdx, 'name', e.target.value)}
                                                                />
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Path"
                                                                    value={subItem.path}
                                                                    onChange={(e) => updateArrayItem('companySubItems', subIdx, 'path', e.target.value)}
                                                                />
                                    <button
                                                                    onClick={() => removeArrayItem('companySubItems', subIdx)}
                                                                    className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                    <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                            onClick={() => addArrayItem('companySubItems', { name: "New Item", path: "/new-path" })}
                                                            className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                            + Add Company Item
                            </button>
                        </div>

                                                    <div>
                                                        <label className="text-xs text-gray-500 block mb-1">Regulations</label>
                                                        {data.regulationsSubItems.map((subItem, subIdx) => (
                                                            <div key={subIdx} className="flex gap-2 mb-2">
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Name"
                                                                    value={subItem.name}
                                                                    onChange={(e) => updateArrayItem('regulationsSubItems', subIdx, 'name', e.target.value)}
                                                                />
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Path"
                                                                    value={subItem.path}
                                                                    onChange={(e) => updateArrayItem('regulationsSubItems', subIdx, 'path', e.target.value)}
                                                                />
                                    <button
                                                                    onClick={() => removeArrayItem('regulationsSubItems', subIdx)}
                                                                    className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                    <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                            onClick={() => addArrayItem('regulationsSubItems', { name: "New Item", path: "/new-path" })}
                                                            className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                            + Add Regulation Item
                            </button>
                        </div>

                                                    <div>
                                                        <label className="text-xs text-gray-500 block mb-1">Help & Support</label>
                                                        {data.helpSupportSubItems.map((subItem, subIdx) => (
                                                            <div key={subIdx} className="flex gap-2 mb-2">
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Name"
                                                                    value={subItem.name}
                                                                    onChange={(e) => updateArrayItem('helpSupportSubItems', subIdx, 'name', e.target.value)}
                                                                />
                                    <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Path"
                                                                    value={subItem.path}
                                                                    onChange={(e) => updateArrayItem('helpSupportSubItems', subIdx, 'path', e.target.value)}
                                    />
                                    <button
                                                                    onClick={() => removeArrayItem('helpSupportSubItems', subIdx)}
                                        className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                    <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                            onClick={() => addArrayItem('helpSupportSubItems', { name: "New Item", path: "/new-path" })}
                                                            className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                            + Add Help Item
                            </button>
                        </div>
                                                </div>
                                            )}

                                            {item === 'LEARN & GROW' && (
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="text-xs text-gray-500 block mb-1">Learn & Grow</label>
                                                        {data.learnGrowSubItems.map((subItem, subIdx) => (
                                                            <div key={subIdx} className="flex gap-2 mb-2">
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Name"
                                                                    value={subItem.name}
                                                                    onChange={(e) => updateArrayItem('learnGrowSubItems', subIdx, 'name', e.target.value)}
                                                                />
                                    <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Path"
                                                                    value={subItem.path}
                                                                    onChange={(e) => updateArrayItem('learnGrowSubItems', subIdx, 'path', e.target.value)}
                                    />
                                    <button
                                                                    onClick={() => removeArrayItem('learnGrowSubItems', subIdx)}
                                        className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                    <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                            onClick={() => addArrayItem('learnGrowSubItems', { name: "New Item", path: "/new-path" })}
                                                            className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                            + Add Learn & Grow Item
                            </button>
                        </div>

                                                    <div>
                                                        <label className="text-xs text-gray-500 block mb-1">Rewards</label>
                                                        {data.rewardsSubItems.map((subItem, subIdx) => (
                                                            <div key={subIdx} className="flex gap-2 mb-2">
                                                                <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Name"
                                                                    value={subItem.name}
                                                                    onChange={(e) => updateArrayItem('rewardsSubItems', subIdx, 'name', e.target.value)}
                                                                />
                                    <input
                                                                    className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                                    placeholder="Path"
                                                                    value={subItem.path}
                                                                    onChange={(e) => updateArrayItem('rewardsSubItems', subIdx, 'path', e.target.value)}
                                    />
                                    <button
                                                                    onClick={() => removeArrayItem('rewardsSubItems', subIdx)}
                                        className="text-red-400 hover:text-red-300 p-2"
                                    >
                                                                    <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                                            onClick={() => addArrayItem('rewardsSubItems', { name: "New Item", path: "/new-path" })}
                                                            className="w-full py-1 border border-dashed border-gray-600 text-gray-500 rounded hover:border-gray-400 text-xs"
                            >
                                                            + Add Rewards Item
                            </button>
                        </div>
                                                </div>
                                            )}
                                    </div>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={() => addArrayItem('navItems', "New Item")}
                                className="w-full py-2 border border-dashed border-gray-600 text-gray-400 rounded hover:border-gray-400 hover:text-gray-200 transition flex justify-center items-center gap-2 text-sm"
                            >
                                <Plus size={16} /> Add Nav Item
                            </button>
                        </div>

                    </Section>

                    {/* Hero Section */}
                    <Section
                        title="Hero Section"
                        isOpen={openSections.hero}
                        onToggle={() => toggleSection('hero')}
                    >
                        <InputField
                            label="Main Heading"
                            value={data.heroHeading}
                            onChange={(v) => updateField('heroHeading', v)}
                        />
                        <InputField
                            label="Subheading"
                            value={data.heroSubheading}
                            onChange={(v) => updateField('heroSubheading', v)}
                            type="textarea"
                        />
                        <ImageUploader
                            label="Hero Image"
                            value={data.heroImage}
                            onChange={(v) => updateField('heroImage', v)}
                        />
                    </Section>

                    {/* Market Section */}
                    <Section
                        title="Market Section"
                        isOpen={openSections.market}
                        onToggle={() => toggleSection('market')}
                    >
                        <InputField
                            label="Section Title"
                            value={data.marketTitle}
                            onChange={(v) => updateField('marketTitle', v)}
                        />
                        <InputField
                            label="Section Description"
                            value={data.marketDescription}
                            onChange={(v) => updateField('marketDescription', v)}
                            type="textarea"
                        />
                        <div className="mt-4 space-y-4">
                            <label className="text-xs text-gray-400 uppercase font-medium tracking-wider block mb-2">Market Tabs</label>
                            {(data.marketTabs || []).map((tab, idx) => (
                                <div key={idx} className="bg-[#2A2A2E] rounded border border-gray-700 overflow-hidden">
                                    {/* Tab Header */}
                                    <div className="flex items-center justify-between p-3 border-b border-gray-600">
                                        <div className="flex items-center gap-3">
                                            <ChevronDown
                                                size={16}
                                                className={`text-gray-400 transition-transform cursor-pointer ${openSections[`market-tab-${idx}`] ? 'rotate-180' : ''}`}
                                                onClick={() => {
                                                    const newState = { ...openSections };
                                                    newState[`market-tab-${idx}`] = !newState[`market-tab-${idx}`];
                                                    setOpenSections(newState);
                                                }}
                                            />
                                            <input
                                                className="bg-transparent border-none text-white text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1"
                                                value={tab.title}
                                                onChange={(e) => updateArrayItem('marketTabs', idx, 'title', e.target.value)}
                                                placeholder="Tab Title"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeArrayItem('marketTabs', idx)}
                                            className="text-red-400 hover:text-red-300 p-1"
                                            title="Delete Tab"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>

                                    {/* Tab Content Dropdown */}
                                    {openSections[`market-tab-${idx}`] && (
                                        <div className="p-4 space-y-4">
                                            {/* Basic Tab Settings */}
                                            <div className="grid grid-cols-1 gap-3">
                                                <InputField
                                                    label="Tab Description"
                                                    value={tab.description || ""}
                                                    onChange={(v) => updateArrayItem('marketTabs', idx, 'description', v)}
                                                    type="textarea"
                                                />
                                                <InputField
                                                    label="Button Text"
                                                    value={tab.buttonText || ""}
                                                    onChange={(v) => updateArrayItem('marketTabs', idx, 'buttonText', v)}
                                                />
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-xs text-gray-400 block mb-1">Icon</label>
                                                        <input
                                                            className="w-full bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                            value={tab.icon || ""}
                                                            onChange={(e) => updateArrayItem('marketTabs', idx, 'icon', e.target.value)}
                                                            placeholder="Icon name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs text-gray-400 block mb-1">Animation Speed</label>
                                                        <select
                                                            className="w-full bg-[#1a1a2e] border border-gray-700 rounded p-2 text-white text-sm"
                                                            value={tab.speed || "normal"}
                                                            onChange={(e) => updateArrayItem('marketTabs', idx, 'speed', e.target.value)}
                                                        >
                                                            <option value="slow">Slow</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="fast">Fast</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <ImageUploader
                                                    label="Animation Image"
                                                    value={tab.animationImage || ""}
                                                    onChange={(v) => updateArrayItem('marketTabs', idx, 'animationImage', v)}
                                                />
                                            </div>

                                            {/* Carousel Items Section */}
                                            <div className="border-t border-gray-600 pt-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <label className="text-xs text-gray-400 uppercase font-medium">Carousel Items</label>
                                                    <button
                                                        onClick={() => {
                                                            const newState = { ...openSections };
                                                            newState[`market-carousel-${idx}`] = !newState[`market-carousel-${idx}`];
                                                            setOpenSections(newState);
                                                        }}
                                                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                                                    >
                                                        <ChevronDown
                                                            size={12}
                                                            className={`transition-transform ${openSections[`market-carousel-${idx}`] ? 'rotate-180' : ''}`}
                                                        />
                                                        Configure Carousel
                                                    </button>
                                                </div>

                                                {openSections[`market-carousel-${idx}`] && (
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs text-gray-500">Items: {(tab.carouselItems || []).length}</span>
                                                            <button
                                                                onClick={() => {
                                                                    const currentItems = tab.carouselItems || [];
                                                                    updateArrayItem('marketTabs', idx, 'carouselItems', [
                                                                        ...currentItems,
                                                                        { icon: "", text: "", subtext: "", price: "", change: "" }
                                                                    ]);
                                                                }}
                                                                className="text-xs bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded flex items-center gap-1"
                                                            >
                                                                <Plus size={12} /> Add Item
                                                            </button>
                                                        </div>

                                                        {(tab.carouselItems || []).map((item, itemIdx) => (
                                                            <div key={itemIdx} className="bg-[#1a1a2e] p-3 rounded border border-gray-600">
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <span className="text-xs text-gray-400">Item {itemIdx + 1}</span>
                                                                    <button
                                                                        onClick={() => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems.splice(itemIdx, 1);
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                        className="text-red-400 hover:text-red-300 p-1"
                                                                    >
                                                                        <Trash2 size={12} />
                                                                    </button>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <input
                                                                        className="bg-[#0f0f23] border border-gray-600 rounded p-2 text-white text-xs"
                                                                        placeholder="Icon"
                                                                        value={item.icon || ""}
                                                                        onChange={(e) => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems[itemIdx].icon = e.target.value;
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                    />
                                                                    <input
                                                                        className="bg-[#0f0f23] border border-gray-600 rounded p-2 text-white text-xs"
                                                                        placeholder="Text"
                                                                        value={item.text || ""}
                                                                        onChange={(e) => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems[itemIdx].text = e.target.value;
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                    />
                                                                    <input
                                                                        className="bg-[#0f0f23] border border-gray-600 rounded p-2 text-white text-xs"
                                                                        placeholder="Subtext"
                                                                        value={item.subtext || ""}
                                                                        onChange={(e) => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems[itemIdx].subtext = e.target.value;
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                    />
                                                                    <input
                                                                        className="bg-[#0f0f23] border border-gray-600 rounded p-2 text-white text-xs"
                                                                        placeholder="Price"
                                                                        value={item.price || ""}
                                                                        onChange={(e) => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems[itemIdx].price = e.target.value;
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                    />
                                                                    <input
                                                                        className="bg-[#0f0f23] border border-gray-600 rounded p-2 text-white text-xs col-span-2"
                                                                        placeholder="Change %"
                                                                        value={item.change || ""}
                                                                        onChange={(e) => {
                                                                            const currentItems = [...(tab.carouselItems || [])];
                                                                            currentItems[itemIdx].change = e.target.value;
                                                                            updateArrayItem('marketTabs', idx, 'carouselItems', currentItems);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={() => addArrayItem('marketTabs', {
                                    title: "New Tab",
                                    description: "",
                                    buttonText: "Learn More",
                                    animationImage: "",
                                    speed: "normal",
                                    icon: "",
                                    carouselItems: []
                                })}
                                className="w-full py-2 border border-dashed border-gray-600 text-gray-400 rounded hover:border-gray-400 hover:text-gray-200 transition flex justify-center items-center gap-2 text-sm"
                            >
                                <Plus size={16} /> Add Tab
                            </button>
                        </div>
                    </Section>
                </div>
            </div>

            <div className="flex-1 flex flex-col bg-black overflow-hidden">
                <div className="p-4 border-b border-gray-800 bg-[#0D0D0E] flex justify-between items-center">
                    <h2 className="text-white font-bold text-lg">Live Preview</h2>

                    {/* View Mode Toggle */}
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setViewMode('desktop')}
                            className={`px-3 py-1 rounded text-sm font-medium ${
                                viewMode === 'desktop'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Desktop
                        </button>
                        <button
                            onClick={() => setViewMode('mobile')}
                            className={`px-3 py-1 rounded text-sm font-medium ${
                                viewMode === 'mobile'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Mobile
                        </button>
                    </div>

                    <button
                        onClick={openFullPreview}
                        className="px-3 py-1 text-white bg-transparent rounded text-sm font-medium hover:bg-gray-200 flex items-center gap-1"
                        title="View Full Page"
                    >
                        <Expand size={16} />
                    </button>
                </div>

                {/* Preview Container */}
                <div ref={containerRef} className="flex-1 bg-gray-900 overflow-auto flex items-center justify-center">
                    {showPreview ? (
                        <div
                            style={{
                                width: viewMode === 'mobile' ? MOBILE_WIDTH * previewScale : DESKTOP_WIDTH * previewScale,
                                height: viewMode === 'mobile' ? MOBILE_HEIGHT * previewScale : DESKTOP_HEIGHT * previewScale,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                borderRadius: 8,
                                border: '1px solid #444',
                                position: 'relative',
                                transformOrigin: 'top left',
                            }}
                        >
                            {/* Iframe Preview */}
                            <iframe
                                ref={iframeRef}
                                title="Live Preview"
                                src={getIframeUrl()}
                                style={{
                                    width: viewMode === 'mobile' ? MOBILE_WIDTH : DESKTOP_WIDTH,
                                    height: viewMode === 'mobile' ? MOBILE_HEIGHT : DESKTOP_HEIGHT,
                                    border: 'none',
                                    transform: `scale(${previewScale})`,
                                    transformOrigin: 'top left',
                                    backgroundColor: '#111827',
                                }}
                                onLoad={() => {
                                    console.log('EditorPage: Iframe loaded, marking as ready and sending initial data');
                                    setIsIframeReady(true);
                                    // Small delay to ensure iframe content is ready
                                    setTimeout(() => {
                                    if (iframeRef.current && iframeRef.current.contentWindow) {
                                            console.log('EditorPage: Sending initial data to iframe');
                                        iframeRef.current.contentWindow.postMessage({
                                            type: 'UPDATE_DATA',
                                            data: data
                                        }, '*');
                                    }
                                    }, 100);
                                }}
                            />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Preview Hidden
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}