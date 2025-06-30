import { useAppState } from '@app/hooks';

import { TextFieldProps } from './types';

export const TextField = ({ question }: TextFieldProps) => {
  const { questions } = useAppState();
  const questionValue = questions[question.id];

  return <div>TextField</div>;
};
