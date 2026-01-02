import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/regulations');

export default function RegulationsLayout({ children }) {
  return children;
}

