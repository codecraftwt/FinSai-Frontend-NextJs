import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/learn-grow');

export default function LearnGrowLayout({ children }) {
  return children;
}

