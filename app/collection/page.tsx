import type { Metadata } from 'next';
import Collection from '@/components/sections/Collection';

export const metadata: Metadata = { title: '新品' };

export default function Page() {
  return (
    <div className="page">
      <Collection />
    </div>
  );
}
