import React from 'react';

const SectionHeading = ({
  heading,
  description,
  textAlign = "center",
  maxWidth = "4xl",
  headingWidth,
  descWidth,
  className = "",
  button = null
}) => {

  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "full": "max-w-full"
  };

  const textAlignClass = textAlign === "center" ? "text-center" : textAlign === "left" ? "text-left" : "text-right";

  const getAlignmentClasses = (widthProp) => {
    if (!widthProp) return '';
    if (textAlign === "center") return "mx-auto";
    if (textAlign === "right") return "ml-auto";
    return "";
  };

  return (
    <section className={`bg-transparent py-4 sm:py-12 lg:py-5 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        <div className={`${textAlignClass} mb-1 sm:mb-4 mt-5 md:mt-5 lg:mt-2 `}>
          {heading && (
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 ${headingWidth ? `${maxWidthClasses[headingWidth]} ${getAlignmentClasses(headingWidth)}` : ''}`}>
              {heading}
            </h2>
          )}
          
          {heading && (
            <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-10 mx-auto">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
            </div>
          )}
          
          {description && (
            <p className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed ${descWidth ? `${maxWidthClasses[descWidth]} ${getAlignmentClasses(descWidth)}` : ''}`}>
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
      </div>
    </section>
  );
};

export default SectionHeading;

