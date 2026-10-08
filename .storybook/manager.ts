import { addons } from 'storybook/manager-api';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { create } from 'storybook/theming';

const shared = {
  brandTitle: 'Import.io Design System', brandUrl: './', brandTarget: '_self',
  colorPrimary: '#4f6bff', colorSecondary: '#2e4bff', appBorderRadius: 7,
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',
};
const lightTheme = create({ base: 'light', ...shared, brandImage: './importio-storybook-logo-light.svg', appBg: '#f6f7fb', appContentBg: '#ffffff', appBorderColor: '#ddd8e6', textColor: '#171126', textMutedColor: '#665e76', barBg: '#ffffff', barTextColor: '#514a63', inputBg: '#ffffff', inputBorder: '#867992' });
const darkTheme = create({ base: 'dark', ...shared, brandImage: './importio-storybook-logo-dark.svg', appBg: '#06030b', appContentBg: '#0b0a0e', appBorderColor: '#292630', textColor: '#f8f8fb', textMutedColor: '#938f9c', barBg: '#0b0a0e', barTextColor: '#c7c4ce', inputBg: '#15131a', inputBorder: '#514b59' });

const themeFromUrl = () => new URLSearchParams(window.location.search)
  .get('globals')
  ?.split(';')
  .find((value) => value.startsWith('theme:'))
  ?.slice('theme:'.length);

const setManagerTheme = (theme?: string) => {
  addons.setConfig({
    theme: theme === 'dark' ? darkTheme : lightTheme,
    showPanel: false,
  });
};

setManagerTheme(themeFromUrl());
addons.getChannel().on(GLOBALS_UPDATED, ({ globals, userGlobals }) => {
  setManagerTheme(globals?.theme ?? userGlobals?.theme ?? themeFromUrl());
});
