import { getRouteMetadata } from '@/lib/Metadata';
import ClientTutorialsPage from './ClientTutorialsPage';

export const metadata = getRouteMetadata('/tutorials');

export default function TutorialsPage() {
  return <ClientTutorialsPage />;
}
