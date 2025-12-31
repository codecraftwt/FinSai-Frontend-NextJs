'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import assets from '../../assets/assets.jsx';

const Header = ({
  data = {},
  isScrolled,
  isFixed = true
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tradingDropdownOpen, setTradingDropdownOpen] = useState(false);
  const [mobileTradingOpen, setMobileTradingOpen] = useState(false);
  const [marketDropdownOpen, setMarketDropdownOpen] = useState(false);
  const [mobileMarketOpen, setMobileMarketOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [learnGrowDropdownOpen, setLearnGrowDropdownOpen] = useState(false);
  const [mobileLearnGrowOpen, setMobileLearnGrowOpen] = useState(false);
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const {
    headerIcon,
    openLiveAccountText = "OPEN LIVE ACCOUNT",
    tryFreeDemoText = "TRY FREE DEMO"
  } = data;

  const navigationItems = data.navItems || ['Home', 'Trading', 'MARKET', 'ECOSYSTEM', 'LEARN & GROW', 'Company'];

  const TradingItems = data.tradingItems || [
    { name: 'Platforms', path: '/platforms' },
    { name: 'Payment Options', path: '/payment' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Tools', path: '/tools' },
  ];

  const EcoSystemItems = data.ecoSystemItems || [
    { name: 'Finsai Venture', path: '/finsai-venture' },
    { name: 'Finsai Care', path: '/finsai-care' },
  ];

  const MarketSubItems = data.marketSubItems || [
    { name: 'Forex', path: '/forex' },
    { name: 'Crypto', path: '/crypto' },
    { name: 'Indices', path: '/indices' },
    { name: 'Spot Metals And Energies', path: '/metals' },
    { name: 'World Stocks', path: '/worldstocks' },
  ];

  const companySubItems = data.companySubItems || [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Testimonial/Awards', path: '/testimonials' },
    { name: 'Career', path: '/career' },
  ];

  const regulationsSubItems = data.regulationsSubItems || [
    { name: 'Security', path: '/regulations-security' },
  ];

  const helpSupportSubItems = data.helpSupportSubItems || [
    { name: 'Support/Contact Us', path: '/contact-support' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Tutorials', path: '/tutorials' },
  ];

  const learnGrowSubItems = data.learnGrowSubItems || [
    { name: 'Finsai Academy', path: '/academy' },
    { name: 'Webinars', path: '/webinars' },
    { name: 'Blog', path: '/blogs' },
    { name: 'News & Analysis', path: '/news-analysis' },
    { name: 'Glossary', path: '/glossary' },
  ];

  const rewardsSubItems = data.rewardsSubItems || [
    { name: 'Promotions', path: '/rewards-promotion' },
    { name: 'Loyalty Programs', path: '/rewards' },
    { name: 'IB Program', path: '/rewards-ibprogram' },
  ];

  // Dropdown content configurations
  const dropdownConfigs = {
    trading: {
      title: 'TRADING',
      description: 'Trade Real Assets, Analyze Markets, And Aim For Smart Profits',
      image: assets.TradingHeader1,
      bgGradient: 'from-[#4A6FA5] to-[#6B8CC7]'
    },
    market: {
      title: 'MARKET',
      description: 'Explore Live Markets And Track Price Movements In Real Time',
      image: assets.MarketHeader1,
      bgGradient: 'from-[#3D5A80] to-[#5B7AA5]'
    },
    company: {
      title: 'COMPANY',
      description: 'Learn About Our Mission, Vision And The Team Behind Finsai',
      image: assets.CompanyHeader1,
      bgGradient: 'from-[#4A6FA5] to-[#7B9FD4]'
    },
    ecosystem: {
      title: 'ECOSYSTEM',
      description: 'Discover Our Complete Trading Ecosystem And Support Services',
      image: assets.EcosystemHeader1,
      bgGradient: 'from-[#3D5A80] to-[#5B7AA5]'
    },
    learnGrow: {
      title: 'LEARN & GROW',
      description: 'Explore Live Markets And Track Price Movements In Real Time',
      image: assets.LearnAndGrowHeader1,
      bgGradient: 'from-[#4A6FA5] to-[#6B8CC7]'
    }
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
    setTradingDropdownOpen(false);
    setMobileTradingOpen(false);
    setMarketDropdownOpen(false);
    setMobileMarketOpen(false);
    setEcosystemDropdownOpen(false);
    setMobileEcosystemOpen(false);
    setCompanyDropdownOpen(false);
    setMobileCompanyOpen(false);
    setLearnGrowDropdownOpen(false);
    setMobileLearnGrowOpen(false);
  };

  const handleItemClick = (item) => {
    if (item === 'Home') {
      router.push('/home');
      setMobileMenuOpen(false);
      // Close all dropdowns when navigating to home
      setTradingDropdownOpen(false);
      setMarketDropdownOpen(false);
      setEcosystemDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setLearnGrowDropdownOpen(false);
    }
  };

  // Check if current route belongs to a category
  const isActiveCategory = (category) => {
    const currentPath = pathname;

    switch (category) {
      case 'Trading':
        return TradingItems.some(item => item.path === currentPath);
      case 'MARKET':
        return MarketSubItems.some(item => item.path === currentPath);
      case 'Company':
        return companySubItems.some(item => item.path === currentPath) ||
          regulationsSubItems.some(item => item.path === currentPath) ||
          helpSupportSubItems.some(item => item.path === currentPath);
      case 'ECOSYSTEM':
        return EcoSystemItems.some(item => item.path === currentPath);
      case 'LEARN & GROW':
        return learnGrowSubItems.some(item => item.path === currentPath) ||
          rewardsSubItems.some(item => item.path === currentPath);
      default:
        return false;
    }
  };

  const positionClasses = isFixed
    ? 'fixed top-0 left-0 right-0'
    : 'absolute top-0 left-0 right-0';

  return (
    <>
      <header className={`${positionClasses} z-50 flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-20 py-4 transition-all duration-300 h-[70px] md:h-[75px] lg:h-[80px] ${isScrolled ? 'bg-[#496DAB]/20 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="flex items-center justify-start flex-shrink-0">
          <img
            src={assets.logo || headerIcon}
            alt="FNSAI Logo"
            className="h-[35px] md:h-[42px] lg:h-[48px] xl:h-[50px] object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 mx-4 lg:mx-8">
          <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-10 text-white">
            {navigationItems.map((item) => (
              <li
                key={item}
                className={`relative text-xs md:text-sm lg:text-sm xl:text-base font-medium cursor-pointer hover:text-[#A0EAF5] uppercase transition-colors duration-200 whitespace-nowrap text-center ${item === 'Trading' || item === 'MARKET' || item === 'ECOSYSTEM' || item === 'Company' || item === 'LEARN & GROW' ? 'py-2' : ''}`}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => {
                  if (item === 'Trading') setTradingDropdownOpen(true);
                  if (item === 'MARKET') setMarketDropdownOpen(true);
                  if (item === 'ECOSYSTEM') setEcosystemDropdownOpen(true);
                  if (item === 'Company') setCompanyDropdownOpen(true);
                  if (item === 'LEARN & GROW') setLearnGrowDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === 'Trading') setTradingDropdownOpen(false);
                  if (item === 'MARKET') setMarketDropdownOpen(false);
                  if (item === 'ECOSYSTEM') setEcosystemDropdownOpen(false);
                  if (item === 'Company') setCompanyDropdownOpen(false);
                  if (item === 'LEARN & GROW') setLearnGrowDropdownOpen(false);
                }}
              >
                <div className="flex flex-col items-start">
                  <span>{item}</span>
                  {/* Underline for Trading */}
                  {item === 'Trading' && (
                    <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${tradingDropdownOpen || isActiveCategory('Trading') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                  )}
                  {/* Underline for MARKET */}
                  {item === 'MARKET' && (
                    <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${marketDropdownOpen || isActiveCategory('MARKET') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                  )}
                  {/* Underline for Company */}
                  {item === 'Company' && (
                    <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${companyDropdownOpen || isActiveCategory('Company') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                  )}
                  {/* Underline for ECOSYSTEM */}
                  {item === 'ECOSYSTEM' && (
                    <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${ecosystemDropdownOpen || isActiveCategory('ECOSYSTEM') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                  )}
                  {/* Underline for LEARN & GROW */}
                  {item === 'LEARN & GROW' && (
                    <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${learnGrowDropdownOpen || isActiveCategory('LEARN & GROW') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                  )}

                </div>

                {/* Trading Dropdown */}
                {item === 'Trading' && tradingDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-2 left-0 right-0 h-4"></div>
                    <div className={`w-[650px] bg-gradient-to-br ${dropdownConfigs.trading.bgGradient} rounded-2xl shadow-2xl overflow-hidden`}>
                      <div className="flex">
                        {/* Left side - Menu items */}
                        <div className="w-1/2 p-6">
                          <h3 className="text-white font-bold text-sm tracking-wider mb-4">{dropdownConfigs.trading.title}</h3>
                          <div className="space-y-1">
                            {TradingItems.map((subItem, index) => (
                              <button
                                key={subItem.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavigation(subItem.path);
                                }}
                                className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Right side - Image card */}
                        <div className="w-1/2 p-4">
                          <div
                            className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[250px]"
                            style={{ backgroundImage: `url(${dropdownConfigs.trading.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-4 pt-24 flex flex-col justify-end h-full min-h-[250px]">
                              <h4 className="text-white font-bold text-sm tracking-wider mb-2">{dropdownConfigs.trading.title}</h4>
                              <p className="text-white text-xs leading-relaxed whitespace-normal break-words text-left text-[11px] first:uppercase">{dropdownConfigs.trading.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Dropdown */}
                {item === 'MARKET' && marketDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-2 left-0 right-0 h-4"></div>
                    <div className={`w-[650px] bg-gradient-to-br ${dropdownConfigs.market.bgGradient} rounded-2xl shadow-2xl overflow-hidden`}>
                      <div className="flex">
                        {/* Left side - Menu items */}
                        <div className="w-1/2 p-6">
                          <h3 className="text-white font-bold text-sm tracking-wider mb-4">{dropdownConfigs.market.title}</h3>
                          <div className="space-y-1">
                            {MarketSubItems.map((subItem, index) => (
                              <button
                                key={subItem.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavigation(subItem.path);
                                }}
                                className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Right side - Image card */}
                        <div className="w-1/2 p-4">
                          <div
                            className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[250px]"
                            style={{ backgroundImage: `url(${dropdownConfigs.market.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-4 pt-24 flex flex-col justify-end h-full min-h-[250px]">
                              <h4 className="text-white font-bold text-sm tracking-wider mb-2">{dropdownConfigs.market.title}</h4>
                              <p className="text-white text-xs leading-relaxed whitespace-normal break-words text-left text-[11px] first:uppercase">{dropdownConfigs.market.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Company Dropdown */}
                {item === 'Company' && companyDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-2 left-0 right-0 h-4"></div>
                    <div className={`w-[900px] bg-gradient-to-br ${dropdownConfigs.company.bgGradient} rounded-2xl shadow-2xl overflow-hidden`}>
                      <div className="flex">
                        {/* Left side - Three columns side by side */}
                        <div className="w-2/3 p-6 flex gap-6">
                          {/* COMPANY Column */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase text-left">COMPANY</h3>
                            <div className="space-y-1">
                              {companySubItems.map((subItem, index) => (
                                <button
                                  key={subItem.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation(subItem.path);
                                  }}
                                  className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                          {/* REGULATIONS Column */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase text-left">REGULATIONS</h3>
                            <div className="space-y-1">
                              {regulationsSubItems.map((subItem, index) => (
                                <button
                                  key={subItem.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation(subItem.path);
                                  }}
                                  className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                          {/* HELP & SUPPORT Column */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase text-left">HELP & SUPPORT</h3>
                            <div className="space-y-1">
                              {helpSupportSubItems.map((subItem, index) => (
                                <button
                                  key={subItem.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation(subItem.path);
                                  }}
                                  className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Right side - Image card */}
                        <div className="w-1/3 p-4">
                          <div
                            className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[250px]"
                            style={{ backgroundImage: `url(${dropdownConfigs.company.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-4 pt-24 flex flex-col justify-end h-full min-h-[250px]">
                              <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">{dropdownConfigs.company.title}</h4>
                              <p className="text-white text-xs leading-relaxed whitespace-normal break-words text-left">{dropdownConfigs.company.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ECOSYSTEM Dropdown */}
                {item === 'ECOSYSTEM' && ecosystemDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-2 left-0 right-0 h-4"></div>
                    <div className={`w-[650px] bg-gradient-to-br ${dropdownConfigs.ecosystem.bgGradient} rounded-2xl shadow-2xl overflow-hidden`}>
                      <div className="flex">
                        {/* Left side - Menu items */}
                        <div className="w-1/2 p-6">
                          <h3 className="text-white font-bold text-sm tracking-wider mb-4">{dropdownConfigs.ecosystem.title}</h3>
                          <div className="space-y-1">
                            {EcoSystemItems.map((subItem, index) => (
                              <button
                                key={subItem.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavigation(subItem.path);
                                }}
                                className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Right side - Image card */}
                        <div className="w-1/2 p-4">
                          <div
                            className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[250px]"
                            style={{ backgroundImage: `url(${dropdownConfigs.ecosystem.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-4 pt-24 flex flex-col justify-end h-full min-h-[250px]">
                              <h4 className="text-white font-bold text-sm tracking-wider mb-2">{dropdownConfigs.ecosystem.title}</h4>
                              <p className="text-white text-xs leading-relaxed whitespace-normal break-words text-left text-[11px] first:uppercase">{dropdownConfigs.ecosystem.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* LEARN & GROW Dropdown */}
                {item === 'LEARN & GROW' && learnGrowDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-2 left-0 right-0 h-4"></div>
                    <div className={`w-[650px] bg-gradient-to-br ${dropdownConfigs.learnGrow.bgGradient} rounded-2xl shadow-2xl overflow-hidden`}>
                      <div className="flex">
                        {/* Left side - Two columns side by side */}
                        <div className="w-1/2 p-6 flex gap-6">
                          {/* LEARN & GROW Section */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">{dropdownConfigs.learnGrow.title}</h3>
                            <div className="space-y-1">
                              {learnGrowSubItems.map((subItem, index) => (
                                <button
                                  key={subItem.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation(subItem.path);
                                  }}
                                  className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                          {/* REWARDS Section */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase text-left">REWARDS</h3>
                            <div className="space-y-1">
                              {rewardsSubItems.map((subItem, index) => (
                                <button
                                  key={subItem.name}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigation(subItem.path);
                                  }}
                                  className="w-full px-0 py-2 text-left text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Right side - Image card */}
                        <div className="w-1/2 p-4">
                          <div
                            className="relative rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[250px]"
                            style={{ backgroundImage: `url(${dropdownConfigs.learnGrow.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-4 pt-24 flex flex-col justify-end h-full min-h-[250px]">
                              <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">{dropdownConfigs.learnGrow.title}</h4>
                              <p className="text-white text-xs leading-relaxed whitespace-normal break-words text-left">{dropdownConfigs.learnGrow.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
          <button className="w-[140px] lg:w-[170px] xl:w-[219px] h-[40px] lg:h-[44px] xl:h-[49px] px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-md bg-gradient-to-t from-[#496DAB] to-[#A0EAF5] text-white text-xs md:text-sm lg:text-sm xl:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
            {openLiveAccountText}
          </button>

          <button className="w-[120px] lg:w-[140px] xl:w-[181px] h-[40px] lg:h-[44px] xl:h-[49px] px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-md border border-white text-white text-xs md:text-sm lg:text-sm xl:text-base font-medium hover:bg-white hover:text-[#496DAB] transition-all duration-300 whitespace-nowrap">
            {tryFreeDemoText}
          </button>
        </div>

        <button
          className="md:hidden text-white p-2 flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className={`md:hidden ${isFixed ? 'fixed' : 'absolute'} top-[70px] left-0 right-0 bg-[#0D0D0E]/95 backdrop-blur-md border-t border-white/10 z-40 px-6 py-8 max-h-[calc(100vh-70px)] overflow-y-auto`}>
          <ul className="flex flex-col gap-4 text-white">
            {navigationItems.map((item) => (
              <li key={item} className="border-b border-white/10">
                {item === 'MARKET' ? (
                  <div>
                    <button
                      className="w-full text-lg font-medium py-3 text-center flex flex-col items-start"
                      onClick={() => setMobileMarketOpen(!mobileMarketOpen)}
                    >
                      <span className="w-full text-center uppercase">{item}</span>

                      {/* Underline for MARKET */}
                      <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${mobileMarketOpen || isActiveCategory('MARKET') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </button>

                    {/* Mobile MARKET Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileMarketOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#1a1a2e]/60 rounded-lg mx-2 mb-3">
                        {MarketSubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5 last:border-b-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item === 'Trading' ? (
                  <div>
                    <button
                      className="w-full text-lg font-medium py-3 text-center flex flex-col items-start"
                      onClick={() => setMobileTradingOpen(!mobileTradingOpen)}
                    >
                      <span className="w-full text-center uppercase">{item}</span>

                      {/* Underline for Trading */}
                      <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${mobileTradingOpen || isActiveCategory('Trading') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </button>

                    {/* Mobile Trading Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileTradingOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#1a1a2e]/60 rounded-lg mx-2 mb-3">
                        {/* Trading Items */}
                        {TradingItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5 last:border-b-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item === 'Company' ? (
                  <div>
                    <button
                      className="w-full text-lg font-medium py-3 text-center flex flex-col items-start"
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    >
                      <span className="w-full text-center">{item}</span>
                      {/* Underline for Company */}
                      <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${mobileCompanyOpen || isActiveCategory('Company') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </button>

                    {/* Mobile Company Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileCompanyOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#1a1a2e]/60 rounded-lg mx-2 mb-3">
                        {/* COMPANY Section */}
                        <div className="px-4 py-2">
                          <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">COMPANY</h4>
                        </div>
                        {companySubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                        {/* REGULATIONS Section */}
                        <div className="px-4 py-2 mt-2">
                          <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">REGULATIONS</h4>
                        </div>
                        {regulationsSubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                        {/* HELP & SUPPORT Section */}
                        <div className="px-4 py-2 mt-2">
                          <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">HELP & SUPPORT</h4>
                        </div>
                        {helpSupportSubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5 last:border-b-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item === 'ECOSYSTEM' ? (
                  <div>
                    <button
                      className="w-full text-lg font-medium py-3 text-center flex flex-col items-start"
                      onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                    >
                      <span className="w-full text-center uppercase">{item}</span>
                      {/* Underline for ECOSYSTEM */}
                      <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${mobileEcosystemOpen || isActiveCategory('ECOSYSTEM') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </button>

                    {/* Mobile ECOSYSTEM Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileEcosystemOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#1a1a2e]/60 rounded-lg mx-2 mb-3">
                        {EcoSystemItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5 last:border-b-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item === 'LEARN & GROW' ? (
                  <div>
                    <button
                      className="w-full text-lg font-medium py-3 text-center flex flex-col items-start"
                      onClick={() => setMobileLearnGrowOpen(!mobileLearnGrowOpen)}
                    >
                      <span className="w-full text-center uppercase">{item}</span>
                      {/* Underline for LEARN & GROW */}
                      <div className={`h-[2px] bg-white mt-1 transition-all duration-300 ${mobileLearnGrowOpen || isActiveCategory('LEARN & GROW') ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </button>

                    {/* Mobile LEARN & GROW Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileLearnGrowOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#1a1a2e]/60 rounded-lg mx-2 mb-3">
                        {/* LEARN & GROW Section */}
                        <div className="px-4 py-2">
                          <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">LEARN & GROW</h4>
                        </div>
                        {learnGrowSubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                        {/* REWARDS Section */}
                        <div className="px-4 py-2 mt-2">
                          <h4 className="text-white font-bold text-sm tracking-wider mb-2 uppercase">REWARDS</h4>
                        </div>
                        {rewardsSubItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation(subItem.path);
                            }}
                            className="w-full px-4 py-3 text-base text-white/80 hover:text-[#A0EAF5] transition-colors duration-200 flex items-center gap-3 border-b border-white/5 last:border-b-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#496DAB] to-[#A0EAF5]"></span>
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="w-full text-lg font-medium py-3 text-center"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <button className="w-full py-4 rounded-lg bg-gradient-to-r from-[#496DAB] to-[#A0EAF5] text-white font-semibold text-lg text-center">
              {openLiveAccountText}
            </button>

            <button className="w-full py-4 rounded-lg border border-white text-white font-semibold text-lg text-center">
              {tryFreeDemoText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;