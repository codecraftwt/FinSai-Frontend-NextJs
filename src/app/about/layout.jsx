import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/about');

export default function AboutLayout({ children }) {
  return children;
}

