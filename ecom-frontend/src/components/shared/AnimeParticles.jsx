import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimeParticles = ({ type = 'sakura', count = 15 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = `${type}-petal anime-optimized`;
      
      // Random starting position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (5 + Math.random() * 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      if (type === 'sparkle') {
        particle.innerHTML = '✨';
        particle.style.fontSize = (10 + Math.random() * 10) + 'px';
      }
      
      containerRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 15000);
    };

    // Create initial particles
    for (let i = 0; i < count; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [type, count]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimeParticles;