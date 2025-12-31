import React, { useState } from 'react';
import { InputField, TextField, ButtonField } from './Form';

// Reusable Comments Section Component
const CommentsSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      const newComment = {
        name: formData.name,
        avatar: 'https://via.placeholder.com/50',
        text: formData.comment
      };
      setComments([...comments, newComment]);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div style={styles.container}>
      {/* Comments List */}
      <div style={styles.commentsSection}>
        <h2 style={styles.heading}>Comments</h2>
        <div style={styles.commentsList}>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              avatar={comment.avatar}
              name={comment.name}
              text={comment.text}
            />
          ))}
        </div>
      </div>

      {/* Post Comment Form */}
      <div style={styles.formSection}>
        <h2 style={styles.heading}>Post A Comment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <TextField
            name="comment"
            placeholder="Write A Comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            required
          />
          <div className="pt-4 flex justify-center">
            <ButtonField type="submit" variant="primary" className="w-[500px]">
              Submit Comment
            </ButtonField>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable Comment Component
const Comment = ({ avatar, name, text }) => {
  return (
    <div style={styles.comment}>
      <img src={avatar} alt={name} style={styles.avatar} />
      <div style={styles.commentContent}>
        <h4 style={styles.commentName}>{name}</h4>
        <p style={styles.commentText}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    padding: '40px',
    maxWidth: '720px',
    margin: '0 auto',
    borderRadius: '4px',
  },
  commentsSection: {
    marginBottom: '50px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: 0,
  },
  commentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  comment: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  avatar: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0,
  },
  commentContent: {
    flex: 1,
  },
  commentName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    marginTop: 0,
  },
  commentText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'white',
    margin: 0,
  },
  formSection: {
    marginTop: '50px',
  },
};

export default CommentsSection;
