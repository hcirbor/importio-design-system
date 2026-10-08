import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = { title: 'Components/Card', component: Card } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Panel: Story = { render: () => <Card className="w-[min(32rem,85vw)]"><CardHeader><div><CardTitle>Extraction task</CardTitle><CardDescription>Collect structured records from a public source.</CardDescription></div><Badge tone="success">Ready</Badge></CardHeader><CardContent><p className="m-0 text-sm leading-6 text-muted">Panels group related content and actions without prescribing an application layout.</p></CardContent><CardFooter><Button variant="primary">Run task</Button><Button variant="ghost">View schema</Button></CardFooter></Card> };
