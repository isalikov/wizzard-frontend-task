import { ChangeEvent } from 'react';

import { Text } from '../../atoms';
import {
  StyledActionsContainer,
  StyledIconAlertCircle,
  StyledIconChevronDown,
  StyledSelect,
  StyledSelectContainer,
  StyledSelectHeaderContainer,
  StyledSelectWrapper,
} from './styled';
import { SelectProps } from './types';

export const Select = ({
  label,
  required,
  error,
  fullWidth,
  onChange,
  options,
  ...props
}: SelectProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledSelectContainer>
      <StyledSelectHeaderContainer>
        <Text weight={400} size={16} color="primary">
          {label}
        </Text>
        {!required && (
          <Text weight={400} size={16} color="secondary">
            (optional)
          </Text>
        )}
      </StyledSelectHeaderContainer>
      <StyledSelectWrapper $fullWidth={Boolean(fullWidth)}>
        <StyledSelect
          {...props}
          onChange={handleSelectChange}
          required={required}
          $error={Boolean(error)}
          $fullWidth={Boolean(fullWidth)}
          $disabled={Boolean(props.disabled)}
        >
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
    </StyledSelectContainer>
  );
};
