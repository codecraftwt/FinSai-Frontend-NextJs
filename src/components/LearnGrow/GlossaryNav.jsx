import React, { useState } from 'react';

const GlossaryNav = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const glossaryData = {
    '#': ['24/7 Trading', '100% Bonus', '50:1 Leverage'], // Example numeric/special
    A: ['Account Statement',"Altcoin","Annual Return","Appreciation","Arbitrage", "Ask Price","Asset Allocation",'ASUM (Assets Under Management)', 'Automated Trading','Averaging Down'],
    B: ['Bid Price', 'Bear Market', 'Bull Market', 'Broker'],
    C: ['Candlestick Chart', 'CFD (Contract for Difference)', 'Commission', 'Crypto Wallet'],
    D: ['Day Trading', 'Diversification', 'Drawdown'],
    E: ['Equity', 'Exchange Rate', 'Expert Advisor (EA)'],
    F: ['Fiat Currency', 'Fundamental Analysis', 'Forex'],
    G: ['Gap', 'Going Long', 'Going Short'],
    H: ['Hedging', 'High-Frequency Trading'],
    I: ['Index', 'Initial Margin', 'IPO'],
    J: ['Joint Account'],
    K: ['KYC (Know Your Customer)'],
    L: ['Leverage', 'Limit Order', 'Liquidity', 'Long Position'],
    M: ['Margin Call', 'Market Order', 'Moving Average'],
    N: ['Net Asset Value (NAV)'],
    O: ['Over-the-Counter (OTC)', 'Open Position'],
    P: ['Pip', 'Position', 'Portfolio'],
    Q: ['Quote Currency'],
    R: ['Annual Return', 'Asset Allocation', 'Risk Management'],
    S: ['Spread', 'Stop Loss', 'Scalping', 'Swing Trading'],
    T: ['Take Profit', 'Technical Analysis', 'Trend', 'Trailing Stop'],
    U: ['Underlying Asset', 'USD Index'],
    V: ['Volatility', 'Volume'],
    W: ['Wallet', 'Whale'],
    X: ['XAU/USD (Gold)'],
    Y: ['Yield'],
    Z: ['AUM (Assets Under Management)', 'Appreciation', 'Zero Coupon Bond']
  };

  const filters = ['All', '#', '0-9', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const getDisplayedItems = () => {
    if (selectedFilter === 'All') {
      return Object.values(glossaryData).flat();
    }
    if (selectedFilter === '0-9') {
      return glossaryData['#'] || [];
    }
    return glossaryData[selectedFilter] || [];
  };

  const displayedItems = getDisplayedItems();

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8  text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex justify-start md:justify-between border-2 border-white/20 overflow-x-auto w-full max-w-7xl bg-[#496DAB]/5">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`cursor-pointer transition-all duration-200 px-2 py-2 text-xs md:text-sm font-medium uppercase tracking-widest flex-shrink-0 w-12 md:flex-1 md:text-center relative ${
                  selectedFilter === filter
                    ? 'text-[#496DAB] bg-[#496DAB]/10'
                    : 'text-white/60 hover:text-cyan-300 hover:bg-white/5'
                } ${index !== filters.length - 1 ? 'after:absolute after:right-0 after:top-[-2px] after:bottom-[-2px] after:w-px after:bg-white/30' : ''}`}
              >
                {filter === '#' ? '#' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-3">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#A0EAF5] rounded-full"></span>
                <p className="text-base md:text-xl font-medium leading-relaxed text-white group-hover:text-cyan-300 transition-colors duration-200 cursor-pointer">
                  {item}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-white/50 text-lg">
              No terms available for this selection.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlossaryNav;