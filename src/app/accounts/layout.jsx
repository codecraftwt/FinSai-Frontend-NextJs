import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/accounts');

export default function AccountsLayout({ children }) {
  return children;
}

