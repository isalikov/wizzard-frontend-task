import { PropsWithChildren } from 'react';

import { StyledText } from './styled';
import { TextProps } from './types';

export const Text = ({
  children,
  align = 'left',
  color = 'primary',
  size = 14,
  weight = 400,
  selectable = true,
}: PropsWithChildren<TextProps>) => {
  return (
    <StyledText
      align={align}
      color={color}
      size={size}
      weight={weight}
      $selectable={Boolean(selectable)}
    >
      {children}
    </StyledText>
  );
};
