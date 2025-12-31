import React from 'react';

const BlogsPoints = ({
  title,
  points = []
}) => {
  return (
    <div className="watch-box bg-transparent text-white p-6 md:p-8 w-full">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-5 leading-tight">
        {title}
      </h2>

      {/* Ordered List */}
      <ol className="text-sm md:text-base leading-relaxed space-y-3 list-decimal list-inside">
        {points.map((point, index) => (
          <li key={index} className="mb-3 pl-2">
            {point}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogsPoints;
