import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    variant: {
      control: 'select',
      options: ['default'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    success: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Input 
        variant="default" 
        label="Default variant" 
        placeholder="Default input" 
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Input 
        label="Normal state" 
        placeholder="Normal input" 
      />
      <Input 
        label="Error state" 
        placeholder="Input with error" 
        error="Este campo es requerido"
      />
      <Input 
        label="Success state" 
        placeholder="Input with success" 
        success
      />
      <Input 
        label="With helper text" 
        placeholder="Input with helper" 
        helperText="Este texto te ayudará a completar el campo"
      />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
      />
      <Input 
        label="Password with error" 
        type="password" 
        placeholder="Enter your password" 
        error="La contraseña debe tener al menos 8 caracteres"
      />
      <Input 
        label="Password with success" 
        type="password" 
        placeholder="Enter your password" 
        success
      />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="Email input" />
      <Input type="password" label="Password" placeholder="Password input" />
      <Input type="number" label="Number" placeholder="Number input" />
      <Input type="tel" label="Phone" placeholder="Phone input" />
      <Input type="url" label="URL" placeholder="URL input" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Input label="Disabled input" placeholder="Disabled input" disabled />
      <Input label="Enabled input" placeholder="Enabled input" />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    label: 'Pre-filled input',
    defaultValue: 'Pre-filled value',
  },
};
