import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/glossary');

export default function GlossaryLayout({ children }) {
  return children;
}

