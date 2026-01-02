import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/metals');

export default function MetalsLayout({ children }) {
  return children;
}

