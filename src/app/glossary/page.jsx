import { getRouteMetadata } from '@/lib/Metadata';
import ClientGlossaryPage from './ClientGlossaryPage';

export const metadata = getRouteMetadata('/glossary');

export default function GlossaryPage() {
  return <ClientGlossaryPage />;
}

