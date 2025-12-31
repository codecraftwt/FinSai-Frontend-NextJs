import React from "react";

const steps = [
  {
    id: 1,
    number: "1",
    title: "SIGN UP",
    description: "Create Your Account With Basic Info",
  },
  {
    id: 2,
    number: "2",
    title: "VERIFY",
    description: "Upload Your KYC Documents Securely",
  },
  {
    id: 3,
    number: "3",
    title: "FUND",
    description: "Deposit The Money",
  },
  {
    id: 4,
    number: "4",
    title: "TRADE",
    description: "Choose Your Platform And Execute Your First Trade",
  },
];

export default function HowToOpenAccount() {
  return (
    <section className="w-full bg-transparent py-16 md:py-20 px-4 md:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Box Container with background color #252526 */}
        <div className="bg-[#252526] rounded-2xl p-8 md:p-10 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-5 items-start lg:items-center">
            
            {/* LEFT SECTION - Heading and Button */}
            <div className="w-full lg:w-[35%] flex flex-col ">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl  font-bold leading-tight mb-4">
                How To Open An Account
              </h2>
              
              {/* Blue Underline */}
              <div className="relative w-[100px] h-[2px] bg-[#496DAB] mb-6">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
              </div>

              <p className="text-white text-base md:text-lg mb-8">
                Start In 4 Simple Steps:
              </p>

              <button className="w-fit px-6 py-3 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-lg transition-colors duration-200">
                Open Live Account
              </button>
            </div>

            {/* RIGHT SECTION - Steps Flow */}
            <div className="w-full lg:w-3/4 ">
              <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0">
                
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    {/* Step Item */}
                    <div className="flex flex-col items-center text-center flex-1">
                      {/* Step Number */}
                      <div className="text-white text-4xl md:text-5xl lg:text-4xl font-bold mb-3 md:mb-4">
                        {step.number}
                      </div>

                      {/* Step Title */}
                      <h3 className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wider mb-2 md:mb-3">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-white text-xs md:text-sm leading-relaxed ">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector Line (between steps) */}
                    {index !== steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center flex-shrink-0 w-12 lg:w-16 ">
                        <div className="flex items-center w-full mt-[15px]">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span className="flex-1 h-[2px] bg-white mx-0"></span>
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
