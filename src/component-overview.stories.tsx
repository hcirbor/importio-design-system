import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, ChevronDown, Info, LoaderCircle, Plus, Settings2, Trash2, X } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Eyebrow,
  Field,
  Heading,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './index';

const meta = {
  title: 'Components/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A single visual inventory of the design system’s core variants and representative states.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Section({ index, title, description, children }: { index: string; title: string; description: string; children: ReactNode }) {
  return (
    <section className="grid gap-5" aria-labelledby={`overview-${index}`}>
      <div className="grid gap-1">
        <Eyebrow>{index}</Eyebrow>
        <Heading id={`overview-${index}`} className="text-xl">{title}</Heading>
        <p className="m-0 max-w-3xl text-sm leading-6 text-muted">{description}</p>
      </div>
      <div className="overflow-hidden rounded-panel border bg-surface shadow-panel">{children}</div>
    </section>
  );
}

function Specimen({ label, note, children }: { label: string; note?: string; children: ReactNode }) {
  return (
    <div className="grid gap-4 border-b p-5 last:border-b-0 md:grid-cols-[10rem_minmax(0,1fr)] md:p-6">
      <div>
        <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-subtle">{label}</p>
        {note && <p className="mb-0 mt-1 text-xs leading-5 text-subtle">{note}</p>}
      </div>
      <div className="flex min-w-0 flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function StateSample({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid min-w-28 gap-2">
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-subtle">{label}</span>
      <div className="flex min-h-11 items-center">{children}</div>
    </div>
  );
}

