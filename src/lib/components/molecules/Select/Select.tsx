import { ChangeEvent } from 'react';

import {
  StyledActionsContainer,
  StyledIconAlertCircle,
  StyledIconChevronDown,
  StyledSelect,
  StyledSelectWrapper,
} from './styled';
import { SelectProps } from './types';

export const Select = ({
  required,
  error,
  fullWidth,
  onChange,
  options,
  ...props
}: SelectProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <StyledSelectWrapper $fullWidth={Boolean(fullWidth)}>
      <StyledSelect
        {...props}
        onChange={handleSelectChange}
        required={required}
        $error={Boolean(error)}
        $fullWidth={Boolean(fullWidth)}
        $disabled={Boolean(props.disabled)}
      >
        <option key="nil" disabled selected value="">
          {props.placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <StyledActionsContainer>
        {error && <StyledIconAlertCircle size={18} />}
        <StyledIconChevronDown size={18} />
      </StyledActionsContainer>
    </StyledSelectWrapper>
  );
};
