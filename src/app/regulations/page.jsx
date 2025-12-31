'use client';

import { useEffect } from 'react';
import RegulationsPage from '../../pages/Company/Regulations';

export default function RegulationsPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RegulationsPage />;
}

