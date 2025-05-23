import { PropsWithChildren, useMemo } from 'react';

import { Text } from '../../atoms';
import { getTextColorColor } from './helpers';
import { StyledButton } from './styled';
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
    <StyledButton {...props} type={type} $fullWidth={fullWidth} variant={variant}>
      <Text color={color} weight={500} size={16} align="center">
        {children}
      </Text>
    </StyledButton>
  );
};
