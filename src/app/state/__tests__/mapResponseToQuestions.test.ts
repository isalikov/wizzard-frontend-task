import type { GetQuestionsListResponse } from '@app/api';

import { describe, expect, it } from 'vitest';

import { mapResponseToQuestions } from '../helpers';

describe('mapResponseToQuestions', () => {
  it('should map multiple-checkbox questions with empty Set as initial value', () => {
    const response: GetQuestionsListResponse = {
      data: [
        {
          id: 'q1',
          text: 'Select options',
          required: true,
          type: 'multiple-checkbox',
          options: ['option1', 'option2'],
        },
      ],
    };

    const result = mapResponseToQuestions(response);

    expect(result.q1).toEqual({
      id: 'q1',
      text: 'Select options',
      required: true,
      type: 'multiple-checkbox',
      options: ['option1', 'option2'],
      value: new Set(),
    });
  });

  it('should map single-checkbox questions with false as initial value', () => {
    const response: GetQuestionsListResponse = {
      data: [
        {
          id: 'q2',
          text: 'Agree to terms',
          required: true,
          type: 'single-checkbox',
        },
      ],
    };

    const result = mapResponseToQuestions(response);

    expect(result.q2).toEqual({
      id: 'q2',
      text: 'Agree to terms',
      required: true,
      type: 'single-checkbox',
      value: false,
    });
  });

  it('should map text, textarea, radio and select questions with empty string as initial value', () => {
    const response: GetQuestionsListResponse = {
      data: [
        {
          id: 'q3',
          text: 'Your name',
          required: true,
          type: 'text',
        },
        {
          id: 'q4',
          text: 'Your comments',
          required: false,
          type: 'textarea',
        },
        {
          id: 'q5',
          text: 'Choose option',
          required: true,
          type: 'radio',
          options: ['option1', 'option2'],
        },
        {
          id: 'q6',
          text: 'Select value',
          required: true,
          type: 'select',
          options: ['value1', 'value2'],
        },
      ],
    };

    const result = mapResponseToQuestions(response);

    expect(result.q3).toEqual({
      id: 'q3',
      text: 'Your name',
      required: true,
      type: 'text',
      value: '',
    });

    expect(result.q4).toEqual({
      id: 'q4',
      text: 'Your comments',
      required: false,
      type: 'textarea',
      value: '',
    });

    expect(result.q5).toEqual({
      id: 'q5',
      text: 'Choose option',
      required: true,
      type: 'radio',
      options: ['option1', 'option2'],
      value: '',
    });

    expect(result.q6).toEqual({
      id: 'q6',
      text: 'Select value',
      required: true,
      type: 'select',
      options: ['value1', 'value2'],
      value: '',
    });
  });

  it('should handle empty response data', () => {
    const response: GetQuestionsListResponse = {
      data: [],
    };

    const result = mapResponseToQuestions(response);

    expect(result).toEqual({});
  });

  it('should map multiple questions into a single record', () => {
    const response: GetQuestionsListResponse = {
      data: [
        {
          id: 'q1',
          text: 'Multiple choice',
          required: true,
          type: 'multiple-checkbox',
          options: ['opt1', 'opt2'],
        },
        {
          id: 'q2',
          text: 'Single choice',
          required: true,
          type: 'single-checkbox',
        },
      ],
    };

    const result = mapResponseToQuestions(response);

    expect(Object.keys(result)).toHaveLength(2);
    expect(result.q1.value).toBeInstanceOf(Set);
    expect(result.q2.value).toBe(false);
  });
});
