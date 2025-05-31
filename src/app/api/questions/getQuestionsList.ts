import { QuestionItem } from '@app/types/questions';

import data from './data.json';
import { GetQuestionsListResponse } from './types';

export const getQuestionsList = async (): Promise<GetQuestionsListResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: data as QuestionItem[] });
    }, 350);
  });
};
