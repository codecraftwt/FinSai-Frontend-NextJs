import React from 'react';

// Reusable BlogList Component
const BlogList = ({ title, blogs }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.blogList}>
        {blogs.map((blog, index) => (
          <BlogItem key={index} title={blog.title} />
        ))}
      </div>
      <button style={styles.expandButton}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
};

// Reusable BlogItem Component
const BlogItem = ({ title }) => {
  return (
    <div style={styles.blogItem}>
      <p style={styles.blogTitle}>{title}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(73, 109, 171, 0.08)',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: 0,
  },
  blogList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  blogItem: {
    padding: '14px 16px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    cursor: 'pointer',
    backgroundColor: 'rgba(73, 109, 171, 0.10)',
    transition: 'background-color 0.2s',
    borderRadius: '4px',
  },
  blogTitle: {
    margin: 0,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#8b96a5',
  },
  expandButton: {
    width: '100%',
    padding: '12px',
    marginTop: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6b7d99',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default BlogList;
