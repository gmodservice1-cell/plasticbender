'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.4 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
