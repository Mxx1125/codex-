import { site } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.name}>{site.name}</p>
            <p className={styles.tagline}>
              {site.description} · {site.tagline}
            </p>
          </div>
          <p className={styles.copyright}>{site.copyright}</p>
        </div>
        <p className={styles.note}>{site.footerNote}</p>
      </div>
    </footer>
  );
}
