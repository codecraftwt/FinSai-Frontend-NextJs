import { getRouteMetadata } from '@/lib/Metadata';
import ClientPaymentPage from './ClientPaymentPage';

export const metadata = getRouteMetadata('/payment');

export default function PaymentPage() {
  return <ClientPaymentPage />;
}
