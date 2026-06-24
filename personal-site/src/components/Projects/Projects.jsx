import { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.css';

function ProjectCard({ title, description, tags, link, image, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
    >
      {/* 截图区 */}
      <div className={styles.image}>
        {image ? (
          <img src={image} alt={title} className={styles.imageImg} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>📁</span>
          </div>
        )}
      </div>

      {/* 内容 */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {link && link !== '#' && (
          <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
            查看源码 →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle">项目经历</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
