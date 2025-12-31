'use client';

import { useEffect } from 'react';
import CompanyRegulationIndia from '../../pages/Company/Company-regulation-India';

export default function CompanyRegulationIndiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CompanyRegulationIndia />;
}

