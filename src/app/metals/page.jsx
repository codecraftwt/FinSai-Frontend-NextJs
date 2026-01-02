import { getRouteMetadata } from '@/lib/Metadata';
import ClientMetalsPage from './ClientMetalsPage';

export const metadata = getRouteMetadata('/metals');

export default function MetalsPage() {
  return <ClientMetalsPage />;
}
