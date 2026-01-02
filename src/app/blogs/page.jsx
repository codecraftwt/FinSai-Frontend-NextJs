import { getRouteMetadata } from '@/lib/Metadata';
import ClientBlogsPage from './ClientBlogsPage';

export const metadata = getRouteMetadata('/blogs');

export default function BlogsPage() {
  return <ClientBlogsPage />;
}
