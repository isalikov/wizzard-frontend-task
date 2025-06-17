import styled from '@emotion/styled';

export const StyledFormScreenContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  width: 375px;
  height: 640px;
  box-shadow: 0 20px 40px 0 #00000033;
  background-color: #ffffffff;
  border-radius: 16px;
`;

export const StyledFormScreenHeader = styled.div`
  height: 60px;
  display: flex;
  border-bottom: 1px solid #ced3d9ff;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledFormScreenBackButton = styled.button`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  cursor: pointer;
  outline: 0;
  border: 0;
  background-color: transparent;
  position: absolute;
  left: 0;

  & svg {
    transform: translate(0, 3px);
    color: #222832ff;
  }

  &:active {
    & svg {
      transform: translate(0, 4px);
    }
  }
`;
