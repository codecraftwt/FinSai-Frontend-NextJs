'use client';

import { useEffect } from 'react';
import NewsAnalysis from '../../pages/LearnGrow/News&Analysis';

export default function NewsAnalysisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <NewsAnalysis />;
}

