import React from 'react';

const FeaturedInsights = ({ items = [] }) => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Insights
          </h2>
           <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 mx-auto">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#496DAB]/10 backdrop-blur-sm border border-white/20 rounded-[15px] p-4 lg:p-6  md:pt-10 hover:border-[#4A6DFF]/20 transition-all duration-300 w-full md:w-[210px] lg:w-[300px] h-full xl:w-[400px] lg:h-[300px] flex flex-col "
            >
              <span className="text-xs text-white mb-3 block">
                {item.time}
              </span>

              <h3 className=" text-base lg:text-lg font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm  text-white leading-relaxed">
                {item.description}{' '}
                <a
                  href={item.href || '#'}
                  className="text-[#496DAB] border-b border-[#496DAB] font-medium hover:text-[#496DAB]/60 transition-all duration-300"
                >
                  Read More
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
