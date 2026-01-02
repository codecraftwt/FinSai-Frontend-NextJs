import { getRouteMetadata } from '@/lib/Metadata';
import ClientHomePage from './ClientHomePage';

export const metadata = getRouteMetadata('/');

export default function HomePage() {
  return <ClientHomePage data={{}} scrollToSection={null} />;
}
