'use client';

import { useEffect } from 'react';
import WorldStocksPage from '../../pages/Market/WorldStocksPage';

export default function WorldStocksPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <WorldStocksPage />;
}

