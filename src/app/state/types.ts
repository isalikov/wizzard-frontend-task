import type {
  GetQuestionsListResponse,
  MultipleCheckboxItem,
  QuestionItem,
  RadioItem,
  SelectItem,
  SingleCheckboxItem,
  TextItem,
  TextareaItem,
} from '@app/api';

import { Dispatch } from 'react';

export type GenericAction<T, P = void> = P extends void
  ? {
      type: T;
    }
  : {
      type: T;
      payload: P;
    };

export type GenericReducer<S, A> = (state: S, action: A) => S;

export type FetchingState = 'idle' | 'pending' | 'fulfilled' | 'rejected';
export type ErrorType = 'required';

export type MultipleCheckboxQuestion = MultipleCheckboxItem & {
  value: Set<string>;
};

export type MultipleCheckboxAnswer = {
  id: string;
  value: Set<string>;
};

export type RadioQuestion = RadioItem & {
  value: string;
};

export type RadioAnswer = {
  id: string;
  value: string;
};

export type SelectQuestion = SelectItem & {
  value: string;
};

export type SelectAnswer = {
  id: string;
  value: string;
};

export type SingleCheckboxQuestion = SingleCheckboxItem & {
  value: string;
};

export type SingleCheckboxAnswer = {
  id: string;
  value: string;
};

export type TextQuestion = TextItem & {
  value: string;
};

export type TextAnswer = {
  id: string;
  value: string;
};

export type TextareaQuestion = TextareaItem & {
  value: string;
};

export type TextareaAnswer = {
  id: string;
  value: string;
};

export type Question =
  | MultipleCheckboxQuestion
  | RadioQuestion
  | SelectQuestion
  | SingleCheckboxQuestion
  | TextQuestion
  | TextareaQuestion;

export type AppState = {
  step: number;
  questionsGroups: Map<number, string[]>; // Map<step, array of questions id's>
  errors: Record<QuestionItem['id'], ErrorType | null>;
  questions: Record<Question['id'], Question>;
  fetchingQuestions: FetchingState;
};

export type Action =
  | GenericAction<'FETCHING_QUESTIONS_START'>
  | GenericAction<'FETCHING_QUESTIONS_SUCCESS', GetQuestionsListResponse>
  | GenericAction<'FETCHING_QUESTIONS_ERROR', unknown>
  | GenericAction<'ON_MULTIPLE_CHECKBOX_QUESTION_CHANGE', MultipleCheckboxAnswer>
  | GenericAction<'ON_RADIO_QUESTION_CHANGE', RadioAnswer>
  | GenericAction<'ON_SELECT_QUESTION_CHANGE', SelectAnswer>
  | GenericAction<'ON_SINGLE_CHECKBOX_QUESTION_CHANGE', SingleCheckboxAnswer>
  | GenericAction<'ON_TEXT_QUESTION_CHANGE', TextAnswer>
  | GenericAction<'ON_TEXTAREA_QUESTION_CHANGE', TextareaAnswer>
  | GenericAction<'ON_SUBMIT_STEP', number>;

export type AppReducer = GenericReducer<AppState, Action>;

export type ContextState = {
  state: AppState;
  dispatch: Dispatch<Action>;
};
