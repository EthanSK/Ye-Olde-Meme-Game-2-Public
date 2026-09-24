# Learnings

## GitHub Pages deployment action versions

On 2026-09-24, the ModScripting site built locally but its GitHub Pages workflow failed before the build because `actions/upload-pages-artifact@v2` used the retired artifact upload version. Updating `actions/upload-pages-artifact` to v3 and `actions/deploy-pages` to v4 restored a successful deployment. When site content appears correct but Pages does not update, inspect the workflow result and action versions before changing Docusaurus content.
