import { HTMLAttributes } from 'react';

export type TextareaProps = Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  name: string;
  onChange: (value: string) => void;

  value?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};
