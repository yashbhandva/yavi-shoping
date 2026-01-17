import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animationConfig, scrollAnimations, hoverAnimations } from '../utils/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const useAnimation = (animationType, options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const hoverAnimationRef = useRef(null);

  // Initialize animation on mount and clean up on unmount
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Kill any existing animations
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // Apply the specified animation
    switch (animationType) {
      case 'fadeInUp':
        animationRef.current = gsap.from(element, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: options.delay || 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
            ...options.scrollTrigger,
          },
          ...options,
        });
        break;

      case 'fadeInLeft':
        animationRef.current = gsap.from(element, {
          x: -50,
          opacity: 0,
          duration: 0.7,
          delay: options.delay || 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            ...options.scrollTrigger,
          },
          ...options,
        });
        break;

      case 'fadeInRight':
        animationRef.current = gsap.from(element, {
          x: 50,
          opacity: 0,
          duration: 0.7,
          delay: options.delay || 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            ...options.scrollTrigger,
          },
          ...options,
        });
        break;

      case 'fadeIn':
        animationRef.current = gsap.from(element, {
          opacity: 0,
          duration: 0.8,
          delay: options.delay || 0,
          ease: 'power2.out',
          ...options,
        });
        break;

      case 'staggerChildren':
        const children = element.children;
        animationRef.current = gsap.utils.toArray(children).map((child, i) => {
          return gsap.from(child, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              ...options.scrollTrigger,
            },
            ...options,
          });
        });
        break;

      default:
        break;
    }

    // Set up hover effects if specified
    if (options.onHover) {
      const hoverEffect = options.onHover;
      const hoverOutEffect = options.onHoverOut || {};

      const onHover = () => {
        if (hoverAnimationRef.current) hoverAnimationRef.current.kill();
        hoverAnimationRef.current = gsap.to(element, {
          ...hoverEffect,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const onHoverOut = () => {
        if (hoverAnimationRef.current) hoverAnimationRef.current.kill();
        hoverAnimationRef.current = gsap.to(element, {
          ...hoverOutEffect,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      element.addEventListener('mouseenter', onHover);
      element.addEventListener('mouseleave', onHoverOut);

      return () => {
        if (hoverAnimationRef.current) hoverAnimationRef.current.kill();
        element.removeEventListener('mouseenter', onHover);
        element.removeEventListener('mouseleave', onHoverOut);
      };
    }

    // Clean up animation on unmount
    return () => {
      if (animationRef.current) {
        if (Array.isArray(animationRef.current)) {
          animationRef.current.forEach(anim => anim.kill());
        } else {
          animationRef.current.kill();
        }
      }
      if (hoverAnimationRef.current) {
        hoverAnimationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, options]);

  return elementRef;
};

export default useAnimation;
