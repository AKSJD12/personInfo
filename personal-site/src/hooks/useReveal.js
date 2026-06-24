import { useRef, useEffect, useState } from 'react';

/**
 * useReveal — 滚动渐入 Hook
 * 元素进入视口时自动触发淡入动画
 *
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
