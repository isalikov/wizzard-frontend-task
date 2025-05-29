import { TextProps } from '@lib/components';
import { Theme } from '@lib/theme';

export const getColor = (theme: Theme, color: TextProps['color']) => {
  switch (color) {
    case 'primary':
      return theme?.text?.colors?.primary;

    case 'secondary':
      return theme?.text?.colors?.secondary;

    case 'tertiary':
      return theme?.text?.colors?.tertiary;

    case 'inverted':
      return theme?.text?.colors?.inverted;

    case 'danger':
      return theme?.text?.colors?.danger;

    default:
      return theme?.text?.colors?.primary;
  }
};
