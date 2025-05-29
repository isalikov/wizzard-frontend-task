import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'molecules/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls the checked state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox interaction',
    },
    error: {
      control: 'boolean',
      description: 'Displays the checkbox in error state',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Error Checkbox',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledAndChecked: Story = {
  args: {
    label: 'Disabled and Checked',
    disabled: true,
    checked: true,
  },
};

export const ErrorAndChecked: Story = {
  args: {
    label: 'Error and Checked',
    error: true,
    checked: true,
  },
};

export const NoLabel: Story = {
  args: {
    checked: false,
  },
};
