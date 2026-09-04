import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export const CakeWishSection = ({ onNext }) => {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlowCandle = () => {
    if (!isBlown) {
      setIsBlown(true);

      // Wish granted confetti
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#fde047', '#f43f5e', '#ffffff', '#a855f7']
        });
      } catch (e) {}
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-3xl mx-auto px-4 py-8 text-center">
      {/* Title matching Image 2 */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-900 font-bold mb-3 tracking-wide"
      >
        Blow the candle, Payal 🕯️
      </motion.h2>

      {/* Center Cake & Candle Container */}
      <div className="relative w-full max-w-md my-8 flex flex-col items-center justify-center">
        {/* Soft Background Plate Glow */}
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-rose-100/60 via-amber-100/40 to-white/80 rounded-full blur-2xl -z-10"></div>

        {/* Wish Subtext overlay above cake (Image 2 style) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 z-10"
        >
          <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl text-rose-800/90 font-semibold tracking-wide">
            Close your eyes
          </p>
          <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl text-rose-800/90 font-semibold tracking-wide">
            & make a wish ✨
          </p>
        </motion.div>

        {/* Aesthetic SVG Cake with Candle */}
        <motion.div
          onClick={handleBlowCandle}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative cursor-pointer group flex flex-col items-center"
        >
          <svg viewBox="0 0 240 200" className="w-64 h-56 sm:w-72 sm:h-64 drop-shadow-md overflow-visible">
            {/* Cake Plate */}
            <ellipse cx="120" cy="180" rx="90" ry="16" fill="#f3e8ff" stroke="#e9d5ff" strokeWidth="2"/>

            {/* Cake Bottom Layer */}
            <rect x="50" y="120" width="140" height="55" rx="10" fill="#fbcfe8"/>
            <rect x="50" y="145" width="140" height="10" fill="#f472b6" opacity="0.6"/>

            {/* Cake Top Layer */}
            <rect x="70" y="80" width="100" height="45" rx="8" fill="#fff1f2"/>

            {/* Frosting Drips */}
            <path d="M 50 120 Q 60 132 70 120 Q 80 132 90 120 Q 100 132 110 120 Q 120 132 130 120 Q 140 132 150 120 Q 160 132 170 120 Q 180 132 190 120 L 190 125 L 50 125 Z" fill="#ffffff"/>

            <path d="M 70 80 Q 80 90 90 80 Q 100 90 110 80 Q 120 90 130 80 Q 140 90 150 80 Q 160 90 170 80 L 170 85 L 70 85 Z" fill="#fbcfe8"/>

            {/* Strawberries / Toppings */}
            <circle cx="85" cy="76" r="6" fill="#f43f5e"/>
            <circle cx="120" cy="74" r="6.5" fill="#f43f5e"/>
            <circle cx="155" cy="76" r="6" fill="#f43f5e"/>

            {/* Candle Stick */}
            <rect x="116" y="40" width="8" height="35" rx="2" fill="#fde047" stroke="#eab308" strokeWidth="1"/>
            <line x1="120" y1="40" x2="120" y2="34" stroke="#475569" strokeWidth="2"/>

            {/* Flickering Flame if not blown */}
            {!isBlown ? (
              <g className="animate-pulse">
                {/* Outer Glow */}
                <ellipse cx="120" cy="22" rx="10" ry="14" fill="#fde047" opacity="0.6"/>
                {/* Inner Flame */}
                <path d="M 120 12 Q 126 24 120 30 Q 114 24 120 12 Z" fill="#ef4444"/>
                <path d="M 120 16 Q 123 24 120 28 Q 117 24 120 16 Z" fill="#fde047"/>
              </g>
            ) : (
              /* Smoke Puff when blown */
              <motion.g
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5 }}
              >
                <circle cx="120" cy="25" r="4" fill="#cbd5e1" opacity="0.7"/>
                <circle cx="124" cy="18" r="6" fill="#cbd5e1" opacity="0.5"/>
                <circle cx="118" cy="10" r="8" fill="#cbd5e1" opacity="0.3"/>
              </motion.g>
            )}
          </svg>

          {/* Tap Prompt */}
          {!isBlown ? (
            <span className="mt-2 font-handwriting text-2xl text-rose-900 font-bold opacity-90 group-hover:scale-105 transition-transform">
              (Tap candle to blow 🎂)
            </span>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-3 text-rose-900 font-handwriting text-3xl font-bold"
              >
                Wish Made! ✨ Your wish has been sent to the stars 🌟
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {/* Next Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-8 py-3.5 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
      >
        <span>NEXT</span>
        <span>→</span>
      </motion.button>
    </div>
  );
};
