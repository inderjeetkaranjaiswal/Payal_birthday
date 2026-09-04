import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayContent } from './data/birthdayContent';
import { FloatingBalloons } from './components/FloatingBalloons';
import { MusicPlayer } from './components/MusicPlayer';
import { WelcomeCat, AngryCat, HappyCat, PartyCat } from './components/CatIllustrations';
import { Envelope } from './components/Envelope';
import { MemoryGallery } from './components/MemoryGallery';
import { GiftBox } from './components/GiftBox';
import { BalloonsSection } from './components/BalloonsSection';
import { CakeWishSection } from './components/CakeWishSection';
import { RoseBouquetSection } from './components/RoseBouquetSection';
import { VirtualHug } from './components/VirtualHug';

export default function App() {
  // Screen state: WELCOME -> NO_REACTION -> YES_REACTION -> BIRTHDAY -> LETTER -> MEMORIES -> SURPRISE -> BALLOONS -> CAKE_WISH -> ROSE_BOUQUET
  const [currentScreen, setCurrentScreen] = useState('WELCOME');

  // Smooth page transition variants
  const pageVariants = {
    initial: { opacity: 0, scale: 0.96, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.04, y: -15 }
  };

  const transitionConfig = { duration: 0.45, ease: "easeInOut" };

  return (
    <main className="min-h-screen w-full bg-notebook-grid relative overflow-x-hidden flex flex-col justify-between selection:bg-rose-200">
      {/* Background Ambient Floating Balloons */}
      <FloatingBalloons count={14} />

      {/* Floating Top Corner Music Player */}
      <MusicPlayer audioPath={birthdayContent.musicPath} />

      {/* Main Interactive Screen Container */}
      <div className="relative z-20 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 my-auto">
        <AnimatePresence mode="wait">
          
          {/* SCREEN 1: WELCOME */}
          {currentScreen === 'WELCOME' && (
            <motion.div
              key="welcome"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full max-w-lg bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-rose-200 text-center flex flex-col items-center pink-glow"
            >
              <WelcomeCat className="w-48 h-48 sm:w-56 sm:h-56 mb-4" />

              <h1 className="font-heading text-4xl sm:text-5xl text-rose-950 font-bold tracking-tight mb-2">
                {birthdayContent.welcomeTitle}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-rose-900 font-medium mb-1">
                {birthdayContent.welcomeMessage}
              </p>

              <p className="font-handwriting text-3xl sm:text-4xl text-rose-800 font-bold mb-8">
                {birthdayContent.welcomeQuestion}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentScreen('YES_REACTION')}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-rose-300/50 border border-rose-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{birthdayContent.yesButtonText}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentScreen('NO_REACTION')}
                  className="w-full py-3.5 px-6 bg-stone-100 text-stone-700 font-bold text-lg rounded-full shadow-md hover:bg-stone-200 border border-stone-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{birthdayContent.noButtonText}</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* SCREEN 2: NO REACTION */}
          {currentScreen === 'NO_REACTION' && (
            <motion.div
              key="no_reaction"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full max-w-lg bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-rose-300 text-center flex flex-col items-center wine-glow"
            >
              <AngryCat className="w-48 h-48 sm:w-56 sm:h-56 mb-4" />

              <h2 className="font-heading text-3xl sm:text-4xl text-rose-950 font-bold mb-3 tracking-wide">
                {birthdayContent.noReactionTitle}
              </h2>

              <p className="font-handwriting text-3xl sm:text-4xl text-rose-800 font-bold mb-8">
                {birthdayContent.noReactionMessage}
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentScreen('WELCOME')}
                className="animate-bounce-cute py-3.5 px-8 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-rose-400/50 border border-rose-300 cursor-pointer flex items-center gap-2"
              >
                <span>{birthdayContent.goBackButtonText}</span>
              </motion.button>
            </motion.div>
          )}

          {/* SCREEN 3: YES REACTION */}
          {currentScreen === 'YES_REACTION' && (
            <motion.div
              key="yes_reaction"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full max-w-lg bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-rose-200 text-center flex flex-col items-center pink-glow"
            >
              <HappyCat className="w-48 h-48 sm:w-56 sm:h-56 mb-4" />

              <h2 className="font-handwriting text-4xl sm:text-5xl text-rose-900 font-bold mb-2">
                {birthdayContent.yesReactionTitle}
              </h2>

              <p className="font-sans text-lg sm:text-xl text-rose-950 font-medium mb-8">
                {birthdayContent.yesReactionSubtitle}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentScreen('BIRTHDAY')}
                className="py-3.5 px-8 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-rose-400/40 border border-rose-300 cursor-pointer flex items-center gap-2"
              >
                <span>{birthdayContent.letsBeginButtonText}</span>
              </motion.button>
            </motion.div>
          )}

          {/* SCREEN 4: BIRTHDAY REVEAL */}
          {currentScreen === 'BIRTHDAY' && (
            <motion.div
              key="birthday"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full max-w-xl bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-rose-200 text-center flex flex-col items-center pink-glow"
            >
              <PartyCat className="w-56 h-56 sm:w-64 sm:h-64 mb-2" />

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-rose-950 font-bold mb-4 leading-tight">
                {birthdayContent.birthdayTitle}
              </h1>

              <p className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-2">
                {birthdayContent.birthdaySubtitle1}
              </p>

              <p className="font-sans text-base sm:text-lg text-rose-800 font-medium mb-8">
                {birthdayContent.birthdaySubtitle2}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentScreen('LETTER')}
                className="py-3.5 px-8 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg border border-rose-300 cursor-pointer flex items-center gap-2"
              >
                <span>NEXT</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          )}

          {/* SCREEN 5: INTERACTIVE LETTER */}
          {currentScreen === 'LETTER' && (
            <motion.div
              key="letter"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <Envelope
                header={birthdayContent.letterHeader}
                prompt={birthdayContent.envelopePrompt}
                greeting={birthdayContent.letterGreeting}
                paragraphs={birthdayContent.letterParagraphs}
                quote={birthdayContent.letterQuote}
                signoff={birthdayContent.letterSignoff}
                onNext={() => setCurrentScreen('MEMORIES')}
              />
            </motion.div>
          )}

          {/* SCREEN 6: MEMORIES GALLERY */}
          {currentScreen === 'MEMORIES' && (
            <motion.div
              key="memories"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <MemoryGallery
                title={birthdayContent.memoriesTitle}
                subheading={birthdayContent.memoriesSubheading}
                memories={birthdayContent.memories}
                footerText={birthdayContent.memoriesFooterText}
                footerSubtext={birthdayContent.memoriesFooterSubtext}
                onNext={() => setCurrentScreen('SURPRISE')}
              />
            </motion.div>
          )}

          {/* SCREEN 7: SURPRISE GIFT */}
          {currentScreen === 'SURPRISE' && (
            <motion.div
              key="surprise"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <GiftBox
                title={birthdayContent.surpriseTitle}
                prompt={birthdayContent.giftPrompt}
                onNext={() => setCurrentScreen('BALLOONS')}
              />
            </motion.div>
          )}

          {/* SCREEN 8: 3 INTERACTIVE BALLOONS */}
          {currentScreen === 'BALLOONS' && (
            <motion.div
              key="balloons"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <BalloonsSection onNext={() => setCurrentScreen('CAKE_WISH')} />
            </motion.div>
          )}

          {/* SCREEN 9: CAKE & CANDLE WISH */}
          {currentScreen === 'CAKE_WISH' && (
            <motion.div
              key="cake_wish"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <CakeWishSection onNext={() => setCurrentScreen('ROSE_BOUQUET')} />
            </motion.div>
          )}

          {/* SCREEN 10: ROSE BOUQUET */}
          {currentScreen === 'ROSE_BOUQUET' && (
            <motion.div
              key="rose_bouquet"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <RoseBouquetSection onNext={() => setCurrentScreen('VIRTUAL_HUG')} />
            </motion.div>
          )}

          {/* SCREEN 11: VIRTUAL HUG (FINAL SURPRISE PAGE) */}
          {currentScreen === 'VIRTUAL_HUG' && (
            <motion.div
              key="virtual_hug"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionConfig}
              className="w-full"
            >
              <VirtualHug onReplay={() => setCurrentScreen('WELCOME')} />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer Branding */}
      <footer className="relative z-20 text-center py-4 text-xs font-sans text-rose-800/60">
        Crafted with love for Payal's Birthday ✨
      </footer>
    </main>
  );
}
