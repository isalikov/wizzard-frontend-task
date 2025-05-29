import { css } from '@emotion/react';
import { ThemedProps } from '@lib/theme';

import { BaseInputProps } from './types';

export const getInputCss = (props: ThemedProps & BaseInputProps) => css`
  border-radius: 4px;
  outline: 0;
`;
