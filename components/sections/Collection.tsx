import Image from 'next/image';
import { collection } from '@/data/content';
import SectionHeading from './SectionHeading';
import VideoPlayer from '../media/VideoPlayer';
import styles from './Collection.module.css';

export default function Collection() {
  return (
    <section id="collection" className={styles.section}>
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
                    <Image
                      src={look.image}
                      alt={`${look.series} ${look.id} 服装大片`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.meta}>
                    <p className={styles.lookId}>{look.id}</p>
                    <p className={styles.lookSeries}>{look.series}</p>
                    <p className={styles.inspiration}>{look.inspiration}</p>
                    <p className={styles.material}>{look.material}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
