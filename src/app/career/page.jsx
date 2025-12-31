'use client';

import { useEffect } from 'react';
import CareerPage from '../../pages/Company/Career';

export default function CareerPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CareerPage />;
}

