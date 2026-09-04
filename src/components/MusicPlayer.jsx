import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicPlayer = ({ audioPath = "/music/birthday.mp3" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    // Try autoplay on first load
    const tryAutoplay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Browser blocked autoplay — user needs to click
            setIsPlaying(false);
          });
      }
    };

    audio.addEventListener('error', handleError);
    audio.addEventListener('canplaythrough', tryAutoplay, { once: true });

    return () => {
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplaythrough', tryAutoplay);
    };
  }, []);

  const toggleMusic = () => {
    if (hasError || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <audio ref={audioRef} src={audioPath} loop preload="auto" />

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={hasError ? 'Music unavailable' : isPlaying ? 'Turn Music OFF' : 'Turn Music ON 🎂'}
        className={`flex items-center gap-2 px-3 py-2 rounded-full shadow-lg backdrop-blur-md transition-all border cursor-pointer ${
          isPlaying
            ? 'bg-rose-500/90 text-white border-rose-300 wine-glow'
            : 'bg-white/80 text-rose-900 border-rose-200 hover:bg-rose-50'
        } ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span className={`text-lg ${isPlaying ? 'animate-bounce' : ''}`}>🎵</span>
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          {isPlaying ? 'Music ON' : 'Music OFF'}
        </span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 animate-pulse text-white" />
        ) : (
          <VolumeX className="w-4 h-4 text-rose-700 opacity-70" />
        )}
      </motion.button>
    </div>
  );
};
