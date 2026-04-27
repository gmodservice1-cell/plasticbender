'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const isReturning = localStorage.getItem('bunker_visited') === 'true';
    if (isReturning) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        localStorage.setItem('bunker_visited', 'true');
        onComplete();
      },
    });

    // Initial state
    gsap.set([logoRef.current, taglineRef.current], { opacity: 0 });
    gsap.set(containerRef.current, { backgroundColor: '#000000' });

    tl.to(containerRef.current, { backgroundColor: '#080A0C', duration: 0.5 })
      .to(logoRef.current, { opacity: 1, duration: 0.8, y: 0, ease: 'power2.out' }, '+=0.2')
      .to(taglineRef.current, { opacity: 1, duration: 0.8 }, '-=0.4')
      .add(() => setShowSkip(true), 1.5)
      .to(containerRef.current, { opacity: 0, duration: 0.5 }, '+=1');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const handleSkip = () => {
    localStorage.setItem('bunker_visited', 'true');
    onComplete();
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <h1
          ref={logoRef}
          className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[#C8A96E] to-[#2EE5C0] font-display"
        >
          THE BUNKER
        </h1>
        <p
          ref={taglineRef}
          className="mt-4 text-xl text-gray-400 font-sans"
        >
          Engineered for Precision. Built for the Field.
        </p>
      </div>

      {showSkip && (
        <button
          ref={skipRef}
          onClick={handleSkip}
          className="absolute bottom-10 right-10 text-[#C8A96E] hover:text-[#2EE5C0] font-mono transition-colors"
        >
          SKIP [ ESC ]
        </button>
      )}
    </div>
  );
}
