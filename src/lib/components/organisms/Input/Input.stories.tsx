import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'organisms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required and removes the (Optional) text',
    },
    error: {
      control: 'boolean',
      description: 'Displays the input in error state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Input field',
    placeholder: 'Enter value',
  },
};

export const Required: Story = {
  args: {
    label: 'Required field',
    required: true,
    placeholder: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error state',
    error: true,
    placeholder: 'Error state example',
    defaultValue: 'Invalid input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    disabled: true,
    placeholder: 'This input is disabled',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Input with value',
    defaultValue: 'Prefilled value',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'This is a very long label that might wrap to multiple lines to test the layout',
    placeholder: 'Input with long label',
  },
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="First Name" required placeholder="Enter your first name" />
      <Input label="Last Name" required placeholder="Enter your last name" />
      <Input label="Phone" placeholder="Enter your phone number (optional)" />
    </div>
  ),
};
