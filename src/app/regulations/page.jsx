import { getRouteMetadata } from '@/lib/Metadata';
import ClientRegulationsPage from './ClientRegulationsPage';

export const metadata = getRouteMetadata('/regulations');

export default function RegulationsPage() {
  return <ClientRegulationsPage />;
}