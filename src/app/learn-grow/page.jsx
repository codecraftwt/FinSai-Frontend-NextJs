import { getRouteMetadata } from '@/lib/Metadata';
import ClientLearnGrowPage from './ClientLearnGrowPage';

export const metadata = getRouteMetadata('/learn-grow');

export default function LearnGrowPage() {
  return <ClientLearnGrowPage />;
}

