import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ye Olde Meme Game 2 ModScripting",
  tagline: "The definitive guide for modding in Ye Olde Meme Game 2",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.etggames.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "mod-docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ETGgames", // Usually your GitHub org/user name.
  projectName: "yomg2-mod-docs", // Usually your repo name.

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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Ye Olde Meme Game 2",
      logo: {
        alt: "Memeorang Man",
        src: "img/MemeorangMan.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/EthanSK/Ye-Olde-Meme-Game-2-Public",
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
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/YeOldeMemeGame2/",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/g5X4MbKx3A",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/ye-olde-meme-game-2",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/EthanSK/Ye-Olde-Meme-Game-2-Public",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETGgames, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp", "lua"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
