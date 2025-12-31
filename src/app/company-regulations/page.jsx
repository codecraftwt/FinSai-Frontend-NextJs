'use client';

import { useEffect } from 'react';
import CompanyRegulations from '../../pages/Company/Company-Regulations';

export default function CompanyRegulationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CompanyRegulations />;
}

