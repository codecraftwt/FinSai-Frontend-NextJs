'use client';

import { useEffect } from 'react';
import MetalsPage from '../../pages/Market/MetalsPage';

export default function MetalsPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <MetalsPage />;
}

