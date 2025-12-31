'use client';

import { useEffect } from 'react';
import WebinarsPage from '../../pages/LearnGrow/WebinarsPage';

export default function WebinarsPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <WebinarsPage />;
}

