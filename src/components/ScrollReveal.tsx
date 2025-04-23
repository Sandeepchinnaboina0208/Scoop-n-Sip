import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  effect?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getEffectStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      opacity: 0,
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
    };

    const visibleStyles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
    };

    let effectStyles: React.CSSProperties = {};

    switch (effect) {
      case 'fade-up':
        effectStyles = {
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        };
        break;
      case 'fade-down':
        effectStyles = {
          transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
        };
        break;
      case 'fade-left':
        effectStyles = {
          transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
        };
        break;
      case 'fade-right':
        effectStyles = {
          transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
        };
        break;
      case 'zoom-in':
        effectStyles = {
          transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        };
        break;
      case 'zoom-out':
        effectStyles = {
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
        };
        break;
      default:
        effectStyles = {
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        };
    }

    return { ...baseStyles, ...effectStyles, ...visibleStyles };
  };

  return (
    <div ref={ref} style={getEffectStyles()}>
      {children}
    </div>
  );
};

export default ScrollReveal;