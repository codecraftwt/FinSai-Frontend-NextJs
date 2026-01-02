import { getRouteMetadata } from '@/lib/Metadata';
import ClientContactSupportPage from './ClientContactSupportPage';

export const metadata = getRouteMetadata('/contact-support');

export default function ContactSupportPage() {
  return <ClientContactSupportPage />;
}

