import Hero from '@/components/hero/Hero';
import Collection from '@/components/sections/Collection';
import Milestones from '@/components/sections/Milestones';
import Heritage from '@/components/sections/Heritage';
import Membership from '@/components/sections/Membership';
import Boutiques from '@/components/sections/Boutiques';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collection />
      <Milestones />
      <Heritage />
      <Membership />
      <Boutiques />
    </>
  );
}
