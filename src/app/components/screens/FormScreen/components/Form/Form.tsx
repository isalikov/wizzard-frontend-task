import { useAppState } from '@app/hooks';
import { Button } from '@lib/components';

import { FormEvent, useMemo } from 'react';

import { FormItem } from './components';
import { StyledForm, StyledFormBody, StyledFormFooter } from './styled';
import { ScreenFormProps } from './types';

export const Form = ({ step }: ScreenFormProps) => {
  const { isLastStep, step: currentStep, questionsGroups, questions, dispatch } = useAppState();
  const screenQuestions = useMemo(() => {
    const questionIds = questionsGroups.get(step);

    return questionIds?.map((id) => questions[id]) || [];
  }, [questionsGroups, step, questions]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: 'ON_SUBMIT_STEP',
      payload: currentStep,
    });
  };

  if (step !== currentStep) {
    return null;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormBody>
        {screenQuestions.map((item) => (
          <FormItem id={item.id} key={item.id} />
        ))}
      </StyledFormBody>
      <StyledFormFooter>
        <Button type="submit">{isLastStep ? 'Finish' : 'Continue'}</Button>
      </StyledFormFooter>
    </StyledForm>
  );
};
