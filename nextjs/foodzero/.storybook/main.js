const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    'storybook-addon-next',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  features: {
    emotionAlias: false,
    previewCsfV3: true,
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: false,
  },
}
