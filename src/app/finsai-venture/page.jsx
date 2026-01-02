import { getRouteMetadata } from '@/lib/Metadata';
import ClientFinsaiVenturePage from './ClientFinsaiVenturePage';

export const metadata = getRouteMetadata('/finsai-venture');

export default function FinsaiVenturePage() {
  return <ClientFinsaiVenturePage />;
}
