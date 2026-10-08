import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus } from 'lucide-react';
import { Button } from './button';

const meta = { title: 'Components/Button', component: Button, parameters: { docs: { description: { component: 'Triggers an action or navigates with clear visual priority.' } } }, args: { children: 'Run task' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = {};
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete task' } };
export const WithIcon: Story = { args: { variant: 'primary', children: <><Plus />New task</> } };
export const Disabled: Story = { args: { disabled: true } };
