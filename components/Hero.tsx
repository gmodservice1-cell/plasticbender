'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-20">
      {/* Background placeholder - needs actual animation later */}
      <div className="absolute inset-0 bg-[url('/grid-noise.png')] opacity-[0.03]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[#C8A96E] to-[#2EE5C0] font-display">
          THE BUNKER
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mx-auto">
          Engineered for Precision. Built for the Field.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
            <button className="px-8 py-4 bg-[#C8A96E] text-[#080A0C] font-bold rounded-sm hover:opacity-90 transition-opacity">
                Shop Collections
            </button>
            <button className="px-8 py-4 border border-[#2EE5C0] text-[#2EE5C0] font-bold rounded-sm hover:bg-[#2EE5C0]/10 transition-colors">
                View Featured Drops
            </button>
        </div>
      </motion.div>
    </section>
  );
}
