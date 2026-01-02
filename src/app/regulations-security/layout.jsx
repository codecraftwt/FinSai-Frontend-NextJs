import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/regulations-security');

export default function RegulationsSecurityLayout({ children }) {
  return children;
}

