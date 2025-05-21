import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
      defaultValue: 'button',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    children: 'Click me',
    type: 'button',
  },
};

// Submit button story
export const Submit: Story = {
  args: {
    children: 'Submit',
    type: 'submit',
  },
};

// Reset button story
export const Reset: Story = {
  args: {
    children: 'Reset',
    type: 'reset',
  },
};

// Button with long text
export const LongText: Story = {
  args: {
    children: 'This is a button with very long text',
    type: 'button',
  },
};

// Example of multiple buttons in one story
export const ButtonTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button type="button">Normal</Button>
      <Button type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
    </div>
  ),
};
