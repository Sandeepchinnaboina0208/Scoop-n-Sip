
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  effect?: 'fade-bottom' | 'fade-left' | 'fade-right';
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  effect = 'fade-bottom',
  delay = 0,
  className = ''
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={`reveal ${className}`} 
      data-effect={effect}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
