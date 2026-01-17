import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimeGSAP = () => {
  const elementRef = useRef(null);

  const animeSlideIn = (element, options = {}) => {
    const defaults = {
      duration: 1,
      x: -100,
      opacity: 0,
      scale: 0.8,
      rotation: -5,
      ease: "back.out(1.7)"
    };
    const config = { ...defaults, ...options };

    gsap.fromTo(element, 
      { 
        x: config.x, 
        opacity: config.opacity, 
        scale: config.scale, 
        rotation: config.rotation 
      },
      { 
        x: 0, 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: config.duration, 
        ease: config.ease 
      }
    );
  };

  const animePopIn = (element, options = {}) => {
    const defaults = {
      duration: 0.8,
      scale: 0.3,
      rotation: -180,
      ease: "elastic.out(1, 0.5)"
    };
    const config = { ...defaults, ...options };

    gsap.fromTo(element,
      { 
        scale: config.scale, 
        rotation: config.rotation, 
        opacity: 0 
      },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1, 
        duration: config.duration, 
        ease: config.ease 
      }
    );
  };

  const animeFloating = (element, options = {}) => {
    const defaults = {
      duration: 3,
      y: 20,
      ease: "sine.inOut"
    };
    const config = { ...defaults, ...options };

    gsap.to(element, {
      y: config.y,
      duration: config.duration,
      repeat: -1,
      yoyo: true,
      ease: config.ease
    });
  };

  const animeSparkleTrail = (element, targetElement) => {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    document.body.appendChild(sparkle);

    const startRect = element.getBoundingClientRect();
    const endRect = targetElement.getBoundingClientRect();

    gsap.set(sparkle, {
      x: startRect.left + startRect.width / 2,
      y: startRect.top + startRect.height / 2,
      scale: 0
    });

    gsap.to(sparkle, {
      x: endRect.left + endRect.width / 2,
      y: endRect.top + endRect.height / 2,
      scale: 1.5,
      rotation: 360,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(sparkle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => sparkle.remove()
        });
      }
    });
  };

  const animeScrollReveal = (element, options = {}) => {
    const defaults = {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    };
    const config = { ...defaults, ...options };

    gsap.fromTo(element,
      { y: config.y, opacity: config.opacity },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    elementRef,
    animeSlideIn,
    animePopIn,
    animeFloating,
    animeSparkleTrail,
    animeScrollReveal
  };
};

export default useAnimeGSAP;