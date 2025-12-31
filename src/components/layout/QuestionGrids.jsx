import React from 'react';

const QuestionGrids = ({
  title ,
  description,
  features = [],
  columns = 3,
  maxWidthTitle = "max-w-4xl",
  maxWidthDescription = "max-w-8xl",
  maxWidthFeatureTitle = "",
  maxWidthFeatureDescription = "",
  classNames = {},
  titleSize = "text-3xl md:text-4xl lg:text-5xl",
  titleColor = "text-white",
  descriptionSize = "text-lg",
  descriptionColor = "text-white",
  featureTitleSize = "text-xl md:text-[22px]",
  featureTitleColor = "text-white",
  featureDescriptionColor = "text-gray-300"
}) => {

  const defaultFeatures = [
    {
      id: 1,
      title: 'EXPERT MENTORS WITH INDUSTRY EXPERIENCE',
      description: 'Learn From Seasoned Professionals Who Have Navigated The Markets For Years',
      icon: 'Icon1'
    },
    {
      id: 2,
      title: 'PRACTICAL LEARNING WITH REAL MARKET INSIGHTS',
      description: 'Apply Your Knowledge With Live Examples, Case Studies, And Real-Time Market Analysis',
      icon: 'Icon2'
    },
    {
      id: 3,
      title: 'FLEXIBLE FORMATS: EBOOKS, COURSES, AND COACHING',
      description: 'Choose How You Want To Learn—Self-Paced Ebooks, Video Courses, Or Personal Coaching',
      icon: 'Icon2'
    }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  const itemWidths = {
    1: 'lg:w-full',
    2: 'lg:w-1/2',
    3: 'lg:w-1/3',
    4: 'lg:w-1/4',
  };

  return (
    <section className="relative py-16 md:py-12 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto text-white">
        <div className="text-center mb-10 flex flex-col items-center">
          {title && (
            <>
              <h2 className={`${classNames.title || `${titleSize} font-bold`} mb-6 ${titleColor} ${maxWidthTitle} text-center`}>
                {title}
              </h2>
              <div className="relative w-[100px] h-[2px] bg-[#496DAB] rounded-md my-6">
                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45"></div>
              </div>
            </>
          )}
          {description && (
            <p className={`${classNames.description || `${descriptionSize} ${descriptionColor}`} ${maxWidthDescription} text-center`}>
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center mx-10">
          {displayFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`p-4 w-full md:w-1/2 ${itemWidths[columns]} flex flex-col`}
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {feature.iconComponent ? (
                  <feature.iconComponent className={classNames.iconComponent || "w-[100px] h-[100px]"} />
                ) : feature.icon ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className={classNames.icon || "w-20 h-20"}
                  />
                ) : null}
              </div>
              <h3 className={`${classNames.featureTitle || `${featureTitleSize} font-semibold`} mb-4 uppercase text-center mx-auto ${maxWidthFeatureTitle} ${featureTitleColor}`}>
                {feature.title}
              </h3>
              <p className={`${featureDescriptionColor} leading-relaxed text-center mx-auto ${maxWidthFeatureDescription} ${classNames.featureDescription || ""}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionGrids;
