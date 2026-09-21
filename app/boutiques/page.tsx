import type { Metadata } from 'next';
import Boutiques from '@/components/sections/Boutiques';

export const metadata: Metadata = { title: '门店' };

export default function Page() {
  return (
    <div className="page">
      <Boutiques />
    </div>
  );
}
