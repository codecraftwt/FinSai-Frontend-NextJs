import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/company-regulations');

export default function CompanyRegulationsLayout({ children }) {
  return children;
}

