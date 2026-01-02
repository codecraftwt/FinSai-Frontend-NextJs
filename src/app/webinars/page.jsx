import { getRouteMetadata } from '@/lib/Metadata';
import ClientWebinarsPage from './ClientWebinarsPage';

export const metadata = getRouteMetadata('/webinars');

export default function WebinarsPage() {
  return <ClientWebinarsPage />;
}
