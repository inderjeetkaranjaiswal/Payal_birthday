import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const MemoryGallery = ({ title, subheading, memories = [], footerText, footerSubtext, onNext }) => {
  const [rotX, setRotX] = useState(0.1);
  const [rotY, setRotY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const containerRef = useRef(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.004, y: 0 });
  const animFrameRef = useRef(null);

  // Measure container width to calculate sphere radius dynamically for mobile vs desktop
  const [radius, setRadius] = useState(130);
  const [cardWidth, setCardWidth] = useState(80);
  const [cardHeight, setCardHeight] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(120);
        setCardWidth(75);
        setCardHeight(95);
      } else if (w < 768) {
        setRadius(150);
        setCardWidth(88);
        setCardHeight(112);
      } else {
        setRadius(200);
        setCardWidth(105);
        setCardHeight(132);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute 3D points on sphere using Fibonacci lattice algorithm for 12 photos
  const points = useMemo(() => {
    const total = memories.length || 12;
    return memories.map((mem, i) => {
      // Golden spiral distribution on 3D sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      return { ...mem, x, y, z, index: i };
    });
  }, [memories]);

  // Continuous rotation loop - EVEN WHEN LIGHTBOX IS OPEN, Globe continues rotating!
  useEffect(() => {
    const autoSpeedY = 0.003;

    const animate = () => {
      if (!isDragging) {
        if (Math.abs(velocityRef.current.x) > 0.0001 || Math.abs(velocityRef.current.y) > 0.0001) {
          // Decay momentum towards auto speed
          velocityRef.current.x = velocityRef.current.x * 0.94 + autoSpeedY * 0.06;
          velocityRef.current.y = velocityRef.current.y * 0.94;
        } else {
          velocityRef.current.x = autoSpeedY;
          velocityRef.current.y = 0;
        }

        setRotY((prevY) => (prevY + velocityRef.current.x) % (Math.PI * 2));
        setRotX((prevX) => {
          const nextX = prevX + velocityRef.current.y;
          // Clamp tilt to keep globe right side up
          return Math.max(-0.8, Math.min(0.8, nextX));
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isDragging]);

  // Mouse / Pointer drag handlers for desktop & mobile
  const handlePointerDown = (e) => {
    if (selectedIndex !== null) return;
    setIsDragging(true);
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging || selectedIndex !== null) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;

    const sensitivity = 0.005;
    const deltaY = dx * sensitivity;
    const deltaX = -dy * sensitivity;

    setRotY((prevY) => (prevY + deltaY) % (Math.PI * 2));
    setRotX((prevX) => Math.max(-0.8, Math.min(0.8, prevX + deltaX)));

    velocityRef.current = { x: deltaY, y: deltaX };
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % memories.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + memories.length) % memories.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, memories.length]);

  // Touch Swipe for Lightbox modal
  const handleTouchStartLightbox = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEndLightbox = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      // Swipe Left -> Next photo
      setSelectedIndex((prev) => (prev + 1) % memories.length);
    } else if (diff < -50) {
      // Swipe Right -> Prev photo
      setSelectedIndex((prev) => (prev - 1 + memories.length) % memories.length);
    }
    setTouchStart(null);
  };

  // Project 3D points onto 2D viewport
  const transformedPoints = useMemo(() => {
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);

    return points.map((p) => {
      // Y rotation
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // X rotation
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const px = x1 * radius;
      const py = y2 * radius;
      const zNorm = (z2 + 1) / 2; // 0 (back) to 1 (front)

      const scale = 0.55 + 0.48 * zNorm;
      const opacity = Math.max(0.35, 0.4 + 0.6 * zNorm);
      const zIndex = Math.round(zNorm * 100);

      return {
        ...p,
        px,
        py,
        zNorm,
        scale,
        opacity,
        zIndex
      };
    });
  }, [points, rotX, rotY, radius]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full max-w-4xl mx-auto px-3 py-6 text-center select-none">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-1 tracking-wide">
          {title || "Beautiful Memories"}
        </h2>
        <p className="text-sm sm:text-base text-rose-800/90 font-sans italic">
          {subheading || "A few moments worth keeping. 🤍"}
        </p>
      </motion.div>

      {/* 3D Rotating Memory Globe Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full max-w-sm sm:max-w-md h-[340px] sm:h-[420px] my-2 flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y overflow-visible"
      >
        {/* Ambient background blur circle behind globe */}
        <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-rose-200/40 via-pink-100/50 to-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        {/* Floating 3D Photo Nodes */}
        {transformedPoints.map((item) => (
          <div
            key={item.id || item.index}
            onClick={() => setSelectedIndex(item.index)}
            style={{
              transform: `translate3d(${item.px}px, ${item.py}px, 0px) scale(${item.scale})`,
              opacity: item.opacity,
              zIndex: item.zIndex,
              width: `${cardWidth}px`,
              height: `${cardHeight}px`
            }}
            className="absolute top-1/2 left-1/2 -ml-[40px] -mt-[50px] transition-transform duration-75 ease-out cursor-pointer group"
          >
            <div className="w-full h-full p-1.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md group-hover:shadow-xl border border-rose-200/80 group-hover:border-rose-400 transition-all duration-300 flex flex-col items-center overflow-hidden">
              <div className="w-full flex-1 rounded-xl overflow-hidden bg-rose-50 border border-rose-100/80">
                <img
                  src={item.image}
                  alt={item.caption || `Memory ${item.index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/photos/photo1.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helper text below globe */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        className="text-xs sm:text-sm font-sans text-rose-800/80 mt-1 mb-6 tracking-wide"
      >
        {footerText || "Swipe the memories • Tap a photo"}
      </motion.p>

      {/* Next Screen Button */}
      {onNext && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-8 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-base sm:text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <span>NEXT</span>
          <span>→</span>
        </motion.button>
      )}

      {/* FULLSCREEN LIGHTBOX PHOTO VIEWER */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onTouchStart={handleTouchStartLightbox}
            onTouchEnd={handleTouchEndLightbox}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-between p-4 sm:p-6"
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="w-full max-w-4xl flex items-center justify-between z-10 pt-2">
              <span className="text-white/90 font-sans font-semibold text-xs sm:text-sm px-3 py-1 bg-white/20 rounded-full border border-white/30 backdrop-blur-md">
                {selectedIndex + 1} / {memories.length}
              </span>

              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 text-white/90 hover:text-white bg-white/20 hover:bg-white/30 rounded-full transition-all border border-white/30 cursor-pointer backdrop-blur-md"
                aria-label="Close photo"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Center Image Viewer with Prev/Next buttons */}
            <div className="relative w-full max-w-3xl flex-1 flex items-center justify-center my-2">
              {/* Previous Button */}
              <button
                onClick={() => setSelectedIndex((prev) => (prev - 1 + memories.length) % memories.length)}
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 text-white bg-black/50 hover:bg-black/75 rounded-full transition-all backdrop-blur-md border border-white/20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Lightbox Animated Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[72vh] max-w-[88vw] sm:max-w-[80vw] flex flex-col items-center justify-center p-3 bg-stone-900/85 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
                >
                  <img
                    src={memories[selectedIndex]?.image}
                    alt={memories[selectedIndex]?.caption || `Photo ${selectedIndex + 1}`}
                    className="max-h-[62vh] max-w-full object-contain rounded-xl shadow-lg"
                  />
                  {memories[selectedIndex]?.caption && (
                    <p className="mt-3 text-white font-handwriting text-2xl sm:text-3xl text-center px-4">
                      {memories[selectedIndex].caption}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              <button
                onClick={() => setSelectedIndex((prev) => (prev + 1) % memories.length)}
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 text-white bg-black/50 hover:bg-black/75 rounded-full transition-all backdrop-blur-md border border-white/20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Bottom Tip */}
            <p className="text-white/70 text-xs font-sans pb-2">
              Swipe left or right to view more memories
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
