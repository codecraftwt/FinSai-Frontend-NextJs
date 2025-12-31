'use client';

import { useEffect } from 'react';
import RewardsPromotion from '../../pages/LearnGrow/Rewards-promotion';

export default function RewardsPromotionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RewardsPromotion />;
}

