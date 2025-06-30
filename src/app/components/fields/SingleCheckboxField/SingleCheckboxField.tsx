import { useAppState } from '@app/hooks';
import { SingleCheckboxQuestion } from '@app/state';
import { Checkbox } from '@lib/components';

import { useMemo } from 'react';

import { SingleCheckboxFieldProps } from './types';

export const SingleCheckboxField = ({ id, label }: SingleCheckboxFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as SingleCheckboxQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const handleChange = (checked: boolean) => {
    const value = checked ? question.text : '';

    dispatch({
      type: 'ON_SINGLE_CHECKBOX_QUESTION_CHANGE',
      payload: { id, value },
    });
  };

  return (
    <Checkbox
      error={isError}
      name={question.id}
      checked={question.value !== ''}
      onChange={handleChange}
      label={label}
    />
  );
};
