import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from './Button';

const meta = {
  title: 'molecules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style variant',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether button should take full width of container',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
    fullWidth: false,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'secondary',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Button variant="primary">Default Button</Button>
      <Button variant="secondary">Outlined Button</Button>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ width: '200px' }}>
        <Button>Width: 200px</Button>
      </div>
      <div style={{ width: '300px' }}>
        <Button>Width: 300px</Button>
      </div>
      <Button fullWidth={false}>Auto Width</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
