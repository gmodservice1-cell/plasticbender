'use client';

import { useState, useEffect } from 'react';
import IntroSplash from './IntroSplash';

export default function SplashLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSplashComplete, setIsSplashComplete] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <div className="min-h-screen bg-[#080A0C]" />;
  }

  return (
    <>
      {!isSplashComplete && (
        <IntroSplash onComplete={() => setIsSplashComplete(true)} />
      )}
      <div className={!isSplashComplete ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}
