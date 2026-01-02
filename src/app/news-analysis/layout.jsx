import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/news-analysis');

export default function NewsAnalysisLayout({ children }) {
  return children;
}

