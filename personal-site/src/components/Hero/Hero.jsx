import styles from './Hero.module.css';

export default function Hero({ name, title, subtitle }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        {/* 签名式排印：衬线名 + 细线 + 无衬线标题 */}
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.rule} />
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.cta}>查看项目</a>
          <a href="#contact" className={styles.ctaSecondary}>联系方式</a>
        </div>
      </div>
    </section>
  );
}
