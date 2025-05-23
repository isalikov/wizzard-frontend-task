import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { getBackground, getBorderProps } from './helpers';
import { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps & ThemedProps>`
  outline: 0;
  border: 0;
  cursor: pointer;
  height: 48px;
  border-radius: 4px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  ${(props) => getBackground(props.theme, props.variant)}
  ${(props) => getBorderProps(props.theme, props.variant)}

  &:focus {
    box-shadow: ${(props) => props.theme.shadows.focus.active};
  }
`;
