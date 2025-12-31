import React from "react";

const WhyChooseSection = ({
  heading = "",
  items = [],
  showButton = false,
  buttonText = "Learn More",
  className = "",
  maxHeadingWidth ,
}) => {
  return (
    <section
      className={`w-full bg-transparent py-14 sm:py-10 lg:py-6 mb-12 px-4 sm:px-6 ${className}`}
    >
        <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold text-white mx-auto text-center ${maxHeadingWidth}`}>
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full bg-gradient-to-b from-[#496DAB] from-[30%] to-[#1F9FB2]
                p-6 sm:p-7 flex flex-col items-start ${
                  showButton ? "justify-between" : "justify-center"
                } sm:w-[357px] lg:w-[300px] xl:w-[357px] ${
                  showButton ? "h-auto min-h-[250px]" : "h-[250px]"
                } rounded-tr-[80px]
                ${item.cardClass || ""}`}
              >
                <div className="w-full flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 flex justify-center">
                    {item.iconComponent ? (
                      <item.iconComponent className="w-20 h-20 text-white" />
                    ) : item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-20 h-20 object-contain"
                      />
                    ) : null}
                  </div>

                  <p className="text-sm sm:text-base font-semibold tracking-wide text-white text-center">
                    {item.title}
                  </p>
                </div>

                {showButton && (
                  <div className="mt-4 w-full flex justify-center">
                    <button
                      onClick={item.onButtonClick}
                      className="px-6 py-3 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 hover:shadow-lg transition-all duration-300"
                    >
                      {item.buttonText || buttonText}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
