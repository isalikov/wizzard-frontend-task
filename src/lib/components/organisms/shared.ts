import { css } from '@emotion/react';
import { Theme, ThemedProps } from '@lib/theme';

import { BaseInputProps } from './types';

const getFocusedBoxShadow = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return 'transparent';
  }

  if (error) {
    return theme?.valueInput?.focusShadow?.danger;
  }

  return theme?.valueInput?.focusShadow?.default;
};

const getFocusedOutlineColor = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return 'transparent';
  }

  if (error) {
    return theme?.valueInput?.focusColor?.danger;
  }

  return theme?.valueInput?.focusColor?.default;
};

const getBorderColor = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme?.valueInput?.borderColor?.disabled;
  }

  if (error) {
    return theme?.valueInput?.borderColor?.danger;
  }

  return theme?.valueInput?.borderColor?.default;
};

const getFocusedBorderColor = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme?.valueInput?.borderColor?.disabled;
  }

  if (error) {
    return theme?.valueInput?.borderColor?.danger;
  }

  return theme?.valueInput?.borderColor?.focused;
};

const getValueColor = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme?.valueInput?.valueColor?.disabled;
  }

  if (error) {
    return theme?.valueInput?.valueColor?.danger;
  }

  return theme?.valueInput?.valueColor?.default;
};

const getPlaceholderColor = (theme?: Theme, error?: boolean, disabled?: boolean) => {
  if (disabled) {
    return theme?.valueInput?.placeholderColor?.default;
  }

  if (error) {
    return theme?.valueInput?.placeholderColor?.danger;
  }

  return theme?.valueInput?.placeholderColor?.default;
};

export const getInputCss = (props: ThemedProps & BaseInputProps) => css`
  outline: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  box-shadow: ${props.theme?.valueInput.boxShadow};
  border: 1px solid ${getBorderColor(props.theme, props.$error, props.$disabled)};
  color: ${getValueColor(props.theme, props.$error, props.$disabled)};

  &::placeholder {
    color: ${getPlaceholderColor(props.theme, props.$error, props.$disabled)};
  }

  &:focus {
    outline-color: ${getFocusedOutlineColor(props.theme, props.$error, props.$disabled)};
    box-shadow: ${getFocusedBoxShadow(props.theme, props.$error, props.$disabled)};
    border-color: ${getFocusedBorderColor(props.theme, props.$error, props.$disabled)};
  }
`;
