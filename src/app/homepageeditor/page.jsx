import { getRouteMetadata } from '@/lib/Metadata';
import ClientHomePageEditor from './ClientHomePageEditor.jsx';

export const metadata = getRouteMetadata('/homepageeditor');

export default function HomePage() {
  return <ClientHomePageEditor data={{}} scrollToSection={null} />;
}
