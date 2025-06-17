import { Form } from '@app/components/FormScreen/components';
import { useAppState } from '@app/hooks';
import { Text } from '@lib/components';
import { IconChevronLeft } from '@lib/icons';

import {
  StyledFormScreenBackButton,
  StyledFormScreenContainer,
  StyledFormScreenHeader,
} from './styled';

export const FormScreen = () => {
  const { isFirstStep, steps } = useAppState();

  return (
    <StyledFormScreenContainer>
      <StyledFormScreenHeader>
        {!isFirstStep && (
          <StyledFormScreenBackButton type="button">
            <IconChevronLeft />
          </StyledFormScreenBackButton>
        )}
        <Text>Fill in the form</Text>
      </StyledFormScreenHeader>
      {steps.map((step) => (
        <Form step={step} key={step} />
      ))}
    </StyledFormScreenContainer>
  );
};
