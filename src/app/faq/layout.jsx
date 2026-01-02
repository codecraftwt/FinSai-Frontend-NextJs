import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/faq');

export default function FaqLayout({ children }) {
  return children;
}

