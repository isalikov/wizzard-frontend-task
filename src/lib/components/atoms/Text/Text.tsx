import { PropsWithChildren } from 'react';

import { StyledTextContainer } from './styled';
import { TextProps } from './types';

export const Text = ({
  children,
  align = 'left',
  color = 'primary',
  size = 14,
  weight = 400,
}: PropsWithChildren<TextProps>) => {
  return (
    <StyledTextContainer align={align} color={color} size={size} weight={weight}>
      {children}
    </StyledTextContainer>
  );
};
