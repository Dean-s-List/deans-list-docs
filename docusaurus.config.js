// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Dean's List DAO s`,
  tagline: "Beacon of community-driven feedback and Service DAO",
  favicon: "img/wSt1rNcNAQpDunYhy5tRpjyCxTw.webp",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `Dean's List DAO`, // Usually your GitHub org/user name.
  projectName: `Dean's List DAO`, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // hire: {
        //   sidebarPath: "./sidebars.js",
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/wSt1rNcNAQpDunYhy5tRpjyCxTw.webp",
      navbar: {
        title: `Dean's List DAO`,
        logo: {
          alt: `Dean's List DAO logo`,
          src: "img/wSt1rNcNAQpDunYhy5tRpjyCxTw.webp",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Overview",
          // },
          {
            to: "docs/Overview/intro",
            label: "Overview",
            position: "left",
          },
          {
            to: "/docs/Whitepaper/what-is-deans-dao",
            label: "Whitepaper",
            position: "left",
          },
          {
            to: "docs/Governance%20Framework/governance-model",
            label: "Governance",
            position: "left",
          },
          { to: "/docs/Hire%20Us/hire", label: "Hire Us", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/JustAnotherDevv/Dean-s-List-DAO-documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "About",
                to: "/docs/intro",
              },
              {
                label: "Whitepaper",
                to: "/docs/Whitepaper/what-is-deans-dao",
              },
              {
                label: "Onboarding Manual",
                to: "/docs/Onboarding%20Manual/how-to-join",
              },
              {
                label: "Governance Framework",
                to: "/docs/Onboarding%20Manual/how-to-join",
              },
              {
                label: "Operational Guidelines",
                to: "/docs/Onboarding%20Manual/how-to-join",
              },
              {
                label: "Network State Declaration",
                href: "https://www.deanslist.services/files/Deanlist_Declaration_Network_State.pdf",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/CYSY8vK45b",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/deanslistDAO",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@deanslistweb3",
              },
              {
                label: "Governance",
                href: "https://app.realms.today/dao/F9V4Lwo49aUe8fFujMbU6uhdFyDRqKY54WpzdpncUSk9",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Website",
                href: "http://deanslist.services/",
              },
              {
                label: "Store",
                href: "https://store.deanslist.services/",
              },
              {
                label: "Buy Dean's list NFT",
                href: "https://www.tensor.trade/trade/deanslist",
              },
              {
                label: "Stake your Dean's list NFT",
                href: "https://www.anybodies.com/c/Deanslist",
              },
              {
                label: "Network State Dashboard",
                href: "https://flipsidecrypto.xyz/jackguy/deans-list-data-dashboard-Pc14j7",
              },
              {
                label: "GitHub",
                href: "https://github.com/Dean-s-List",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dean's List DAO, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
