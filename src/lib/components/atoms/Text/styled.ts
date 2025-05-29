import styled from '@emotion/styled';

import { getColor } from './helpers';
import { StyledTextProps } from './types';

export const StyledText = styled.span<StyledTextProps>`
  color: ${(props) => getColor(props.theme, props.color)};
  text-align: ${(props) => props.align};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => `${props.weight}`};
  user-select: ${(props) => (props.$selectable ? 'text' : 'none')};
`;
