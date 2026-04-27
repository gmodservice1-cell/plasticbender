import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { products } from '@/lib/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  
  if (!product) {
    notFound();
  }

  const prevProduct = products[productIndex - 1];
  const nextProduct = products[productIndex + 1];

  return (
    <main className="bg-[#080A0C] min-h-screen text-[#F0EDE8]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-[#2EE5C0] mb-8">
            <ChevronLeft size={16} className="mr-2" /> Back to Catalog
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Product Image */}
          <div className="space-y-4">
             <div className="relative aspect-square border border-white/5 rounded-sm overflow-hidden">
                <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                />
             </div>
          </div>
          
          {/* Right: Info */}
          <div className="space-y-6">
            <h1 className="text-5xl font-black font-display tracking-tighter text-[#F0EDE8] leading-tight text-white mb-2">{product.name}</h1>
            <p className="text-3xl font-mono text-[#2EE5C0] mb-6">${product.price.toFixed(2)}</p>
            <div className="prose prose-invert max-w-none text-gray-400 font-sans leading-relaxed">
                <h2 className="text-2xl font-bold text-[#C8A96E] mb-2 font-display">Description</h2>
                <p className="mb-4">{product.description}</p>
                <div dangerouslySetInnerHTML={{ __html: product.htmlDescription }} />
            </div>
            
            <button className="w-full py-4 bg-[#C8A96E] text-[#080A0C] font-bold rounded-sm hover:opacity-90 transition-opacity">
                Add to Cart
            </button>
          </div>
        </div>

        {/* Next/Prev Navigation */}
        <div className="flex justify-between mt-20 border-t border-white/10 pt-10">
           {prevProduct ? (
             <Link href={`/product/${prevProduct.id}`} className="flex items-center text-[#C8A96E] hover:text-[#2EE5C0]">
                <ChevronLeft className="mr-2" /> Previous: {prevProduct.name}
             </Link>
           ) : <div />}
           {nextProduct ? (
             <Link href={`/product/${nextProduct.id}`} className="flex items-center text-[#C8A96E] hover:text-[#2EE5C0]">
                Next: {nextProduct.name} <ChevronRight className="ml-2" />
             </Link>
           ) : <div />}
        </div>
      </div>
    </main>
  );
}
