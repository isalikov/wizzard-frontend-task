import { useAppState } from '@app/hooks';
import { Text } from '@lib/components';
import { IconChevronLeft } from '@lib/icons';

import { Form } from './components';
import {
  StyledFormScreenBackButton,
  StyledFormScreenContainer,
  StyledFormScreenHeader,
} from './styled';

export const FormScreen = () => {
  const { isFirstStep, steps, dispatch } = useAppState();

  const handleBackButton = () => {
    dispatch({ type: 'ON_PREV_STEP' });
  };

  return (
    <StyledFormScreenContainer>
      <StyledFormScreenHeader>
        {!isFirstStep && (
          <StyledFormScreenBackButton type="button" onClick={handleBackButton}>
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
