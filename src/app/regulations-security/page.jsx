import { getRouteMetadata } from '@/lib/Metadata';
import ClientRegulationsSecurityPage from './ClientRegulationsSecurityPage';

export const metadata = getRouteMetadata('/regulations-security');

export default function RegulationsSecurityPage() {
  return <ClientRegulationsSecurityPage />;
}
