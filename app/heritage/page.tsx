import type { Metadata } from 'next';
import Heritage from '@/components/sections/Heritage';

export const metadata: Metadata = { title: '生而例外' };

export default function Page() {
  return (
    <div className="page">
      <Heritage />
    </div>
  );
}
