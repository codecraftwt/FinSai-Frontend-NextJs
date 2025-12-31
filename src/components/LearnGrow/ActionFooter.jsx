import React from 'react';

const ActionFooter = ({
  header,
  showDivider = false,
  title = "Dive into the dynamic world of trading with our comprehensive courses. As a token of achievement, upon successfully completing any course and passing the final exam, we reward you with a special trading bonus. It's more than learning - it's about getting a jump start into your trading future with us.",
  buttonText = "Start Your Trading Journey With Finsai Academy Today",
  buttonClassName = "",
  secondButtonText,
  secondButtonClassName = "",
  imageSrc,
  imageAlt = "Trading Meeting",
  backgroundColor = "bg-[#0B152A]/100",
  className = "",
  fontSize = "text-xl"
}) => {
  return (
    <section className={`relative py-8 md:py-10 px-4 md:px-8 lg:px-16  ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center sm:text-left flex flex-col items-center sm:items-start">
            {header && (
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white mb-6">
                {header}
              </h2>
            )}
            {showDivider && (
              <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md  my-6 mx-auto md:ml-2">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
              </div>
            )}
            <p className={`text-xl text-white font-medium mb-8 leading-relaxed ${fontSize}`}>
              {title}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className={`px-3 py-3 bg-[#496DAB] text-white text-[14px] font-semibold rounded-lg hover:shadow-lg hover:bg-[#496DAB]/80 transition-all duration-300 ${buttonClassName}`}>
                {buttonText}
              </button>
              {secondButtonText && (
                <button className={`px-3 py-3 bg-[#496DAB] text-white text-[14px] font-semibold rounded-lg hover:shadow-lg hover:bg-[#496DAB]/80 transition-all duration-300 ${secondButtonClassName}`}>
                  {secondButtonText}
                </button>
              )}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center order-1 lg:order-2">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full max-w-lg h-auto object-contain rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionFooter;
