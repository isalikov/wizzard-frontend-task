import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text } from './Text';

const meta = {
  title: 'atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverted', 'danger'],
      description: 'Text color variant',
    },
    size: {
      control: 'number',
      description: 'Font size in pixels',
    },
    weight: {
      control: 'number',
      options: [300, 400, 500, 600, 700],
      description: 'Font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Primary Text Example',
    color: 'primary',
    size: 14,
    weight: 400,
    align: 'left',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Text Example',
    color: 'secondary',
    size: 14,
    weight: 400,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Text Example',
    color: 'tertiary',
    size: 14,
    weight: 400,
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Text Example',
    color: 'danger',
    size: 14,
    weight: 400,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div>
      <Text size={12}>Small Text (12px)</Text>
      <Text size={14}>Regular Text (14px)</Text>
      <Text size={16}>Medium Text (16px)</Text>
      <Text size={20}>Large Text (20px)</Text>
      <Text size={24}>Extra Large Text (24px)</Text>
    </div>
  ),
};

export const DifferentWeights: Story = {
  render: () => (
    <div>
      <Text weight={300}>Light Weight (300)</Text>
      <Text weight={400}>Regular Weight (400)</Text>
      <Text weight={500}>Medium Weight (500)</Text>
      <Text weight={600}>Semi Bold Weight (600)</Text>
      <Text weight={700}>Bold Weight (700)</Text>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #eee', padding: '10px' }}>
      <Text align="left">Left Aligned Text</Text>
      <Text align="center">Center Aligned Text</Text>
      <Text align="right">Right Aligned Text</Text>
    </div>
  ),
};
