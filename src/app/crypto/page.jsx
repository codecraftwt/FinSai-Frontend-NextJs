'use client';

import { useEffect } from 'react';
import CryptoPage from '../../pages/Market/CryptoPage';

export default function CryptoPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CryptoPage />;
}

