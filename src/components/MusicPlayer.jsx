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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={hasError ? 'Music unavailable' : isPlaying ? 'Turn Music OFF' : 'Turn Music ON 🎂'}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md transition-all border cursor-pointer ${
          isPlaying
            ? 'bg-white/30 text-white border-white/40'
            : 'bg-white/30 text-white/80 border-white/30 hover:bg-white/40'
        } ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-white" />
        ) : (
          <VolumeX className="w-4 h-4 text-white/70" />
        )}
        <span className="text-xs font-serif italic text-white">
          {isPlaying ? 'Music' : 'Music'}
        </span>
      </motion.button>
    </div>
  );
};
