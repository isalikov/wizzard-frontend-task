import { HTMLAttributes } from 'react';

export type InputProps = Omit<HTMLAttributes<HTMLInputElement>, 'type'> & {
  name: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};
