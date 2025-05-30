import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'organisms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Basic textarea with label
export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments here...',
    value: '',
  },
};

// Required textarea
export const Required: Story = {
  args: {
    label: 'Required Comments',
    placeholder: 'This field is required',
    required: true,
    value: '',
  },
};

// Textarea with error state
export const WithError: Story = {
  args: {
    label: 'Comments with error',
    placeholder: 'Error state',
    error: true,
    value: 'Invalid input that needs correction',
  },
};

// Disabled textarea
export const Disabled: Story = {
  args: {
    label: 'Disabled textarea',
    placeholder: 'This textarea is disabled',
    disabled: true,
    value: 'Cannot edit this content',
  },
};

// Full width textarea
export const FullWidth: Story = {
  args: {
    label: 'Full width textarea',
    placeholder: 'This textarea takes full width',
    fullWidth: true,
    value: '',
  },
  parameters: {
    layout: 'padded',
  },
};

// Textarea with content
export const WithContent: Story = {
  args: {
    label: 'Filled textarea',
    value: 'This is some sample content that can be cleared using the close button.',
  },
};

// Optional textarea (explicitly showing optional label)
export const Optional: Story = {
  args: {
    label: 'Additional comments',
    placeholder: 'Optional feedback',
    required: false,
    value: '',
  },
};

// Long content textarea
export const LongContent: Story = {
  args: {
    label: 'Long content',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fullWidth: true,
  },
};
