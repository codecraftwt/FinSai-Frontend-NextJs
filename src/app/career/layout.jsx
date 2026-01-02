import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/career');

export default function CareerLayout({ children }) {
  return children;
}

