import { getRouteMetadata } from '@/lib/Metadata';
import ClientFAQPage from './ClientFAQPage';

export const metadata = getRouteMetadata('/faq');

export default function FAQPage() {
  return <ClientFAQPage />;
}

