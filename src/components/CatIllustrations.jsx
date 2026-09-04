import React from 'react';
import { motion } from 'framer-motion';

// Welcome Cat - Curious, soft, cute cat looking up
export const WelcomeCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8f6" />
          <stop offset="100%" stopColor="#fde8e8" />
        </linearGradient>
        <linearGradient id="earPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M 140 150 Q 180 140 165 100 Q 155 80 145 90" stroke="#fbcfe8" strokeWidth="12" fill="none" strokeLinecap="round"/>

      {/* Body */}
      <ellipse cx="100" cy="140" rx="45" ry="35" fill="url(#catGrad)"/>

      {/* Paws */}
      <ellipse cx="80" cy="168" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>
      <ellipse cx="120" cy="168" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>

      {/* Left Ear */}
      <polygon points="55,80 72,40 92,72" fill="url(#catGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="62,75 72,48 85,72" fill="url(#earPink)"/>

      {/* Right Ear */}
      <polygon points="108,72 128,40 145,80" fill="url(#catGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="115,72 128,48 138,75" fill="url(#earPink)"/>

      {/* Head */}
      <circle cx="100" cy="95" r="40" fill="url(#catGrad)"/>

      {/* Eyes */}
      <ellipse cx="83" cy="92" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="81" cy="89" r="2.5" fill="#ffffff"/>
      <circle cx="85" cy="94" r="1.2" fill="#ffffff"/>

      <ellipse cx="117" cy="92" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="115" cy="89" r="2.5" fill="#ffffff"/>
      <circle cx="119" cy="94" r="1.2" fill="#ffffff"/>

      {/* Nose */}
      <polygon points="97,99 103,99 100,102" fill="#fb7185"/>

      {/* Mouth */}
      <path d="M 94 105 Q 100 110 100 104 Q 100 110 106 105" stroke="#881337" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Blush Cheeks */}
      <ellipse cx="73" cy="100" rx="7" ry="4" fill="#fb7185" opacity="0.4"/>
      <ellipse cx="127" cy="100" rx="7" ry="4" fill="#fb7185" opacity="0.4"/>

      {/* Whiskers */}
      <line x1="50" y1="92" x2="68" y2="95" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="48" y1="100" x2="68" y2="99" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="132" y1="95" x2="152" y2="92" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="132" y1="99" x2="152" y2="100" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </motion.div>
);

// Angry Cat - Cute pouting cat for NO reaction
export const AngryCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="angryCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#ffe4e6" />
        </linearGradient>
      </defs>

      <path d="M 145 45 L 160 30 M 152 30 L 152 45 M 145 35 L 160 35" stroke="#e11d48" strokeWidth="3" strokeLinecap="round"/>

      <polygon points="50,75 65,35 88,68" fill="url(#angryCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="58,72 65,42 80,68" fill="#fb7185"/>

      <polygon points="112,68 135,35 150,75" fill="url(#angryCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="120,68 135,42 142,72" fill="#fb7185"/>

      <ellipse cx="100" cy="140" rx="48" ry="38" fill="url(#angryCatGrad)"/>

      <ellipse cx="85" cy="145" rx="14" ry="10" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>
      <ellipse cx="115" cy="145" rx="14" ry="10" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>

      <circle cx="100" cy="95" r="42" fill="url(#angryCatGrad)"/>

      <line x1="72" y1="78" x2="90" y2="88" stroke="#be123c" strokeWidth="4" strokeLinecap="round"/>
      <line x1="128" y1="78" x2="110" y2="88" stroke="#be123c" strokeWidth="4" strokeLinecap="round"/>

      <ellipse cx="83" cy="94" rx="7" ry="7" fill="#881337"/>
      <ellipse cx="117" cy="94" rx="7" ry="7" fill="#881337"/>
      <circle cx="81" cy="92" r="2" fill="#ffffff"/>
      <circle cx="115" cy="92" r="2" fill="#ffffff"/>

      <path d="M 92 112 Q 100 104 108 112" stroke="#be123c" strokeWidth="3" fill="none" strokeLinecap="round"/>

      <ellipse cx="72" cy="102" rx="9" ry="5" fill="#f43f5e" opacity="0.6"/>
      <ellipse cx="128" cy="102" rx="9" ry="5" fill="#f43f5e" opacity="0.6"/>

      <line x1="45" y1="95" x2="65" y2="97" stroke="#f43f5e" strokeWidth="1.5"/>
      <line x1="135" y1="97" x2="155" y2="95" stroke="#f43f5e" strokeWidth="1.5"/>
    </svg>
  </motion.div>
);

