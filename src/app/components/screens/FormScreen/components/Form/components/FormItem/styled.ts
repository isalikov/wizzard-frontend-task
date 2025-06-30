import styled from '@emotion/styled';

export const StyledQuestionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledQuestionHeader = styled.div`
  & *:not(:last-child) {
    margin-right: 4px;
  }
`;

export const StyledQuestionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
