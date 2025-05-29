export type ButtonProps = {
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export type StyledButtonProps = Omit<ButtonProps, 'type' | 'fullWidth'> & {
  $fullWidth: ButtonProps['fullWidth'];
};
