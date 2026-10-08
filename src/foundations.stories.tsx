import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from './tokens';
import { BrandMark, Code, Eyebrow, Heading } from './index';

const meta = { title: 'Foundations/Design tokens', parameters: { layout: 'fullscreen' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const swatches = [
  ['Background', 'background'], ['Surface', 'surface'], ['Raised', 'raised'],
  ['Foreground', 'foreground'], ['Muted', 'muted'], ['Subtle', 'subtle'],
  ['Border', 'border'], ['Primary', 'primary'], ['Selected', 'selected'],
  ['Success', 'success'], ['Warning', 'warning'], ['Danger', 'danger'],
] as const;

export const Overview: Story = {
  render: () => (
    <div className="mx-auto grid max-w-5xl gap-12 p-8">
      <header className="flex items-center gap-4"><BrandMark className="w-9" /><div><Eyebrow>Import.io design system</Eyebrow><Heading level={1}>Foundations</Heading></div></header>
      <section className="grid gap-4"><Heading>Semantic color</Heading><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{swatches.map(([label, token]) => <div key={token} className="overflow-hidden rounded-control border bg-surface"><div className="h-20" style={{ background: `var(--io-color-${token})` }} /><div className="p-3"><strong className="block text-sm">{label}</strong><Code>--io-color-{token}</Code></div></div>)}</div></section>
      <section className="grid gap-4"><Heading>Spacing</Heading><div className="flex flex-wrap items-end gap-6">{Object.entries(tokens.space).map(([key, value]) => <div className="grid justify-items-center gap-2" key={key}><div className="bg-primary" style={{ width: value, height: value }} /><Code>{key} · {value}</Code></div>)}</div></section>
      <section className="grid gap-3"><Eyebrow>Typography</Eyebrow><Heading level={1}>Answers you can trust.</Heading><Heading level={2}>Structured output, traceable sources.</Heading><p className="m-0 max-w-2xl text-sm leading-6 text-muted">Inter carries the interface while Geist Mono distinguishes metadata, identifiers, and code.</p></section>
    </div>
  ),
};
