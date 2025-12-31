'use client';

import { useEffect } from 'react';
import RewardsIbprogram from '../../pages/LearnGrow/Rewards-Ibprogram';

export default function RewardsIbprogramPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RewardsIbprogram />;
}

