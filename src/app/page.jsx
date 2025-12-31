'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Demo from '../pages/demo';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Demo />;
}

