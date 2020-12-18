import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#3273dc',
  colorSecondary: '#01d1b2',

  // UI
  appBg: '#f2f2f2',
  appContentBg: '#fcfcfc',
  appBorderColor: '#dee5ec',
  appBorderRadius: 4,

  // Typography
  fontBase: '-apple-system, system-ui, BlinkMacSystemFont, Noto, Lato, Helvetica, Arial, sans-serif',
  fontCode: '',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#f2f2f2',

  brandTitle: 'SEED-VUE Storybook',
  brandUrl: 'https://rogeriotaques.github.io/seed-vue'
  // brandImage: 'https://placehold.it/350x150'
});
