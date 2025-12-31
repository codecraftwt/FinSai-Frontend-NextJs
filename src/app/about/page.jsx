'use client';

import { useEffect } from 'react';
import AboutPage from '../../pages/Company/About';

export default function AboutPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AboutPage />;
}

