import { membership, type Benefit } from '@/data/content';
import SectionHeading from './SectionHeading';
import MembershipForm from '../forms/MembershipForm';
import styles from './Membership.module.css';

function BenefitIcon({ name }: { name: Benefit['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 32,
    height: 32,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'preview':
      return (
        <svg {...common}>
          <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" />
          <circle cx="12" cy="12" r="2.6" />
        </svg>
      );
    case 'gathering':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15.5 14.2c2.5.4 4.3 2.1 4.8 4.5" />
        </svg>
      );
    case 'birthday':
      return (
        <svg {...common}>
          <path d="M3 8.5h18v4H3z" />
          <path d="M5 12.5v7h14v-7" />
          <path d="M12 8.5v11M12 8.5c-1.8 0-2.8-1.4-2.8-3M12 8.5c1.8 0 2.8-1.4 2.8-3" />
        </svg>
      );
    case 'points':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M9 10.2c.6-.8 1.8-1.2 3-1.2s3 .5 3 1.8c0 2.8-6 1.4-6 4.2 0 1.3 1.2 2 3 2s2.4-.4 3-1.2" />
        </svg>
      );
  }
}

export default function Membership() {
  return (
    <section id="membership" className={styles.section}>
      <div className="container">
        <SectionHeading
          title={membership.title}
          subtitle={membership.subtitle}
          lead={membership.intro}
          align="center"
        />

        <div className={styles.benefits}>
          {membership.benefits.map((benefit) => (
            <div className={styles.benefit} key={benefit.title} data-reveal>
              <span className={styles.icon} aria-hidden="true">
                <BenefitIcon name={benefit.icon} />
              </span>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>

        <MembershipForm />

        <div className={styles.infoGrid}>
          <div className={styles.charter} data-reveal>
            <h3 className={styles.infoTitle}>{membership.charter.title}</h3>
            <ul>
              {membership.charter.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.faq} data-reveal>
            <h3 className={styles.infoTitle}>{membership.faq.title}</h3>
            {membership.faq.items.map((item) => (
              <details className={styles.faqItem} key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
            <p className={styles.faqNote}>{membership.faq.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
