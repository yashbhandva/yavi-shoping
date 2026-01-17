import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AnimePageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
      scale: 0.95,
      filter: "blur(10px)"
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)"
    },
    out: {
      opacity: 0,
      x: -100,
      scale: 1.05,
      filter: "blur(10px)"
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6
  };

  const overlayVariants = {
    initial: {
      scaleX: 0,
      originX: 0
    },
    animate: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      scaleX: 0,
      originX: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Anime-style transition overlay */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${location.pathname}`}
          className="fixed inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 z-50 pointer-events-none"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimePageTransition;