import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { IconAlertCircle } from '../../../icons';
import { getInputCss } from '../shared';
import { BaseInputProps } from '../types';

export const StyledInput = styled.input<ThemedProps & BaseInputProps>`
  height: 44px;
  padding: 0 ${(props) => (props.$error ? '50px' : '16px')} 0 16px;
  font-size: 16px;
  line-height: 24px;
  ${getInputCss}
`;

export const StyledInputWrapper = styled.div<ThemedProps & Pick<BaseInputProps, '$fullWidth'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  position: relative;
`;

export const StyledIconAlertCircle = styled(IconAlertCircle)<ThemedProps>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme?.valueInput.alertIconColor};
`;
