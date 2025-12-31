'use client';

import { useEffect } from 'react';
import ContactSupportPage from '../../pages/Company/ContactSupport';

export default function ContactSupportPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContactSupportPage />;
}

