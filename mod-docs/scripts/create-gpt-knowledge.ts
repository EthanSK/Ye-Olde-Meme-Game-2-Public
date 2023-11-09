import sidebars from "../sidebars";
import type { SidebarItemConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";
import fs from "fs-extra";

const docsSidebar = sidebars.docsSidebar as SidebarItemConfig[];

function getFileContentsForDocId(docId: string): string | null {
  const extensionlessPath = `docs/${docId}`;
  if (fs.existsSync(`${extensionlessPath}.mdx`)) {
    return fs.readFileSync(`${extensionlessPath}.mdx`, "utf-8");
  } else if (fs.existsSync(`${extensionlessPath}.mdx`)) {
    return fs.readFileSync(`${extensionlessPath}.md`, "utf-8");
  }
  return null;
}

let combinedDocs = "";

docsSidebar.forEach((sidebar) => {
  if (typeof sidebar === "string") {
    combinedDocs += getFileContentsForDocId(sidebar) + "\n";
  } else if ("items" in sidebar) {
    const items = sidebar.items as SidebarItemConfig[];

    items.forEach((item) => {
      if (typeof item === "string") {
        combinedDocs += getFileContentsForDocId(item) + "\n";
      }
    });
  }
});

fs.writeFileSync("gpt-knowledge.md", combinedDocs);
