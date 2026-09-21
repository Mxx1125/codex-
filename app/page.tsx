import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/hero/Hero';
import { brandIntro, collection, heritage, milestones, boutiques } from '@/data/content';
import styles from './home.module.css';

export const metadata: Metadata = { title: '首页' };

const seriesImages = collection.series.map((series) => series.looks[0].image);
const milestoneYears = milestones.items.map((item) => item.year).filter((year) => /^\d{4}$/.test(year));
const cities = boutiques.provinces.flatMap((p) => p.cities.map((c) => c.name));

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className={styles.manifesto}>
        <div className="container">
          <p className={styles.label} data-reveal>
            关于例外 · ABOUT
          </p>
          <h2 className={styles.display} data-reveal>
            以人本设计与精良工艺，
            <br />
            书写东方美学的当代表达。
          </h2>
          <div className={styles.manifestoBody}>
            <p className={styles.lead} data-reveal>
              {brandIntro.sentence1}
            </p>
            <p className={styles.text} data-reveal>
              {brandIntro.sentence2}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.collection}>
        <div className="container">
          <div className={styles.sectionHead} data-reveal>
            <div>
              <p className={styles.label}>当季新系</p>
              <h2 className={styles.title}>CURRENT COLLECTION</h2>
            </div>
            <Link className={styles.more} href="/collection">
              查看全部
            </Link>
          </div>

          <div className={styles.seriesGrid}>
            {collection.series.map((series, index) => (
              <Link className={styles.seriesCard} key={series.title} href="/collection" data-reveal>
                <div className={styles.seriesImg}>
                  {seriesImages[index] && (
                    <Image
                      src={seriesImages[index]!}
                      alt={`${series.title} 当季系列`}
                      fill
                      sizes="(min-width: 900px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={styles.seriesPhoto}
                    />
                  )}
                </div>
                <div className={styles.seriesMeta}>
                  <h3>{series.title}</h3>
                  <p>{series.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyImg} data-reveal>
              <Image
                src={heritage.video.poster}
                alt="生而例外 · 非遗工坊纪实"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className={styles.philosophyPhoto}
              />
            </div>
            <div className={styles.philosophyText}>
              <p className={styles.label} data-reveal>
                生而例外 · BORN EXCEPTION
              </p>
              <h2 className={styles.title} data-reveal>
                以工艺匠心为骨，
                <br />
                以东方美学为魂。
              </h2>
              <p className={styles.text} data-reveal>
                {heritage.intro}
              </p>
              <ul className={styles.keywords} data-reveal>
                {heritage.pillars.map((pillar) => (
                  <li key={pillar.title}>{pillar.title}</li>
                ))}
              </ul>
              <Link className={styles.more} href="/heritage" data-reveal>
                探索品牌理念
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.milestones}>
        <div className="container">
          <div className={styles.sectionHead} data-reveal>
            <div>
              <p className={styles.label}>品牌纪事</p>
              <h2 className={styles.title}>BRAND MILESTONES</h2>
            </div>
            <Link className={styles.more} href="/milestones">
              查看完整纪事
            </Link>
          </div>

          <div className={styles.timelinePreview} data-reveal>
            {milestoneYears.map((year) => (
              <Link className={styles.yearNode} key={year} href="/milestones">
                <span className={styles.year}>{year}</span>
                <span className={styles.dot} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.boutiques}>
        <div className="container">
          <p className={styles.label} data-reveal>
            空间与联结 · BOUTIQUES
          </p>
          <h2 className={styles.title} data-reveal>
            于城市之间，留一方东方生活空间。
          </h2>
          <div className={styles.cities} data-reveal>
            {cities.map((city) => (
              <Link className={styles.city} key={city} href="/boutiques">
                {city}
              </Link>
            ))}
          </div>
          <Link className={styles.more} href="/boutiques" data-reveal>
            查找门店
          </Link>
        </div>
      </section>
    </>
  );
}
