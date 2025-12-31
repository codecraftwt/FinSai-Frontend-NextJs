'use client';

import { useEffect } from 'react';
import Tools from '../../pages/Trading/Tools';

export default function ToolsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Tools />;
}

