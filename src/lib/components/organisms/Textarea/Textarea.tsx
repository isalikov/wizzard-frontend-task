import { ChangeEvent } from 'react';

import { Text } from '../../atoms';
import {
  StyledActionsContainer,
  StyledCloseButton,
  StyledIconAlertCircle,
  StyledIconClose,
  StyledTextarea,
  StyledTextareaContainer,
  StyledTextareaHeaderContainer,
  StyledTextareaWrapper,
} from './styled';
import { TextareaProps } from './types';

export const Textarea = ({
  label,
  required,
  error,
  fullWidth,
  onChange,
  ...props
}: TextareaProps) => {
  const handleClearButtonClick = () => {
    onChange('');
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledTextareaContainer>
      <StyledTextareaHeaderContainer>
        <Text weight={400} size={16} color="primary">
          {label}
        </Text>
        {!required && (
          <Text weight={400} size={16} color="secondary">
            (optional)
          </Text>
        )}
      </StyledTextareaHeaderContainer>
      <StyledTextareaWrapper $fullWidth={Boolean(fullWidth)}>
        <StyledTextarea
          {...props}
          onChange={handleTextareaChange}
          required={required}
          $error={Boolean(error)}
          $fullWidth={Boolean(fullWidth)}
          $disabled={Boolean(props.disabled)}
        />
        <StyledActionsContainer>
          {error && <StyledIconAlertCircle size={18} />}
          {!props.disabled && (
            <StyledCloseButton type="button" onClick={handleClearButtonClick}>
              <StyledIconClose size={18} />
            </StyledCloseButton>
          )}
        </StyledActionsContainer>
      </StyledTextareaWrapper>
    </StyledTextareaContainer>
  );
};
