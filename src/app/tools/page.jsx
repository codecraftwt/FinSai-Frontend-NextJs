import { getRouteMetadata } from '@/lib/Metadata';
import ClientToolsPage from './ClientToolsPage';

export const metadata = getRouteMetadata('/tools');

export default function ToolsPage() {
  return <ClientToolsPage />;
}
