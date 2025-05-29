import { ThemedProps } from '@lib/theme';

import { HTMLProps } from 'react';

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'type'> & {
  error?: boolean;
  label?: string;
};

export type StyledCheckboxProps = ThemedProps & {
  $disabled: CheckboxProps['disabled'];
  $error: CheckboxProps['error'];
  $checked: CheckboxProps['checked'];
};
