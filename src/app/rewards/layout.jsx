import { getRouteMetadata } from '../../lib/Metadata';

export const metadata = getRouteMetadata('/rewards');

export default function RewardsLayout({ children }) {
  return children;
}

