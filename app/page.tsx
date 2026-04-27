import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValuePropStrip from '@/components/ValuePropStrip';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function HomePage() {
  return (
    <main className="bg-[#080A0C] min-h-screen">
      <Navbar />
      <Hero />
      <ValuePropStrip />
      <FeaturedProducts />
    </main>
  );
}
