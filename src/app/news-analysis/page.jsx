import { getRouteMetadata } from '@/lib/Metadata';
import ClientNewsAnalysisPage from './ClientNewsAnalysisPage';

export const metadata = getRouteMetadata('/news-analysis');

export default function NewsAnalysisPage() {
  return <ClientNewsAnalysisPage />;
}
