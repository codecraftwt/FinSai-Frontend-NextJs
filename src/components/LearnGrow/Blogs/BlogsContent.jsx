import React from 'react';

const BlogsContent = ({
  title,
  introText,
  listItems = [],
  conclusionText
}) => {
  return (
    <div className="content-box p-6 md:p-8 bg-transparent ">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
        {title}
      </h2>

      {/* Introduction Paragraph */}
      <p className="text-white text-sm md:text-base  leading-relaxed mb-6">
        {introText}
      </p>

      {/* Bullet Points List */}
      {listItems.length > 0 && (
        <ul className="space-y-3 mb-6">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-white text-sm md:text-base  leading-relaxed flex items-start gap-3"
            >
              <span className="text-white text-2xl mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Conclusion Paragraph */}
      {conclusionText && (
        <p className="text-white text-sm md:text-base  leading-relaxed">
          {conclusionText}
        </p>
      )}
    </div>
  );
};

export default BlogsContent;
