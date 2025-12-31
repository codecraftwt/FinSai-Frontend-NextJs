'use client';

import { useEffect } from 'react';
import FinsaiCare from '../../pages/Ecosystem/FinsaiCare';

export default function FinsaiCarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FinsaiCare />;
}

