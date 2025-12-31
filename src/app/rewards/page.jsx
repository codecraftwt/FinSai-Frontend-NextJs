'use client';

import { useEffect } from 'react';
import Rewards from '../../pages/LearnGrow/Rewards';

export default function RewardsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Rewards />;
}

