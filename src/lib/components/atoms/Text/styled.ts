import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { getColor } from './helpers';
import { TextProps } from './types';

export const StyledText = styled.span<TextProps & ThemedProps>`
  color: ${(props) => getColor(props.theme, props.color)};
  text-align: ${(props) => props.align};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => `${props.weight}`};
`;
