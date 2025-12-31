'use client';

import { useEffect } from 'react';
import Glossary from '../../pages/LearnGrow/Glossary';

export default function GlossaryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Glossary />;
}

