import ProductCard from './ProductCard';
import { products } from '@/lib/products';

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-[#F0EDE8] font-display mb-12">FEATURED DROPS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
