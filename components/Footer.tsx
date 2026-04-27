'use client';

import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#080A0C] border-t border-white/10 py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl font-black text-[#F0EDE8] font-display mb-6">THE BUNKER</h2>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto">Tactical precision for the modern maker.</p>
        <div className="flex justify-center gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-[#2EE5C0]">Privacy</a>
          <a href="#" className="hover:text-[#2EE5C0]">Terms</a>
          <a href="#" className="hover:text-[#2EE5C0]">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
}
