import { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';

function SkillItem({ name, level, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const label = level >= 90 ? '精通' : level >= 80 ? '熟练' : level >= 70 ? '掌握' : '了解';

  return (
    <div
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <span className={styles.name}>{name}</span>
      <span className={styles.level}>{label}</span>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className={`section sectionAlt`}>
      <div className="container">
        <h2 className="sectionTitle">技术栈</h2>
        <div className={styles.grid}>
          {skills.map((s, i) => (
            <SkillItem key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
