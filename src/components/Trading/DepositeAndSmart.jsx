import { Check } from "lucide-react";
import React from "react";

const DepositeAndSmart = ({
  heading,
  description,
  subdescription,
  textAlign = "center",
  maxWidth = "4xl",
  headingWidth,
  descWidth,
  className = "",
  button = null,
  features = [],
}) => {
  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  const textAlignClass =
    textAlign === "center"
      ? "text-center"
      : textAlign === "left"
      ? "text-left"
      : "text-right";

  const getAlignmentClasses = (widthProp) => {
    if (!widthProp) return "";
    if (textAlign === "center") return "mx-auto";
    if (textAlign === "right") return "ml-auto";
    return "";
  };

  return (
    <section
      className={`bg-transparent py-4 sm:py-12 lg:py-5 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        <div className={`${textAlignClass} mb-1 sm:mb-4 mt-5 md:mt-5 lg:mt-2`}>
          {/* Heading */}
          {heading && (
            <h2
              className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 ${
                headingWidth
                  ? `${maxWidthClasses[headingWidth]} ${getAlignmentClasses(
                      headingWidth
                    )}`
                  : ""
              }`}
            >
              {heading}
            </h2>
          )}

          {/* Divider under heading */}
          {heading && (
            <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-10 mx-auto">
              <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
            </div>
          )}

          {/* Description */}
          {description && (
            <p
              className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed ${
                descWidth
                  ? `${maxWidthClasses[descWidth]} ${getAlignmentClasses(
                      descWidth
                    )}`
                  : ""
              }`}
            >
              {description}
            </p>
          )}

          {/* ================= FEATURES ================= */}
          {features.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-stretch">
              {features.map((feature, index) => {
                const isLastLeftColumn =
                  index % 2 === 0 &&
                  index >=
                    features.length - (features.length % 2 === 0 ? 2 : 1);

                const isLastRightColumn =
                  index % 2 === 1 && index >= features.length - 1;

                const hideDivider = isLastLeftColumn || isLastRightColumn;

                return (
                  <div key={index} className="flex flex-col h-full">
                    {/* Feature Content */}
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffffff]/5 border border-[#ffffff]/15 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider (column-aware) */}
                    {!hideDivider && (
                      <div className="mt-auto pt-6">
                        <div className="w-full h-[1px] bg-gray-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Sub Description */}
          {subdescription && (
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-10">
              {subdescription}
            </p>
          )}

          {/* Button */}
          {button && (
            <div className="mt-6">
              <button
                onClick={button.onClick}
                className={`px-6 py-3 bg-[#496DAB] hover:bg-[#3a5a9a] text-white font-semibold rounded-lg transition-colors duration-200 ${
                  button.className || ""
                }`}
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

export default DepositeAndSmart;
