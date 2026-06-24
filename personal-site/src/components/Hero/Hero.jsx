import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { useTypewriter } from '../../hooks/useTypewriter';

const getTypingTexts = (name) => [
  `你好，我是${name}`,
  '我是一名 Java 后端开发工程师',
  '热爱技术 · 专注底层 · 持续学习',
];

export default function Hero({ name, title, subtitle, avatar }) {
  const { text, isTyping } = useTypewriter(getTypingTexts(name), 100, 2000);
  const canvasRef = useRef(null);

  // 粒子背景
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // 创建粒子
    const PARTICLE_COUNT = 80;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 更新位置
        p.x += p.vx;
        p.y += p.vy;

        // 边界回弹
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();

        // 粒子连线
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* 粒子画布 */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* 渐变遮罩 */}
      <div className={styles.overlay} />

      {/* 内容 */}
      <div className={styles.content}>
        {/* 头像 */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarRing} />
          <div className={styles.avatar}>
            {avatar ? (
              <img src={avatar} alt={name} className={styles.avatarImg} />
            ) : (
              <span className={styles.avatarPlaceholder}>
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* 打字机标题 */}
        <h1 className={styles.title}>
          {text}
          <span className={`${styles.cursor} ${isTyping ? styles.cursorBlink : ''}`}>|</span>
        </h1>

        {/* 副标题 */}
        <p className={styles.subtitle}>{title}</p>
        <p className={styles.desc}>{subtitle}</p>

        {/* CTA 按钮 */}
        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>查看项目</a>
          <a href="#contact" className={styles.btnSecondary}>联系我</a>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollArrow}>↓</span>
        <span className={styles.scrollText}>向下滚动</span>
      </div>
    </section>
  );
}
