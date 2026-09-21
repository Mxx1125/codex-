'use client';

import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/data/content';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // 滚动状态与顶部进度条：合并为单一 requestAnimationFrame 循环
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // 当前板块高亮
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  // 移动端菜单：滚动锁定、Escape 关闭、焦点管理
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>
          <span className={styles.brandEn}>EXCEPTION</span>
          <span className={styles.brandZh}>例外</span>
        </a>

        <nav className={styles.nav} aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.navLink}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '关闭菜单' : '打开菜单'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        <nav aria-label="移动端主导航">
          {navigation.map((item, index) => (
            <a
              key={item.id}
              ref={index === 0 ? firstLinkRef : undefined}
              href={`#${item.id}`}
              className={styles.menuLink}
              aria-current={active === item.id ? 'location' : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
