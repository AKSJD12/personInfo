import styles from './Contact.module.css';
import { useReveal } from '../../hooks/useReveal';

export default function Contact({ email, github }) {
  const { ref, isVisible } = useReveal();

  const items = [
    { label: 'Email', value: email, href: `mailto:${email}`, icon: '→' },
    { label: 'GitHub', value: github, href: github, icon: '→' },
  ];

  return (
    <section id="contact" className={`section sectionAlt`}>
      <div className="container">
        <h2 className="sectionTitle">联系我</h2>

        <div ref={ref} className={`${styles.panel} ${isVisible ? styles.visible : ''}`}>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'GitHub' ? '_blank' : undefined}
              rel={item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
              className={styles.row}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.arrow}>{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
