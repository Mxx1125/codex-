'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './VideoPlayer.module.css';

type Props = {
  poster: string;
  alt: string;
  src?: string;
  caption?: string;
  priority?: boolean;
};

// 可访问的视频区域：提供真实视频时使用浏览器原生控件；
// 未提供视频时展示稳定封面与明确降级提示，不伪造播放能力。
export default function VideoPlayer({ poster, alt, src, caption, priority }: Props) {
  const [notice, setNotice] = useState(false);
  const hasVideo = Boolean(src);

  return (
    <figure className={styles.figure}>
      <div className={styles.media}>
        {hasVideo ? (
          <video className={styles.video} controls playsInline preload="metadata" poster={poster} src={src} />
        ) : (
          <>
            <Image
              src={poster}
              alt={alt}
              fill
              priority={priority}
              sizes="(min-width: 1200px) 60vw, 100vw"
              className={styles.poster}
            />
            <button
              type="button"
              className={styles.play}
              onClick={() => setNotice(true)}
              aria-label="播放影像"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </button>
          </>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      {notice && (
        <p className={styles.notice} role="status">
          影像资料待接入。
        </p>
      )}
    </figure>
  );
}
