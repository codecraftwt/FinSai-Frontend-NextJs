import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/blogs');

export default function BlogsLayout({ children }) {
  return children;
}

