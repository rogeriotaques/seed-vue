import * as pkg from '../package.json';
import * as helpers from 'utils/helpers';

import Alert from 'components/molecules/alert.vue';
import Badge from 'components/atoms/badge.vue';
import Button from 'components/molecules/button.vue';
import Dot from 'components/atoms/dot.vue';
import Icon from 'components/atoms/icon.vue';
import Input from 'components/molecules/input.vue';
import Progress from 'components/atoms/progress.vue';
import Spinner from 'components/atoms/spinner.vue';

const version = pkg.version;

const components = {
  Alert,
  Badge,
  Button,
  Dot,
  Icon,
  Progress,
  Spinner,
  Input
};

const install: any = (Vue: any, config = {}): void => {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach((key: string): void => {
    // eslint-disable-next-line
    // @ts-ignore
    const component = components[key];
    Vue.component(component.name, component);
  });
};

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const SeedVue = { install, version, ...components, ...helpers };

export default SeedVue;
module.exports = SeedVue;
