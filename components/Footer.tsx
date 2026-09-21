import Link from 'next/link';
import { site, navigation, boutiques, type Social } from '@/data/content';
import styles from './Footer.module.css';

function SocialIcon({ name }: { name: Social['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 22,
    height: 22,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'wechat':
      return (
        <svg {...common}>
          <path d="M8.5 3.5C4.9 3.5 2 5.9 2 8.9c0 1.7.9 3.2 2.4 4.2L3.8 15l2.5-1.3c.7.2 1.4.3 2.2.3" />
          <path d="M15.5 6.5c3.1 0 5.5 2 5.5 4.5s-2.4 4.5-5.5 4.5c-.5 0-1-.1-1.5-.2L11 16.6l.6-1.6c-1.2-.8-1.9-1.9-1.9-3.1" />
        </svg>
      );
    case 'weibo':
      return (
        <svg {...common}>
          <path d="M12 4.5c-4.4 0-7.5 3.4-7.5 7.5S7.6 19.5 12 19.5s7.5-3.4 7.5-7.5-3.1-7.5-7.5-7.5z" />
          <circle cx="12" cy="12" r="2.6" />
          <path d="M3.5 9.5c1-1.5 2.4-2.4 4.1-2.8M20.5 9.5c-1-1.5-2.4-2.4-4.1-2.8" />
        </svg>
      );
    case 'xiaohongshu':
      return (
        <svg {...common}>
          <path d="M12 5.5C10 4 7.5 4 4.5 5v12c3-1 5.5-1 7.5 0 2-1 4.5-1 7.5 0V5c-3-1-5.5-1-7.5.5z" />
          <path d="M12 5.5V17.5" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.name}>{site.name}</p>
            <p className={styles.statement}>{site.statement}</p>
            <p className={styles.sub}>{site.description} · {site.founded}</p>
          </div>

          <nav className={styles.col} aria-label="页脚导航">
            <h3 className={styles.colTitle}>版块</h3>
            <ul className={styles.linkList}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link className={styles.link} href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>关于例外</h3>
            <ul className={styles.highlights}>
              {site.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>联系方式</h3>
            <a className={styles.link} href={`mailto:${boutiques.email}`}>
              {boutiques.email}
            </a>
            <div className={styles.socials}>
              {boutiques.socials.map((social) => (
                <a
                  key={social.name}
                  className={styles.social}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
            <Link className={styles.link} href="/boutiques">
              查找门店
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{site.copyright}</p>
          <p className={styles.note}>{site.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
