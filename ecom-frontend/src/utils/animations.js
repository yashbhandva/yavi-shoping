import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global animation configuration
export const animationConfig = {
  defaults: {
    duration: 0.5,
    ease: 'power2.out',
  },
  fast: {
    duration: 0.3,
    ease: 'power2.out',
  },
  slow: {
    duration: 0.8,
    ease: 'power2.inOut',
  },
  bounce: {
    duration: 0.6,
    ease: 'elastic.out(1, 0.5)',
  },
};

// Page transition animations
export const pageTransitions = {
  fadeIn: (element) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  },
  fadeOut: (element) => {
    return gsap.to(element, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    });
  },
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInUp: (element, delay = 0) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    });
  },
  fadeInLeft: (element, delay = 0) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      x: -50,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
    });
  },
  fadeInRight: (element, delay = 0) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      x: 50,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
    });
  },
};

// Hover animations
export const hoverAnimations = {
  lift: (element) => {
    return gsap.to(element, {
      y: -5,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    });
  },
  reset: (element) => {
    return gsap.to(element, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    });
  },
  scale: (element, scale = 1.05) => {
    return gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out',
    });
  },
  pulse: (element) => {
    return gsap.to(element, {
      scale: 1.05,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
  },
};

// Button animations
export const buttonAnimations = {
  tap: (element) => {
    return gsap.to(element, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
  },
  addToCart: (element) => {
    const tl = gsap.timeline();
    tl.to(element, { scale: 1.1, duration: 0.1, ease: 'power2.out' })
      .to(element, { scale: 0.9, duration: 0.15 })
      .to(element, { scale: 1, duration: 0.15, ease: 'back.out(1.7)' });
    return tl;
  },
};

// Cart animations
export const cartAnimations = {
  addToCart: (element, target) => {
    const elementRect = element.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    const clone = element.cloneNode(true);
    document.body.appendChild(clone);
    
    gsap.set(clone, {
      position: 'fixed',
      left: elementRect.left,
      top: elementRect.top,
      width: elementRect.width,
      height: elementRect.height,
      pointerEvents: 'none',
      zIndex: 9999,
      scale: 0.5,
      opacity: 0.8,
    });
    
    const tl = gsap.timeline();
    tl.to(clone, {
      x: targetRect.left - elementRect.left,
      y: targetRect.top - elementRect.top,
      scale: 0.2,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => document.body.removeChild(clone),
    });
    
    return tl;
  },
};

// Initialize animations on page load
export const initAnimations = () => {
  // Add any initialization logic here
  gsap.set('[data-animate]', { opacity: 0, y: 20 });
};

// Export GSAP for direct use
export { gsap, ScrollTrigger };
