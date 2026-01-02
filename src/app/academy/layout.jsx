import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/academy');

export default function AcademyLayout({ children }) {
  return children;
}

