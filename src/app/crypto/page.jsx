import { getRouteMetadata } from '@/lib/Metadata';
import ClientCryptoPage from './ClientCryptoPage';

export const metadata = getRouteMetadata('/crypto');

export default function CryptoPage() {
  return <ClientCryptoPage />;
}
