import { getRouteMetadata } from '@/lib/Metadata';
import ClientDashboardPage from './ClientDashboardPage';

export const metadata = getRouteMetadata('/dashboard');

export default function DashboardPage() {
  return <ClientDashboardPage />;
}
