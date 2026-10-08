import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, CircleHelp, Database, Filter, MoreHorizontal, Search, ShieldCheck, Trash2 } from 'lucide-react';
import { Badge } from './components/badge';
import { Button } from './components/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/card';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/dialog';
import { Field, Input, Textarea } from './components/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/tooltip';

const meta = {
  title: 'Patterns/Composed examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Reference compositions for common data-product workflows. These examples are Storybook-only and are not exported from the npm package.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sources = [
  { name: 'Northstar catalogue', domain: 'northstar.example', status: 'Complete', records: '12,480', updated: '4 min ago' },
  { name: 'Willow price monitor', domain: 'willow.example', status: 'Running', records: '3,216', updated: 'Now' },
  { name: 'Pioneer locations', domain: 'pioneer.example', status: 'Needs review', records: '864', updated: '18 min ago' },
  { name: 'Atlas availability', domain: 'atlas.example', status: 'Complete', records: '7,031', updated: '1 hr ago' },
];

function PatternFrame({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background p-5 text-foreground sm:p-8 lg:p-12">
      <div className="mx-auto grid max-w-6xl gap-7">
        <header className="max-w-3xl">
          <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-link">{eyebrow}</p>
          <h1 className="mb-2 mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{title}</h1>
          <p className="m-0 text-sm leading-6 text-muted sm:text-base">{description}</p>
        </header>
        {children}
      </div>
    </main>
  );
}

