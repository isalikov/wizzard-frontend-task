import { GetQuestionsListResponse, QuestionItem } from '@app/api';

import { QUESTIONS_PER_STEP } from './constants';
import { AppState, MultipleCheckboxQuestion, Question } from './types';

const getInitialQuestionItem = (questionItem: QuestionItem): Question => {
  switch (questionItem.type) {
    case 'multiple-checkbox':
      return {
        ...questionItem,
        value: new Set(),
      };

    default:
      return {
        ...questionItem,
        value: '',
      };
  }
};

export const getQuestionsGroups = (
  response: GetQuestionsListResponse,
): AppState['questionsGroups'] => {
  const groups = new Map<number, string[]>();
  const { data } = response;

  for (let i = 0; i < data.length; i += QUESTIONS_PER_STEP) {
    const group = data.slice(i, i + QUESTIONS_PER_STEP).map((question) => question.id);

    groups.set(i / QUESTIONS_PER_STEP, group);
  }

  return groups;
};

export const mapResponseToQuestions = (response: GetQuestionsListResponse) => {
  return response.data.reduce<Record<Question['id'], Question>>((acc, questionItem) => {
    return {
      ...acc,
      [questionItem.id]: getInitialQuestionItem(questionItem),
    };
  }, {});
};

export const getChangePayload = <T extends Question>(
  state: AppState,
  id: string,
  value: T extends MultipleCheckboxQuestion ? Set<string> : string,
) => {
  const question = state.questions[id] as T;
  const errors = {
    ...state.errors,
    [id]: null,
  };

  return {
    ...state,
    errors,
    questions: {
      ...state.questions,
      [id]: {
        ...question,
        value,
      },
    },
  };
};
