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
      en: { label: 'English' },
      ja: { label: '日本語' },
      ko: { label: '한국어' },
    },
  },

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
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/loka-social-card.png',
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
      copyright: `Copyright © ${new Date().getFullYear()} Accent Language 株式会社. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
