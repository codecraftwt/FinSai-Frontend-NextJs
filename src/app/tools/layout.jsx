import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/tools');

export default function ToolsLayout({ children }) {
  return children;
}