// Happy Cat - Joyful winking cat for YES reaction
export const HappyCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    initial={{ scale: 0.8, y: 10 }}
    animate={{ scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="happyCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8f6" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
      </defs>

      <polygon points="52,75 68,32 90,68" fill="url(#happyCatGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="60,72 68,40 82,68" fill="#fb7185"/>

      <polygon points="110,68 132,32 148,75" fill="url(#happyCatGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="118,68 132,40 140,72" fill="#fb7185"/>

      <ellipse cx="100" cy="140" rx="46" ry="36" fill="url(#happyCatGrad)"/>

      <ellipse cx="78" cy="148" rx="10" ry="7" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>
      <ellipse cx="122" cy="148" rx="10" ry="7" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>

      <circle cx="100" cy="92" r="42" fill="url(#happyCatGrad)"/>

      <path d="M 75 92 Q 83 84 91 92" stroke="#881337" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 109 92 Q 117 84 125 92" stroke="#881337" strokeWidth="3" fill="none" strokeLinecap="round"/>

      <polygon points="97,97 103,97 100,100" fill="#fb7185"/>
      <path d="M 93 103 Q 100 115 107 103 Z" fill="#e11d48"/>

      <ellipse cx="71" cy="98" rx="8" ry="5" fill="#f43f5e" opacity="0.5"/>
      <ellipse cx="129" cy="98" rx="8" ry="5" fill="#f43f5e" opacity="0.5"/>

      <path d="M 148 70 L 152 75 L 148 80 L 144 75 Z" fill="#fde047"/>
    </svg>
  </motion.div>
);

// Party Cat - Cute cat wearing party hat for birthday screen
export const PartyCat = ({ className = "w-56 h-56" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-xl">
      <defs>
        <linearGradient id="partyCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff1f2" />
        </linearGradient>
        <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>

      <polygon points="100,20 75,75 125,75" fill="url(#hatGrad)"/>
      <circle cx="100" cy="18" r="7" fill="#fde047"/>
      <path d="M 83 58 Q 100 62 117 58" stroke="#ffffff" strokeWidth="3" fill="none"/>
      <path d="M 89 42 Q 100 45 111 42" stroke="#ffffff" strokeWidth="3" fill="none"/>

      <polygon points="48,95 62,50 85,88" fill="url(#partyCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="56,92 62,58 78,88" fill="#fb7185"/>

      <polygon points="115,88 138,50 152,95" fill="url(#partyCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="122,88 138,58 144,92" fill="#fb7185"/>

      <ellipse cx="100" cy="160" rx="50" ry="40" fill="url(#partyCatGrad)"/>

      <rect x="85" y="152" width="30" height="22" rx="4" fill="#fb7185"/>
      <path d="M 80 152 Q 100 135 120 152 Z" fill="#ffffff"/>
      <circle cx="100" cy="140" r="5" fill="#e11d48"/>
      <line x1="100" y1="135" x2="100" y2="128" stroke="#fde047" strokeWidth="2"/>

      <ellipse cx="76" cy="165" rx="10" ry="7" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>
      <ellipse cx="124" cy="165" rx="10" ry="7" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>

      <circle cx="100" cy="112" r="44" fill="url(#partyCatGrad)"/>

      <ellipse cx="82" cy="110" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="80" cy="107" r="2.5" fill="#ffffff"/>

      <ellipse cx="118" cy="110" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="116" cy="107" r="2.5" fill="#ffffff"/>

      <path d="M 94 120 Q 100 126 106 120" stroke="#881337" strokeWidth="2" fill="none" strokeLinecap="round"/>

      <ellipse cx="70" cy="118" rx="8" ry="5" fill="#fb7185" opacity="0.5"/>
      <ellipse cx="130" cy="118" rx="8" ry="5" fill="#fb7185" opacity="0.5"/>

      <path d="M 35 100 L 40 105 L 35 110 L 30 105 Z" fill="#fde047"/>
      <path d="M 165 115 L 170 120 L 165 125 L 160 120 Z" fill="#f43f5e"/>
    </svg>
  </motion.div>
);

// STICKER 1: Celebrating Cats with Party Hat, Cake, and "i love you" Speech Bubble (Matching Screenshot 2)
export const StickerCatsCelebrating = ({ className = "w-52 h-52" }) => (
  <motion.div
    className={`relative flex items-center justify-center ${className}`}
    whileHover={{ scale: 1.05 }}
  >
    <svg viewBox="0 0 240 220" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="stickerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#f472b6" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* "i love you" Speech Bubble */}
      <g filter="url(#stickerShadow)">
        <rect x="110" y="15" width="115" height="42" rx="20" fill="#ee9ba8" />
        <path d="M 140 57 L 130 68 L 152 57 Z" fill="#ee9ba8" />
        <text
          x="167"
          y="41"
          fontFamily="'Dancing Script', 'Caveat', cursive"
          fontSize="22"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
        >
          i love you
        </text>
      </g>

      {/* Grey/Brown Cat with Party Hat */}
      <g>
        {/* Body */}
        <ellipse cx="80" cy="155" rx="35" ry="30" fill="#8c8282" />
        {/* Head */}
        <ellipse cx="75" cy="120" rx="38" ry="32" fill="#8c8282" />
        {/* Ears */}
        <polygon points="45,95 55,68 70,95" fill="#8c8282" />
        <polygon points="50,93 55,75 65,93" fill="#ffb4c2" />
        <polygon points="85,95 98,68 110,95" fill="#8c8282" />
        <polygon points="88,93 98,75 105,93" fill="#ffb4c2" />
        {/* Party Hat */}
        <polygon points="75,35 55,80 95,80" fill="#a4d8ec" />
        <path d="M 58 70 L 92 70" stroke="#f472b6" strokeWidth="4" />
        <path d="M 64 55 L 86 55" stroke="#fde047" strokeWidth="4" />
        <circle cx="75" cy="32" r="7" fill="#eab308" />
        {/* Eyes & Mouth */}
        <circle cx="62" cy="122" r="4.5" fill="#2d2626" />
        <circle cx="88" cy="122" r="4.5" fill="#2d2626" />
        <ellipse cx="53" cy="128" rx="6" ry="4" fill="#ff758c" opacity="0.6" />
        <ellipse cx="97" cy="128" rx="6" ry="4" fill="#ff758c" opacity="0.6" />
        <path d="M 70 126 Q 75 132 80 126" stroke="#2d2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* White Cat */}
      <g>
        {/* Body */}
        <ellipse cx="170" cy="155" rx="36" ry="30" fill="#ffffff" stroke="#e2d8d8" strokeWidth="1.5" />
        {/* Head */}
        <ellipse cx="170" cy="120" rx="38" ry="32" fill="#ffffff" stroke="#e2d8d8" strokeWidth="1.5" />
        {/* Ears */}
        <polygon points="140,95 150,68 165,95" fill="#ffffff" stroke="#e2d8d8" strokeWidth="1" />
        <polygon points="145,93 150,75 160,93" fill="#ffb4c2" />
        <polygon points="180,95 192,68 202,95" fill="#ffffff" stroke="#e2d8d8" strokeWidth="1" />
        <polygon points="184,93 192,75 198,93" fill="#ffb4c2" />
        {/* Eyes & Mouth */}
        <circle cx="157" cy="122" r="4.5" fill="#2d2626" />
        <circle cx="183" cy="122" r="4.5" fill="#2d2626" />
        <ellipse cx="148" cy="128" rx="6" ry="4" fill="#ff758c" opacity="0.6" />
        <ellipse cx="192" cy="128" rx="6" ry="4" fill="#ff758c" opacity="0.6" />
        <path d="M 165 127 Q 170 133 175 127" stroke="#2d2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Birthday Cake in front */}
      <g>
        <ellipse cx="120" cy="195" rx="42" ry="10" fill="#e5e7eb" />
        <rect x="90" y="165" width="60" height="28" rx="6" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
        <path d="M 90 174 Q 100 182 110 174 Q 120 182 130 174 Q 140 182 150 174 L 150 165 L 90 165 Z" fill="#ffffff" />
        <rect x="117" y="150" width="6" height="15" rx="1" fill="#93c5fd" />
        <ellipse cx="120" cy="147" rx="3.5" ry="6" fill="#fde047" />
        <ellipse cx="120" cy="148" rx="2" ry="3.5" fill="#ef4444" />
      </g>
    </svg>
  </motion.div>
);

// STICKER 2: 3 Stacked Cute Bears (Top White Bear with Heart Bubble 💕, Panda Middle, Brown Bear Bottom) (Matching Screenshot 3)
export const StickerStackedBears = ({ className = "w-48 h-72" }) => (
  <motion.div
    className={`relative flex flex-col items-center justify-center ${className}`}
    whileHover={{ scale: 1.05 }}
  >
    <svg viewBox="0 0 200 320" className="w-full h-full drop-shadow-md">
      {/* Heart Speech Bubble on top */}
      <g>
        <circle cx="100" cy="30" r="22" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M 95 48 L 92 56 L 102 50 Z" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
        <path
          d="M 100 24 C 95 18 86 24 100 34 C 114 24 105 18 100 24 Z"
          fill="#f43f5e"
        />
      </g>

      {/* TOP BEAR: Cute White Bear */}
      <g>
        <ellipse cx="100" cy="100" rx="42" ry="32" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        <circle cx="68" cy="78" r="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        <circle cx="68" cy="78" r="6" fill="#fce7f3" />
        <circle cx="132" cy="78" r="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        <circle cx="132" cy="78" r="6" fill="#fce7f3" />
        <circle cx="82" cy="98" r="4.5" fill="#2d2626" />
        <circle cx="118" cy="98" r="4.5" fill="#2d2626" />
        <ellipse cx="72" cy="104" rx="7" ry="4" fill="#fda4af" opacity="0.6" />
        <ellipse cx="128" cy="104" rx="7" ry="4" fill="#fda4af" opacity="0.6" />
        <ellipse cx="100" cy="105" rx="5" ry="3.5" fill="#2d2626" />
        <path d="M 96 110 Q 100 114 104 110" stroke="#2d2626" strokeWidth="2" fill="none" />
        {/* Paws resting on panda */}
        <ellipse cx="75" cy="124" rx="9" ry="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        <ellipse cx="125" cy="124" rx="9" ry="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
      </g>

      {/* MIDDLE BEAR: Panda Bear */}
      <g>
        <ellipse cx="100" cy="180" rx="52" ry="38" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        {/* Black Panda Ears */}
        <circle cx="58" cy="152" r="12" fill="#374151" />
        <circle cx="142" cy="152" r="12" fill="#374151" />
        {/* Black Eye Patches */}
        <ellipse cx="78" cy="178" rx="10" ry="12" fill="#374151" rotate="-15" />
        <ellipse cx="122" cy="178" rx="10" ry="12" fill="#374151" rotate="15" />
        <circle cx="78" cy="176" r="3.5" fill="#ffffff" />
        <circle cx="122" cy="176" r="3.5" fill="#ffffff" />
        <ellipse cx="68" cy="184" rx="7" ry="4" fill="#fda4af" opacity="0.6" />
        <ellipse cx="132" cy="184" rx="7" ry="4" fill="#fda4af" opacity="0.6" />
        <ellipse cx="100" cy="184" rx="5" ry="3.5" fill="#2d2626" />
        <path d="M 96 188 Q 100 192 104 188" stroke="#2d2626" strokeWidth="2" fill="none" />
        {/* Paws */}
        <ellipse cx="70" cy="208" rx="11" ry="7" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
        <ellipse cx="130" cy="208" rx="11" ry="7" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
      </g>

      {/* BOTTOM BEAR: Brown Bear */}
      <g>
        <ellipse cx="100" cy="265" rx="60" ry="45" fill="#c08457" />
        {/* Ears */}
        <circle cx="52" cy="232" r="14" fill="#c08457" />
        <circle cx="52" cy="232" r="8" fill="#8c5836" />
        <circle cx="148" cy="232" r="14" fill="#c08457" />
        <circle cx="148" cy="232" r="8" fill="#8c5836" />
        {/* Eyes & Snout */}
        <circle cx="74" cy="262" r="5" fill="#2d2626" />
        <circle cx="126" cy="262" r="5" fill="#2d2626" />
        <ellipse cx="62" cy="268" rx="8" ry="5" fill="#fb7185" opacity="0.6" />
        <ellipse cx="138" cy="268" rx="8" ry="5" fill="#fb7185" opacity="0.6" />
        <ellipse cx="100" cy="268" rx="16" ry="12" fill="#edd6c4" />
        <ellipse cx="100" cy="264" rx="5" ry="3.5" fill="#2d2626" />
        <path d="M 95 270 Q 100 275 105 270" stroke="#2d2626" strokeWidth="2" fill="none" />
        {/* Paws */}
        <ellipse cx="60" cy="298" rx="16" ry="10" fill="#c08457" />
        <ellipse cx="140" cy="298" rx="16" ry="10" fill="#c08457" />
      </g>
    </svg>
  </motion.div>
);

// STICKER 3: Ultra Clear Bubu & Dudu Bear Hug Sticker (Matching attached screenshot)
export const StickerBearHug = ({ className = "w-64 h-64" }) => (
  <motion.div
    className={`relative flex items-center justify-center ${className}`}
    animate={{ scale: [1, 1.04, 1] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative p-3 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-rose-200/80 max-w-sm flex items-center justify-center pink-glow">
      <img
        src="/images/bear_hug_sticker.png"
        alt="Clear Bear Hug Sticker"
        className="w-full h-full object-contain rounded-2xl drop-shadow-lg"
      />
    </div>
  </motion.div>
);
