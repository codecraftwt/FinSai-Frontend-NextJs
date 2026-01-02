import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/home');

export default function HomeLayout({ children }) {
  return children;
}

