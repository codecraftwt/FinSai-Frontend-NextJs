import { getRouteMetadata } from '@/lib/Metadata';
import ClientAccountsPage from './ClientAccountsPage';

export const metadata = getRouteMetadata('/accounts');

export default function AccountsPage() {
  return <ClientAccountsPage />;
}
