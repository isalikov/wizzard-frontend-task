import { PropsWithChildren, useMemo } from 'react';

import { Text } from '../../atoms';
import { getTextColorColor } from './helpers';
import { StyledButton, StyledButtonContent } from './styled';
import { ButtonProps } from './types';

export const Button = ({
  children,
  variant,
  type = 'button',
  fullWidth = true,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const color = useMemo(() => getTextColorColor(variant), [variant]);

  return (
    <StyledButton {...props} as="button" type={type} $fullWidth={fullWidth} variant={variant}>
      <StyledButtonContent $fullWidth={fullWidth} variant={variant}>
        <Text color={color} weight={500} size={16} align="center">
          {children}
        </Text>
      </StyledButtonContent>
    </StyledButton>
  );
};
