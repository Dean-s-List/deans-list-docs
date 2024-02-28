// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome to Dean's List DAO's Documentation",
  tagline: "A Service Dao turned Network State, consisting of Web 3 power users providing feedback sessions.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.deanslist.services',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dean-s-list', // Usually your GitHub org/user name.
  projectName: 'deans-list-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dean-s-list/deans-list-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dean-s-list/deans-list-docs/tree/main/packages/create-docusaurus/templates/shared/',
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
      colorMode: {
        defaultMode: 'dark',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Dean's List Docs",
        logo: {
          alt: "Dean's List Logo",
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Home',
          },
          
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/dean-s-list/deans-list-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',

        

        links: [
          {
            title: "Dean's List Documnetation",
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Dean's List Store",
                href: 'https://store.deanslist.services/',
              },
              {
                label: "Buy Dean's List NFT",
                href: 'https://www.tensor.trade/trade/deanslist',
              },
              {
                label: 'Visit our website',
                href: 'https://deanslist.services/',
              },
              {
                label: 'Learn more...',
                href: 'https://linktr.ee/deanslistdao',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Follow us on Twitter',
                href: 'https://twitter.com/deanslistDAO',
              },
              {
                label: 'Star on GitHub',
                href: 'https://github.com/dean-s-list/deans-list-docs',
              },
              {
                label: 'Join our Discord',
                href: 'https://discord.gg/deanslist',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dean's List DAO.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
