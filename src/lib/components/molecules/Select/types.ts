import { HTMLAttributes } from 'react';

export type SelectProps = HTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  name: string;
  value?: SelectOption['value'];
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export type SelectOption = {
  value: string;
  label: string;
};