function OverviewPage() {
  return (
    <main className="min-h-screen bg-background p-5 text-foreground sm:p-8 lg:p-12">
      <div className="mx-auto grid max-w-6xl gap-12">
        <header className="grid max-w-4xl gap-4 py-4 sm:py-8">
          <Eyebrow>Component inventory</Eyebrow>
          <Heading level={1} className="text-3xl sm:text-4xl">All variants and states at a glance</Heading>
          <p className="m-0 max-w-3xl text-base leading-7 text-muted">Use this page to scan the system, compare related choices and catch visual drift. Interactive components remain functional; labelled rows provide a stable reference for design review, agents and future visual regression tests.</p>
        </header>

        <Section index="01" title="Buttons" description="Action hierarchy, size and availability should remain easy to distinguish without relying on position alone.">
          <Specimen label="Variants">
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger"><Trash2 />Delete</Button>
          </Specimen>
          <Specimen label="Sizes">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add item"><Plus /></Button>
          </Specimen>
          <Specimen label="Disabled" note="Disabled controls preserve their hierarchy while reducing emphasis.">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
            <Button variant="danger" disabled>Delete</Button>
          </Specimen>
          <Specimen label="Interaction states" note="Hover, focus and pressed are forced visual references for review; they are CSS states, not component props.">
            <StateSample label="Default"><Button variant="primary">Continue</Button></StateSample>
            <StateSample label="Hover"><Button variant="primary" className="border-primary-hover bg-primary-hover">Continue</Button></StateSample>
            <StateSample label="Focus"><Button variant="primary" className="outline outline-2 outline-offset-[3px] outline-[var(--io-color-focus)]">Continue</Button></StateSample>
            <StateSample label="Pressed"><Button variant="primary" className="translate-y-px border-primary-hover bg-primary-hover shadow-inner">Continue</Button></StateSample>
          </Specimen>
          <Specimen label="Loading" note="Loading is composed from the button, an icon and aria-busy; it is not a separate visual variant.">
            <Button variant="primary" aria-busy="true" disabled><LoaderCircle className="animate-spin" />Creating source…</Button>
            <Button variant="secondary" aria-busy="true" disabled><LoaderCircle className="animate-spin" />Refreshing…</Button>
          </Specimen>
        </Section>

        <Section index="02" title="Badges" description="Status colours always accompany a written label so meaning remains accessible.">
          <Specimen label="Tones">
            <Badge tone="neutral">Draft</Badge>
            <Badge tone="info">Running</Badge>
            <Badge tone="success">Complete</Badge>
            <Badge tone="warning">Needs review</Badge>
            <Badge tone="danger">Failed</Badge>
          </Specimen>
        </Section>

        <Section index="03" title="Fields" description="Labels, supporting guidance and errors remain attached to the control they describe.">
          <Specimen label="Inputs">
            <div className="grid w-full gap-5 lg:grid-cols-3">
              <Field label="Source name" htmlFor="overview-source" description="Use a name your team will recognise."><Input id="overview-source" placeholder="Retail catalogue" /></Field>
              <Field label="Email" htmlFor="overview-email" error="Enter a valid work email."><Input id="overview-email" aria-invalid="true" defaultValue="robin@" /></Field>
              <Field label="Workspace" htmlFor="overview-workspace" description="This value cannot be changed."><Input id="overview-workspace" defaultValue="Import.io" disabled /></Field>
            </div>
          </Specimen>
          <Specimen label="Textarea">
            <Field className="w-full max-w-2xl" label="Review note" htmlFor="overview-note" description="Add evidence or context for the next reviewer."><Textarea id="overview-note" placeholder="Explain what changed…" /></Field>
          </Specimen>
        </Section>

        <Section index="04" title="Selects and tabs" description="Selection controls show the current value clearly and keep unavailable choices visible where useful.">
          <Specimen label="Selects">
            <div className="grid w-full gap-3 sm:grid-cols-3">
              <Select><SelectTrigger aria-label="Choose status"><SelectValue placeholder="Choose status" /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem><SelectItem value="complete">Complete</SelectItem><SelectItem value="review">Needs review</SelectItem></SelectContent></Select>
              <Select defaultValue="complete"><SelectTrigger aria-label="Selected status"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="complete">Complete</SelectItem><SelectItem value="running">Running</SelectItem></SelectContent></Select>
              <Select disabled><SelectTrigger aria-label="Disabled status"><SelectValue placeholder="Unavailable" /></SelectTrigger><SelectContent><SelectItem value="none">Unavailable</SelectItem></SelectContent></Select>
            </div>
          </Specimen>
          <Specimen label="Select open" note="A stable anatomy reference shows the open menu without placing a portal over the full inventory.">
            <div className="grid w-full max-w-xs gap-1" aria-label="Open select visual reference">
              <div className="flex min-h-10 items-center justify-between gap-2 rounded-control border border-[var(--io-color-focus)] bg-surface px-3 py-2 text-sm shadow-[0_0_0_1px_var(--io-color-focus)]">
                <span>Complete</span><ChevronDown className="size-4 text-subtle" />
              </div>
              <div className="rounded-control border bg-surface p-1 text-sm shadow-panel">
                <div className="relative flex items-center rounded-[var(--io-radius-sm)] bg-selected py-2 pl-8 pr-3 text-link"><Check className="absolute left-2 size-4" />Complete</div>
                <div className="py-2 pl-8 pr-3">Running</div>
                <div className="py-2 pl-8 pr-3">Needs review</div>
                <div className="py-2 pl-8 pr-3 opacity-50">Unavailable</div>
              </div>
            </div>
          </Specimen>
          <Specimen label="Tabs">
            <Tabs defaultValue="overview" className="w-full max-w-2xl">
              <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger><TabsTrigger value="settings">Settings</TabsTrigger><TabsTrigger value="disabled" disabled>Unavailable</TabsTrigger></TabsList>
              <TabsContent value="overview"><p className="m-0 text-sm text-muted">Summary content for the selected view.</p></TabsContent>
              <TabsContent value="activity"><p className="m-0 text-sm text-muted">Recent activity appears here.</p></TabsContent>
              <TabsContent value="settings"><p className="m-0 text-sm text-muted">Configuration controls appear here.</p></TabsContent>
            </Tabs>
          </Specimen>
        </Section>

        <Section index="05" title="Cards" description="Cards group related information without making every section feel equally interactive.">
          <Specimen label="Anatomy">
            <div className="grid w-full gap-4 lg:grid-cols-2">
              <Card><CardHeader><div><CardTitle>Data source</CardTitle><CardDescription>Last updated four minutes ago</CardDescription></div><Badge tone="success">Complete</Badge></CardHeader><CardContent><p className="m-0 text-sm leading-6 text-muted">12,480 records are ready for review and export.</p></CardContent><CardFooter><Button variant="primary">Open source</Button><Button variant="ghost">View activity</Button></CardFooter></Card>
              <Card><CardHeader><div><CardTitle>Configuration required</CardTitle><CardDescription>Add credentials before the first run.</CardDescription></div><Settings2 className="size-5 text-subtle" /></CardHeader><CardContent><p className="m-0 text-sm leading-6 text-muted">The source remains paused until a valid connection is available.</p></CardContent><CardFooter><Button>Configure</Button></CardFooter></Card>
            </div>
          </Specimen>
        </Section>

        <Section index="06" title="Tables" description="Tables prioritise comparison, scanning and predictable action placement.">
          <div className="overflow-auto">
            <Table>
              <TableHeader><TableRow><TableHead>Source</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Records</TableHead><TableHead>Updated</TableHead></TableRow></TableHeader>
              <TableBody>
                <TableRow><TableCell className="font-medium">Northstar catalogue</TableCell><TableCell><Badge tone="success">Complete</Badge></TableCell><TableCell className="text-right font-mono">12,480</TableCell><TableCell className="text-muted">4 min ago</TableCell></TableRow>
                <TableRow className="bg-raised"><TableCell className="font-medium">Willow price monitor</TableCell><TableCell><Badge tone="info">Running</Badge></TableCell><TableCell className="text-right font-mono">3,216</TableCell><TableCell className="text-muted">Now</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">Pioneer locations</TableCell><TableCell><Badge tone="warning">Needs review</Badge></TableCell><TableCell className="text-right font-mono">864</TableCell><TableCell className="text-muted">18 min ago</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </Section>

        <Section index="07" title="Dialogs and tooltips" description="Overlays clarify consequences or provide concise supporting information without replacing the underlying page.">
          <Specimen label="Dialog">
            <Dialog>
              <DialogTrigger asChild><Button variant="danger"><Trash2 />Delete source</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Delete this source?</DialogTitle><DialogDescription>This removes the configuration and run history. This action cannot be undone.</DialogDescription></DialogHeader>
                <DialogFooter><DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose><Button variant="danger">Delete source</Button></DialogFooter>
              </DialogContent>
            </Dialog>
            <p className="m-0 text-xs text-subtle">Select the trigger to inspect the complete overlay state.</p>
          </Specimen>
          <Specimen label="Dialog open" note="A contained reference keeps the open state visible in screenshots; the interactive trigger above uses the real Radix dialog.">
            <div className="grid w-full place-items-center rounded-panel bg-foreground/60 p-5 sm:p-8">
              <div className="relative grid w-full max-w-lg gap-5 rounded-panel border bg-surface p-6 text-foreground shadow-panel">
                <button type="button" className="absolute right-4 top-4 grid size-9 place-items-center rounded-control text-subtle" aria-label="Close dialog visual reference"><X className="size-4" /></button>
                <div className="grid gap-1.5 pr-8">
                  <h3 className="m-0 text-lg font-semibold tracking-[-0.02em]">Delete this source?</h3>
                  <p className="m-0 text-sm leading-6 text-muted">This removes the configuration and run history. This action cannot be undone.</p>
                </div>
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <Button variant="ghost">Cancel</Button><Button variant="danger">Delete source</Button>
                </div>
              </div>
            </div>
          </Specimen>
          <Specimen label="Tooltip">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild><Button size="icon" variant="ghost" aria-label="About record counts"><Info /></Button></TooltipTrigger>
                <TooltipContent>Counts include valid records from the latest completed run.</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="rounded-[var(--io-radius-sm)] bg-foreground px-3 py-2 text-xs leading-5 text-surface shadow-panel">Static reference for the tooltip surface</div>
          </Specimen>
        </Section>
      </div>
    </main>
  );
}

export const AllVariantsAndStates: Story = { render: () => <OverviewPage /> };
