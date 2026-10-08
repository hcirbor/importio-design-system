import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Field, Input } from './field';

const meta = { title: 'Components/Dialog', component: Dialog } satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const CreateTask: Story = { render: () => <Dialog><DialogTrigger asChild><Button variant="primary">Open dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Create a task</DialogTitle><DialogDescription>Give the task a name and choose a source.</DialogDescription></DialogHeader><Field label="Name"><Input placeholder="My task" /></Field><DialogFooter><Button variant="ghost">Cancel</Button><Button variant="primary">Create task</Button></DialogFooter></DialogContent></Dialog> };
