import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Loka Docs',
  tagline: 'Empowering educators, engaging learners, and accelerating learning.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.lokalingo.com',
  baseUrl: '/',

  organizationName: 'RynoRocks',
  projectName: 'loka-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-AU' },
      ja: { label: '日本語', htmlLang: 'ja' },
      ko: { label: '한국어', htmlLang: 'ko' },
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LokaLingo 株式会社',
        legalName: 'Accent Language 株式会社',
        url: 'https://lokalingo.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://docs.lokalingo.com/img/logo.png',
        },
        description: 'A language education company based in Tokyo, Japan. Builders of Loka, a learning management system for language educators.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressLocality: 'Tokyo',
        },
        sameAs: [
          'https://lokalingo.com',
          'https://thelivingtextbook.lokalingo.com',
          'https://docs.lokalingo.com',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Loka Docs',
        url: 'https://docs.lokalingo.com',
        description: 'Official documentation for Loka, a learning management system for language educators.',
        publisher: {
          '@type': 'Organization',
          name: 'LokaLingo 株式会社',
        },
        inLanguage: ['en-AU', 'ja', 'ko'],
      }),
    },
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'ja', 'ko'],
        docsRouteBasePath: '/',
        indexBlog: false,
        searchBarShortcutHint: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/RynoRocks/loka-docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        sitemap: {
          ignorePatterns: ['/search', '/ja/search', '/ko/search'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      { property: 'og:type', content: 'website' },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Loka Docs',
      logo: {
        alt: 'Loka',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://thelivingtextbook.lokalingo.com/start-free',
          label: 'Start Free Trial',
          position: 'right',
          className: 'navbar-cta',
        },
        {
          href: 'https://thelivingtextbook.lokalingo.com/login',
          label: 'Log In',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/' },
            { label: 'For Educators', to: '/educators/dashboard' },
            { label: 'For Learners', to: '/learners/booking' },
            { label: 'For Loka Creators', to: '/creators/overview' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Loka Website', href: 'https://lokalingo.com' },
            { label: 'The Living Textbook', href: 'https://thelivingtextbook.lokalingo.com' },
            { label: 'Start Free Trial', href: 'https://thelivingtextbook.lokalingo.com/start-free' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', href: 'https://lokalingo.com/en/story' },
            { label: 'Contact', href: 'https://lokalingo.com/en/contact' },
            { label: 'Privacy Policy', href: 'https://lokalingo.com/en/privacy' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} LokaLingo 株式会社 6011001118444 / ORBWEVA ABN 62159782318`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
