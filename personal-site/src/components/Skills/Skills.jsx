import { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';

function SkillCard({ icon, name, level, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 每张卡片依次延迟 0.1s
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
    >
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
      <span className={styles.levelLabel}>
        {level >= 90 ? '精通' : level >= 80 ? '熟练' : level >= 70 ? '掌握' : '了解'}
      </span>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="sectionTitle">技术栈</h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
