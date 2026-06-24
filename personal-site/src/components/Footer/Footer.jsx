import styles from './Footer.module.css';

export default function Footer({ name, year, tech }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {year} {name}</p>
      <p className={styles.tech}>{tech}</p>
    </footer>
  );
}
