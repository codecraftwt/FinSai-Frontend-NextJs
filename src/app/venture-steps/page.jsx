'use client';

import { useEffect } from 'react';
import VentureSteps from '../../components/layout/VentureSteps';

export default function VentureStepsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <VentureSteps />;
}

