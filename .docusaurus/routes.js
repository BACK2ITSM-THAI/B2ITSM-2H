import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/B2ITSM-2H/blog',
    component: ComponentCreator('/B2ITSM-2H/blog', '875'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/archive',
    component: ComponentCreator('/B2ITSM-2H/blog/archive', 'b8f'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/first-blog-post',
    component: ComponentCreator('/B2ITSM-2H/blog/first-blog-post', '13f'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/long-blog-post',
    component: ComponentCreator('/B2ITSM-2H/blog/long-blog-post', '01d'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/mdx-blog-post',
    component: ComponentCreator('/B2ITSM-2H/blog/mdx-blog-post', 'ba2'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags',
    component: ComponentCreator('/B2ITSM-2H/blog/tags', 'b66'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags/docusaurus',
    component: ComponentCreator('/B2ITSM-2H/blog/tags/docusaurus', 'e83'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags/facebook',
    component: ComponentCreator('/B2ITSM-2H/blog/tags/facebook', '7db'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags/hello',
    component: ComponentCreator('/B2ITSM-2H/blog/tags/hello', '330'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/tags/hola',
    component: ComponentCreator('/B2ITSM-2H/blog/tags/hola', '176'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/blog/welcome',
    component: ComponentCreator('/B2ITSM-2H/blog/welcome', '3ca'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/markdown-page',
    component: ComponentCreator('/B2ITSM-2H/markdown-page', '221'),
    exact: true
  },
  {
    path: '/B2ITSM-2H/docs',
    component: ComponentCreator('/B2ITSM-2H/docs', 'dc9'),
    routes: [
      {
        path: '/B2ITSM-2H/docs',
        component: ComponentCreator('/B2ITSM-2H/docs', '97e'),
        routes: [
          {
            path: '/B2ITSM-2H/docs',
            component: ComponentCreator('/B2ITSM-2H/docs', 'c0f'),
            routes: [
              {
                path: '/B2ITSM-2H/docs/category/tutorial---basics',
                component: ComponentCreator('/B2ITSM-2H/docs/category/tutorial---basics', '374'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/category/tutorial---extras',
                component: ComponentCreator('/B2ITSM-2H/docs/category/tutorial---extras', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/intro',
                component: ComponentCreator('/B2ITSM-2H/docs/intro', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/congratulations', '25d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/create-a-blog-post', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/create-a-document', '9ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/create-a-page', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/deploy-your-site', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-basics/markdown-features', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-extras/manage-docs-versions', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/B2ITSM-2H/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/B2ITSM-2H/docs/tutorial-extras/translate-your-site', '613'),
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
    component: ComponentCreator('/B2ITSM-2H/', '796'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
