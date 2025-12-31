'use client';

import { useEffect } from 'react';
import Editorpage from '../../pages/EditorPage';

export default function HomepageEditorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Editorpage />;
}

