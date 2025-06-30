import { Button, Text } from '@lib/components';
import { IconCheck } from '@lib/icons';

import {
  StyledFinalScreenBody,
  StyledFinalScreenContainer,
  StyledFinalScreenContent,
  StyledFinalScreenFooter,
  StyledFinalScreenHeader,
  StyledFinalScreenIcon,
} from './styled';
import { FinalScreenProps } from './types';

export const FinalScreen = ({ onClose }: FinalScreenProps) => {
  return (
    <StyledFinalScreenContainer>
      <StyledFinalScreenHeader>
        <Text color="primary" size={16}>
          Successful
        </Text>
      </StyledFinalScreenHeader>
      <StyledFinalScreenBody>
        <StyledFinalScreenIcon>
          <IconCheck size={28} />
        </StyledFinalScreenIcon>
        <StyledFinalScreenContent>
          <Text weight={600} size={22}>
            Thanks for the info!
          </Text>
          <Text weight={400} size={16}>
            This information is very important to us.
          </Text>
        </StyledFinalScreenContent>
      </StyledFinalScreenBody>
      <StyledFinalScreenFooter>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </StyledFinalScreenFooter>
    </StyledFinalScreenContainer>
  );
};
