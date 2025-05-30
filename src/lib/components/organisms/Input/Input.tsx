import { ChangeEvent } from 'react';

import { Text } from '../../atoms';
import {
  StyledHeaderContainer,
  StyledIconAlertCircle,
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
} from './styled';
import { InputProps } from './types';

export const Input = ({ label, required, error, fullWidth, onChange, ...props }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledInputContainer>
      <StyledHeaderContainer>
        <Text weight={400} size={16} color="primary">
          {label}
        </Text>
        {!required && (
          <Text weight={400} size={16} color="secondary">
            (optional)
          </Text>
        )}
      </StyledHeaderContainer>
      <StyledInputWrapper $fullWidth={Boolean(fullWidth)}>
        <StyledInput
          {...props}
          type="text"
          onChange={handleInputChange}
          required={required}
          $error={Boolean(error)}
          $fullWidth={Boolean(fullWidth)}
          $disabled={Boolean(props.disabled)}
        />
        {error && <StyledIconAlertCircle size={18} />}
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
