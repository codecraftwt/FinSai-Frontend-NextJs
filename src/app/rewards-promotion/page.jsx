import { getRouteMetadata } from '@/lib/Metadata';
import ClientRewardsPromotionPage from './ClientRewardsPromotionPage';

export const metadata = getRouteMetadata('/rewards-promotion');

export default function RewardsPromotionPage() {
  return <ClientRewardsPromotionPage />;
}
