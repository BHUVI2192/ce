
import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { threshold = 0, rootMargin = '0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, threshold, rootMargin]);

  return isIntersecting;
}
