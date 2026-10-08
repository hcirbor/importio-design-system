import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, Download, X } from 'lucide-react';
import { BrandMark, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Eyebrow, Heading } from './index';

const meta = {
  title: 'Brand/Guidelines',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A practical reference for applying the Import.io visual language across product and marketing work.' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  { name: 'Import blue', value: '#4F6BFF', className: 'bg-[#4f6bff]', use: 'Brand recognition and signature moments' },
  { name: 'Action blue', value: '#2E4BFF', className: 'bg-[#2e4bff]', use: 'Primary actions and interactive emphasis' },
  { name: 'Ink', value: '#171126', className: 'bg-[#171126]', use: 'Light-theme text and dark brand plates' },
  { name: 'Cloud', value: '#F6F7FB', className: 'bg-[#f6f7fb]', use: 'Quiet backgrounds and canvas areas' },
  { name: 'Success', value: '#176B45', className: 'bg-[#176b45]', use: 'Confirmed and completed states' },
  { name: 'Signal', value: '#AD2243', className: 'bg-[#ad2243]', use: 'Destructive actions and critical status' },
] as const;

export const Overview: Story = {
  render: () => (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-12">
      <div className="mx-auto grid max-w-6xl gap-14">
        <header className="grid max-w-3xl gap-4"><BrandMark className="w-12" /><Eyebrow>Brand guidelines</Eyebrow><Heading level={1} className="text-4xl md:text-5xl">Clear evidence. Confident decisions.</Heading><p className="m-0 max-w-2xl text-base leading-7 text-muted">The Import.io language balances analytical precision with an approachable, assured point of view. Use restraint, strong hierarchy and visible evidence.</p></header>

        <section className="grid gap-5" aria-labelledby="logo-title"><div><Eyebrow>01 · Identity</Eyebrow><Heading id="logo-title" className="mt-2">Logo and mark</Heading></div><div className="grid gap-5 md:grid-cols-2"><div className="grid min-h-60 place-items-center rounded-panel border bg-white p-10"><BrandMark className="w-16" /></div><div className="grid min-h-60 place-items-center rounded-panel border border-[#292630] bg-[#06030b] p-10"><BrandMark className="w-16" /></div></div><div className="grid gap-3 sm:grid-cols-2"><div className="flex gap-3 rounded-control border bg-surface p-4"><Check className="mt-0.5 size-4 shrink-0 text-success" /><p className="m-0 text-sm leading-6 text-muted">Give the mark generous clear space and use it on calm, high-contrast surfaces.</p></div><div className="flex gap-3 rounded-control border bg-surface p-4"><X className="mt-0.5 size-4 shrink-0 text-danger" /><p className="m-0 text-sm leading-6 text-muted">Do not stretch, rotate, recolour or place the mark over visually noisy imagery.</p></div></div></section>

        <section className="grid gap-5" aria-labelledby="color-title"><div><Eyebrow>02 · Colour</Eyebrow><Heading id="color-title" className="mt-2">A focused, functional palette</Heading></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{colors.map((color) => <Card key={color.name}><div className={`h-28 border-b ${color.className}`} /><CardHeader><div><CardTitle>{color.name}</CardTitle><CardDescription>{color.use}</CardDescription></div></CardHeader><CardContent><code className="font-mono text-xs text-subtle">{color.value}</code></CardContent></Card>)}</div></section>

        <section className="grid gap-5" aria-labelledby="type-title"><div><Eyebrow>03 · Typography</Eyebrow><Heading id="type-title" className="mt-2">Direct hierarchy, useful detail</Heading></div><Card><CardContent className="grid gap-8 p-8 md:p-10"><div><p className="m-0 text-xs text-subtle">Inter · Display</p><p className="mb-0 mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Answers you can trust.</p></div><div><p className="m-0 text-xs text-subtle">Inter · Body</p><p className="mb-0 mt-3 max-w-2xl text-base leading-7 text-muted">Lead with the conclusion, explain the evidence, and make the next action unmistakable.</p></div><div><p className="m-0 text-xs text-subtle">Geist Mono · Metadata</p><p className="mb-0 mt-3 font-mono text-sm text-muted">12,480 RECORDS · UPDATED 09:42 UTC</p></div></CardContent></Card></section>

        <section className="grid gap-5" aria-labelledby="voice-title"><div><Eyebrow>04 · Voice</Eyebrow><Heading id="voice-title" className="mt-2">Precise, useful and quietly confident</Heading></div><div className="grid gap-4 md:grid-cols-3">{[['Lead with meaning', 'Put the decision or outcome before implementation detail.'], ['Use specific language', 'Prefer concrete actions, quantities and states over vague claims.'], ['Show the evidence', 'Make provenance and confidence easy to find without overwhelming the message.']].map(([title, description]) => <Card key={title}><CardHeader><div><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></div></CardHeader></Card>)}</div></section>

        <Card><CardHeader><div><CardTitle>Download the logo pack</CardTitle><CardDescription>SVG marks for light and dark surfaces, plus basic usage notes.</CardDescription></div></CardHeader><CardFooter><Button variant="primary" asChild><a href="downloads/importio-logo-pack.zip" download><Download />Download logo pack</a></Button></CardFooter></Card>
      </div>
    </main>
  ),
};
