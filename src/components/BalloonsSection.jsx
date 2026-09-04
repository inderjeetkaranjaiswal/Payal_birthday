import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Gift } from 'lucide-react';

export const BalloonsSection = ({ onNext }) => {
  const [poppedBalloons, setPoppedBalloons] = useState({});
  const [activeModal, setActiveModal] = useState(null);

  const balloons = [
    {
      id: 'b1',
      title: 'Happiness 🌸',
      popMeText: 'Pop Me ✨',
      note: '“May you always have countless reasons to smile every single day.”',
      bgColor: 'bg-[#f4b6c2]',
      knotColor: '#e091a2',
      stringColor: '#d6758c',
      popColor: ['#f4b6c2', '#fbcfe8', '#ffffff']
    },
    {
      id: 'b2',
      title: 'Good Health 🌿',
      popMeText: 'Pop Me 🌿',
      note: '“Wishing you long, healthy, vibrant, and peaceful days ahead.”',
      bgColor: 'bg-[#a8c3a0]',
      knotColor: '#8ca984',
      stringColor: '#76946e',
      popColor: ['#a8c3a0', '#d1fae5', '#ffffff']
    },
    {
      id: 'b3',
      title: 'Beautiful Moments ✨',
      popMeText: 'Pop Me 💖',
      note: '“May this year bring priceless memories worth cherishing forever.”',
      bgColor: 'bg-[#e5c366]',
      knotColor: '#caa648',
      stringColor: '#b59235',
      popColor: ['#e5c366', '#fef08a', '#ffffff']
    },
    {
      id: 'b4',
      title: 'Success & Joy 🌟',
      popMeText: 'Pop Me ❤️',
      note: '“May all your dreams come true and your wishes turn into reality. ✨”',
      bgColor: 'bg-[#dc858e]',
      knotColor: '#c26972',
      stringColor: '#ab525b',
      popColor: ['#dc858e', '#fecdd3', '#ffffff']
    }
  ];

  const handlePop = (balloon) => {
    setPoppedBalloons((prev) => ({ ...prev, [balloon.id]: true }));
    setActiveModal(balloon);

    // Pop confetti explosion
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: balloon.popColor
      });
    } catch (e) {}
  };

  const poppedCount = Object.keys(poppedBalloons).length;
  const anyPopped = poppedCount > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-3xl mx-auto px-4 py-6 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-2 tracking-wide"
      >
        Pop all 4 balloons 🎈
      </motion.h2>

      <p className="font-sans italic text-rose-800/90 text-sm sm:text-base mb-6">
        Each balloon holds a special wish for you...
      </p>

      {/* 2x2 Balloons Grid (Matching Screenshot 2) */}
      <div className="relative w-full max-w-xs sm:max-w-md my-4 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full justify-items-center">
          {balloons.map((b, idx) => {
            const isPopped = poppedBalloons[b.id];

            return (
              <div key={b.id} className="flex flex-col items-center justify-center min-h-[160px]">
                {/* Floating Balloon */}
                <motion.div
                  onClick={() => {
                    if (isPopped) {
                      setActiveModal(b);
                    } else {
                      handlePop(b);
                    }
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [idx % 2 === 0 ? -1.5 : 1.5, idx % 2 === 0 ? 1.5 : -1.5, idx % 2 === 0 ? -1.5 : 1.5]
                  }}
                  transition={{
                    duration: 3 + idx * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="cursor-pointer flex flex-col items-center group relative"
                >
                  {/* Balloon Oval Body */}
                  <div
                    className={`w-28 h-36 sm:w-32 sm:h-40 ${b.bgColor} rounded-[50%_50%_50%_50%/42%_42%_58%_58%] shadow-lg relative flex flex-col items-center justify-center transition-all overflow-hidden border border-white/40`}
                  >
                    {/* Inner Shine Highlight */}
                    <div className="absolute top-3 left-4 w-7 h-10 bg-white/45 rounded-full blur-[1px]"></div>

                    {/* Pop Me Pill Tag */}
                    <div className="z-10 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-semibold text-rose-950 flex items-center gap-1 group-hover:scale-105 transition-transform">
                      <span>{isPopped ? 'View Note 💌' : b.popMeText}</span>
                    </div>
                  </div>

                  {/* Balloon Knot */}
                  <div
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderBottom: `10px solid ${b.knotColor}`
                    }}
                    className="w-0 h-0 -mt-1 z-10"
                  />

                  {/* Wavy String */}
                  <svg width="24" height="40" className="overflow-visible -mt-0.5">
                    <path
                      d="M 12 0 Q 20 15 12 30 T 12 40"
                      stroke={b.stringColor}
                      strokeWidth="2"
                      fill="none"
                      opacity="0.75"
                    />
                  </svg>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Counter (Matching Screenshots 2, 3, 4) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest text-rose-900/70 mt-4 mb-4"
      >
        {poppedCount} OF 4 BALLOONS POPPED
      </motion.p>

      {/* Next Page Button */}
      {anyPopped && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 bg-[#e8a3b5] hover:bg-[#df91a5] text-white font-bold rounded-full shadow-lg text-base sm:text-lg transition-all border border-rose-200 flex items-center gap-2 cursor-pointer"
        >
          <span>One Last Surprise →</span>
        </motion.button>
      )}

      {/* POPPED NOTE MODAL POPUP (Matching Screenshots 3, 4, 5) */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#fdfaf7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-200/80 max-w-sm w-full text-center relative flex flex-col items-center"
            >
              {/* Close Button top right */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Gift Badge Icon */}
              <div className="w-14 h-14 bg-rose-100/70 rounded-full flex items-center justify-center mb-4 text-rose-600 shadow-inner">
                <Gift className="w-7 h-7 text-rose-500" />
              </div>

              {/* Wish Title */}
              <h3 className="font-heading text-2xl sm:text-3xl text-rose-950 font-bold mb-3 tracking-wide">
                {activeModal.title}
              </h3>

              {/* Wish Message in cursive quotes */}
              <p className="font-heading italic text-rose-800 text-lg sm:text-xl leading-relaxed mb-6 px-2">
                {activeModal.note}
              </p>

              {/* Close Note Pill Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="py-2.5 px-7 bg-[#ea9ab0] hover:bg-[#e2839d] text-white font-bold text-base rounded-full shadow-md hover:shadow-rose-300/50 transition-all border border-rose-200 cursor-pointer"
              >
                Close Note ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
