import { useAppState } from '@app/hooks';
import { Checkbox, Input, Radio, Select, SelectOption } from '@lib/components';

import { useMemo } from 'react';

export const useFormItem = (id: string) => {
  const { questions } = useAppState();

  const question = useMemo(() => {
    return questions[id];
  }, [questions, id]);

  const Question = useMemo(() => {
    switch (question.type) {
      case 'select': {
        const options = question.options.map<SelectOption>((option) => ({
          label: option,
          value: option,
        }));

        return <Select fullWidth options={options} name={question.id} />;
      }

      case 'single-checkbox':
        return <Checkbox name={question.id} />;

      case 'multiple-checkbox':
        return (
          <>
            {question.options.map((option) => (
              <Checkbox key={option} name={question.id} value={option} label={option} />
            ))}
          </>
        );

      case 'radio':
        return (
          <>
            {question.options.map((option) => (
              <Radio key={option} name={question.id} value={option} label={option} />
            ))}
          </>
        );

      case 'textarea':
      case 'text':
        return <Input name={question.id} />;

      default:
        return null;
    }
  }, [question]);

  return {
    ...question,
    Question,
  };
};
