import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/crypto');

export default function CryptoLayout({ children }) {
  return children;
}

