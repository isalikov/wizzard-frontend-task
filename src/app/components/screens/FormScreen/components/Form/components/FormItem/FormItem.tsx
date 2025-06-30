import { Text } from '@lib/components';

import { StyledQuestionBody, StyledQuestionHeader, StyledQuestionItem } from './styled';
import { QuestionItemProps } from './types';
import { useFormItem } from './useFormItem';

export const FormItem = ({ id }: QuestionItemProps) => {
  const { text, Question, required } = useFormItem(id);

  return (
    <StyledQuestionItem>
      <StyledQuestionHeader>
        <Text size={16}>{text}</Text>
        {!required && (
          <Text size={16} color="secondary">
            (optional)
          </Text>
        )}
      </StyledQuestionHeader>
      <StyledQuestionBody>{Question}</StyledQuestionBody>
    </StyledQuestionItem>
  );
};
