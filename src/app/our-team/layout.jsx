import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/our-team');

export default function OurTeamLayout({ children }) {
  return children;
}

