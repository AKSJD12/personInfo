import { useState, useEffect, useRef } from 'react';

/**
 * useScrollSpy — 滚动监听 Hook
 * 监听页面滚动位置，返回当前在视口中的 section id
 *
 * @param {string[]} sectionIds - 要监听的 section id 列表
 * @param {object} options - IntersectionObserver 配置
 * @returns {string} 当前激活的 section id
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  useEffect(() => {
    const { rootMargin = '-20% 0px -60% 0px', threshold = 0 } = options;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin, threshold }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeId;
}
