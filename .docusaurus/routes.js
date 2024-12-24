import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/B2ITSM-2H/blog',
    component: ComponentCreator('/B2ITSM-2H/blog', '1cf'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/archive',
    component: ComponentCreator('/B2ITSM-2H/blog/archive', '6d3'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/authors',
    component: ComponentCreator('/B2ITSM-2H/blog/authors', 'ce1'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/resources',
    component: ComponentCreator('/B2ITSM-2H/blog/resources', '35c'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags',
    component: ComponentCreator('/B2ITSM-2H/blog/tags', '79e'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags/back-2-itsm',
    component: ComponentCreator('/B2ITSM-2H/blog/tags/back-2-itsm', '50c'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/welcome',
    component: ComponentCreator('/B2ITSM-2H/blog/welcome', '43e'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/markdown-page',
    component: ComponentCreator('/B2ITSM-2H/markdown-page', '358'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/docs',
    component: ComponentCreator('/B2ITSM-2H/docs', 'a66'),
    routes: [
      {
        path: '/B2ITSM-2H/docs',
        component: ComponentCreator('/B2ITSM-2H/docs', 'b21'),
        routes: [
          {
            path: '/B2ITSM-2H/docs',
            component: ComponentCreator('/B2ITSM-2H/docs', '25e'),
            routes: [
              {
                path: '/B2ITSM-2H/docs/category/resources',
                component: ComponentCreator('/B2ITSM-2H/docs/category/resources', '910'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/category/tutorial---extras',
                component: ComponentCreator('/B2ITSM-2H/docs/category/tutorial---extras', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/category/tutorial-basics',
                component: ComponentCreator('/B2ITSM-2H/docs/category/tutorial-basics', 'cdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Ideas',
                component: ComponentCreator('/B2ITSM-2H/docs/Ideas', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/intro',
                component: ComponentCreator('/B2ITSM-2H/docs/intro', '91b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/articles',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/articles', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/books',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/books', 'be3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/intro',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/intro', '0c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/mooc',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/mooc', '7b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/support_group',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/support_group', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/Resources/videos',
                component: ComponentCreator('/B2ITSM-2H/docs/Resources/videos', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/congratulations',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/congratulations', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/create-a-blog-post', '769'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/create-a-document',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/create-a-document', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/create-a-page',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/create-a-page', 'b03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/deploy-your-site', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-basics/markdown-features',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-basics/markdown-features', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-extras/manage-docs-versions', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tools/tutorial-extras/translate-your-site',
                component: ComponentCreator('/B2ITSM-2H/docs/tools/tutorial-extras/translate-your-site', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/B2ITSM-2H/',
    component: ComponentCreator('/B2ITSM-2H/', '8f5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
