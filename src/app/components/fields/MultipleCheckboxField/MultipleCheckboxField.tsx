import { useAppState } from '@app/hooks';
import { MultipleCheckboxQuestion } from '@app/state';
import { Checkbox } from '@lib/components';

import { useMemo } from 'react';

import { MultipleCheckboxFieldProps } from './types';

export const MultipleCheckboxField = ({ id }: MultipleCheckboxFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as MultipleCheckboxQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const handleChange = (option: string, checked: boolean) => {
    const value = question.value;

    if (checked) {
      value.add(option);
    } else {
      value.delete(option);
    }

    dispatch({
      type: 'ON_MULTIPLE_CHECKBOX_QUESTION_CHANGE',
      payload: { id: question.id, value },
    });
  };

  return (
    <>
      {question.options.map((option) => (
        <Checkbox
          error={isError}
          key={option}
          name={question.id}
          value={option}
          label={option}
          checked={question.value.has(option)}
          onChange={(checked) => handleChange(option, checked)}
        />
      ))}
    </>
  );
};
