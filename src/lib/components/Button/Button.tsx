import { PropsWithChildren } from 'react';

import { ButtonProps } from './types';

export const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return <button {...props}>{children}</button>;
};
