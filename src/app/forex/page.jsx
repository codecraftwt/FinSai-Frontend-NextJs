import { getRouteMetadata } from '@/lib/Metadata';
import ClientForexPage from './ClientForexPage';

export const metadata = getRouteMetadata('/forex');

export default function ForexPage() {
  return <ClientForexPage />;
}
