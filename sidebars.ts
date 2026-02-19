import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/free-trial',
        'getting-started/first-14-days',
        'getting-started/upgrading',
      ],
    },
    {
      type: 'category',
      label: 'For Educators',
      items: [
        'educators/dashboard',
        'educators/schedule',
        'educators/canvas',
        'educators/canvas-content-guide',
        'educators/ai-features',
        'educators/students',
        'educators/earnings',
      ],
    },
    {
      type: 'category',
      label: 'For Learners',
      items: [
        'learners/booking',
        'learners/materials',
        'learners/progress',
        'learners/account',
      ],
    },
    {
      type: 'category',
      label: 'For Loka Creators',
      items: [
        'creators/overview',
        'creators/managing-users',
        'creators/services',
        'creators/billing',
        'creators/settings',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/pricing',
        'faq/technical',
      ],
    },
  ],
};

export default sidebars;
