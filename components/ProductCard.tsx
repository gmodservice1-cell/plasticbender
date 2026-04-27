'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  return (
    <div className="block group">
      <div className="bg-[#0F1215] border border-white/5 p-4 rounded-sm overflow-hidden hover:border-[#2EE5C0]/50 transition-all duration-300">
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-square mb-4">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 left-2 bg-[#080A0C]/80 backdrop-blur-sm text-[#C8A96E] text-xs font-bold px-2 py-1 rounded-sm">
              {product.category}
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#F0EDE8]">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#2EE5C0] font-mono">${product.price.toFixed(2)}</span>
          <button 
              onClick={() => addItem(product)}
              className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-xs font-bold text-[#F0EDE8] group-hover:bg-[#C8A96E] group-hover:text-[#080A0C] transition-colors">
              Quick Add
          </button>
        </div>
      </div>
    </div>
  );
}
