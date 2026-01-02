import { getRouteMetadata } from '@/lib/Metadata';
import ClientFinsaiCarePage from './ClientFinsaiCarePage';

export const metadata = getRouteMetadata('/finsai-care');

export default function FinsaiCarePage() {
  return <ClientFinsaiCarePage />;
}
