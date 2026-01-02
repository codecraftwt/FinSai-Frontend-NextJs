import { getRouteMetadata } from '@/lib/Metadata';
import ClientRewardsIbprogramPage from './ClientRewardsIbprogramPage';

export const metadata = getRouteMetadata('/rewards-ibprogram');

export default function RewardsIbprogramPage() {
  return <ClientRewardsIbprogramPage />;
}
