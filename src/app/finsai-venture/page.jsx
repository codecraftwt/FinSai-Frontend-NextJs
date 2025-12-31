'use client';

import { useEffect } from 'react';
import FinsaiVenture from '../../pages/Ecosystem/FinsaiVenture';

export default function FinsaiVenturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FinsaiVenture />;
}

