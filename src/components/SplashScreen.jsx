import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence timing
    // Phase 0: Leaf appears (0s)
    // Phase 1: Draw house (1s)
    // Phase 2: Show full logo & text (2.5s)
    // Phase 3: Ribbon & Tagline (3.5s)
    // Phase 4: Curtain exit (5s)
    // Remove from DOM (6s)

    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setIsVisible(false), 5800)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div 
          className="splash-screen cinematic-splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Gold Curtain effect overlay during exit */}
          <motion.div 
            className="splash-curtain"
            initial={{ scaleY: 0 }}
            exit={{ 
              scaleY: 1, 
              transformOrigin: 'bottom',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
          />

          <div className="splash-content" style={{ zIndex: 10 }}>
            <div className="cinematic-logo-container">
              
              {/* Phase 0 & 1: Abstract Logo Construction */}
              <AnimatePresence>
                {phase < 2 && (
                  <motion.div 
                    className="abstract-logo-drawing"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  >
                    {/* Glowing Leaf */}
                    <motion.div 
                      className="glowing-leaf"
                      initial={{ opacity: 0, y: 20, scale: 0.5 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C7 2 3 7 3 12C3 17 7 22 12 22C17 22 21 17 21 12C21 7 17 2 12 2ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8ZM12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16Z" fill="#d8aa5a" className="leaf-glow"/>
                      </svg>
                    </motion.div>

                    {/* House Outline Drawing */}
                    {phase >= 1 && (
                      <motion.svg 
                        className="house-outline"
                        width="100" height="100" viewBox="0 0 100 100" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.path 
                          d="M10 50 L50 15 L90 50 M20 45 L20 85 L80 85 L80 45"
                          fill="transparent"
                          stroke="#d8aa5a"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Phase 2: Full Logo Reveal */}
              {phase >= 2 && (
                <motion.div
                  className="full-logo-reveal"
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <img src={logoImg} alt="ECO Home Interiors" className="splash-logo cinematic-logo" />
                </motion.div>
              )}
            </div>

            {/* Phase 3: Ribbon and Tagline */}
            {phase >= 3 && (
              <motion.div 
                className="tagline-container cinematic-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="cinematic-ribbon-wrapper">
                  <motion.div 
                    className="cinematic-gold-ribbon"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                <p className="splash-tagline">Transform Your Space Into a Better Life</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
