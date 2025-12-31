'use client';

import { useEffect } from 'react';
import RegulationSecurity from '../../pages/Company/RegulationSecurity';

export default function RegulationSecurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RegulationSecurity />;
}

