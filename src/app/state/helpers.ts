import { GetQuestionsListResponse, QuestionItem } from '@app/api';

import { QUESTIONS_PER_STEP } from './constants';
import { AppState, Question } from './types';

const getInitialQuestionItem = (questionItem: QuestionItem): Question => {
  switch (questionItem.type) {
    case 'multiple-checkbox':
      return {
        ...questionItem,
        value: new Set(),
      };

    case 'single-checkbox':
      return {
        ...questionItem,
        value: false,
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
