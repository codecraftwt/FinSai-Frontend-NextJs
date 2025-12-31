
import React from 'react';

export default function TradingPlansComparison() {
  const rows = [
    { label: 'Min. Deposit', values: ['$100', '$1000', '$5000', 'On Request'] },
    { label: 'Spreads From', values: ['From 1.4 Pips', 'From 1.0 Pips', 'From 0.0 Pips', 'Customisable'] },
    { label: 'Leverage', values: ['Up To 1:500', 'Up To 1:1000', 'Up To 1:1000', 'Customisable'] },
    { label: 'Commission', values: ['No', 'No', '$6/Lot', 'Custom'] },
    { label: 'Execution', values: ['Instant', 'Market', 'Market', 'Market'] },
    { label: 'Best For', values: ['Beginners & Casual Traders', 'Intermediate Traders', 'Professionals & Scalpers', 'High-Volume Traders'] }
  ];

  const plans = ['SMART CHOICE', 'SMART PRO', 'SMART ECN', 'SMART ELITE'];

  // Mobile Card Component
  const PlanCard = ({ plan, planIndex }) => (
    <div className="bg-[#ffffff]/5 border border-[#ffffff]/15 rounded-lg p-4 mb-4 lg:hidden">
      <h3 className="text-white text-xl font-semibold text-center mb-4 pb-2 border-b border-[#ffffff]/20">
        {plan}
      </h3>
      <div className="space-y-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between items-center py-2 border-b border-[#ffffff]/10 last:border-b-0">
            <span className="text-white/80 text-sm font-medium">{row.label}:</span>
            <span className="text-white text-sm font-semibold text-right ml-2">{row.values[planIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl">
        {/* Mobile/Tablet Card Layout */}
        <div className="lg:hidden">
          <h2 className="text-white text-2xl font-bold text-center mb-6">Trading Plans Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan, planIndex) => (
              <PlanCard key={planIndex} plan={plan} planIndex={planIndex} />
            ))}
          </div>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden lg:block rounded-lg overflow-hidden relative">
          {/* Header Row */}
          <div className="bg-[#496DAB]/15 border border-[#ffffff]/15 rounded-t-lg p-4 h-24">
            <div className="grid grid-cols-5 gap-6 h-full items-center">
              <div></div>
              {plans.map((plan, planIndex) => (
                <div key={planIndex} className="text-center">
                  <h3 className="text-white text-xl font-semibold tracking-wider leading-tight">
                    {plan}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 pointer-events-none px-4">
              <div className="grid grid-cols-5 gap-6 h-full ml-5">
                <div className="relative"></div>

                <div className="relative flex justify-end">
                  <div className="w-[3px] absolute top-4 bottom-2 right-0 bg-gradient-to-t from-[#A0EAF5] to-[#496DAB] rounded-full"></div>
                  <div className="absolute -right-1 top-3 w-3 h-3 -translate-y-1 rounded-full bg-[#496DAB]"></div>
                  <div className="absolute -right-1 bottom-3 w-3 h-3 translate-y-1 rounded-full bg-[#A0EAF5]"></div>
                </div>

                <div className="relative flex justify-end ml-5">
                  <div className="w-[3px] absolute top-4 bottom-2 right-0 bg-gradient-to-t from-[#A0EAF5] to-[#496DAB] rounded-full"></div>
                  <div className="absolute -right-1 top-3 w-3 h-3 -translate-y-1 rounded-full bg-[#496DAB]"></div>
                  <div className="absolute -right-1 bottom-3 w-3 h-3 translate-y-1 rounded-full bg-[#A0EAF5]"></div>
                </div>

                <div className="relative flex justify-end">
                  <div className="w-[3px] absolute top-4 bottom-2 right-0 bg-gradient-to-t from-[#A0EAF5] to-[#496DAB] rounded-full"></div>
                  <div className="absolute -right-1 top-3 w-3 h-3 -translate-y-1 rounded-full bg-[#496DAB]"></div>
                  <div className="absolute -right-1 bottom-3 w-3 h-3 translate-y-1 rounded-full bg-[#A0EAF5]"></div>
                </div>

                <div className="relative"></div>
              </div>
            </div>

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="bg-[#ffffff]/5 p-4">
                <div className="grid grid-cols-5 gap-6">
                  <div className="bg-[#496DAB]/5 border border-[#ffffff]/20 rounded-lg p-3 h-12 flex items-center justify-center">
                    <div className="text-white text-base font-normal text-center">{row.label}</div>
                  </div>

                  {row.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="flex items-center justify-center min-h-[3rem] p-2">
                      <div className="text-white text-sm font-medium text-center">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
