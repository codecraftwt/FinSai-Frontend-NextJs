import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/platforms');

export default function PlatformsLayout({ children }) {
  return children;
}

