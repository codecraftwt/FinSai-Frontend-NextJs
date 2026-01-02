"use client";

import React, { useState } from "react";

// Function to generate flag URL from country code
const getFlagUrl = (countryCode) => `https://flagcdn.com/w40/${countryCode}.png`;

const TABS = [
  {
    key: "stlucia",
    label: "St. Lucia",
    countryCode: "lc",
    flag: getFlagUrl("lc"),
    content: {
      title: "Finsai Trade Ltd (St. Lucia)",
      incorporated: "11/05/2024",
      license: "SL-239482",
      authority: "Financial Services Regulatory Authority (FSRA)",
    },
  },
  {
    key: "nauru",
    label: "Nauru",
    countryCode: "nr",
    flag: getFlagUrl("nr"),
    content: {
      title: "Finsai Trade Ltd (Nauru)",
      incorporated: "08/01/2023",
      license: "NR-782349",
      authority: "Nauru Financial Authority",
    },
  },
  {
    key: "usa",
    label: "USA",
    countryCode: "us",
    flag: getFlagUrl("us"),
    content: {
      title: "Finsai Trade Ltd (USA)",
      incorporated: "11/05/2025",
      license: "31000299955271",
      authority:
        "Financial Crimes Enforcement Network (FinCEN), U.S. Department of the Treasury",
    },
  },
  {
    key: "mauritius",
    label: "Mauritius",
    countryCode: "mu",
    flag: getFlagUrl("mu"),
    content: {
      title: "Finsai Trade Ltd (Mauritius)",
      incorporated: "02/10/2024",
      license: "MU-983424",
      authority: "Financial Services Commission (FSC)",
    },
  },
  {
    key: "canada",
    label: "Canada",
    countryCode: "ca",
    flag: getFlagUrl("ca"),
    content: {
      title: "Finsai Trade Ltd (Canada)",
      incorporated: "19/06/2023",
      license: "CA-445923",
      authority: "Financial Crimes Enforcement Network (FinCEN), U.S. Department of the Treasury",
    },
  },
 ];

const RegulatoryTabs = () => {
  const [active, setActive] = useState(2); // USA default

  return (
    <section className="relative bg-transparent text-white py-10">
      <div className="max-w-9xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
                  Company Regulatory Overview
              </h2>
              <div className={`relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-10 mx-auto`}>
                  <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#496DAB] rotate-45"></div>
              </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setActive(index)}
                className={`flex items-center justify-center gap-2 w-[250px] h-[70px] text-sm font-medium rounded-full transition-all duration-200 border-2 ${
                  active === index
                  ? "bg-white/25 border-white/15 text-white shadow-lg"
                  : "bg-white/5 border-white/15 text-white hover:border-white/25 hover:text-white"
              }`}
            >
              <img src={tab.flag} alt={`${tab.label} flag`} className="w-8 h-8 object-cover rounded-full" />
              <span className="hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="max-w-3xl mx-auto bg-[#ffffff]/5 border border-white/15 rounded-2xl p-8 shadow-lg transition-all">
          <div className="flex justify-center mb-4">
            <img src={TABS[active].flag} alt={`${TABS[active].label} flag`} className="w-16 h-16 object-cover rounded-full" />
          </div>

          <h3 className="text-xl  font-semibold mb-6">
            {TABS[active].content.title}
          </h3>

          <div className="flex gap-6 text-white max-w-lg mx-auto items-start">
            {/* Labels Column */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <div className="text-gray-300 font-semibold text-left text-sm">Incorporated</div>
              <div className="text-gray-300 font-semibold text-left text-sm">License No</div>
              <div className="text-gray-300 font-semibold text-left text-sm">Authority</div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-white text-left text-sm leading-relaxed">{TABS[active].content.incorporated}</div>
              <div className="text-white text-left text-sm leading-relaxed">{TABS[active].content.license}</div>
              <div className="text-white text-left text-sm leading-relaxed break-words">{TABS[active].content.authority}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryTabs;
