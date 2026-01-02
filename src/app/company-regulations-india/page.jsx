import { getRouteMetadata } from '@/lib/Metadata';
import ClientCompanyRegulationsIndiaPage from './ClientCompanyRegulationsIndiaPage';

export const metadata = getRouteMetadata('/company-regulations-india');

export default function CompanyRegulationsIndiaPage() {
  return <ClientCompanyRegulationsIndiaPage />;
}
