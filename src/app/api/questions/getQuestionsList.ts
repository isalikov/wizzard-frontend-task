import data from './data.json';
import { GetQuestionsListResponse, QuestionItem } from './types';

const mapQuestionsData = (jsonData: unknown) => {
  const data = jsonData as QuestionItem[];

  return data.map<QuestionItem>((question) => {
    // NOTE: Let's use type and question text as unique identifier
    const id = `${question.type.toString()}: ${question.text.toString()}`;

    return {
      ...question,
      id,
    };
  });
};

export const getQuestionsList = async (): Promise<GetQuestionsListResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mapQuestionsData(data) });
    }, 350);
  });
};
