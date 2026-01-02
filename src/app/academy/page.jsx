import { getRouteMetadata } from '@/lib/Metadata';
import ClientAcademyPage from './ClientAcademyPage';

export const metadata = getRouteMetadata('/academy');

export default function AcademyPage() {
  return <ClientAcademyPage />;
}
