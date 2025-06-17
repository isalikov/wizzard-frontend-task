import { useAppState } from '@app/hooks';
import { Button } from '@lib/components';

import { FormEvent, useMemo } from 'react';

import { FormItem } from './components';
import { StyledForm, StyledFormBody, StyledFormFooter } from './styled';
import { ScreenFormProps } from './types';

export const Form = ({ step }: ScreenFormProps) => {
  const { isLastStep, step: currentStep, questionsGroups, questions } = useAppState();

  if (step !== currentStep) {
    return null;
  }

  const screenQuestions = useMemo(() => {
    const questionIds = questionsGroups.get(step);

    return questionIds?.map((id) => questions[id]) || [];
  }, [questionsGroups, step, questions]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const results = screenQuestions.map((item) => {
      if (item.type === 'multiple-checkbox') {
        console.log(item.options);
      }

      return formData.get(item.id);
    });
    console.log(results);
  };

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
