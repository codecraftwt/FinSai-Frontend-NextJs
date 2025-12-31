import React, { useRef, useEffect, useState, useCallback } from "react";

const sectors = [
  { title: "TECHNOLOGY", desc: "33–44%" },
  { title: "HEALTHCARE", desc: "Slightly Negative Single-Digit Returns" },
  {
    title: "RENEWABLE ENERGY",
    desc: "Substantial Negative Returns (-10% to -33%)",
  },
  {
    title: "FINANCIAL SERVICES & CONSUMER GOODS",
    desc: "Mixed Results Ranging From -8% to +14%",
  },
];

export default function SectorExpertisePerformance() {
  const cardsRef = useRef(null);
  const containerRef = useRef(null);
  const [arrowEndX, setArrowEndX] = useState(540);

  const updateArrowPosition = useCallback(() => {
    if (!cardsRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardsRef.current.getBoundingClientRect();

    // Calculate the left edge of cards relative to container
    const x = cardRect.left - containerRect.left;

    setArrowEndX(x);
  }, []);

  useEffect(() => {
    // Initial calculation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(updateArrowPosition, 100);

    // Update on window resize
    window.addEventListener('resize', updateArrowPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateArrowPosition);
    };
  }, [updateArrowPosition]);

  return (
    <section className="w-full flex items-center justify-center bg-transparent">
      <div
        ref={containerRef}
        className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-28 items-center relative p-4 sm:p-6 lg:p-10  "
      >
        {/* CIRCLE */}
        <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto lg:mx-0">

          <div className="absolute inset-0 rounded-full bg-[#496DAB]/10 border border-[#FFFFFF]/20" />

          <div className="absolute inset-[25px] sm:inset-[20px] lg:inset-[30px] rounded-full bg-[#496DAB]/30 border border-[#FFFFFF]/20
                          flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Sector<br />Expertise &<br />Performance
            </h2>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              Finsai Ventures focuses investments in key industries,
              showcasing average 1-year returns for associated ETFs.
            </p>
          </div>

          {/* SVG CONNECTORS - Hidden on mobile, visible on lg+ */}
          <svg
            className="absolute top-0 left-0 pointer-events-none hidden lg:block"
            width="700"
            height="500"
            viewBox="0 0 700 500"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10" fill="rgba(255,255,255,0.4)" />
              </marker>
            </defs>

            {/* Start X = inner circle intersection */}
            <line x1="400" y1="90"  x2={arrowEndX - 45} y2="90"
              stroke="#3b4357" strokeWidth="1" markerEnd="url(#arrow)" />

            <line x1="465" y1="200" x2={arrowEndX - 45} y2="200"
              stroke="#3b4357" strokeWidth="1" markerEnd="url(#arrow)" />

            <line x1="463" y1="305" x2={arrowEndX - 45} y2="305"
              stroke="#3b4357" strokeWidth="1" markerEnd="url(#arrow)" /> 

            <line x1="400" y1="410" x2={arrowEndX - 45} y2="410"
              stroke="#3b4357" strokeWidth="1" markerEnd="url(#arrow)" />
          </svg>
        </div>

        {/* CARDS */}
        <div ref={cardsRef} className="flex flex-col gap-3 sm:gap-4 w-full max-w-lg lg:max-w-none">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="bg-[rgba(73,109,171,0.12)] border border-[rgba(255,255,255,0.18)] px-8 sm:px-6 lg:px-12 py-2 sm:py-3 rounded-md  w-full min-h-[80px] sm:min-h-[90px] flex flex-col justify-center"
            >
              <p className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 leading-tight">
                {s.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
