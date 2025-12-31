'use client';

import { useEffect } from 'react';
import SingleBlog from '../../pages/LearnGrow/SingleBlog';

export default function SingleBlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SingleBlog />;
}

