import { getQuestionsGroups, mapResponseToQuestions } from './helpers';
import { AppReducer } from './types';

export const reducer: AppReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_QUESTIONS_START': {
      return {
        ...state,
        fetchingQuestions: 'pending',
      };
    }

    case 'FETCHING_QUESTIONS_ERROR': {
      return {
        ...state,
        fetchingQuestions: 'rejected',
      };
    }

    case 'FETCHING_QUESTIONS_SUCCESS': {
      const questionsGroups = getQuestionsGroups(action.payload);
      const questions = mapResponseToQuestions(action.payload);

      return {
        ...state,
        questionsGroups,
        questions,
        fetchingQuestions: 'fulfilled',
      };
    }

    default:
      return state;
  }
};
