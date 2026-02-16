import React from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/ja/') || pathname === '/ja') return 'ja';
  if (pathname.startsWith('/ko/') || pathname === '/ko') return 'ko';
  return 'en-AU';
}

function getBreadcrumbItems(pathname: string, siteUrl: string) {
  const locale = getLocaleFromPath(pathname);
  const isJa = locale === 'ja';
  const isKo = locale === 'ko';

  // Strip locale prefix to get the doc path
  let docPath = pathname;
  if (isJa) docPath = pathname.replace(/^\/ja\/?/, '/');
  if (isKo) docPath = pathname.replace(/^\/ko\/?/, '/');

  const segments = docPath.split('/').filter(Boolean);

  // Build breadcrumb items
  const items: Array<{name: string; url: string}> = [
    {
      name: isJa ? 'ホーム' : isKo ? '홈' : 'Home',
      url: siteUrl + (isJa ? '/ja/' : isKo ? '/ko/' : '/'),
    },
  ];

  // Map known path segments to labels
  const labels: Record<string, Record<string, string>> = {
    'getting-started': {en: 'Getting Started', ja: 'はじめに', ko: '시작하기'},
    'educators': {en: 'For Educators', ja: 'エデュケーター向け', ko: '교육자용'},
    'learners': {en: 'For Learners', ja: 'ラーナー向け', ko: '학습자용'},
    'creators': {en: 'For Loka Creators', ja: 'Loka Creator向け', ko: 'Loka Creator용'},
    'faq': {en: 'FAQ', ja: 'よくある質問', ko: '자주 묻는 질문'},
  };

  const localeKey = isJa ? 'ja' : isKo ? 'ko' : 'en';
  let buildPath = isJa ? '/ja' : isKo ? '/ko' : '';

  for (const segment of segments) {
    buildPath += '/' + segment;
    const label = labels[segment]?.[localeKey] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    items.push({
      name: label,
      url: siteUrl + buildPath,
    });
  }

  return items;
}

export default function Root({children}: {children: React.ReactNode}) {
  const {pathname} = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const siteUrl = siteConfig.url;
  const locale = getLocaleFromPath(pathname);
  const breadcrumbItems = getBreadcrumbItems(pathname, siteUrl);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            ...breadcrumbSchema,
            inLanguage: locale,
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
