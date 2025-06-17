import type { GetQuestionsListResponse, QuestionItem } from '@app/api';

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

export type MultipleCheckboxQuestion = QuestionItem & {
  value: Set<string>;
};

export type RadioQuestion = QuestionItem & {
  value: string;
};

export type SelectQuestion = QuestionItem & {
  value: string;
};

export type SingleCheckboxQuestion = QuestionItem & {
  value: boolean;
};

export type TextQuestion = QuestionItem & {
  value: string;
};

export type TextareaQuestion = QuestionItem & {
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
  | GenericAction<'SET_QUESTIONS', unknown>;

export type AppReducer = GenericReducer<AppState, Action>;

export type ContextState = {
  state: AppState;
  dispatch: Dispatch<Action>;
};
