import React from 'react';

const BlogsDescCard = ({ item }) => {
  if (!item) return null;

  return (
    <section className="relative py-8 px-4 md:px-8 lg:px-5 bg-transparent">
      <div className="w-full">
        <div className="w-full">
          <div className="bg-transparent backdrop-blur-sm border border-white/15 rounded-[15px] overflow-hidden hover:border-white/50 transition-all duration-300 flex flex-col">
            {/* Image */}
            <div className="relative p-6 bg-[#496DAB]/10">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 bg-[#496DAB]/8 flex flex-col flex-grow">
              <span className="text-sm text-white mb-3 uppercase tracking-wide">
                {item.format}
              </span>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>

              <div className="flex-grow mb-6">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Read More Link - Hidden on sm and larger screens */}
              <div className="mt-auto block sm:hidden">
                <a
                  href={item.href || '#'}
                  className="inline-flex items-center gap-2 text-[#496DAB] border-b border-[#496DAB] font-medium hover:text-[#A0EAF5] hover:border-[#A0EAF5] transition-all duration-300"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDescCard;
