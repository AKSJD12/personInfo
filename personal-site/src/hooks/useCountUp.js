import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp — 数字递增动画 Hook
 *
 * @param {number} target - 目标数值
 * @param {number} duration - 动画持续时间（毫秒）
 * @param {boolean} start - 是否开始动画
 * @returns {number} 当前显示的数值
 */
export function useCountUp(target, duration = 2000, start = false) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCurrent(0);
      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic 缓动函数
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);

      setCurrent(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    startTimeRef.current = null;
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return current;
}
