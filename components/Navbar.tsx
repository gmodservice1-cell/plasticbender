'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const { items, setIsOpen } = useCartStore();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#080A0C]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#F0EDE8] font-display">
          THE BUNKER
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/catalog" className="hover:text-[#2EE5C0] transition-colors">Catalog</Link>
          <button onClick={() => setIsOpen(true)} className="relative hover:text-[#2EE5C0] transition-colors">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C8A96E] text-[#080A0C] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {itemCount}
                </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
