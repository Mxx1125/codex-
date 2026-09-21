import { boutiques, type Social } from '@/data/content';
import SectionHeading from './SectionHeading';
import styles from './Boutiques.module.css';

function SocialIcon({ name }: { name: Social['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 36,
    height: 36,
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

export default function Boutiques() {
  return (
    <section id="boutiques" className={styles.section}>
      <div className="container">
        <SectionHeading title={boutiques.title} subtitle={boutiques.subtitle} lead={boutiques.intro} />

        <ul className={styles.stores}>
          {boutiques.stores.map((store) => (
            <li className={styles.store} key={store.city + store.name} data-reveal>
              <div>
                <h3 className={styles.city}>
                  {store.city}
                  <span className={styles.name}> · {store.name}</span>
                </h3>
                <p className={styles.address}>{store.address}</p>
              </div>
              <p className={styles.hours}>{store.hours}</p>
            </li>
          ))}
        </ul>

        <div className={styles.socials} data-reveal>
          {boutiques.socials.map((social) => (
            <a className={styles.social} key={social.name} href={social.href} aria-label={social.name}>
              <span className={styles.socialIcon}>
                <SocialIcon name={social.icon} />
              </span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>

        <div className={styles.contact} data-reveal>
          <a className={styles.email} href={`mailto:${boutiques.email}`}>
            {boutiques.email}
          </a>
          <p className={styles.emailNote}>{boutiques.emailNote}</p>
        </div>
      </div>
    </section>
  );
}
