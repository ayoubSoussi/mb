'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { storyPages } from './storyData';
import Image from 'next/image';

interface StoryPageProps {
  pageId: number;
}

export default function StoryPageComponent({ pageId }: StoryPageProps) {
  const router = useRouter();
  
  const currentPage = storyPages.find(page => page.id === pageId);
  
  if (!currentPage) {
    return null;
  }

  const isLastPage = pageId === storyPages.length;
  const isFirstPage = pageId === 1;
  
  const handleNext = () => {
    if (!isLastPage) {
      router.push(`/story/${pageId + 1}`);
    } else {
      router.push('/');
    }
  };

  const handleBack = () => {
    if (pageId > 1) {
      router.push(`/story/${pageId - 1}`);
    } else {
      router.push('/');
    }
  };

  const handleStartQuiz = () => {
    router.push('/quiz');
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-cream to-rose-100 px-4 py-8 md:py-16"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-gray-600">
            Page {pageId} of {storyPages.length}
          </p>
          <div className="w-full bg-rose-200 h-2 rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-rose-600"
              initial={{ width: 0 }}
              animate={{ width: `${(pageId / storyPages.length) * 100}%` }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Main content with background image */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={currentPage.image}
                alt={currentPage.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>

          {/* Text content overlaid on image */}
          <div className="relative z-10 p-8 md:p-12 w-full">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {currentPage.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed mb-8 text-center max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {currentPage.content}
            </motion.p>

            {/* Navigation buttons */}
            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {/* Back button */}
              {!isFirstPage && (
                <button
                  onClick={handleBack}
                  className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              )}
              
              {/* Spacer for first page */}
              {isFirstPage && <div></div>}

              {/* Next/Quiz buttons */}
              <div className="flex gap-3">
                {isLastPage && (
                  <button
                    onClick={handleStartQuiz}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all flex items-center gap-2"
                  >
                    🎮 Play Quiz Game
                  </button>
                )}
                
                <button
                  onClick={handleNext}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all flex items-center gap-2 group"
                >
                  {isLastPage ? 'Back to Start' : 'Next Chapter'}
                  {!isLastPage && (
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.svg
              key={i}
              className="w-6 h-6 text-rose-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
