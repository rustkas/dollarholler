module.exports = {
  useTabs: false,
  singleQuote: true,
  trailingComma: "none",
  printWidth: 100,
  plugins: [
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: ["."],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
