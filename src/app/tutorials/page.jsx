'use client';

import { useEffect } from 'react';
import TutorialsPage from '../../pages/Company/Tutorials';

export default function TutorialsPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <TutorialsPage />;
}

