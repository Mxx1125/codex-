'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { hero } from '@/data/content';
import styles from './Hero.module.css';

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const canParallax = useRef(false);
  const hasVideo = Boolean(hero.videoSrc);

  // 首屏视差：仅电脑端、精细指针且未开启减少动态效果时启用，位移限制在 48px 内
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    canParallax.current = !reduce && fine;
    if (!canParallax.current) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          const shift = Math.min(48, window.scrollY * 0.18);
          bgRef.current.style.transform = `translateY(${shift}px)`;
        }
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" aria-label="品牌首屏">
      <div ref={bgRef} className={styles.bg}>
        {hasVideo ? (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            poster={hero.poster}
            src={hero.videoSrc}
          />
        ) : (
          <div className={`${styles.poster} ${paused ? styles.paused : ''}`}>
            <Image
              src={hero.poster}
              alt="例外品牌当季形象大片封面"
              fill
              priority
              sizes="100vw"
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.titleGroup}>
          <span className={styles.en}>{hero.nameEn}</span>
          <span className={styles.zh}>{hero.nameZh}</span>
        </h1>
        <p className={styles.tagline}>{hero.tagline}</p>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </div>

      <button
        type="button"
        className={styles.pause}
        onClick={() => setPaused((v) => !v)}
        aria-pressed={paused}
        aria-label={paused ? '播放背景动画' : '暂停背景动画'}
      >
        {paused ? (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
          </svg>
        )}
      </button>

      <a className={styles.scroll} href="#about" aria-label="向下滚动查看品牌简介">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            d="M12 4v14M6 12l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
