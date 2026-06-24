import { useState, useEffect, useRef } from 'react';

/**
 * useTypewriter — 打字机效果 Hook
 *
 * @param {string[]} texts - 要循环展示的文本数组
 * @param {number} typingSpeed - 每个字符的显示速度（毫秒）
 * @param {number} pauseDuration - 每段文本完成后停顿时间（毫秒）
 * @returns {{ text: string, isTyping: boolean }} 当前显示的文本和打字状态
 */
export function useTypewriter(texts = [], typingSpeed = 100, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndexRef.current];

    const type = () => {
      if (charIndexRef.current < currentText.length) {
        charIndexRef.current += 1;
        setDisplayText(currentText.slice(0, charIndexRef.current));
        setIsTyping(true);
        timerRef.current = setTimeout(type, typingSpeed);
      } else {
        // 打完，停顿后开始删除
        setIsTyping(false);
        timerRef.current = setTimeout(erase, pauseDuration);
      }
    };

    const erase = () => {
      if (charIndexRef.current > 0) {
        charIndexRef.current -= 1;
        setDisplayText(currentText.slice(0, charIndexRef.current));
        setIsTyping(true);
        timerRef.current = setTimeout(erase, typingSpeed / 2);
      } else {
        // 删完，切换到下一段文字
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        setIsTyping(false);
        timerRef.current = setTimeout(type, 500);
      }
    };

    timerRef.current = setTimeout(type, 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [texts, typingSpeed, pauseDuration]);

  return { text: displayText, isTyping };
}
