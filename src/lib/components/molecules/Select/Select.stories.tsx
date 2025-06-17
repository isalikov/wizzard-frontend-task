import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Select } from './Select';
import { SelectOption } from './types';

const sampleOptions: SelectOption[] = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const countryOptions: SelectOption[] = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
];

const meta: Meta<typeof Select> = {
  title: 'molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onChange: { action: 'changed' },
    options: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic select with default options
export const Default: Story = {
  args: {
    label: 'Select Option',
    options: sampleOptions,
    value: '',
  },
};

// Required select
export const Required: Story = {
  args: {
    label: 'Required Selection',
    options: sampleOptions,
    required: true,
    value: '',
  },
};

// Select with error state
export const WithError: Story = {
  args: {
    label: 'Invalid Selection',
    options: sampleOptions,
    error: true,
    value: 'option1',
  },
};

// Disabled select
export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    disabled: true,
    value: 'option2',
  },
};

// Full width select
export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    options: sampleOptions,
    fullWidth: true,
    value: '',
  },
  parameters: {
    layout: 'padded',
  },
};

// Optional select (explicitly showing optional label)
export const Optional: Story = {
  args: {
    label: 'Optional Selection',
    options: sampleOptions,
    required: false,
    value: '',
  },
};

// Select with pre-selected value
export const PreSelected: Story = {
  args: {
    label: 'Pre-selected Option',
    options: sampleOptions,
    value: 'option2',
  },
};

// Country selector example
export const CountrySelector: Story = {
  args: {
    label: 'Select Country',
    options: countryOptions,
    fullWidth: true,
    value: '',
  },
};

// Select with many options
export const ManyOptions: Story = {
  args: {
    label: 'Many Options',
    options: [
      { value: '', label: 'Select an option' },
      ...Array.from({ length: 15 }, (_, i) => ({
        value: `option${i + 1}`,
        label: `Option ${i + 1}`,
      })),
    ],
    fullWidth: true,
  },
};
