'use client';

import { useEffect } from 'react';
import Payment from '../../pages/Trading/Payment';

export default function PaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Payment />;
}

