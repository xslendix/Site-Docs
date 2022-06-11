// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TempleOS Simplified',
  tagline: 'TempleOS made easy.',
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'templeos-simplified', // Usually your GitHub org/user name.
  projectName: 'Site-Docs', // Usually your repo name.
  deploymentBranch: "gh-pages",
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/TempleOS-Simplified/Site-Docs/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TempleOS-Simplified/Site-Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TempleOS Simplified',
        logo: {
          alt: 'My Site Logo',
          src: 'img/HolyC_Logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/templeos-simplified/site-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/resources',
            label: 'Resources',
            position: 'left',
            activeBaseRegex: `/resources/`,
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pBKzvgKkTh',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/templeosenjoyer',
              },
            ],
          },
          {
            title: 'Maintainers',
            items: [
              {
                label: 'Xzntrc',
                href: 'https://hydr.in/56yg',
              },
              {
                label: 'Steven Laczko',
                href: 'https://github.com/StevenLaczko/'
              },
              {
                label: 'Contributors',
                href: 'https://github.com/TempleOS-Simplified/Site-Docs/graphs/contributors'
              }
            ],
          },
        ],
        copyright: "TempleOS Simplified, Inc. Creative Commons Attribution 4.0 International License.",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
