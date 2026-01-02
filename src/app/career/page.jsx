import { getRouteMetadata } from '@/lib/Metadata';
import ClientCareerPage from './ClientCareerPage';

export const metadata = getRouteMetadata('/career');

export default function CareerPage() {
  return <ClientCareerPage />;
}
