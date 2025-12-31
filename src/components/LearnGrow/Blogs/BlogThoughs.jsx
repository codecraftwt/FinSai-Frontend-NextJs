import React from 'react';

const BlogThoughts = ({
  title,
  paragraphs = [],
  links = []
}) => {
  return (
    <div className="final-thoughts-box bg-transparent text-white p-6 md:p-8 w-full ">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-5 leading-tight">
        {title}
      </h2>

      {/* Paragraphs */}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-sm md:text-base leading-relaxed mb-4">
          {paragraph.split(' ').map((word, wordIndex) => {
            // Check if this word matches any link text
            const linkMatch = links.find(link => word.includes(link.text));
            if (linkMatch && word.includes(linkMatch.text)) {
              return (
                <React.Fragment key={wordIndex}>
                  {word.replace(linkMatch.text, '')}
                  <a
                    href={linkMatch.href}
                    className="text-[#4a9eff] underline hover:text-[#4a9eff]/80 transition-colors duration-200"
                  >
                    {linkMatch.text}
                  </a>
                  {' '}
                </React.Fragment>
              );
            }
            return word + ' ';
          })}
        </p>
      ))}
    </div>
  );
};

export default BlogThoughts;
