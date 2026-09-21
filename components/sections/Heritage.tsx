import Image from 'next/image';
import { heritage } from '@/data/content';
import SectionHeading from './SectionHeading';
import VideoPlayer from '../media/VideoPlayer';
import styles from './Heritage.module.css';

export default function Heritage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          title={heritage.title}
          subtitle={heritage.subtitle}
          lead={heritage.intro}
          align="center"
        />

        <div data-reveal>
          <VideoPlayer
            poster={heritage.video.poster}
            src={heritage.video.src}
            alt="非遗工坊纪实封面"
            caption={heritage.video.caption}
          />
        </div>

        <div className={styles.pillars}>
          {heritage.pillars.map((pillar) => (
            <article className={styles.pillar} key={pillar.title} data-reveal>
              <div className={styles.pillarImg}>
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={styles.img}
                />
              </div>
              <div className={styles.pillarBody}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
                <ul className={styles.keywords}>
                  {pillar.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.closing} data-reveal>
          {heritage.closing}
        </p>
      </div>
    </section>
  );
}
