import { getRouteMetadata } from '@/lib/Metadata';
import ClientHelpPage from './ClientHelpPage';

export const metadata = getRouteMetadata('/help');

export default function HelpPage() {
  return <ClientHelpPage />;
}
