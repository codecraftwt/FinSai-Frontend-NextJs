import React from 'react';

const BlogsCard = ({ items = [], buttonText, buttonType = "button" }) => {
  return (
    <section className="relative py-16 md:py-12 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a2e]/60 xl:w-[420px] xl:h-[500px] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#A0EAF5]/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative p-4 bg-[#496DAB]/10">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#496DAB]/8 flex flex-col flex-grow">
                <span className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
                  {item.format}
                </span>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <div className="flex-grow">
                  <p className="text-white text-[16px] leading-relaxed">
                    {item.description}{' '}
                    {buttonType === 'link' && (
                      <a
                        href={item.href || '#'}
                        className="text-[#496DAB] border-b border-[#496DAB] font-medium  inline-flex items-center gap-1"
                      >
                        Read More
                      </a>
                    )}
                  </p>
                </div>

                {buttonType === 'button' && item.buttonText && (
                  <div className="mt-auto pt-4">
                    <button className="w-full max-w-[196px] h-[49px] bg-[#496DAB] text-white font-semibold rounded-[4px] hover:bg-[#496DAB]/90 transition-all duration-300 mx-auto block">
                      {item.buttonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        {buttonText && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 transition-all duration-300">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsCard;
