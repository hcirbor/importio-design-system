import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'lucide-react';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const meta = { title: 'Components/Tooltip', component: Tooltip } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Information: Story = { render: () => <TooltipProvider><Tooltip defaultOpen><TooltipTrigger asChild><Button size="icon" aria-label="About evidence"><Info /></Button></TooltipTrigger><TooltipContent>Evidence stays close to the data it supports.</TooltipContent></Tooltip></TooltipProvider> };
