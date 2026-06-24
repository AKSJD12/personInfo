import styles from './Footer.module.css';

export default function Footer({ name, year, tech }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <p className={styles.text}>
        © {year} {name}. All Rights Reserved.
      </p>
      <p className={styles.tech}>Built with {tech}</p>
    </footer>
  );
}
