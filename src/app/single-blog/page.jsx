import { getRouteMetadata } from '@/lib/Metadata';
import ClientSingleBlogPage from './ClientSingleBlogPage';

export const metadata = getRouteMetadata('/single-blog');

export default function SingleBlogPage() {
  return <ClientSingleBlogPage />;
}
