import type { StorybookConfig } from '@storybook/react-webpack5';
import { dirname, join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {},
            },
          ],
        }],
      }
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    // name: '@storybook/nextjs',
    options: {
      // builder: {
      //   useSWC: true, // Enables SWC support
      // },
    },
  },
};
export default config;
