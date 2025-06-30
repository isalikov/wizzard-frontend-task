import { useAppState } from '@app/hooks';
import { TextQuestion } from '@app/state';
import { Textarea } from '@lib/components';

import { useMemo } from 'react';

import { TextareaFieldProps } from './types';

export const TextareaField = ({ id }: TextareaFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as TextQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const handleChange = (value: string) => {
    dispatch({
      type: 'ON_TEXTAREA_QUESTION_CHANGE',
      payload: { id, value },
    });
  };

  return (
    <Textarea error={isError} name={question.id} value={question.value} onChange={handleChange} />
  );
};
