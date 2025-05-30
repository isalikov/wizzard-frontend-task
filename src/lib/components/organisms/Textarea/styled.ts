import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

import { IconAlertCircle, IconClose } from '../../../icons';
import { getInputCss } from '../shared';
import { BaseInputProps } from '../types';

export const StyledTextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTextareaHeaderContainer = styled.div`
  display: flex;
  gap: 4px;
  top: 0;
`;

export const StyledTextarea = styled.textarea<ThemedProps & BaseInputProps>`
  height: 44px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 24px;
  ${getInputCss}
`;

export const StyledTextareaWrapper = styled.div<ThemedProps & Pick<BaseInputProps, '$fullWidth'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  position: relative;
`;

export const StyledActionsContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 4px;
  background-color: #ffffffff;
`;

export const StyledIconAlertCircle = styled(IconAlertCircle)<ThemedProps>`
  color: ${(props) => props.theme?.valueInput.alertIconColor};
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export const StyledIconClose = styled(IconClose)<ThemedProps>`
  color: ${(props) => props.theme?.valueInput.actionIconColor};
`;
