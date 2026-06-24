import styles from './About.module.css';
import { useReveal } from '../../hooks/useReveal';

export default function About({ bio, stats }) {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle">关于我</h2>

        <div className={styles.grid}>
          {/* 左侧：自我介绍 */}
          <div ref={ref} className={`${styles.bio} ${isVisible ? styles.visible : ''}`}>
            {bio.map((para, i) => (
              <p key={i} className={styles.text}>{para}</p>
            ))}
          </div>

          {/* 右侧：数据 */}
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}{s.suffix}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
