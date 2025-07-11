import { useAppState } from '@app/hooks';
import { TextQuestion } from '@app/state';
import { Input } from '@lib/components';

import { useMemo } from 'react';

import { TextFieldProps } from './types';

export const TextField = ({ id }: TextFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as TextQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const handleChange = (value: string) => {
    dispatch({
      type: 'ON_TEXT_QUESTION_CHANGE',
      payload: { id, value },
    });
  };

  return (
    <Input error={isError} name={question.id} value={question.value} onChange={handleChange} />
  );
};
