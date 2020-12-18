// Can import here all common styling for the components
// import '../path/to/file.css'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import seedVueTheme from './seedVueTheme.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  viewport: {
    viewports: MINIMAL_VIEWPORTS
  },

  layout: 'centered',

  docs: {
    theme: seedVueTheme
  }
};
