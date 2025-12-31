import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageData: {
    // Hero section
    heroHeading: "Trade Secure With Finsai.",
    heroSubheading: "Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.",
    openLiveAccountText: "Open Live Account",
    tryFreeDemoText: "Try Free Demo",
    heroImage: "",

    // Features section
    features: [
      { icon: "license", title: "Regulated & Licensed", description: "" },
      { icon: "atm", title: "Ultra-Fast Withdrawal", description: "" },
      { icon: "phone", title: "24/7 Support", description: "" },
      { icon: "safebox", title: "Secure Deposits", description: "" }
    ],

    // Why Choose section
    whyChooseTitle: "Why Choose Finsai Trade",
    whyChooseDescription: "At Finsai Trade, we bridge traditional finance with cutting-edge trading technology. Whether you're a beginner or seasoned trader, our platform offers the perfect mix of reliability, innovation, and growth opportunity.",
    learnMoreText: "Learn More",
    phoneScreenImage: "",
    screenBlurImage: "",

    // Platforms section
    platformsTitle: "Powerful Platforms For Every Trader",
    platformsDescription: "Trade Seamlessly On The Go Or From Your Desktop With Our Cutting-Edge Platforms.",
    platformsLearnMoreText: "Learn More",
    platforms: [
      { icon: "metatrader", title: "MetaTrader 5", description: "Pro-grade tools for advanced traders" },
      { icon: "webtrader", title: "Finsai WebTrader", description: "Browser-based, no downloads needed" },
      { icon: "mobileapp", title: "Mobile App (Coming Soon)", description: "Fast, secure, and intuitive" }
    ],

    // Accounts section
    accountsTitle: "Choose The Right Account For You",
    accountsSubtitle: "Start Your Journey With An Account Tailored To Your Goals",
    accounts: [
      { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders" },
      { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders" },
      { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers" },
      { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals" }
    ],

    // Awards section
    awardsTitle: "Recognized For Excellence",
    awards: [
      { year: 2025, title: "World Forex Award", subtitle: "Best IB Program" },
      { year: 2025, title: "World Financial Award", subtitle: "Trusted Financial Services" },
      { year: 2023, title: "Iconic Finance Expo", subtitle: "Innovative Startup In Finance" }
    ],

    // Market Data section
    marketData: [
      { icon: "bitcoin2", title: "Forex", price: "$56,623.54", percent: "+1.41%", graph: "curve1" },
      { icon: "crypto2", title: "Crypto", price: "$4,267.90", percent: "+2.22%", graph: "curve2" },
      { icon: "bitcoin2", title: "Indices", price: "$1,289.33", percent: "-0.44%", graph: "curve1" },
      { icon: "crypto2", title: "Metals", price: "$2,143.11", percent: "+0.67%", graph: "curve2" },
      { icon: "crypto2", title: "Stocks", price: "$823.77", percent: "+3.12%", graph: "curve2" }
    ],

    // Markets section
    markets: [
      { category: 'Forex', assets: 'Major & Minor Currency Pairs', iconSrc: 'forex', highlight: false },
      { category: 'Cryptocurrencies', assets: 'BTC, ETH, XCH & More', iconSrc: 'crypto', highlight: false },
      { category: 'Commodities', assets: 'Gold, Oil, Silver', iconSrc: 'commodities', highlight: false },
      { category: 'Indices', assets: 'S&P 500, NASDAQ, FTSE', iconSrc: 'indices', highlight: false },
      { category: 'Stocks', assets: 'Top-tier & second equities', iconSrc: 'stocks', highlight: false },
    ],

    // Account Types section
    accountTypes: [
      { id: 1, title: 'SMART START' },
      { id: 2, title: 'SMART CHOICE' },
      { id: 3, title: 'SMART PRO' },
      { id: 4, title: 'SMART ELITE' },
      { id: 5, title: 'SMART VIP' }
    ],

    // Design & Styling
    fontFamily: "Arial, sans-serif",
    colors: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      tertiary: "#9ca3af",
      bg: "#ffffff",
      text: "#1f2937",
      heading: "#1f2937"
    },
    titleFontSize: "48px",
    descriptionFontSize: "20px",
    headingFontSize: "32px",
    bodyFontSize: "16px",
    buttonBorderRadius: "8px",
    cardBorderRadius: "8px",
    textAlign: "center",
    bgGradientEnabled: false,
    bgGradientStart: "#ffffff",
    bgGradientEnd: "#f8fafc",

    // Section order
    sectionOrder: ["hero", "features", "whyChoose", "platforms", "accounts", "awards", "marketData", "markets", "accountTypes", "design"]
  }
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updatePageData: (state, action) => {
      state.pageData = { ...state.pageData, ...action.payload };
    },
    removeSection: (state, action) => {
      const sectionId = action.payload;
      if (state.pageData.sectionOrder) {
        state.pageData.sectionOrder = state.pageData.sectionOrder.filter(id => id !== sectionId);
      }
    },
  },
});

export const { updatePageData, removeSection } = editorSlice.actions;
export default editorSlice.reducer;

