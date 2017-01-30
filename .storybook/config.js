import _ from 'lodash';
import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';
import '../src/styles/main.scss';

const req = require.context('../src/components', true, /.stories.jsx$/);

function loadStories() {
  _.forEach(req.keys(), req);
}

setAddon(infoAddon);

setOptions({
  name: 'AppName',
  url: 'https://github.com/stephenkoo',
  // goFullScreen: true,
  // showLeftPanel: true,
  showDownPanel: false,
  // showSearchBox: true,
  // downPanelInRight: true,
});

configure(loadStories, module);
