'use client';

import { useEffect } from 'react';
import PreviewPage from '../../pages/PreviewPage';

export default function PreviewPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PreviewPage />;
}

