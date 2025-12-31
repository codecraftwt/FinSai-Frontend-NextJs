import { Plus , ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const defaultFaqData = [
  {
    id: 1,
    question: "How Can I Upgrade To Account Type?",
    answer: "You Can Upgrade Your Account By Contacting Our Customer Service Team. They Will Guide You Through The Process And Let You Know About Any Additional Requirements Or Documents Needed."
  },
  {
    id: 2,
    question: "Can I Have More Than One Account?",
    answer: "Yes, you can have multiple accounts with us. However, each account must be registered with unique credentials and comply with our terms of service."
  },
  {
    id: 3,
    question: "What Is Swap-Free Account?",
    answer: "A Swap-Free account is designed for traders who cannot earn or pay interest due to their religious beliefs. These accounts do not incur overnight swap charges on positions held past the market close."
  }
];

const FAQTabs = ({
  title = "FREQUENTLY ASKED QUESTIONS",
  faqData = defaultFaqData,
  viewAllText = "View All FAQ's",
  viewAllLink = "#",
  onViewAll = null,
  allowMultipleOpen = false,
  className = "",
  showViewAllButton,
  initialOpenId = 1,
  titleAlign = "center"
}) => {
  const [openItems, setOpenItems] = useState(
    initialOpenId ? [initialOpenId] : []
  );

  const toggleItem = (id) => {
    if (allowMultipleOpen) {
      setOpenItems((prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(id) ? [] : [id]
      );
    }
  };

  const isOpen = (id) => openItems.includes(id);

  const handleViewAllClick = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .faq-section {
          position: relative;
          background: transparent;
          width: 100%;
          overflow: hidden;
        }

        .faq-container {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        .faq-item-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
          transition: all 300ms ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .faq-item-wrapper.open {
          border-color: rgba(73, 109, 171, 0.4);
          justify-content: flex-start;
        }

        @media (min-width: 320px) and (max-width: 424px) {
          .faq-section { padding: 1rem 1rem; }
          .faq-container { max-width: 100%; }
          .faq-item-wrapper { min-height: 70px; margin-bottom: 0.75rem; }
        }

        @media (min-width: 425px) and (max-width: 767px) {
          .faq-section { padding: 1.5rem 1.25rem; }
          .faq-container { max-width: 95%; }
          .faq-item-wrapper { min-height: 80px; margin-bottom: 0.875rem; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .faq-section { padding: 2rem 1.5rem; }
          .faq-container { max-width: 90%; }
          .faq-item-wrapper { min-height: 90px; margin-bottom: 1rem; }
        }

        @media (min-width: 1024px) and (max-width: 1439px) {
          .faq-section { padding: 2.5rem 2rem; }
          .faq-container { max-width: 996px; }
          .faq-item-wrapper { min-height: 112px; margin-bottom: 1.125rem; }
        }

        /* Large Desktop: 1440px and above */
        @media (min-width: 1440px) {
          .faq-section { padding: 3rem 2.5rem; }
          .faq-container { max-width: 996px; }
          .faq-item-wrapper { min-height: 100px; margin-bottom: 1.25rem; }
        }
      `,
        }}
      />

      <section className={`faq-section ${className}`}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(73, 109, 171, 0.05) 0%, transparent 70%)'
          }}
        />

        <div className="faq-container">
        {title && (
          <div className={`text-${titleAlign} mb-3 sm:mb-4 md:mb-5`}>
            <h2 className="text-white text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-[26px] font-semibold uppercase">
              {title}
            </h2>
          </div>
        )}

        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <div
              key={item.id || index}
              className={`faq-item-wrapper ${isOpen(item.id || index + 1) ? 'open' : ''}`}
            >
              <button
                onClick={() => toggleItem(item.id || index + 1)}
                className="w-full flex items-center justify-between px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 cursor-pointer group"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <Plus size={18} className='xs:w-[20px] xs:h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] text-[#A0EAF5] flex-shrink-0'/>
                  <span className="text-white flex-1 text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[22px] font-medium text-left break-words">
                    {item.question}
                  </span>
                </div>

                <ChevronDown 
                  size={18}
                  className={`xs:w-[20px] xs:h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] text-[#A0EAF5] transition-transform duration-300 ease-in-out flex-shrink-0 ml-2 ${
                    isOpen(item.id || index + 1) ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen(item.id || index + 1) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-3.5 md:pb-4 pl-8 xs:pl-10 sm:pl-12 md:pl-14 lg:pl-16">
                  <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-[0.95rem] xl:text-[1rem] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="flex justify-center mt-6 sm:mt-7 md:mt-8 lg:mt-10">
            {onViewAll ? (
              <button
                onClick={handleViewAllClick}
                className="
                  bg-[#1e3a5f] 
                  hover:bg-[#2a4a73]
                  text-white 
                  text-xs xs:text-sm sm:text-base md:text-lg lg:text-base
                  font-medium
                  px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8
                  py-2 xs:py-2.5 sm:py-3 md:py-3
                  rounded-md
                  border border-[rgba(73,109,171,0.3)]
                  transition-all duration-300
                  hover:border-[rgba(73,109,171,0.5)]
                "
              >
                {viewAllText}
              </button>
            ) : (
              <a
                href={viewAllLink}
                className="
                  bg-[#1e3a5f] 
                  hover:bg-[#2a4a73]
                  text-white 
                  text-xs xs:text-sm sm:text-base md:text-lg lg:text-base
                  font-medium
                  px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8
                  py-2 xs:py-2.5 sm:py-3 md:py-3
                  rounded-md
                  border border-[rgba(73,109,171,0.3)]
                  transition-all duration-300
                  hover:border-[rgba(73,109,171,0.5)]
                  inline-block
                "
              >
                {viewAllText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default FAQTabs;

