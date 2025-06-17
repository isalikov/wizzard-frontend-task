import { Button, Text } from '@lib/components';

import { StyledWelcomeScreen } from './styled';
import { WelcomeScreenProps } from './types';

export const WelcomeScreen = ({ onOpen }: WelcomeScreenProps) => {
  return (
    <StyledWelcomeScreen>
      <Button type="button" onClick={onOpen}>
        Open
      </Button>
      <Text color="primary" weight={400} size={14}>
        Take the survey
      </Text>
    </StyledWelcomeScreen>
  );
};
