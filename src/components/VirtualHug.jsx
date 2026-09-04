import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { StickerCatsCelebrating, StickerStackedBears, StickerBearHug } from './CatIllustrations';
import { Heart, RefreshCw } from 'lucide-react';

export const VirtualHug = ({ onReplay }) => {
  const [isHugging, setIsHugging] = useState(false);

  const handleTriggerHug = () => {
    if (!isHugging) {
      setIsHugging(true);

      // Heart confetti explosion
      try {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#f43f5e', '#fb7185', '#ffffff', '#fde047']
        });
      } catch (e) {}
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full max-w-3xl mx-auto px-4 py-8 text-center select-none">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-2 tracking-wide"
      >
        A Special Virtual Hug 🫂
      </motion.h2>

      <p className="font-sans italic text-rose-800/90 text-sm sm:text-base mb-6 max-w-md mx-auto">
        Because no distance can diminish how much you mean to me.
      </p>

      {/* Main Stickers Container (Matching Screenshots 2, 3, 4) */}
      <div className="relative w-full max-w-lg my-4 flex flex-col items-center justify-center min-h-[300px]">
        {!isHugging ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            {/* Sticker 1: Celebrating Cats (Screenshot 2) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <StickerCatsCelebrating className="w-48 h-48 sm:w-56 sm:h-56" />
            </motion.div>

            {/* Sticker 2: Stacked Bears (Screenshot 3) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <StickerStackedBears className="w-36 h-52 sm:w-40 sm:h-60" />
            </motion.div>
          </div>
        ) : (
          /* Sticker 3: Bubu & Dudu Hug (Screenshot 4) when hugged */
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="flex flex-col items-center w-full"
            >
              <StickerBearHug className="w-56 h-56 sm:w-64 sm:h-64 mb-2" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border-2 border-rose-200/80 max-w-md w-full text-center pink-glow my-2"
              >
                <h3 className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-2">
                  Sending You The Biggest Hug! 💕
                </h3>
                <p className="font-sans text-sm sm:text-base text-rose-950 leading-relaxed font-medium">
                  May your birthday be filled with endless smiles, warmth, and all the love in the world! 🌸✨
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Interactive Hug Button */}
      {!isHugging ? (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleTriggerHug}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="mt-6 py-3.5 px-8 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <span>Give a Hug 🤗</span>
          <Heart className="w-5 h-5 text-white fill-white animate-bounce" />
        </motion.button>
      ) : (
        onReplay && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={onReplay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 py-3.5 px-8 bg-white/90 hover:bg-white text-rose-900 font-bold rounded-full shadow-md hover:shadow-rose-200 border border-rose-300 text-base transition-all flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-rose-600" />
            <span>Replay Birthday Story 🔄</span>
          </motion.button>
        )
      )}
    </div>
  );
};
