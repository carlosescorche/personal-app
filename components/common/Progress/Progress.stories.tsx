import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
  },
};

export const Values: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div>
        <Progress value={0} />
        <p className="text-sm text-muted-foreground mt-2">0%</p>
      </div>
      <div>
        <Progress value={25} />
        <p className="text-sm text-muted-foreground mt-2">25%</p>
      </div>
      <div>
        <Progress value={50} />
        <p className="text-sm text-muted-foreground mt-2">50%</p>
      </div>
      <div>
        <Progress value={75} />
        <p className="text-sm text-muted-foreground mt-2">75%</p>
      </div>
      <div>
        <Progress value={100} />
        <p className="text-sm text-muted-foreground mt-2">100%</p>
      </div>
    </div>
  ),
};
