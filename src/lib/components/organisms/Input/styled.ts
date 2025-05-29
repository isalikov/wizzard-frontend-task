import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { getInputCss } from '../shared';
import { BaseInputProps } from '../types';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledInput = styled.input<ThemedProps & BaseInputProps>`
  height: 44px;

  ${getInputCss}
`;
