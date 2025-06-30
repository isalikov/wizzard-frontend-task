import { ThemedProps } from '@lib/theme';

import { HTMLProps } from 'react';

export type RadioProps = Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange'> & {
  onChange?: (value: string) => void;
  error?: boolean;
  label?: string;
};

export type StyledRadioProps = ThemedProps & {
  $disabled: RadioProps['disabled'];
  $error: RadioProps['error'];
  $checked: RadioProps['checked'];
};
