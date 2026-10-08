import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Input, Textarea } from './field';

const meta = { title: 'Components/Field', component: Field } satisfies Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof meta>;
export const InputField: Story = { args: { label: 'Task name', htmlFor: 'task-name', description: 'Use a descriptive name.', children: <Input id="task-name" placeholder="Competitor prices" /> } };
export const TextareaField: Story = { args: { label: 'Sources', htmlFor: 'sources', children: <Textarea id="sources" placeholder="https://example.com" /> } };
export const Error: Story = { args: { label: 'Source URL', htmlFor: 'source-url', error: 'Enter a public HTTPS URL.', children: <Input id="source-url" aria-invalid="true" defaultValue="example" /> } };
