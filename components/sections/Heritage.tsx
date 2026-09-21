import Image from 'next/image';
import { heritage } from '@/data/content';
import SectionHeading from './SectionHeading';
import VideoPlayer from '../media/VideoPlayer';
import styles from './Heritage.module.css';

export default function Heritage() {
  return (
    <section id="heritage" className={styles.section}>
      <div className="container">
        <SectionHeading title={heritage.title} subtitle={heritage.subtitle} lead={heritage.intro} align="center" />

        <div data-reveal>
          <VideoPlayer
            poster={heritage.video.poster}
            src={heritage.video.src}
            alt="非遗工坊纪实封面"
            caption={heritage.video.caption}
          />
        </div>

        <div className={styles.stages}>
          {heritage.stages.map((stage) => (
            <article className={styles.stage} key={stage.order} data-reveal>
              <div className={styles.stageImg}>
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={styles.img}
                />
                <span className={styles.order}>{stage.order}</span>
              </div>
              <div className={styles.stageBody}>
                <h3 className={styles.stageZh}>{stage.titleZh}</h3>
                <p className={styles.stageEn}>{stage.titleEn}</p>
                <p className={styles.stageDesc}>{stage.description}</p>
                <ul className={styles.keywords}>
                  {stage.keywords.map((keyword) => (
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
