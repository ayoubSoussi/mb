'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AudioControl from './AudioControl';
import { useAudio } from './AudioProvider';

export default function ConditionalAudioControl() {
  const pathname = usePathname();
  const { stopAudio } = useAudio();
  const isHomePage = pathname === '/' || pathname === '/mb' || pathname === '/mb/';

  useEffect(() => {
    // Stop audio when returning to home page
    if (isHomePage) {
      stopAudio();
    }
  }, [isHomePage, stopAudio]);

  // Don't show audio control on home page
  if (isHomePage) {
    return null;
  }

  return <AudioControl />;
}
