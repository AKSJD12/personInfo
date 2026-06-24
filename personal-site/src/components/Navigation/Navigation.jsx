import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
];

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function Navigation({ name }) {
  const activeId = useScrollSpy(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleClick(e, 'hero')}>
          个人简历
        </a>
        <ul className={styles.links}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                onClick={(e) => handleClick(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
