import Image from 'next/image';
import { milestones } from '@/data/content';
import SectionHeading from './SectionHeading';
import styles from './Milestones.module.css';

export default function Milestones() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={milestones.title} subtitle={milestones.subtitle} lead={milestones.intro} />

        <ol className={styles.timeline}>
          {milestones.items.map((item) => (
            <li className={styles.item} key={item.title} data-reveal>
              <details className={styles.details}>
                <summary className={styles.summary}>
                  <span className={styles.year}>{item.year}</span>
                  <span className={styles.title}>{item.title}</span>
                </summary>
                <div className={styles.body}>
                  <p className={styles.desc}>{item.description}</p>
                  {item.image && (
                    <div className={styles.thumb}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="(min-width: 768px) 420px, 100vw"
                        className={styles.img}
                      />
                    </div>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
