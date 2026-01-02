import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/tutorials');

export default function TutorialsLayout({ children }) {
  return children;
}

