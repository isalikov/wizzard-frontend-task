import { HTMLAttributes } from 'react';

export type TextareaProps = HTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  onChange: (value: string) => void;

  value?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};
