import { useAppState } from '@app/hooks';
import { RadioQuestion } from '@app/state';
import { Radio } from '@lib/components';

import { useMemo } from 'react';

import { RadioFieldProps } from './types';

export const RadioField = ({ id }: RadioFieldProps) => {
  const { dispatch, questions, errors } = useAppState();
  const question = questions[id] as RadioQuestion;

  const isError = useMemo(() => {
    return errors[id] === 'required';
  }, [errors, id]);

  const handleChange = (value: string) => {
    dispatch({
      type: 'ON_RADIO_QUESTION_CHANGE',
      payload: { id: question.id, value },
    });
  };

  return (
    <>
      {question.options.map((option) => (
        <Radio
          error={isError}
          key={option}
          name={question.id}
          value={option}
          label={option}
          checked={question.value === option}
          onChange={handleChange}
        />
      ))}
    </>
  );
};
