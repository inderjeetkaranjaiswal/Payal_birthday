import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Falling Rose Petals Component (Matching Screenshot 5)
const FallingPetals = () => {
  const petals = useMemo(() => {
    const colors = ['#f472b6', '#fb7185', '#e11d48', '#fbcfe8', '#fda4af'];
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 14,
      color: colors[i % colors.length],
      duration: 5 + Math.random() * 6,
      delay: Math.random() * 6,
      rotate: Math.random() * 360,
      horizontalSway: (Math.random() - 0.5) * 80
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            y: -30,
            x: 0,
            opacity: 0,
            rotate: p.rotate
          }}
          animate={{
            y: '105vh',
            x: p.horizontalSway,
            opacity: [0, 0.9, 0.9, 0],
            rotate: p.rotate + 360
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`
          }}
        >
          {/* Realistic Rose Petal SVG Path */}
          <svg viewBox="0 0 30 40" className="w-full h-full drop-shadow-sm">
            <path
              d="M 15 0 C 27 2 32 20 20 34 C 12 42 2 32 1 20 C 0 8 7 0 15 0 Z"
              fill={p.color}
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export const RoseBouquetSection = ({ onNext }) => {
  const noteBubbles = [
    { text: "Forever yours 🌹", x: "-left-4 sm:-left-16", y: "top-8", delay: 0.2 },
    { text: "You are my sunshine ☀️", x: "-left-6 sm:-left-20", y: "top-36", delay: 0.4 },
    { text: "I'm lucky to have you 🍀", x: "-left-2 sm:-left-12", y: "bottom-12", delay: 0.6 },
    { text: "You make my world beautiful ✨", x: "-right-4 sm:-right-16", y: "top-6", delay: 0.3 },
    { text: "Happy Birthday Payal 🎂", x: "-right-6 sm:-right-20", y: "top-32", delay: 0.5 },
    { text: "You are my favorite person 💕", x: "-right-2 sm:-right-12", y: "bottom-10", delay: 0.7 }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full max-w-3xl mx-auto px-4 py-8 text-center relative overflow-hidden select-none">
      {/* Falling Flower Petals Effect */}
      <FallingPetals />

      {/* Title (Matching Screenshot 5) */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-handwriting text-rose-900 font-bold mb-3 tracking-wide z-20"
      >
        Your Rose Bouquet 🌹
      </motion.h2>

      {/* Bouquet & Floating Note Bubbles Container */}
      <div className="relative w-full max-w-lg my-4 flex items-center justify-center min-h-[320px] z-20">
        {/* Floating Note Bubbles */}
        {noteBubbles.map((bubble, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: bubble.delay, duration: 0.5 }}
            className={`absolute ${bubble.x} ${bubble.y} z-30 hidden xs:block`}
          >
            <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-rose-200/80 text-xs sm:text-sm font-sans font-medium text-rose-900">
              {bubble.text}
            </div>
          </motion.div>
        ))}

        {/* Uploaded Rose Bouquet Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 p-3 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-rose-200 pink-glow max-w-xs sm:max-w-sm"
        >
          <div className="rounded-2xl overflow-hidden aspect-square border border-rose-100 shadow-inner">
            <img 
              src="/images/rose_bouquet.png" 
              alt="Your Rose Bouquet" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Caption text below bouquet (Matching Screenshot 5) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="z-20 my-3 space-y-1"
      >
        <h3 className="font-heading text-2xl sm:text-3xl text-rose-950 font-bold">
          For You, Payal 🌷
        </h3>
        <p className="font-sans text-sm sm:text-base text-rose-800/80 italic max-w-xs sm:max-w-md mx-auto">
          Because you deserve a little extra happiness today.
        </p>
      </motion.div>

      {/* Virtual Hug Button leading to final screen (Matching Screenshot 5) */}
      {onNext && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="z-20 mt-4 py-3.5 px-8 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <span>Virtual Hug →</span>
          <Heart className="w-5 h-5 text-white fill-white/80 animate-pulse" />
        </motion.button>
      )}
    </div>
  );
};
