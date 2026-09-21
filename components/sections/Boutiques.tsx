'use client';

import { useMemo, useState } from 'react';
import { boutiques, type Social } from '@/data/content';
import SectionHeading from './SectionHeading';
import styles from './Boutiques.module.css';

function SocialIcon({ name }: { name: Social['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 36,
    height: 36,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'wechat':
      return (
        <svg {...common}>
          <path d="M8.5 3.5C4.9 3.5 2 5.9 2 8.9c0 1.7.9 3.2 2.4 4.2L3.8 15l2.5-1.3c.7.2 1.4.3 2.2.3" />
          <path d="M15.5 6.5c3.1 0 5.5 2 5.5 4.5s-2.4 4.5-5.5 4.5c-.5 0-1-.1-1.5-.2L11 16.6l.6-1.6c-1.2-.8-1.9-1.9-1.9-3.1" />
        </svg>
      );
    case 'weibo':
      return (
        <svg {...common}>
          <path d="M12 4.5c-4.4 0-7.5 3.4-7.5 7.5S7.6 19.5 12 19.5s7.5-3.4 7.5-7.5-3.1-7.5-7.5-7.5z" />
          <circle cx="12" cy="12" r="2.6" />
          <path d="M3.5 9.5c1-1.5 2.4-2.4 4.1-2.8M20.5 9.5c-1-1.5-2.4-2.4-4.1-2.8" />
        </svg>
      );
    case 'xiaohongshu':
      return (
        <svg {...common}>
          <path d="M12 5.5C10 4 7.5 4 4.5 5v12c3-1 5.5-1 7.5 0 2-1 4.5-1 7.5 0V5c-3-1-5.5-1-7.5.5z" />
          <path d="M12 5.5V17.5" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Boutiques() {
  const [search, setSearch] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const selectedProvince = boutiques.provinces.find((p) => p.name === province);
  const selectedCity = selectedProvince?.cities.find((c) => c.name === city);

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    const results: { province: string; city: string; name: string; address: string; hours: string }[] = [];
    for (const p of boutiques.provinces) {
      for (const c of p.cities) {
        for (const s of c.stores) {
          if (
            s.name.toLowerCase().includes(q) ||
            s.address.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q) ||
            p.name.toLowerCase().includes(q)
          ) {
            results.push({ province: p.name, city: c.name, ...s });
          }
        }
      }
    }
    return results;
  }, [search]);

  const shownStores = useMemo(() => {
    if (search.trim()) return searchResults;
    if (selectedCity) {
      return selectedCity.stores.map((s) => ({ province: province, city: city, ...s }));
    }
    if (selectedProvince) {
      return selectedProvince.cities.flatMap((c) =>
        c.stores.map((s) => ({ province: province, city: c.name, ...s })),
      );
    }
    return [];
  }, [search, searchResults, selectedCity, selectedProvince, province, city]);

  const pickProvince = (name: string) => {
    setProvince(name);
    setCity('');
  };

  const resetAll = () => {
    setSearch('');
    setProvince('');
    setCity('');
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={boutiques.title} subtitle={boutiques.subtitle} lead={boutiques.intro} />

        <div className={styles.search} data-reveal>
          <label htmlFor="store-search" className="sr-only">
            搜索门店
          </label>
          <input
            id="store-search"
            type="search"
            placeholder="搜索门店名称或城市"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" className={styles.clear} onClick={resetAll}>
              清除
            </button>
          )}
        </div>

        {!search.trim() && (
          <div className={styles.selector} data-reveal>
            <p className={styles.selectorLabel}>省份</p>
            <div className={styles.chips}>
              {boutiques.provinces.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className={`${styles.chip} ${province === p.name ? styles.chipActive : ''}`}
                  onClick={() => pickProvince(p.name)}
                  aria-pressed={province === p.name}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {selectedProvince && (
              <>
                <p className={styles.selectorLabel}>城市</p>
                <div className={styles.chips}>
                  {selectedProvince.cities.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`${styles.chip} ${city === c.name ? styles.chipActive : ''}`}
                      onClick={() => setCity(c.name)}
                      aria-pressed={city === c.name}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {shownStores.length > 0 && (
          <ul className={styles.stores}>
            {shownStores.map((s) => (
              <li className={styles.store} key={`${s.province}-${s.city}-${s.name}`}>
                <div className={styles.storeImg} aria-hidden="true">
                  <span>{s.city}</span>
                  <small>门店图片待补充</small>
                </div>
                <div className={styles.storeBody}>
                  <h3 className={styles.storeName}>{s.name}</h3>
                  <p className={styles.storeAddr}>{s.address}</p>
                  <p className={styles.storeHours}>{s.hours}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!search.trim() && !province && (
          <p className={styles.hint} data-reveal>
            请选择省份与城市，查看对应门店。
          </p>
        )}

        {search.trim() && shownStores.length === 0 && (
          <p className={styles.hint} data-reveal>
            未找到匹配的门店，请尝试其他关键词。
          </p>
        )}

        <div className={styles.socials} data-reveal>
          {boutiques.socials.map((social) => (
            <a className={styles.social} key={social.name} href={social.href} aria-label={social.name}>
              <span className={styles.socialIcon}>
                <SocialIcon name={social.icon} />
              </span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>

        <div className={styles.contact} data-reveal>
          <a className={styles.email} href={`mailto:${boutiques.email}`}>
            {boutiques.email}
          </a>
          <p className={styles.emailNote}>{boutiques.emailNote}</p>
        </div>
      </div>
    </section>
  );
}
