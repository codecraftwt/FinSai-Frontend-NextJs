'use client';

import { useEffect } from 'react';
import TestimonialsPage from '../../pages/Company/Testimonials';

export default function TestimonialsPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <TestimonialsPage />;
}

