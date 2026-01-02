import { getRouteMetadata } from '@/lib/Metadata';
import ClientOurTeamPage from './ClientOurTeamPage';

export const metadata = getRouteMetadata('/our-team');

export default function OurTeamPage() {
  return <ClientOurTeamPage />;
}