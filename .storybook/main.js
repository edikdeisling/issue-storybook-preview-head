export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  }
};
