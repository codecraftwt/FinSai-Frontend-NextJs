'use client';

import { useEffect } from 'react';
import Accounts from '../../pages/Trading/Accounts';

export default function AccountsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Accounts />;
}

