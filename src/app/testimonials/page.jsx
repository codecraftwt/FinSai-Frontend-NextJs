import { getRouteMetadata } from '@/lib/Metadata';
import ClientTestimonialsPage from './ClientTestimonialsPage';

export const metadata = getRouteMetadata('/testimonials');

export default function TestimonialsPage() {
  return <ClientTestimonialsPage />;
}
