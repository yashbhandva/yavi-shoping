import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef();

  // Page enter animation
  useEffect(() => {
    if (!transitionRef.current) return;
    
    gsap.set(transitionRef.current, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.out' },
    });
    
    tl.to(transitionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    return () => tl.kill();
  }, [location.key]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        ref={transitionRef}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
