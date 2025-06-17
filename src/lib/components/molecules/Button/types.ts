import { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export type StyledButtonProps = Omit<ButtonProps, 'type' | 'fullWidth'> & {
  $fullWidth: ButtonProps['fullWidth'];
};
