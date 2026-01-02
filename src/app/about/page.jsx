import { getRouteMetadata } from '@/lib/Metadata';
import ClientAboutPage from './ClientAboutPage';

export const metadata = getRouteMetadata('/about');

export default function AboutPage() {
  return <ClientAboutPage />;
}
