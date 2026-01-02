import { getRouteMetadata } from '@/lib/Metadata';
import ClientViewPage from './ClientViewPage';

export const metadata = getRouteMetadata('/view');

export default function ViewPage() {
  return <ClientViewPage />;
}
