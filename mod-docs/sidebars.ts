import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const gettingStartedFolder = "getting-started";
const guidesFolder = "guides";
const examplesFolder = "examples";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        title: "Getting Started",
        description: "Get started with ModScripting in Ye Olde Meme Game 2",
        slug: "/getting-started",
      },
      items: [
        `${gettingStartedFolder}/prerequisites`,
        `${gettingStartedFolder}/basic-example`,
        `${gettingStartedFolder}/considerations`,
      ],
    },
    {
      type: "category",
      label: "Tutorial",
      link: {
        type: "generated-index",
        title: "Tutorial",
        description:
          "Tutorials (in order) for learning about ModScripting in Ye Olde Meme Game 2",
        slug: "/tutorial",
      },
      items: [
        `${guidesFolder}/game-structure`,
        `${guidesFolder}/api-reference`,
        `${guidesFolder}/modscript-structure`,
        `${guidesFolder}/types`,
        `${guidesFolder}/getting-items`,
        `${guidesFolder}/constructors`,
        `${guidesFolder}/events`,
        `${guidesFolder}/lifecycle-events`,
        `${guidesFolder}/static-types`,
        `${guidesFolder}/coroutines`,
        `${guidesFolder}/collections`, //relatively niche so can go further down
        `${guidesFolder}/error-handling`,
        `${guidesFolder}/performance`,
        `${guidesFolder}/safety-and-security`,
        `${guidesFolder}/common-pitfalls`,
        `${guidesFolder}/publishing`,
        `${guidesFolder}/community`,
      ],
    },
    {
      type: "category",
      label: "Examples",
      link: {
        type: "generated-index",
        title: "Examples",
        description: "Example ModScripts in Ye Olde Meme Game 2",
        slug: "/examples",
      },
      items: [],
    },
  ],
};

export default sidebars;
