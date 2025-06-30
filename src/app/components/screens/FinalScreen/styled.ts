import styled from '@emotion/styled';

export const StyledFinalScreenContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr 104px;
  width: 375px;
  height: 640px;
  box-shadow: 0 20px 40px 0 #00000033;
  background-color: #ffffffff;
  border-radius: 16px;
  overflow: hidden;
`;

export const StyledFinalScreenHeader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cff6e8ff;
  flex-shrink: 0;
`;

export const StyledFinalScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const StyledFinalScreenIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #00c07bff;
  color: #ffffffff;

  & svg {
    transform: translateY(1px);
  }
`;

export const StyledFinalScreenBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledFinalScreenFooter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;
