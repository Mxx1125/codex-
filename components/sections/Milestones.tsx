import Image from 'next/image';
import { milestones } from '@/data/content';
import SectionHeading from './SectionHeading';
import VideoPlayer from '../media/VideoPlayer';
import styles from './Milestones.module.css';

export default function Milestones() {
  return (
    <section id="milestones" className={styles.section}>
      <div className="container">
        <SectionHeading title={milestones.title} subtitle={milestones.subtitle} />

        <div className={styles.docBlock} data-reveal>
          <div className={styles.docMedia}>
            <VideoPlayer
              poster={milestones.video.poster}
              src={milestones.video.src}
              alt="品牌纪录片封面"
              caption={milestones.video.caption}
            />
          </div>
          <div className={styles.docText}>
            <p>{milestones.video.description}</p>
          </div>
        </div>

        <ol className={styles.timeline}>
          {milestones.items.map((item) => (
            <li className={styles.item} key={item.title} data-reveal>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.tick} aria-hidden="true" />
              <div className={styles.body}>
                <p className={styles.year}>{item.year}</p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
                {item.image && (
                  <div className={styles.thumb}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className={styles.img}
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
