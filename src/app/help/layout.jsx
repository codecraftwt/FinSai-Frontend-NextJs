import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/help');

export default function HelpLayout({ children }) {
  return children;
}

