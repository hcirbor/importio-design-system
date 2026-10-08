export const tokens = {
  color: {
    brand: '#4f6bff',
    light: {
      background: '#f6f7fb', surface: '#ffffff', raised: '#eef0f7',
      foreground: '#171126', muted: '#514a63', subtle: '#665e76',
      border: '#ddd8e6', control: '#867992', primary: '#2e4bff',
      primaryHover: '#1f3cf0', link: '#2945db', selected: '#e8edff',
      success: '#176b45', successSoft: '#e5f5ed', warning: '#805100',
      warningSoft: '#fff1d6', danger: '#ad2243', dangerSoft: '#ffebf0',
    },
    dark: {
      background: '#06030b', surface: '#0b0a0e', raised: '#15131a',
      foreground: '#f8f8fb', muted: '#c7c4ce', subtle: '#938f9c',
      border: '#292630', control: '#514b59', primary: '#4f6bff',
      primaryHover: '#6680ff', link: '#91a2ff', selected: '#151b36',
      success: '#72dca8', successSoft: '#102a21', warning: '#efc36e',
      warningSoft: '#2b2113', danger: '#ff9eaf', dangerSoft: '#30151f',
    },
  },
  space: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 6: '1.5rem', 8: '2rem', 12: '3rem' },
  radius: { sm: '0.3125rem', control: '0.4375rem', panel: '0.75rem' },
  typography: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
  },
  motion: { fast: '150ms', standard: '180ms', easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
} as const;

export type ImportIOTokens = typeof tokens;
