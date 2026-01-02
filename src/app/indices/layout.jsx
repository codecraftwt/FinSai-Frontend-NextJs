import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/indices');

export default function IndicesLayout({ children }) {
  return children;
}

