import React from "react";

const StartTradingSteps = () => {
  const steps = [
    {
      number: "1",
      title: "REGISTER",
      desc: "Create Your Account And Complete KYC",
    },
    {
      number: "2",
      title: "KYC",
      desc: "Complete The KYC To Verify Your Account",
    },
    {
      number: "3",
      title: "FUND",
      desc: "Deposit As Little As $100",
    },
    {
      number: "4",
      title: "TRADE",
      desc: "Choose Your Platform And Execute Your First Trade",
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="text-center mb-24">
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Start Trading In 4 Steps
          </h2>

          <div className="relative w-[100px] h-[2px] bg-[#496DAB] mx-auto">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45" />
          </div>
        </div>

        {/* ===== Steps Row ===== */}
        <div className="hidden md:flex items-start justify-between relative px-6 lg:px-14  max-w-6xl mx-auto">

          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="w-1/4 text-center">
                <div className="text-white text-3xl font-bold mb-4">
                  {step.number}
                </div>

                <h3 className="text-white font-semibold tracking-wider mb-3">
                  {step.title}
                </h3>

                <p className="text-white text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Connector (between steps) */}
              {index !== steps.length - 1 && (
                <div className="flex items-center justify-center mt-[10px] w-[120px]">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="w-full h-[2px] bg-white mx-0" />
                  <span className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ===== Mobile Layout ===== */}
        <div className="md:hidden space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-white text-3xl font-bold mb-3">
                {step.number}
              </div>

              <h3 className="text-white font-semibold tracking-wider mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StartTradingSteps;
