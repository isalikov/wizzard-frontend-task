import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { IconAlertCircle, IconChevronDown } from '../../../icons';
import { getInputCss } from '../shared';
import { BaseInputProps } from '../types';

export const StyledSelect = styled.select<ThemedProps & BaseInputProps>`
  height: 44px;
  padding: 0 ${(props) => (props.$error ? '50px' : '16px')} 0 16px;
  font-size: 16px;
  line-height: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  width: 100%;

  &::-ms-expand {
    display: none;
  }

  ${getInputCss}
`;

export const StyledSelectWrapper = styled.div<ThemedProps & Pick<BaseInputProps, '$fullWidth'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  position: relative;
`;

export const StyledActionsContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffffff;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledIconAlertCircle = styled(IconAlertCircle)<ThemedProps>`
  color: ${(props) => props.theme?.valueInput.alertIconColor};
`;

export const StyledIconChevronDown = styled(IconChevronDown)<ThemedProps>`
  color: ${(props) => props.theme?.valueInput.actionIconColor};
  cursor: pointer;
`;
