import type { Metadata } from 'next';
import Milestones from '@/components/sections/Milestones';

export const metadata: Metadata = { title: '品牌纪事' };

export default function Page() {
  return (
    <div className="page">
      <Milestones />
    </div>
  );
}
