import styled from '@emotion/styled';
import { ThemedProps } from '@lib/theme';

export const StyledModalOverlay = styled.div<ThemedProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 16px 0;
  background-color: ${(props) => props.theme.modal.overlayBackgroundColor};
`;

export const StyledModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledCloseButton = styled.button<ThemedProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  right: 8px;
  top: 8px;
  color: ${(props) => props.theme.modal.closeIconColor};
  background-color: ${(props) => props.theme.modal.closeIconBackgroundColor};
  outline: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
