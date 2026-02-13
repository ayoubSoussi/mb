'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from './components/AudioProvider';

export default function SplashPage() {
  const router = useRouter();
  const { startAudio } = useAudio();

  const handleStart = () => {
    startAudio();
    router.push('/story/1');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200 px-4">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <svg
            className="w-24 h-24 mx-auto text-rose-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-rose-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our Love Story
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          A journey of two hearts that found each other
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          For Maryam, with all my love ❤️
        </motion.p>

        <motion.button
          onClick={handleStart}
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(225, 29, 72, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Our Story
        </motion.button>

        <motion.p
          className="text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          🎵 Best experienced with sound
        </motion.p>
      </motion.div>
    </div>
  );
}

