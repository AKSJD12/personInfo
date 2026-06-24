import styles from './Contact.module.css';
import { useReveal } from '../../hooks/useReveal';

export default function Contact({ email, github, juejin, linkedin }) {
  const { ref, isVisible } = useReveal();

  const socialLinks = [
    { label: 'GitHub', url: github, icon: '🐙' },
    { label: 'Email', url: `mailto:${email}`, icon: '📧' },
    { label: '掘金', url: juejin, icon: '📝' },
    { label: 'LinkedIn', url: linkedin, icon: '💼' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="sectionTitle">联系我</h2>

        <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.wrapperVisible : ''}`}>
          {/* 联系信息 */}
          <div className={styles.info}>
            <a href={`mailto:${email}`} className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <span>{email}</span>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <span className={styles.infoIcon}>🐙</span>
              <span>{github}</span>
            </a>
          </div>

          {/* 社交图标 */}
          <div className={styles.socials}>
            {socialLinks.map((item, i) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title={item.label}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={styles.socialIcon}>{item.icon}</span>
                <span className={styles.socialLabel}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
