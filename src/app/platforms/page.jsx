'use client';

import { useEffect } from 'react';
import Platforms from '../../pages/Trading/Platforms';

export default function PlatformsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Platforms />;
}

