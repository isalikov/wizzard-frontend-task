import { useAppState } from '@app/hooks';
import { SelectQuestion } from '@app/state';
import { Select, SelectOption } from '@lib/components';

import { useMemo } from 'react';

import { SelectFieldProps } from './types';

export const SelectField = ({ id }: SelectFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as SelectQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const options = useMemo<SelectOption[]>(() => {
    return question.options.map((option) => ({
      label: option,
      value: option,
    }));
  }, [question.options]);

  const handleChange = (value: string) => {
    dispatch({
      type: 'ON_SELECT_QUESTION_CHANGE',
      payload: { id, value },
    });
  };

  return (
    <Select
      error={isError}
      value={question.value}
      onChange={handleChange}
      options={options}
      name={question.id}
    />
  );
};
