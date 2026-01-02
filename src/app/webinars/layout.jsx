import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/webinars');

export default function WebinarsLayout({ children }) {
  return children;
}

