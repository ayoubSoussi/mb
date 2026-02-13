'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your level of satisfaction in this relationship?",
    choices: ["Hmmm", "chwiya wsafi", "bzaf", "Bzaaaaaaaf bzaaf bzaaaaaaafff"],
    correctAnswer: "Bzaaaaaaaf bzaaf bzaaaaaaafff"
  },
  {
    id: 2,
    question: "What's your favourite place on earth?",
    choices: ["beach", "my cozy room", "gym", "My baby's arms"],
    correctAnswer: "My baby's arms"
  },
  {
    id: 3,
    question: "How would you describe your feelings for Ayoub?",
    choices: [
      "just a crush",
      "I like him",
      "he's cool",
      "I like and love and adore and get crazy about him sooo freaking much"
    ],
    correctAnswer: "I like and love and adore and get crazy about him sooo freaking much"
  },
  {
    id: 4,
    question: "If you could do it again, what will you do?",
    choices: [
      "avoid him at all costs",
      "stay friends and nothing more",
      "be mean to him and make his life miserable",
      "fall in love with him again despite all we've been through"
    ],
    correctAnswer: "fall in love with him again despite all we've been through"
  }
];

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function QuizPage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Shuffle choices once when component mounts or when question changes
  const shuffledChoices = useMemo(() => {
    return questions.map(q => shuffleArray(q.choices));
  }, [started]); // Re-shuffle when quiz starts

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Check if all answers are correct
        const allCorrect = questions.every((q, index) => newAnswers[index] === q.correctAnswer);
        setShowResult(true);
        
        if (allCorrect) {
          router.push('/quiz/win');
        }
      }
    }, 500);
  };

  const handleReplay = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleBackToStory = () => {
    router.push('/');
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 px-4 py-16 flex items-center justify-center overflow-hidden relative">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Floating hearts decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-rose-300"
                initial={{ y: '100%', x: `${Math.random() * 100}%`, opacity: 0 }}
                animate={{
                  y: '-100%',
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                ❤️
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-8xl">🎮</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-rose-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Love Quiz Challenge! 💕
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            My beautiful Maryamti, I have a special game for you! 
            Answer all 4 questions correctly and win a wonderful surprise! 🎁
          </motion.p>

          <motion.p
            className="text-lg text-rose-600 mb-12 italic"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Answer from your heart, my love ❤️
          </motion.p>

          <motion.button
            onClick={handleStart}
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold px-12 py-4 rounded-full text-xl shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Quiz! 💖
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (showResult && answers.length === questions.length) {
    const allCorrect = questions.every((q, index) => answers[index] === q.correctAnswer);
    
    if (!allCorrect) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-rose-50 to-gray-100 px-4 py-16 flex items-center justify-center">
          <motion.div
            className="max-w-2xl text-center bg-white p-12 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              💔
            </motion.div>

            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Oops! Not quite there...
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Some answers weren't what your heart truly feels, my love. 
              Want to try again? 💕
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={handleReplay}
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again 🔄
              </motion.button>

              <motion.button
                onClick={handleBackToStory}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Story 📖
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 px-4 py-16 overflow-hidden relative">
      <div className="max-w-3xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-rose-200 h-3 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative hearts */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">💕</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-20">❤️</div>

            <h2 className="text-3xl font-bold text-rose-600 mb-8 text-center">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {shuffledChoices[currentQuestion].map((choice, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(choice)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    selectedAnswer === choice
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white scale-105'
                      : 'bg-rose-50 hover:bg-rose-100 text-gray-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={selectedAnswer !== null}
                >
                  <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {choice}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating hearts animation */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 50,
                opacity: 0.7
              }}
              animate={{
                y: -100,
                opacity: [0.7, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
