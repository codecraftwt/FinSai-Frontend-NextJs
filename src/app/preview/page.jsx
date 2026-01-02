import { getRouteMetadata } from '@/lib/Metadata';
import ClientPreviewPage from './ClientPreviewPage';

export const metadata = getRouteMetadata('/preview');

export default function PreviewPage() {
  return <ClientPreviewPage />;
}
