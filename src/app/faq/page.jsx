'use client';

import { useEffect } from 'react';
import FAQPage from '../../pages/Company/FAQ';

export default function FAQPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FAQPage />;
}

