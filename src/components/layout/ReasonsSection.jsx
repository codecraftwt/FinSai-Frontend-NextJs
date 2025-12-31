import React from "react";

const ReasonsSection = ({ heading, reasons, backgroundColor = "#0a1628" }) => {
  return (
    <section className="w-full" style={{ backgroundColor }}>
      <div className="flex flex-col items-center px-4 py-16 sm:py-20 lg:py-24">
        {/* ===== Heading ===== */}
        {heading && (
          <h2
            className="
            max-w-4xl 
            text-center 
            text-white 
            font-bold 
            text-2xl 
            sm:text-3xl 
            lg:text-5xl 
            leading-tight
            mb-10 
            sm:mb-14
          "
          >
            {heading}
          </h2>
        )}

        {/* ===== Reasons Wrapper ===== */}
        <div className="w-full max-w-2xl">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                flex 
                items-start 
                gap-4 
                sm:gap-5 
                mb-8 
                sm:mb-10
              "
            >
              {/* ===== Icon ===== */}
              <div
                className="
                flex-shrink-0 
                w-10 
                h-10 
                sm:w-12 
                sm:h-12
                rounded-full 
                border 
                border-white/40
                flex 
                items-center 
                justify-center
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M18 8l4 4-4 4" />
                  <path d="M2 12h20" />
                </svg>
              </div>

              {/* ===== Content ===== */}
              <div className="text-left">
                <h3
                  className="
                  text-white 
                  font-bold 
                  uppercase
                  text-base 
                  sm:text-lg 
                  tracking-wide 
                  mb-1.5
                "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                  text-white/85 
                  text-sm 
                  sm:text-base 
                  leading-relaxed
                "
                >
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
