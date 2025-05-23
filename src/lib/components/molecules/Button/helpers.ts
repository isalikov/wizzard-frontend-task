import { css } from '@emotion/react';
import { TextProps } from '@lib/components';
import { Theme } from '@lib/theme';

import { ButtonProps, StyledButtonProps } from './types';

export const getTextColorColor = (color: StyledButtonProps['variant']): TextProps['color'] => {
  switch (color) {
    case 'outlined':
      return 'primary';

    default:
      return 'inverted';
  }
};

export const getDefaultBackground = (theme: Theme) => {
  return css`
    background-color: ${theme.colors.button.default.background.default};

    &:hover {
      background-color: ${theme.colors.button.default.background.hover};
    }

    &:active {
      background-color: ${theme.colors.button.default.background.active};
    }
  `;
};

export const getOutlinedBackground = (theme: Theme) => {
  return css`
    background-color: transparent;
  `;
};

export const getDefaultBorderProps = (theme: Theme) => {
  return css`
    border: 1px solid ${theme.colors.button.default.border.default};

    &:hover {
      border: 1px solid ${theme.colors.button.default.border.hover};
    }

    &:active {
      border: 1px solid ${theme.colors.button.default.border.active};
    }
  `;
};

export const getOutlinedBorderProps = (theme: Theme) => {
  return css`
    border: 1px solid ${theme.colors.button.outlined.border.default};

    &:hover {
      border: 1px solid ${theme.colors.button.outlined.border.hover};
    }

    &:active {
      border: 1px solid ${theme.colors.button.outlined.border.active};
    }
  `;
};

export const getBackground = (theme: Theme, variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return getOutlinedBackground(theme);

    default:
      return getDefaultBackground(theme);
  }
};

export const getBorderProps = (theme: Theme, variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return getOutlinedBorderProps(theme);

    default:
      return getDefaultBorderProps(theme);
  }
};
