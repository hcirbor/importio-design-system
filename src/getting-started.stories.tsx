import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, ArrowUpRight, BookOpen, Box, Download, GitFork, LayoutTemplate, Palette } from 'lucide-react';
import { BrandMark, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Eyebrow, Heading } from './index';

const meta = { title: 'Getting started', parameters: { layout: 'fullscreen' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const repositoryUrl = 'https://github.com/hcirbor/importio-design-system';
const packageUrl = 'https://www.npmjs.com/package/@importio/design-system';

export const Introduction: Story = { render: () => (
  <main className="mx-auto grid min-h-screen max-w-6xl content-start gap-12 p-6 md:p-12">
    <header className="grid max-w-4xl gap-5 py-8 md:py-16"><BrandMark className="w-12" /><Eyebrow>Import.io design system</Eyebrow><Heading level={1} className="max-w-3xl text-4xl md:text-5xl">One place to build, explain and represent Import.io</Heading><p className="m-0 max-w-2xl text-base leading-7 text-muted">Explore reusable product components, proven interface patterns and shared brand resources. Start with the path that best matches what you are making.</p></header>
    <section className="grid gap-4 md:grid-cols-2" aria-label="Choose a path">
      <h2 className="sr-only">Choose a path</h2>
      <Card className="flex flex-col"><CardHeader><div><LayoutTemplate className="mb-4 size-6 text-link" /><Eyebrow>Product and engineering</Eyebrow><CardTitle className="mt-2 text-lg">Build a product experience</CardTitle><CardDescription>Use components, tokens and composed patterns for accessible data workflows.</CardDescription></div></CardHeader><CardContent className="flex-1"><p className="m-0 text-sm leading-6 text-muted">Best for designers, engineers and product teams.</p></CardContent><CardFooter><Button variant="primary" asChild><a href="?path=/docs/patterns-composed-examples--docs" target="_top">Browse product patterns <ArrowRight /></a></Button></CardFooter></Card>
      <Card className="flex flex-col"><CardHeader><div><Palette className="mb-4 size-6 text-link" /><Eyebrow>Brand and marketing</Eyebrow><CardTitle className="mt-2 text-lg">Create an Import.io asset</CardTitle><CardDescription>Find brand principles, approved visual foundations and downloadable resources.</CardDescription></div></CardHeader><CardContent className="flex-1"><p className="m-0 text-sm leading-6 text-muted">Best for marketing, sales, partners and agencies.</p></CardContent><CardFooter><Button variant="primary" asChild><a href="?path=/docs/brand-guidelines--docs" target="_top">Open brand guidelines <ArrowRight /></a></Button></CardFooter></Card>
    </section>
    <section className="grid gap-4" aria-labelledby="install-title"><div><Eyebrow>Developer setup</Eyebrow><Heading id="install-title" className="mt-2">Install the React package</Heading></div><pre tabIndex={0} className="m-0 overflow-auto rounded-panel border bg-surface p-5 font-mono text-sm text-foreground"><code>npm install @importio/design-system</code></pre><pre tabIndex={0} className="m-0 overflow-auto rounded-panel border bg-surface p-5 font-mono text-sm leading-7 text-foreground"><code>{`import { Button } from '@importio/design-system';\nimport '@importio/design-system/styles.css';`}</code></pre></section>
    <section className="grid gap-4 md:grid-cols-3" aria-label="Project links">
      <h2 className="sr-only">Project links</h2>
      <Card><CardHeader><div><GitFork className="mb-3 size-5 text-primary" /><CardTitle>Repository</CardTitle><CardDescription>Source, issues and contribution guidance.</CardDescription></div></CardHeader><CardContent><Button variant="ghost" asChild><a href={repositoryUrl} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight /></a></Button></CardContent></Card>
      <Card><CardHeader><div><Box className="mb-3 size-5 text-primary" /><CardTitle>npm package</CardTitle><CardDescription>Package metadata, versions and installation.</CardDescription></div></CardHeader><CardContent><Button variant="ghost" asChild><a href={packageUrl} target="_blank" rel="noreferrer">Open npm <ArrowUpRight /></a></Button></CardContent></Card>
      <Card><CardHeader><div><Download className="mb-3 size-5 text-primary" /><CardTitle>Resource downloads</CardTitle><CardDescription>Logo files and presentation resources in one place.</CardDescription></div></CardHeader><CardContent><Button variant="ghost" asChild><a href="?path=/story/resources-presentation-templates--downloads" target="_top">Browse downloads <ArrowRight /></a></Button></CardContent></Card>
    </section>
    <p className="m-0 flex items-center gap-2 text-xs text-subtle"><BookOpen className="size-4" />Technical reference remains available under Foundations and Components.</p>
  </main>
) };
