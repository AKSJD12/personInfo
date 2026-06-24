import { useRef } from 'react';
import styles from './About.module.css';
import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

function StatCard({ label, value, suffix }) {
  const { ref, isVisible } = useReveal();
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className={styles.statCard}>
      <span className={styles.statValue}>
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function About({ bio, stats }) {
  const sectionRef = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle">关于我</h2>

        <div className={styles.grid}>
          {/* 左侧：自我介绍 */}
          <div ref={sectionRef} className={styles.bio}>
            {bio.map((paragraph, i) => (
              <p key={i} className={styles.bioText}>{paragraph}</p>
            ))}
          </div>

          {/* 右侧：数据统计 */}
          <div className={styles.stats}>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
