import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/worldstocks');

export default function WorldStocksLayout({ children }) {
  return children;
}

