import Image from 'next/image';
import { collection } from '@/data/content';
import SectionHeading from './SectionHeading';
import VideoPlayer from '../media/VideoPlayer';
import styles from './Collection.module.css';

export default function Collection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={collection.title} subtitle={collection.subtitle} lead={collection.intro} />

        <div data-reveal>
          <VideoPlayer
            poster={collection.video.poster}
            src={collection.video.src}
            alt="当季系列概念影像封面"
            caption={collection.video.caption}
          />
        </div>

        {collection.series.map((series) => (
          <div className={styles.series} key={series.title}>
            <div className={styles.seriesHead} data-reveal>
              <h3 className={styles.seriesTitle}>{series.title}</h3>
              <p className={styles.seriesTag}>{series.tagline}</p>
            </div>

            <div className={styles.looks}>
              {series.looks.map((look) => (
                <article className={styles.card} key={look.id} data-reveal>
                  <div className={styles.thumb}>
                    {look.image ? (
                      <Image
                        src={look.image}
                        alt={`${series.title} ${look.id} 服装大片`}
                        fill
                        sizes="(min-width: 900px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={styles.img}
                      />
                    ) : (
                      <div className={styles.placeholder}>图片待补充</div>
                    )}
                  </div>
                  <div className={styles.meta}>
                    <p className={styles.lookId}>{look.id}</p>
                    <p className={styles.caption}>{look.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.archive} data-reveal>
          <h3 className={styles.archiveTitle}>
            {collection.archive.title}
            <span>{collection.archive.subtitle}</span>
          </h3>
          <p className={styles.archiveIntro}>{collection.archive.intro}</p>
          <ul className={styles.archiveList}>
            {collection.archive.items.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <small>{item.note}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