function DataExplorerPattern() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => sources.filter((source) => `${source.name} ${source.domain}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <PatternFrame eyebrow="Pattern 01" title="Explore and act on structured data" description="Keep filters close to the data, make system status scannable, and preserve one clear primary action.">
      <Card>
        <CardHeader className="flex-col sm:flex-row sm:items-center">
          <div>
            <CardTitle aria-level={2}>Data sources</CardTitle>
            <CardDescription>{filtered.length} of {sources.length} sources shown</CardDescription>
          </div>
          <Button variant="primary">Add source</Button>
        </CardHeader>
        <div className="grid gap-3 border-b p-4 sm:grid-cols-[minmax(16rem,1fr)_12rem_auto] sm:px-6">
          <label className="relative block">
            <span className="sr-only">Search sources</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
            <Input className="pl-9" placeholder="Search sources" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
          <Select defaultValue="all">
            <SelectTrigger aria-label="Filter by status"><SelectValue placeholder="All statuses" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="complete">Complete</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="review">Needs review</SelectItem>
            </SelectContent>
          </Select>
          <Button className="whitespace-nowrap" variant="secondary"><Filter className="size-4" /> More filters</Button>
        </div>
        <Table>
          <TableHeader><TableRow><TableHead>Source</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Records</TableHead><TableHead>Updated</TableHead><TableHead><span className="sr-only">Actions</span></TableHead></TableRow></TableHeader>
          <TableBody>
            {filtered.map((source) => (
              <TableRow key={source.name}>
                <TableCell><div className="font-medium">{source.name}</div><div className="mt-0.5 text-xs text-subtle">{source.domain}</div></TableCell>
                <TableCell><Badge tone={source.status === 'Complete' ? 'success' : source.status === 'Running' ? 'info' : 'warning'}>{source.status}</Badge></TableCell>
                <TableCell className="text-right font-mono">{source.records}</TableCell>
                <TableCell className="text-muted">{source.updated}</TableCell>
                <TableCell className="text-right"><Button variant="ghost" size="icon" aria-label={`Actions for ${source.name}`}><MoreHorizontal className="size-4" /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filtered.length === 0 && <div className="grid justify-items-center gap-2 px-6 py-12 text-center"><Search className="size-5 text-subtle" /><p className="m-0 text-sm font-medium">No matching sources</p><p className="m-0 text-sm text-muted">Try a different name or domain.</p></div>}
        <CardFooter className="justify-between"><span className="text-xs text-subtle">Fictional demonstration data</span><Button variant="ghost" size="sm">View activity <ArrowRight className="size-4" /></Button></CardFooter>
      </Card>
    </PatternFrame>
  );
}

function SourceConfigurationPattern() {
  return (
    <PatternFrame eyebrow="Pattern 02" title="Configure a collection task" description="Group related choices, explain consequential fields, and place secondary actions before the primary commitment.">
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader><div><CardTitle aria-level={2}>New collection task</CardTitle><CardDescription>Define the source and delivery cadence.</CardDescription></div><Badge tone="neutral">Draft</Badge></CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Task name" htmlFor="pattern-task-name"><Input id="pattern-task-name" defaultValue="Weekly catalogue snapshot" /></Field>
              <Field label="Cadence" htmlFor="pattern-cadence">
                <Select defaultValue="weekly"><SelectTrigger id="pattern-cadence"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="once">Run once</SelectItem><SelectItem value="daily">Daily</SelectItem><SelectItem value="weekly">Weekly</SelectItem></SelectContent></Select>
              </Field>
            </div>
            <Field label="Source URL" htmlFor="pattern-source-url" description="Use a public HTTPS page. Authentication can be added after setup."><Input id="pattern-source-url" type="url" defaultValue="https://catalogue.example/products" /></Field>
            <Field label="Extraction guidance" htmlFor="pattern-guidance" description="Describe the information you need rather than its position on the page."><Textarea id="pattern-guidance" defaultValue="Collect product name, current price, availability and canonical URL." /></Field>
            <div className="rounded-control border bg-raised p-4">
              <div className="flex gap-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-success" /><div><p className="m-0 text-sm font-medium">Validation ready</p><p className="mb-0 mt-1 text-xs leading-5 text-muted">The source is public and the requested fields are clearly described.</p></div></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-end"><Button variant="ghost">Save draft</Button><Button variant="primary">Create task</Button></CardFooter>
      </Card>
    </PatternFrame>
  );
}

function ResultsAndEvidencePattern() {
  return (
    <PatternFrame eyebrow="Pattern 03" title="Pair results with evidence" description="Make the answer useful at a glance while keeping source context one deliberate step away.">
      <Card>
        <CardHeader className="flex-col sm:flex-row sm:items-center">
          <div><CardTitle aria-level={2}>Catalogue snapshot</CardTitle><CardDescription>Completed 8 October at 09:42 · 12,480 records</CardDescription></div>
          <div className="flex items-center gap-2"><Badge tone="success">Complete</Badge><Button variant="secondary" size="sm">Export CSV</Button></div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="result">
            <TabsList aria-label="Result details"><TabsTrigger value="result">Result</TabsTrigger><TabsTrigger value="evidence">Evidence</TabsTrigger><TabsTrigger value="quality">Quality</TabsTrigger></TabsList>
            <TabsContent value="result">
              <div className="grid gap-4 sm:grid-cols-3">
                {[['Records', '12,480', '+4.2%'], ['Available', '11,906', '95.4%'], ['Median price', '€38.40', '−1.8%']].map(([label, value, delta]) => <div className="rounded-control border bg-raised p-5" key={label}><p className="m-0 text-xs text-muted">{label}</p><p className="mb-1 mt-3 font-mono text-2xl font-semibold">{value}</p><p className="m-0 text-xs text-subtle">{delta} from last run</p></div>)}
              </div>
              <div className="mt-5 rounded-control border p-5"><h3 className="m-0 text-sm font-semibold">Summary</h3><p className="mb-0 mt-2 max-w-3xl text-sm leading-6 text-muted">Availability remains stable across the catalogue. The largest price movement appears in outdoor equipment, where the median listed price decreased by 6.1%.</p></div>
            </TabsContent>
            <TabsContent value="evidence">
              <div className="grid gap-3">
                {['/products/field-jacket', '/products/trail-pack', '/products/camp-light'].map((path, index) => <div className="flex items-start gap-3 rounded-control border p-4" key={path}><Database className="mt-0.5 size-4 shrink-0 text-link" /><div className="min-w-0 flex-1"><p className="m-0 truncate font-mono text-xs">catalogue.example{path}</p><p className="mb-0 mt-1 text-xs text-muted">Captured row {index + 42} · title, price and availability verified</p></div><Badge tone="success">Matched</Badge></div>)}
              </div>
            </TabsContent>
            <TabsContent value="quality">
              <div className="flex max-w-2xl items-start gap-4 rounded-control border bg-raised p-5"><div className="grid size-11 shrink-0 place-items-center rounded-full bg-success-soft font-mono text-sm font-semibold text-success">98</div><div><div className="flex items-center gap-2"><h3 className="m-0 text-sm font-semibold">High confidence</h3><TooltipProvider><Tooltip><TooltipTrigger asChild><button className="text-subtle" aria-label="How confidence is calculated"><CircleHelp className="size-4" /></button></TooltipTrigger><TooltipContent>Based on field coverage, source consistency and validation checks.</TooltipContent></Tooltip></TooltipProvider></div><p className="mb-0 mt-1 text-sm leading-6 text-muted">All required fields passed validation. Review the 14 records with unexpected price formatting before delivery.</p></div></div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </PatternFrame>
  );
}

function DestructiveConfirmationPattern() {
  return (
    <PatternFrame eyebrow="Pattern 04" title="Confirm a destructive action" description="State what will happen, name the affected object, and keep the safe escape route obvious.">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader><div><CardTitle aria-level={2}>Task maintenance</CardTitle><CardDescription>Actions for “Weekly catalogue snapshot”.</CardDescription></div><Badge tone="success">Active</Badge></CardHeader>
        <CardContent><div className="flex flex-col gap-4 rounded-control border border-danger/30 bg-danger-soft p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="m-0 text-sm font-medium">Delete this task</p><p className="mb-0 mt-1 text-sm text-muted">The task and its schedule will be removed. Existing exports are retained.</p></div><Dialog><DialogTrigger asChild><Button variant="danger"><Trash2 className="size-4" /> Delete task</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Delete “Weekly catalogue snapshot”?</DialogTitle><DialogDescription>This permanently removes the task and stops future scheduled runs. Existing exported files will not be deleted.</DialogDescription></DialogHeader><div className="rounded-control border bg-raised p-4 text-sm text-muted">Type deletion is intentionally omitted in this lightweight confirmation pattern.</div><DialogFooter><DialogClose asChild><Button variant="ghost">Keep task</Button></DialogClose><Button variant="danger">Delete task</Button></DialogFooter></DialogContent></Dialog></div></CardContent>
      </Card>
    </PatternFrame>
  );
}

export const DataExplorer: Story = { render: () => <DataExplorerPattern /> };
export const SourceConfiguration: Story = { render: () => <SourceConfigurationPattern /> };
export const ResultsAndEvidence: Story = { render: () => <ResultsAndEvidencePattern /> };
export const DestructiveConfirmation: Story = { render: () => <DestructiveConfirmationPattern /> };
