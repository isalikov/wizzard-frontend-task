import { Text } from '@lib/components';

import { StyledQuestionBody, StyledQuestionItem } from './styled';
import { QuestionItemProps } from './types';
import { useFormItem } from './useFormItem';

export const FormItem = ({ id }: QuestionItemProps) => {
  const { text, Question } = useFormItem(id);

  return (
    <StyledQuestionItem>
      <Text>{text}</Text>
      <StyledQuestionBody>{Question}</StyledQuestionBody>
    </StyledQuestionItem>
  );
};
