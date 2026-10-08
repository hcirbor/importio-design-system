import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';

const meta = { title: 'Components/Badge', component: Badge, args: { children: 'Status' } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Neutral: Story = {};
export const Info: Story = { args: { tone: 'info', children: 'Running' } };
export const Success: Story = { args: { tone: 'success', children: 'Complete' } };
export const Warning: Story = { args: { tone: 'warning', children: 'Needs review' } };
export const Danger: Story = { args: { tone: 'danger', children: 'Failed' } };
