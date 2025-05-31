export type BaseQuestion = {
  text: string;
  required: boolean;
};

export type MultipleCheckboxQuestion = BaseQuestion & {
  options: string[];
  type: 'multiple-checkbox';
};

export type RadioQuestion = BaseQuestion & {
  options: string[];
  type: 'radio';
};

export type SelectQuestion = BaseQuestion & {
  options: string[];
  type: 'select';
};

export type SingleCheckboxQuestion = BaseQuestion & {
  type: 'single-checkbox';
};

export type TextQuestion = BaseQuestion & {
  type: 'text';
};

export type TextareaQuestion = BaseQuestion & {
  type: 'textarea';
};

export type QuestionItem =
  | MultipleCheckboxQuestion
  | RadioQuestion
  | SelectQuestion
  | SingleCheckboxQuestion
  | TextQuestion
  | TextareaQuestion;
