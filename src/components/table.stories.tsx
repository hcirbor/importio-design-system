import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

const meta = { title: 'Components/Table', component: Table, parameters: { layout: 'padded' } } satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;
export const DataTable: Story = { render: () => <Table><TableHeader><TableRow><TableHead>Task</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Records</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell className="font-medium">Product catalogue</TableCell><TableCell><Badge tone="success">Complete</Badge></TableCell><TableCell className="text-right font-mono">1,248</TableCell></TableRow><TableRow><TableCell className="font-medium">Price monitor</TableCell><TableCell><Badge tone="info">Running</Badge></TableCell><TableCell className="text-right font-mono">312</TableCell></TableRow></TableBody></Table> };
