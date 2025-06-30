import { useId, useMemo } from 'react';

import { IconCheck } from '../../../icons';
import { Text } from '../../atoms';
import { getCheckedInputTextColor } from '../helpers';
import { StyledCheckbox } from './styled';
import { CheckboxProps } from './types';

export const Checkbox = ({ label, error, onChange, ...props }: CheckboxProps) => {
  const id = useId();

  const textColor = useMemo(
    () => getCheckedInputTextColor(props.disabled, error),
    [props.disabled, error],
  );

  const handleChange = () => {
    if (onChange) {
      onChange(!props.checked);
    }
  };

  return (
    <StyledCheckbox
      $checked={Boolean(props.checked)}
      $disabled={Boolean(props.disabled)}
      $error={Boolean(error)}
    >
      <input
        {...props}
        type="checkbox"
        id={id}
        className="checkbox-input"
        onChange={handleChange}
      />
      <label htmlFor={id} className="checkbox-control">
        <div className="checkbox-content-wrapper">
          <IconCheck size={16} className="checkbox-content" />
        </div>
      </label>
      {label && (
        <Text selectable={false} color={textColor} size={14} weight={400}>
          {label}
        </Text>
      )}
    </StyledCheckbox>
  );
};
