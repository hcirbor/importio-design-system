import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const shared = {
  brandTitle: 'Import.io Design System', brandUrl: './', brandTarget: '_self',
  colorPrimary: '#4f6bff', colorSecondary: '#2e4bff', appBorderRadius: 7,
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',
};
const lightTheme = create({ base: 'light', ...shared, brandImage: './importio-storybook-logo-light.svg', appBg: '#f6f7fb', appContentBg: '#ffffff', appBorderColor: '#ddd8e6', textColor: '#171126', textMutedColor: '#665e76', barBg: '#ffffff', barTextColor: '#514a63', inputBg: '#ffffff', inputBorder: '#867992' });
addons.setConfig({
  theme: lightTheme,
  layout: { showPanel: false },
});
