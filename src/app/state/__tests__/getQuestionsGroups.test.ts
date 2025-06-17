import type { GetQuestionsListResponse, QuestionItem } from '@app/api';

import { describe, expect, it } from 'vitest';

import { getQuestionsGroups } from '../helpers';

describe('getQuestionsGroups', () => {
  const createQuestion = (id: string): QuestionItem => ({
    id,
    text: `Question ${id}`,
    required: false,
    type: 'text',
  });

  it('should create groups of 3 questions', () => {
    const response: GetQuestionsListResponse = {
      data: [
        createQuestion('1'),
        createQuestion('2'),
        createQuestion('3'),
        createQuestion('4'),
        createQuestion('5'),
        createQuestion('6'),
      ],
    };

    const result = getQuestionsGroups(response);

    expect(result.size).toBe(2);
    expect(result.get(0)).toEqual(['1', '2', '3']);
    expect(result.get(1)).toEqual(['4', '5', '6']);
  });

  it('should handle last group with less than 3 questions', () => {
    const response: GetQuestionsListResponse = {
      data: [
        createQuestion('1'),
        createQuestion('2'),
        createQuestion('3'),
        createQuestion('4'),
        createQuestion('5'),
      ],
    };

    const result = getQuestionsGroups(response);

    expect(result.size).toBe(2);
    expect(result.get(0)).toEqual(['1', '2', '3']);
    expect(result.get(1)).toEqual(['4', '5']);
  });

  it('should handle empty data array', () => {
    const response: GetQuestionsListResponse = {
      data: [],
    };

    const result = getQuestionsGroups(response);

    expect(result.size).toBe(0);
  });

  it('should handle single question', () => {
    const response: GetQuestionsListResponse = {
      data: [createQuestion('1')],
    };

    const result = getQuestionsGroups(response);

    expect(result.size).toBe(1);
    expect(result.get(0)).toEqual(['1']);
  });

  it('should handle exactly three questions', () => {
    const response: GetQuestionsListResponse = {
      data: [createQuestion('1'), createQuestion('2'), createQuestion('3')],
    };

    const result = getQuestionsGroups(response);

    expect(result.size).toBe(1);
    expect(result.get(0)).toEqual(['1', '2', '3']);
  });
});
