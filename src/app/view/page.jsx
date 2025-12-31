'use client';

import { useEffect } from 'react';
import Viewpage from '../../pages/Viewpage';

export default function ViewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Viewpage />;
}

