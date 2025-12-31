'use client';

import { useEffect } from 'react';
import ForexPage from '../../pages/Market/ForexPage';

export default function ForexPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ForexPage />;
}

