import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const meta = { title: 'Components/Select', component: Select } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Cadence: Story = { render: () => <Select defaultValue="daily"><SelectTrigger className="w-64"><SelectValue placeholder="Choose a cadence" /></SelectTrigger><SelectContent><SelectItem value="hourly">Hourly</SelectItem><SelectItem value="daily">Daily</SelectItem><SelectItem value="weekly">Weekly</SelectItem></SelectContent></Select> };
