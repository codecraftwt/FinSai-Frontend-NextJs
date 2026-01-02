import { getRouteMetadata } from '@/lib/Metadata';
import ClientPlatformsPage from './ClientPlatformsPage';

export const metadata = getRouteMetadata('/platforms');

export default function PlatformsPage() {
  return <ClientPlatformsPage />;
}
