import { useId, useMemo } from 'react';

import { Text } from '../../atoms';
import { getCheckedInputTextColor } from '../helpers';
import { StyledRadio } from './styled';
import { RadioProps } from './types';

export const Radio = ({ label, error, onChange, ...props }: RadioProps) => {
  const id = useId();

  const textColor = useMemo(
    () => getCheckedInputTextColor(props.disabled, error),
    [props.disabled, error],
  );

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledRadio
      $checked={Boolean(props.checked)}
      $disabled={Boolean(props.disabled)}
      $error={Boolean(error)}
    >
      <input
        {...props}
        type="radio"
        id={id}
        className="radio-input"
        onChange={(event) => handleChange(event.target.value)}
      />
      <label htmlFor={id} className="radio-control">
        <div className="radio-content-wrapper">
          <div className="radio-content" />
        </div>
      </label>
      {label && (
        <Text selectable={false} color={textColor} size={14} weight={400}>
          {label}
        </Text>
      )}
    </StyledRadio>
  );
};
