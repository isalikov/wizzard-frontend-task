import { getChangePayload, getQuestionsGroups, mapResponseToQuestions } from './helpers';
import {
  AppReducer,
  AppState,
  MultipleCheckboxQuestion,
  RadioQuestion,
  SelectQuestion,
  SingleCheckboxQuestion,
  TextQuestion,
  TextareaQuestion,
} from './types';

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

    case 'ON_RADIO_QUESTION_CHANGE':
      return getChangePayload<RadioQuestion>(state, action.payload.id, action.payload.value);

    case 'ON_SELECT_QUESTION_CHANGE':
      return getChangePayload<SelectQuestion>(state, action.payload.id, action.payload.value);

    case 'ON_TEXT_QUESTION_CHANGE':
      return getChangePayload<TextQuestion>(state, action.payload.id, action.payload.value);

    case 'ON_TEXTAREA_QUESTION_CHANGE':
      return getChangePayload<TextareaQuestion>(state, action.payload.id, action.payload.value);

    case 'ON_MULTIPLE_CHECKBOX_QUESTION_CHANGE':
      return getChangePayload<MultipleCheckboxQuestion>(
        state,
        action.payload.id,
        action.payload.value,
      );

    case 'ON_SINGLE_CHECKBOX_QUESTION_CHANGE':
      return getChangePayload<SingleCheckboxQuestion>(
        state,
        action.payload.id,
        action.payload.value,
      );

    case 'ON_SUBMIT_STEP': {
      const questionIds = state.questionsGroups.get(action.payload) || [];
      const errors = questionIds.reduce<AppState['errors']>((result, id) => {
        const question = state.questions[id];

        const isEmptySet = question.value instanceof Set && question.value.size === 0;
        if (question.required && (!question.value || isEmptySet)) {
          return {
            ...result,
            [id]: 'required',
          };
        }

        return result;
      }, state.errors);

      const hasErrors = questionIds.some((id) => errors[id] === 'required');
      const step = !hasErrors ? state.step + 1 : state.step;

      console.log({
        ...state,
        step,
        errors,
      });

      return {
        ...state,
        step,
        errors,
      };
    }

    default:
      return state;
  }
};
