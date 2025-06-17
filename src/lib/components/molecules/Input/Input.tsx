import { ChangeEvent } from 'react';

import { StyledIconAlertCircle, StyledInput, StyledInputWrapper } from './styled';
import { InputProps } from './types';

export const Input = ({ required, error, fullWidth, onChange, ...props }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
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
  );
};
