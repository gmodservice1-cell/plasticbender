'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '@/store/cartStore';
import { X, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, total } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0F1215] border-l border-white/10 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#F0EDE8]">YOUR ARSENAL</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-gray-400" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-[#080A0C] p-3 rounded-sm">
                  <div className="w-16 h-16 bg-white/5 rounded-sm" />
                  <div className="flex-grow">
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-[#2EE5C0] font-mono">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 className="text-red-500 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>TOTAL</span>
                <span className="text-[#2EE5C0] font-mono">${total.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 text-center bg-[#2EE5C0] text-[#080A0C] font-bold rounded-sm hover:opacity-90 transition-opacity"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
