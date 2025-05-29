import { ThemedProps } from '@lib/theme';

import { HTMLAttributes } from 'react';

import { BaseInputProps } from '../types';

export type InputProps = Omit<HTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;

  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};
