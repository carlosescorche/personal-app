import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Card } from '../Card';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
};

export const Muted: Story = {
  render: () => <Skeleton variant="muted" className="h-4 w-[250px]" />,
};

export const CompareVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Default (secondary)</p>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Muted</p>
        <div className="space-y-2">
          <Skeleton variant="muted" className="h-4 w-[250px]" />
          <Skeleton variant="muted" className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  ),
};

export const InCardDefault: Story = {
  render: () => (
    <Card className="w-[350px]">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </Card>
  ),
};

export const InCardMuted: Story = {
  render: () => (
    <Card className="w-[350px]">
      <div className="flex items-center gap-4">
        <Skeleton variant="muted" className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="muted" className="h-4 w-3/4" />
          <Skeleton variant="muted" className="h-3 w-1/2" />
        </div>
      </div>
    </Card>
  ),
};

export const ProfileCardSkeleton: Story = {
  render: () => (
    <div className="flex gap-6">
      <Card className="w-[300px]">
        <p className="text-xs text-muted-foreground mb-4">Default variant</p>
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="space-y-2 w-full text-center">
            <Skeleton className="h-5 w-32 mx-auto" />
            <Skeleton className="h-3 w-24 mx-auto" />
          </div>
          <div className="w-full space-y-3 pt-4">
            <Skeleton className="h-9 w-full rounded-lg" />
            <Skeleton className="h-9 w-full rounded-lg" />
          </div>
        </div>
      </Card>
      <Card className="w-[300px]">
        <p className="text-xs text-muted-foreground mb-4">Muted variant</p>
        <div className="flex flex-col items-center gap-4">
          <Skeleton variant="muted" className="h-20 w-20 rounded-full" />
          <div className="space-y-2 w-full text-center">
            <Skeleton variant="muted" className="h-5 w-32 mx-auto" />
            <Skeleton variant="muted" className="h-3 w-24 mx-auto" />
          </div>
          <div className="w-full space-y-3 pt-4">
            <Skeleton variant="muted" className="h-9 w-full rounded-lg" />
            <Skeleton variant="muted" className="h-9 w-full rounded-lg" />
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const ArticleCardSkeleton: Story = {
  render: () => (
    <div className="flex gap-6">
      <Card className="w-[320px] p-0 overflow-hidden">
        <Skeleton className="h-40 w-full rounded-none" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <div className="space-y-2 pt-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2 w-16" />
            </div>
          </div>
        </div>
      </Card>
      <Card className="w-[320px] p-0 overflow-hidden">
        <Skeleton variant="muted" className="h-40 w-full rounded-none" />
        <div className="p-4 space-y-3">
          <Skeleton variant="muted" className="h-5 w-full" />
          <Skeleton variant="muted" className="h-5 w-4/5" />
          <div className="space-y-2 pt-2">
            <Skeleton variant="muted" className="h-3 w-full" />
            <Skeleton variant="muted" className="h-3 w-full" />
            <Skeleton variant="muted" className="h-3 w-2/3" />
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Skeleton variant="muted" className="h-8 w-8 rounded-full" />
            <div className="space-y-1.5">
              <Skeleton variant="muted" className="h-3 w-24" />
              <Skeleton variant="muted" className="h-2 w-16" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const TableRowSkeleton: Story = {
  render: () => (
    <Card className="w-[500px] p-4">
      <div className="space-y-4">
        {[1, 2, 3, 4].map((row) => (
          <div key={row} className="flex items-center gap-4">
            <Skeleton variant="muted" className="h-10 w-10 rounded-full" />
            <Skeleton variant="muted" className="h-4 flex-1" />
            <Skeleton variant="muted" className="h-4 w-20" />
            <Skeleton variant="muted" className="h-8 w-24 rounded-lg" />
          </div>
        ))}
      </div>
    </Card>
  ),
};
