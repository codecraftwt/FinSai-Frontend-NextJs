import { getRouteMetadata } from '@/lib/Metadata';
import ClientIndicesPage from './ClientIndicesPage';

export const metadata = getRouteMetadata('/indices');

export default function IndicesPage() {
  return <ClientIndicesPage />;
}
