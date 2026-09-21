import type { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import { brandIntro } from '@/data/content';
import styles from './home.module.css';

export const metadata: Metadata = { title: '首页' };

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="about" className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <p className={styles.eyebrow} data-reveal>
              关于例外
            </p>
            <h2 className={styles.sentence} data-reveal>
              {brandIntro.sentence1}
            </h2>
            <p className={styles.sentenceSecondary} data-reveal>
              {brandIntro.sentence2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
