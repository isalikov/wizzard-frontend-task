export type BaseResponseItem = {
  text: string;
  required: boolean;
};

export type BaseItem = BaseResponseItem & {
  id: string;
};

export type MultipleCheckboxItem = BaseItem & {
  options: string[];
  type: 'multiple-checkbox';
};

export type RadioItem = BaseItem & {
  options: string[];
  type: 'radio';
};

export type SelectItem = BaseItem & {
  options: string[];
  type: 'select';
};

export type SingleCheckboxItem = BaseItem & {
  type: 'single-checkbox';
};

export type TextItem = BaseItem & {
  type: 'text';
};

export type TextareaItem = BaseItem & {
  type: 'textarea';
};

export type QuestionItem =
  | MultipleCheckboxItem
  | RadioItem
  | SelectItem
  | SingleCheckboxItem
  | TextItem
  | TextareaItem;

export type GetQuestionsListResponse = {
  data: QuestionItem[];
};
