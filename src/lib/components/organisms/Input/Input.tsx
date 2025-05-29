import { Text } from '../../atoms';
import { StyledHeaderContainer, StyledInput, StyledInputContainer } from './styled';
import { InputProps } from './types';

export const Input = ({ label, required, ...props }: InputProps) => {
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
      <StyledInput {...props} type="text" required={required} />
    </StyledInputContainer>
  );
};
