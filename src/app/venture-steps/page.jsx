import { getRouteMetadata } from '@/lib/Metadata';
import ClientVentureSteps from './ClientVentureSteps';

export const metadata = getRouteMetadata('/venture-steps');

export default function VentureStepsPage() {
  return <ClientVentureSteps />;
}
