'use client';

import { useEffect } from 'react';
import Blogs from '../../pages/LearnGrow/Blogs';

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Blogs />;
}

