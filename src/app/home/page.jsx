'use client';

import { useEffect } from 'react';
import Demo from '../../pages/demo';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Demo />;
}

