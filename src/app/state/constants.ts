import { AppState } from './types';

export const QUESTIONS_PER_STEP = 3;

export const appInitialState: AppState = {
  step: 0,
  questionsGroups: new Map([]),
  errors: {},
  questions: {},
  fetchingQuestions: 'idle',
  touched: false,
};
