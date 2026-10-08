import { addons } from 'storybook/manager-api';
import { GLOBALS_UPDATED, UPDATE_GLOBALS } from 'storybook/internal/core-events';
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

const normalizeTheme = (theme?: string) => theme === 'dark' ? 'dark' : 'light';

const urlForTheme = (theme: 'light' | 'dark') => {
  const url = new URL(window.location.href);
  const globals = (url.searchParams.get('globals') ?? '')
    .split(';')
    .filter(Boolean)
    .filter((value) => !value.startsWith('theme:'));

  globals.push(`theme:${theme}`);
  url.searchParams.set('globals', globals.join(';'));
  return url.toString();
};

const setManagerTheme = (theme?: string) => {
  addons.setConfig({
    theme: theme === 'dark' ? darkTheme : lightTheme,
    layout: { showPanel: false },
  });
};

let activeTheme = normalizeTheme(themeFromUrl());
setManagerTheme(activeTheme);
const syncManagerTheme = ({ globals, userGlobals }: { globals?: Record<string, unknown>; userGlobals?: Record<string, unknown> }) => {
  const requestedTheme = globals?.theme ?? userGlobals?.theme;
  if (requestedTheme !== 'light' && requestedTheme !== 'dark') return;

  const nextTheme = normalizeTheme(requestedTheme);

  if (nextTheme === activeTheme) return;

  activeTheme = nextTheme;
  window.location.replace(urlForTheme(nextTheme));
};

addons.register('importio/theme-sync', (api) => {
  api.on(UPDATE_GLOBALS, syncManagerTheme);
  api.on(GLOBALS_UPDATED, syncManagerTheme);
});
