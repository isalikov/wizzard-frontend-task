import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { getButtonContentCss } from './helpers';
import { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps & ThemedProps>`
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1px;
  outline: 0;
  border-radius: 6px;
  cursor: pointer;

  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

  &:focus {
    border-color: ${({ theme }) => theme.button.focusColor};
    box-shadow: ${({ theme }) => theme.button.focusShadow};
  }
`;

export const StyledButtonContent = styled.div<StyledButtonProps & ThemedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0 28px;
  ${(props) => getButtonContentCss(props.theme, props.variant)}
`;
