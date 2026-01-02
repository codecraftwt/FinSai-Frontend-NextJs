import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/forex');

export default function ForexLayout({ children }) {
  return children;
}

