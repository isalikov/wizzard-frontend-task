import {
  MultipleCheckboxField,
  RadioField,
  SelectField,
  SingleCheckboxField,
  TextField,
} from '@app/components/fields';
import { useAppState } from '@app/hooks';

import { useMemo } from 'react';

export const useFormItem = (id: string) => {
  const { questions } = useAppState();

  const question = useMemo(() => {
    return questions[id];
  }, [questions, id]);

  const Question = useMemo(() => {
    switch (question.type) {
      case 'select':
        return <SelectField id={question.id} />;

      case 'multiple-checkbox':
        return <MultipleCheckboxField id={question.id} />;

      case 'radio':
        return <RadioField id={question.id} />;

      case 'single-checkbox':
        return <SingleCheckboxField label={question.text} id={question.id} />;

      case 'textarea':
      case 'text':
        return <TextField id={question.id} />;

      default:
        return null;
    }
  }, [question]);

  return {
    ...question,
    Question,
  };
};
