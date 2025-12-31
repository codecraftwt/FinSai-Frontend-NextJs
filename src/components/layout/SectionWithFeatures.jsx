import React from 'react';
import { Check } from 'lucide-react';

const SectionWithFeatures = ({
  // Heading section props
  heading,
  subheading,
  description,
  textAlign = "center",
  className = "",
  button = null,
  features = [],
  sectionFooter = null,

  // Custom className props
  headerClass = "",
  subheaderClass = "",
  descClass = "",
  featuresClass = "",
  footerClass = "",
  headingClass = "",
  decorativeLineClass = "",
}) => {
  const textAlignClass = textAlign === "center" ? "text-center" : textAlign === "left" ? "text-left" : "text-right";

  return (
    <section className={`relative bg-transparent py-10 px-4 ${className}`}>
      <div className={`max-w-7xl mx-auto text-center`}>
        {/* Header Section */}
        <div className={`${textAlignClass} mb-1 sm:mb-4 mt-5 md:mt-5 lg:mt-2 ${headerClass}`}>
          {heading && (
            <h2 className={`text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 ${headingClass}`}>
              {heading}
            </h2>
          )}

          {heading && (
            <div className={`relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6 mx-auto ${decorativeLineClass}`}>
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#496DAB] rotate-45"></div>
            </div>
          )}

          {subheading && (
            <p className={`text-sm sm:text-base md:text-lg tracking-widest font-semibold text-white uppercase mb-4 ${subheaderClass}`}>
              {subheading}
            </p>
          )}

          {description && (
            <p className={`text-white text-sm sm:text-base font-normal  mx-auto mb-12 leading-relaxed ${descClass}`}>
              {description}
            </p>
          )}

          {button && (
            <div className="mt-6">
              <button
                className={`px-6 py-3 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-lg transition-colors duration-200 ${button.className || ''}`}
                onClick={button.onClick}
                {...(button.props || {})}
              >
                {button.text}
              </button>
            </div>
          )}
        </div>

        {/* Features Checklist */}
        {features && features.length > 0 && (
          <ul className={`flex flex-col gap-4 items-start max-w-3xl mx-auto md:pl-16 ${featuresClass}`}>
            {features.map((feature, index) => (
              <li
                key={feature.id || index}
                className="flex items-center gap-3 text-white text-sm md:text-base"
              >
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                  <Check size={18} className="text-white" />
                </div>
                <span className="uppercase tracking-wide font-semibold text-sm sm:text-base md:text-lg text-left">
                  {feature.title || feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Section Footer */}
        {sectionFooter && (
          <p className={`text-white text-sm sm:text-base font-normal mt-10 ${footerClass}`}>
            {sectionFooter}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionWithFeatures;
