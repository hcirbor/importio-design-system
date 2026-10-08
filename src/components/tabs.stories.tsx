import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = { title: 'Components/Tabs', component: Tabs } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ResultAndEvidence: Story = { render: () => <Tabs defaultValue="result" className="w-96"><TabsList><TabsTrigger value="result">Result</TabsTrigger><TabsTrigger value="evidence">Evidence</TabsTrigger></TabsList><TabsContent value="result"><p className="text-sm text-muted">Structured task output appears here.</p></TabsContent><TabsContent value="evidence"><p className="text-sm text-muted">Source evidence appears here.</p></TabsContent></Tabs> };
