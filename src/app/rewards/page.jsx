import { getRouteMetadata } from '@/lib/Metadata';
import ClientRewardsPage from './ClientRewardsPage';

export const metadata = getRouteMetadata('/rewards');

export default function RewardsPage() {
  return <ClientRewardsPage />;
}
