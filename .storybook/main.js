/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    {name: "storybook-design-token", options: { preserveCSSVars: true }},
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
