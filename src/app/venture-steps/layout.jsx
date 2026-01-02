import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/venture-steps');

export default function VentureStepsLayout({ children }) {
  return children;
}

