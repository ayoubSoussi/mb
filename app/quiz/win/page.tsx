'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WinPage() {
  const router = useRouter();
  const [showPrize, setShowPrize] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-rose-100 px-4 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Confetti animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              rotate: [0, 360],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <span className="text-2xl">
              {['🎉', '🎊', '⭐', '✨', '💖', '💝', '🌟', '💕'][Math.floor(Math.random() * 8)]}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Fireworks effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`firework-${i}`}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 2, 3],
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <span className="text-4xl">💥</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-3xl text-center relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Trophy animation */}
        <motion.div
          className="mb-8"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-9xl">🏆</span>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Perfect Score! 🎊
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-700 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          You got all the answers right, my beautiful Maryamti! 💖
        </motion.p>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Your prize is a reminder of how much you mean to me...
          </p>

          {!showPrize ? (
            <motion.button
              onClick={() => setShowPrize(true)}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold px-10 py-4 rounded-full text-xl shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(244, 63, 94, 0.5)",
                  "0 0 40px rgba(244, 63, 94, 0.8)",
                  "0 0 20px rgba(244, 63, 94, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Reveal My Prize! 🎁
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="space-y-6"
            >
              <div className="text-6xl mb-4">💝</div>
              
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-rose-600 mb-4">
                  Your Special Gift 🎁
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When we finally meet in 2026, I promise you the biggest hug that will make up for all the time we've been apart. 
                  I'll hold you close, kiss you endlessly, and never let go. 
                </p>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-rose-200">
                  <h4 className="text-xl font-bold text-rose-600 mb-3 flex items-center gap-2">
                    💆‍♀️ Special Beauty Session Reserved!
                  </h4>
                  
                  <div className="space-y-3 text-left">
                    <p className="text-gray-700">
                      <span className="font-semibold text-rose-600">📍 Location:</span> Pretty Skin Beauty Bar
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-rose-600">📅 Date:</span> 14 February 2026
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-rose-600">🕒 Time:</span> 15h00
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-rose-600">✨ Package:</span> Pack Douceur
                    </p>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600 font-medium mb-1">Includes:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>💅 Manucure</li>
                        <li>🦶 Pédicure</li>
                        <li>💇‍♀️ Soin cheveux + Broaching</li>
                      </ul>
                    </div>

                    {/* Map */}
                    <div className="mt-4 rounded-lg overflow-hidden border-2 border-rose-200">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8676758856343!2d-6.849788!3d34.010833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8b0b0b0b0b%3A0x0!2sPretty%20Skin%20Beauty%20Bar!5e0!3m2!1sen!2sma!4v1234567890"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Pretty Skin Beauty Bar Location"
                      ></iframe>
                    </div>

                    <a
                      href="https://www.google.com/search?q=Pretty+skin+beauty+bar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors mt-2 mr-2"
                    >
                      View on Google Maps 🗺️
                    </a>
                    
                    <a
                      href="https://www.instagram.com/prettyskinbykamilya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors mt-2"
                    >
                      Instagram 📸
                    </a>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed italic">
                  You deserve to be pampered, my love. This is just the beginning of forever with you. ❤️
                </p>
              </div>

              <motion.div
                className="flex gap-2 justify-center items-center text-4xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕 💖 💗 💝 💘
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            onClick={() => router.push('/quiz')}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again 🔄
          </motion.button>

          <motion.button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Story 💝
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['100vh', '-10vh'],
              x: [0, Math.sin(i) * 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
}
