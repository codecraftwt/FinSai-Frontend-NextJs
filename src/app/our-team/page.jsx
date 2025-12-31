'use client';

import { useEffect } from 'react';
import OurTeamPage from '../../pages/Company/OurTeam';

export default function OurTeamPageRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <OurTeamPage />;
}

