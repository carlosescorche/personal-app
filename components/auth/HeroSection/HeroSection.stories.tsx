import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';
import { Check } from 'lucide-react';

const meta: Meta<typeof HeroSection> = {
  title: 'Auth/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: 'text',
    },
    subheadline: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'AI-Powered Employee Feedback That Actually Gets Used',
    subheadline: '60-second surveys. 85% response rates.',
  },
  render: (args) => (
    <div className="h-screen w-full">
      <HeroSection {...args} />
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    headline: 'Join 500+ Companies',
    subheadline: 'Transform your employee engagement today',
  },
  render: (args) => (
    <div className="h-screen w-full">
      <HeroSection {...args}>
        <div className="space-y-4 text-left max-w-md mx-auto">
          {[
            'AI-powered survey creation',
            'Real-time insights',
            '85% response rates',
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </HeroSection>
    </div>
  ),
};

export const LoginPageView: Story = {
  render: () => (
    <div className="min-h-screen flex">
      {/* Hero Section - Desktop Left Side */}
      <div className="hidden lg:flex lg:w-1/2">
        <HeroSection
          headline="AI-Powered Employee Feedback That Actually Gets Used"
          subheadline="60-second surveys. 85% response rates."
        />
      </div>
      
      {/* Form Section - Right Side (simulated) */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-[440px] p-6 md:p-8 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 text-center">
            Form section would appear here
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

