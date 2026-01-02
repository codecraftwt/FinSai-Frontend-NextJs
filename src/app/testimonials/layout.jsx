import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/testimonials');

export default function TestimonialsLayout({ children }) {
  return children;
}

