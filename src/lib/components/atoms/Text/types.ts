import { ThemedProps } from '@lib/theme';

export type TextProps = {
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverted' | 'danger';
  size?: number;
  weight?: number;
  align?: 'left' | 'center' | 'right';
  selectable?: boolean;
};

export type StyledTextProps = Omit<TextProps, 'selectable'> &
  ThemedProps & {
    $selectable: boolean;
  };
