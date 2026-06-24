import { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.css';

function ProjectCard({ title, description, tags, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.tags}>
        {tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle">项目经历</h2>
        <div className={styles.list}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
