import type { Meta, StoryObj } from '@storybook/react';

import {
  IconAlertCircle,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconClose,
  IconProps,
} from './';

const IconWrapper = ({ size }: IconProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '20px',
    }}
  >
    {[
      { name: 'Alert Circle', component: <IconAlertCircle size={size} /> },
      { name: 'Check', component: <IconCheck size={size} /> },
      { name: 'Chevron Down', component: <IconChevronDown size={size} /> },
      { name: 'Chevron Left', component: <IconChevronLeft size={size} /> },
      { name: 'Close', component: <IconClose size={size} /> },
    ].map(({ name, component }) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          border: '1px solid #eee',
          borderRadius: '8px',
          gap: '8px',
        }}
      >
        {component}
        <span style={{ fontSize: '14px', color: '#697484' }}>{name}</span>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'atoms/Icons',
  argTypes: {
    size: {
      control: { type: 'number', min: 12, max: 64 },
      description: 'Icon size in pixels',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
  render: (args: IconProps) => <IconWrapper size={args.size} />,
  args: {
    size: 24,
  },
};

export const IconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconAlertCircle size={16} />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>16px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconAlertCircle size={24} />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>24px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconAlertCircle size={32} />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>32px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconAlertCircle size={48} />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>48px</div>
      </div>
    </div>
  ),
};

export const AlertCircle: Story = {
  render: (args: IconProps) => <IconAlertCircle size={args.size} />,
  args: {
    size: 24,
  },
};

export const Check: Story = {
  render: (args: IconProps) => <IconCheck size={args.size} />,
  args: {
    size: 24,
  },
};

export const ChevronDown: Story = {
  render: (args: IconProps) => <IconChevronDown size={args.size} />,
  args: {
    size: 24,
  },
};

export const ChevronLeft: Story = {
  render: (args: IconProps) => <IconChevronLeft size={args.size} />,
  args: {
    size: 24,
  },
};

export const Close: Story = {
  render: (args: IconProps) => <IconClose size={args.size} />,
  args: {
    size: 24,
  },
};
