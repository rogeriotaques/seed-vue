import { addons } from '@storybook/addons';
import seedVueTheme from './seedVueTheme.js';

addons.setConfig({
  showRoots: true,
  theme: seedVueTheme
});
