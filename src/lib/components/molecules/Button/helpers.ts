import { css } from '@emotion/react';
import { TextProps } from '@lib/components';
import { Theme } from '@lib/theme';

import { ButtonProps, StyledButtonProps } from './types';

export const getTextColorColor = (color: StyledButtonProps['variant']): TextProps['color'] => {
  switch (color) {
    case 'secondary':
      return 'primary';

    default:
      return 'inverted';
  }
};

export const getPrimaryButtonContentCss = (theme: Theme) => {
  return css`
    background-color: ${theme.button.primary.backgroundColor.default};
    border-color: ${theme.button.primary.borderColor.default};

    &:hover:not(:disabled) {
      background-color: ${theme.button.primary.backgroundColor.hover};
      border-color: ${theme.button.primary.borderColor.hover};
    }

    &:active:not(:disabled) {
      background-color: ${theme.button.primary.backgroundColor.pressed};
      border-color: ${theme.button.primary.borderColor.pressed};
    }

    &:disabled {
      background-color: ${theme.button.primary.backgroundColor.disabled};
      border-color: ${theme.button.primary.borderColor.disabled};
    }
  `;
};

export const getSecondaryButtonContentCss = (theme: Theme) => {
  return css`
    background-color: ${theme.button.secondary.backgroundColor.default};
    border-color: ${theme.button.secondary.borderColor.default};

    &:hover:not(:disabled) {
      background-color: ${theme.button.secondary.backgroundColor.hover};
      border-color: ${theme.button.secondary.borderColor.hover};
    }

    &:active:not(:disabled) {
      background-color: ${theme.button.secondary.backgroundColor.pressed};
      border-color: ${theme.button.secondary.borderColor.pressed};
    }

    &:disabled {
      background-color: ${theme.button.secondary.backgroundColor.disabled};
      border-color: ${theme.button.secondary.borderColor.disabled};
    }
  `;
};

export const getButtonContentCss = (theme: Theme, variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'secondary':
      return getSecondaryButtonContentCss(theme);

    default:
      return getPrimaryButtonContentCss(theme);
  }
};
