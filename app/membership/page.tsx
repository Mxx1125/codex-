import type { Metadata } from 'next';
import Membership from '@/components/sections/Membership';

export const metadata: Metadata = { title: '会员' };

export default function Page() {
  return (
    <div className="page">
      <Membership />
    </div>
  );
}
