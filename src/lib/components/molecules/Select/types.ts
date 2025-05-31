import { HTMLAttributes } from 'react';

export type SelectProps = HTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  value: SelectOption['value'];

  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};

export type SelectOption = {
  value: string;
  label: string;
};
