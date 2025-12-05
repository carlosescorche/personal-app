import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
  },
};

export const Range: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[20, 80]} max={100} step={1} />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={10} />
    </div>
  ),
};
