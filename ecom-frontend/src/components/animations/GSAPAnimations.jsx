import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPFadeIn = (trigger = true) => {
  const ref = useRef();

  useEffect(() => {
    if (trigger && ref.current) {
      gsap.fromTo(ref.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [trigger]);

  return ref;
};

export const useGSAPSlideIn = (direction = 'left') => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
      const y = direction === 'up' ? -100 : direction === 'down' ? 100 : 0;
      
      gsap.fromTo(ref.current,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [direction]);

  return ref;
};

export const useGSAPScale = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return ref;
};