import { getRouteMetadata } from '@/lib/Metadata';
import ClientWorldStocksPage from './ClientWorldStocksPage';

export const metadata = getRouteMetadata('/worldstocks');

export default function WorldStocksPage() {
  return <ClientWorldStocksPage />;
}
