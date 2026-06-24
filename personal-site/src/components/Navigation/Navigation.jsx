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
  const [progress, setProgress] = useState(0);

  // 滚动检测：导航背景加深 + 进度条
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      {/* 进度条 */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={(e) => handleClick(e, 'hero')}>
          ◉ {name}
        </a>

        {/* 导航链接 */}
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
