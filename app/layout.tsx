import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/data/content';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/media/RevealObserver';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example-brand.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EXCEPTION 例外 · 中国原创设计品牌',
    template: '%s · EXCEPTION 例外',
  },
  description:
    '例外（EXCEPTION de MIXMIND），中国原创设计品牌，以传袭再造构建东方哲学式当代生活艺术。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'EXCEPTION 例外 · 中国原创设计品牌',
    description: '例外（EXCEPTION de MIXMIND），以传袭再造构建东方哲学式当代生活艺术。',
    url: siteUrl,
    siteName: site.name,
    locale: 'zh_CN',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <RevealObserver />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
