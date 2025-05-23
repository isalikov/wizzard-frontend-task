export type ButtonProps = {
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'outlined';
};

export type StyledButtonProps = Omit<ButtonProps, 'type' | 'fullWidth'> & {
  $fullWidth: ButtonProps['fullWidth'];
};
