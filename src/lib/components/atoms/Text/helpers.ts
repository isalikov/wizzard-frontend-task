import { TextProps } from '@lib/components';
import { Theme } from '@lib/theme';

export const getColor = (theme: Theme, color: TextProps['color']) => {
  switch (color) {
    case 'primary':
      return theme?.colors?.text?.primary;

    case 'secondary':
      return theme?.colors?.text?.secondary;

    case 'tertiary':
      return theme?.colors?.text?.tertiary;

    case 'inverted':
      return theme?.colors?.text?.inverted;

    default:
      return theme?.colors?.text?.primary;
  }
};
