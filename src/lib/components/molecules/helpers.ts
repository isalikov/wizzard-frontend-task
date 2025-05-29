import { Theme } from '@lib/theme';

import { TextProps } from '../atoms';

export const getCheckedInputTextColor = (
  disabled?: boolean,
  error?: boolean,
): TextProps['color'] => {
  if (disabled) {
    return 'tertiary';
  }

  if (error) {
    return 'danger';
  }

  return 'primary';
};

export const getCheckedInputBorderColor = (theme: Theme, error?: boolean) => {
  if (error) {
    return theme.checkedInput.borderColor.danger;
  }

  return theme.checkedInput.borderColor.default;
};

export const getCheckedInputFocusBorderColor = (theme: Theme, error?: boolean) => {
  if (error) {
    return theme.checkedInput.focusColor.danger;
  }

  return theme.checkedInput.focusColor.default;
};

export const getCheckedInputFocusShadow = (theme: Theme, error?: boolean) => {
  if (error) {
    return theme.checkedInput.focusShadow.danger;
  }

  return theme.checkedInput.focusShadow.default;
};
