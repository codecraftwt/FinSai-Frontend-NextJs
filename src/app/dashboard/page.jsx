'use client';

import { useEffect } from 'react';
import Dashboard from '../../pages/Dashboard';

export default function DashboardPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Dashboard />;
}

