import type { Preview } from '@storybook/react-vite';
import React from 'react';
import '../src/styles.css';
import { ThemeDecorator } from './theme-decorator';

const preview: Preview = {
  decorators: [
    (Story, context) => <ThemeDecorator theme={context.globals.theme}><Story /></ThemeDecorator>,
  ],
  globalTypes: {
    theme: {
      description: 'Global theme',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    controls: { expanded: true },
    a11y: { test: 'error' },
    backgrounds: { disable: true },
    options: { storySort: { order: ['Getting started', 'Brand', 'Foundations', 'Components', 'Patterns', 'Resources'] } },
  },
  tags: ['autodocs'],
};

export default preview;
