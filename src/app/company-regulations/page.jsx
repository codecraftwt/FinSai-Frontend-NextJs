import { getRouteMetadata } from '@/lib/Metadata';
import ClientCompanyRegulationsPage from './ClientCompanyRegulationsPage';

export const metadata = getRouteMetadata('/company-regulations');

export default function CompanyRegulationsPage() {
  return <ClientCompanyRegulationsPage />;
}
