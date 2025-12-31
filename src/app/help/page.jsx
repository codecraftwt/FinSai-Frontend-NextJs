'use client';

import { useEffect } from 'react';
import HelpCenter from '../../pages/HelpCenter';

export default function HelpPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <HelpCenter />;
}

