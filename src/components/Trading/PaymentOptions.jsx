import React, { useState } from 'react';
import assets from '../../assets/assets';

const PaymentOptions = () => {
    const [activeTab, setActiveTab] = useState('deposit');

    // Payment options data
    const paymentData = {
        deposit: [
            {
                id: 'usdt',
                name: 'USDT',
                icon: assets?.BITCOIN || assets?.bitcoin || '', // Using Bitcoin icon as placeholder for USDT, can be replaced with actual USDT icon
                minDeposit: 'From $50',
                maxDeposit: 'Unlimited',
                fees: 'No Fees',
                processingTime: 'Depending On Blockchain',
                acceptedCurrencies: 'USDT TRC20 & USDT ERC20'
            },
            {
                id: 'btc',
                name: 'BTC',
                icon: assets?.BITCOIN || assets?.bitcoin || '',
                minDeposit: 'From $50',
                maxDeposit: 'Unlimited',
                fees: 'No Fees',
                processingTime: 'Depending On Blockchain',
                acceptedCurrencies: 'BTC'
            },
            {
                id: 'eth',
                name: 'ETH',
                icon: assets?.ETHEREUM || '',
                minDeposit: 'From $50',
                maxDeposit: 'Unlimited',
                fees: 'No Fees',
                processingTime: 'Depending On Blockchain',
                acceptedCurrencies: 'ETH'
            }
        ],
        withdrawal: [
            {
                id: 'usdt',
                name: 'USDT',
                icon: assets?.BITCOIN || assets?.bitcoin || '',
                minDeposit: 'From $100',
                maxDeposit: 'Up to $50,000',
                fees: '1% Fee',
                processingTime: '1-3 Business Days',
                acceptedCurrencies: 'USDT TRC20 & USDT ERC20'
            },
            {
                id: 'btc',
                name: 'BTC',
                icon: assets?.BITCOIN || assets?.bitcoin || '',
                minDeposit: 'From $100',
                maxDeposit: 'Up to $50,000',
                fees: '1% Fee',
                processingTime: '1-3 Business Days',
                acceptedCurrencies: 'BTC'
            },
            {
                id: 'eth',
                name: 'ETH',
                icon: assets?.ETHEREUM || '',
                minDeposit: 'From $100',
                maxDeposit: 'Up to $50,000',
                fees: '1% Fee',
                processingTime: '1-3 Business Days',
                acceptedCurrencies: 'ETH'
            }
        ]
    };

    const currentData = paymentData[activeTab];

    return (
        <div className="bg-transparent py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            {/* Introductory Text */}
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
                <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                    At Finsai Trade, We Make Funding And Withdrawing From Your Account Seamless, Secure, And Flexible.
                </p>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                    Traders Can Choose From A Wide Range Of Trusted Payment Methods Including UPI, PayPal, Credit And Debit Cards, Bank Transfers, Crypto Payments, And Leading E-Wallets Like Skrill And Neteller.
                </p>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
                Payment Options
            </h2>

            {/* Blue Underline */}
            <div className="relative w-[80px] sm:w-[100px] h-[2px] bg-[#496DAB] rounded-md mb-8 sm:mb-10 mx-auto">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] bg-[#496DAB] rotate-45"></div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8 sm:mb-10">
                <button
                    onClick={() => setActiveTab('deposit')}
                    className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 ${activeTab === 'deposit'
                        ? 'bg-[#496DAB] text-white shadow-lg'
                        : 'bg-transparent text-gray-400 hover:text-white border border-white/20'
                        }`}
                >
                    Deposit
                </button>
                <button
                    onClick={() => setActiveTab('withdrawal')}
                    className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 ${activeTab === 'withdrawal'
                        ? 'bg-[#496DAB] text-white shadow-lg'
                        : 'bg-transparent text-gray-400 hover:text-white border border-white/20'
                        }`}
                >
                    Withdrawal
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto max-w-7xl mx-auto">
                <div className="bg-[rgb(73,109,171,0.08)] rounded-lg overflow-hidden min-w-[800px] hover:border border-white/20 transition-all duration-300">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-2 sm:gap-4 p-3 sm:p-4 md:p-6 bg-[rgb(73,109,171,0.15)] border-b border-white/10">
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">FUNDING OPTIONS</div>
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">MIN DEPOSIT</div>
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">MAX DEPOSIT</div>
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">FEES</div>
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">PROCESSING TIME</div>
                        <div className="text-white font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">ACCEPTED CURRENCIES</div>
                    </div>

                    {/* Table Rows */}
                    {currentData.map((option, index) => (
                        <div
                            key={option.id}
                            className={`grid grid-cols-6 gap-2 sm:gap-4 p-3 sm:p-4 md:p-6  last:border-b-0 ${index % 2 === 0 ? 'bg-[rgb(73,109,171,0.05)]' : 'bg-[rgb(73,109,171,0.08)]'
                                } hover:bg-[rgb(73,109,171,0.12)] hover:border-white/20 transition-all duration-300`}
                        >
                            {/* Funding Option */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                {option.icon && (
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#496DAB]/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img
                                            src={option.icon}
                                            alt={option.name}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                )}
                                <span className="text-white font-medium text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">{option.name}</span>
                            </div>

                            {/* Min Deposit */}
                            <div className="flex items-center text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                {option.minDeposit}
                            </div>

                            {/* Max Deposit */}
                            <div className="flex items-center text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                {option.maxDeposit}
                            </div>

                            {/* Fees */}
                            <div className={`flex items-center font-medium text-[10px] sm:text-xs md:text-sm lg:text-base ${option.fees === 'No Fees' ? 'text-green-400' : 'text-gray-300'
                                }`}>
                                {option.fees}
                            </div>

                            {/* Processing Time */}
                            <div className="flex items-center text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                {option.processingTime}
                            </div>

                            {/* Accepted Currencies */}
                            <div className="flex items-center text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                {option.acceptedCurrencies}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentOptions;

