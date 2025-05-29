import styled from '@emotion/styled';

import {
  getCheckedInputBorderColor,
  getCheckedInputFocusBorderColor,
  getCheckedInputFocusShadow,
} from '../helpers';
import { StyledRadioProps } from './types';

export const StyledRadio = styled.div<StyledRadioProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;

  & .radio-control {
    width: 20px;
    height: 20px;
    padding: 1px;
    border: 1px solid transparent;
    border-radius: 50%;

    & .radio-content-wrapper {
      width: 18px;
      height: 18px;
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
    }

    & .radio-content {
      background-color: transparent;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }

  & .radio-input {
    width: 0;
    height: 0;

    &:not(:checked) + .radio-control {
      & .radio-content-wrapper {
        border-color: ${({ theme, $error }) => getCheckedInputBorderColor(theme, $error)};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.default};
      }
    }

    &:checked + .radio-control {
      & .radio-content-wrapper {
        border-color: ${({ theme }) => theme.checkedInput.borderColor.checked};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.checked};

        & .radio-content {
          background-color: ${({ theme }) => theme.checkedInput.contentColor.checked};
        }
      }
    }

    &:focus + .radio-control {
      border-color: ${({ theme, $error }) => getCheckedInputFocusBorderColor(theme, $error)};
      box-shadow: ${({ theme, $error }) => getCheckedInputFocusShadow(theme, $error)};
    }

    &:disabled + .radio-control {
      & .radio-content-wrapper {
        border-color: ${({ theme }) => theme.checkedInput.borderColor.disabled};
        background-color: ${({ theme }) => theme.checkedInput.backgroundColor.disabled};

        & .radio-content {
          background-color: ${(props) =>
            props.$checked ? props.theme.checkedInput.contentColor.disabled : 'transparent'};
        }
      }
    }
  }
`;
