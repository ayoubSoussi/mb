'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Howl } from 'howler';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  toggleMute: () => void;
  startAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [sound, setSound] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved mute preference
    if (typeof window !== 'undefined') {
      const savedMutePreference = localStorage.getItem('audioMuted');
      if (savedMutePreference === 'true') {
        setIsMuted(true);
      }
    }
  }, []);

  const startAudio = () => {
    if (!sound) {
      const newSound = new Howl({
        src: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/song.mp3`],
        format: ['mp3'],
        loop: true,
        volume: 0.3,
        html5: true,
        onload: () => {
          console.log('Audio loaded successfully');
        },
        onloaderror: (id, error) => {
          console.error('Error loading audio:', error);
          console.error('Attempted path:', `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/song.mp3`);
        },
        onplay: () => {
          console.log('Audio started playing');
          setIsPlaying(true);
        },
        onplayerror: (id, error) => {
          console.error('Error playing audio:', error);
          // Try to unlock audio on next user interaction
          newSound.once('unlock', () => {
            newSound.play();
          });
        },
      });

      setSound(newSound);
      
      if (!isMuted) {
        const playPromise = newSound.play();
        if (playPromise !== undefined) {
          console.log('Attempting to play audio...');
        }
      }
    } else if (!isPlaying && !isMuted) {
      sound.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioMuted', String(newMutedState));
    }

    if (sound) {
      if (newMutedState) {
        sound.pause();
        setIsPlaying(false);
      } else {
        sound.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, toggleMute, startAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
