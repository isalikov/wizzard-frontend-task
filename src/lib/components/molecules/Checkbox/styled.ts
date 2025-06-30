import styled from '@emotion/styled';

import {
  getCheckedInputBorderColor,
  getCheckedInputFocusBorderColor,
  getCheckedInputFocusShadow,
} from '../helpers';
import { StyledCheckboxProps } from './types';

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  gap: 6px;
  user-select: none;
  align-items: flex-start;

  & .checkbox-control {
    width: 20px;
    height: 20px;
    padding: 1px;
    border: 1px solid transparent;
    border-radius: 6px;

    & .checkbox-content-wrapper {
      width: 18px;
      height: 18px;
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
    }

    & .checkbox-content {
      color: transparent;
    }
  }

  & .checkbox-input {
    width: 0;
    height: 0;
    position: absolute;

    &:not(:checked) + .checkbox-control {
      & .checkbox-content-wrapper {
        border-color: ${({ theme, $error }) => getCheckedInputBorderColor(theme, $error)};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.default};
      }
    }

    &:checked + .checkbox-control {
      & .checkbox-content-wrapper {
        border-color: ${({ theme }) => theme.checkedInput.borderColor.checked};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.checked};

        & .checkbox-content {
          color: ${({ theme }) => theme.checkedInput.contentColor.checked};
        }
      }
    }

    &:focus + .checkbox-control {
      border-color: ${({ theme, $error }) => getCheckedInputFocusBorderColor(theme, $error)};
      box-shadow: ${({ theme, $error }) => getCheckedInputFocusShadow(theme, $error)};
    }

    &:disabled + .checkbox-control {
      & .checkbox-content-wrapper {
        border-color: ${({ theme }) => theme.checkedInput.borderColor.disabled};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.disabled};

        & .checkbox-content {
          color: ${(props) =>
            props.$checked ? props.theme.checkedInput.contentColor.disabled : 'transparent'};
        }
      }
    }
  }
`;
