import React from 'react';
import assets from '../../assets/assets.jsx';

const ToolsGrid = ({
  title,
  laptopImage = assets.Laptop,
  laptopAlt = "Trading Platform",
  overlayImage,
  overlayAlt = "Overlay Image",
  gridItems = [],
  columns = 1,
  className = "",
  titleClassName = "",
  lineClassName = "",
  laptopContainerClassName = "",
  laptopImageClassName = "",
  gridContainerClassName = "",
  gridItemClassName = "",
  gridItemTitleClassName = "",
  gridItemDescriptionClassName = ""
}) => {
  const getGridCols = () => {
    if (columns === 1) return "grid-cols-1";
    if (columns === 2) return "grid-cols-1 md:grid-cols-2";
    if (columns === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1";
  };

  const getItemAlignment = () => {
    if (columns === 1) return "text-center mx-auto max-w-md";
    if (columns === 2) return "text-center md:text-left";
    if (columns === 3) return "text-center md:text-left";
    return "text-center";
  };

  return (
    <section className={`bg-transparent py-8 md:py-10 lg:pb-10  relative ${className}`} >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 md:mb-6 lg:mb-8 px-2 ${titleClassName}`}>
              {title}
              {console.log('Final title className:', `text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 md:mb-6 lg:mb-8 px-2 ${titleClassName}`)}
            </h2>
          </>
        )}

        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center">
            <div className={`w-full md:w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-0 overflow-hidden ${laptopContainerClassName}`}>
              <img
                src={laptopImage}
                alt={laptopAlt}
                className={`w-full h-auto rounded-lg  ${laptopImageClassName}`}
              />
              <div className="absolute
                              top-[46%] sm:top-[39%] md:top-[45%]
                              left-[51%] sm:left-[51%] md:left-[50.5%] lg:left-[51%]
                              -translate-x-1/2 -translate-y-1/2
                              w-[64%] md:w-[65%] lg:w-[70%]
                              aspect-[475/310]">
                {overlayImage ? (
                  <img
                    src={overlayImage}
                    alt={overlayAlt}
                    className="w-full h-full object-cover rounded-sm"
                  />
                ) : (
                  <div className="w-full h-full bg-[#496DAB] flex flex-col items-center justify-center rounded-sm">
                    <div className="text-center">
                      <p className="text-white text-sm md:text-base font-medium">
                        Please add image here
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {gridItems.length > 0 && (
          <div className={`grid ${getGridCols()} gap-6  ${gridContainerClassName}`}>
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start p-5  ${getItemAlignment()} ${gridItemClassName}`}
              >
                {item.title && (
                  <h3 className={`text-xl md:text-2xl font-bold text-center text-white mb-4 md:mb-6 flex-shrink-0 ${gridItemTitleClassName}`}>
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className={`text-sm md:text-base font-normal text-white text-center flex-1 leading-relaxed ${gridItemDescriptionClassName}`}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsGrid;
