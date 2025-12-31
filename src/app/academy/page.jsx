'use client';

import { useEffect } from 'react';
import AcademyPage from '../../pages/LearnGrow/AcademyPage';

export default function AcademyPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AcademyPage />;
}

