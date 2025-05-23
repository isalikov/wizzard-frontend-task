import styled from '@emotion/styled';
import { StyledThemeProps, Theme } from '@lib/theme';

import { TextProps } from './types';

const getColor = (theme: Theme, color: TextProps['color']) => {
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

export const StyledTextContainer = styled.span<TextProps & StyledThemeProps>`
  color: ${(props) => getColor(props.theme, props.color)};
  text-align: ${(props) => props.align};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => `${props.weight}`};
`;
