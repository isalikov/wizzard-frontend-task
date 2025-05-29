import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'molecules/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls the checked state of the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button interaction',
    },
    error: {
      control: 'boolean',
      description: 'Displays the radio button in error state',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio input',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Default Radio',
    name: 'default-radio',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio',
    checked: true,
    name: 'checked-radio',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error Radio',
    error: true,
    name: 'error-radio',
  },
};

export const ErrorAndChecked: Story = {
  args: {
    label: 'Error and Checked Radio',
    error: true,
    checked: true,
    name: 'error-checked-radio',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
    name: 'disabled-radio',
  },
};

export const DisabledAndChecked: Story = {
  args: {
    label: 'Disabled and Checked Radio',
    disabled: true,
    checked: true,
    name: 'disabled-checked-radio',
  },
};

export const NoLabel: Story = {
  args: {
    name: 'no-label-radio',
  },
};

// Example of radio group
export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio name="group" label="Option 1" defaultChecked />
      <Radio name="group" label="Option 2" />
      <Radio name="group" label="Option 3" />
    </div>
  ),
};
