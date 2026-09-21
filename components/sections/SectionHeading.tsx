import styles from './SectionHeading.module.css';

type Props = {
  title: string;
  subtitle: string;
  lead?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ title, subtitle, lead, align = 'left' }: Props) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`} data-reveal>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
