import Hero from '@/components/sections/Hero';
import QuickStats from '@/components/sections/QuickStats';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <FeaturedProjects />
    </>
  );
}