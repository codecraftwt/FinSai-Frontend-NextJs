'use client';

import { useEffect } from 'react';
import IndicesPage from '../../pages/Market/IndicesPage';

export default function IndicesPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <IndicesPage />;
}

