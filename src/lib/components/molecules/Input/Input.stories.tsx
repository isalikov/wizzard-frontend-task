import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic input with label
export const Default: Story = {
  args: {
    label: 'Input field',
    placeholder: 'Enter text...',
  },
};

// Required input
export const Required: Story = {
  args: {
    label: 'Required input',
    placeholder: 'This field is required',
    required: true,
  },
};

// Input with error state
export const WithError: Story = {
  args: {
    label: 'Input with error',
    placeholder: 'Error state',
    error: true,
    value: 'Invalid input',
  },
};

// Disabled input
export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

// Full width input
export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Optional input (explicitly showing optional label)
export const Optional: Story = {
  args: {
    label: 'Optional input',
    placeholder: 'Optional field',
    required: false,
  },
};
