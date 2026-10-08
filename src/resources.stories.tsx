import type { Meta, StoryObj } from '@storybook/react-vite';
import { Download } from 'lucide-react';
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Eyebrow, Heading } from './index';

const meta = { title: 'Resources/Presentation templates', parameters: { layout: 'fullscreen' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const resources = [
  { title: 'Product and strategy', description: 'For product direction, strategic choices and roadmaps.', file: 'importio-product-overview.potx', preview: 'importio-product-overview.png', type: 'PowerPoint template' },
  { title: 'Research readout', description: 'For methods, evidence, findings and implications.', file: 'importio-research-readout.potx', preview: 'importio-research-readout.png', type: 'PowerPoint template' },
  { title: 'Customer review', description: 'For objectives, results, commitments and the next period.', file: 'importio-customer-review.potx', preview: 'importio-customer-review.png', type: 'PowerPoint template' },
  { title: 'Presentation example', description: 'A completed example introducing the design system.', file: 'importio-presentation-example.pptx', preview: 'importio-presentation-example.png', type: 'PowerPoint presentation' },
] as const;

export const Downloads: Story = {
  render: () => (
    <main className="mx-auto grid max-w-6xl gap-10 p-6 md:p-10">
      <header className="grid max-w-3xl gap-3">
        <Eyebrow>Import.io resources</Eyebrow>
        <Heading level={1}>Presentation templates</Heading>
        <p className="m-0 text-base leading-7 text-muted">Editable 16:9 templates use the same color, spacing and typography principles as the React system. Each template includes title, section, agenda, text, comparison, metrics, chart, table, evidence and closing layouts.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-2" aria-label="Presentation downloads">
        {resources.map((resource) => (
          <Card key={resource.file} className="flex flex-col">
            <img className="aspect-video w-full border-b object-cover" src={`downloads/previews/${resource.preview}`} alt={`${resource.title} template title slide`} />
            <CardHeader><div><CardTitle>{resource.title}</CardTitle><CardDescription>{resource.description}</CardDescription></div><Badge tone="info">10 layouts</Badge></CardHeader>
            <CardContent className="flex-1"><p className="m-0 text-xs text-subtle">{resource.type}</p></CardContent>
            <CardFooter><Button variant="primary" asChild><a href={`downloads/${resource.file}`} download><Download />Download</a></Button></CardFooter>
          </Card>
        ))}
      </section>
      <Card><CardHeader><div><CardTitle>Import.io logo pack</CardTitle><CardDescription>Transparent, dark-plate and white SVG marks with usage notes.</CardDescription></div></CardHeader><CardFooter><Button asChild><a href="downloads/importio-logo-pack.zip" download><Download />Download logo pack</a></Button></CardFooter></Card>
    </main>
  ),
};
