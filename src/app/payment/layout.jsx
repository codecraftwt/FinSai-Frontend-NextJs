import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/payment');

export default function PaymentLayout({ children }) {
  return children;
}

