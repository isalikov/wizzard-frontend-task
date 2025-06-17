type BaseResponseItem = {
  text: string;
  required: boolean;
};

type BaseItem = BaseResponseItem & {
  id: string;
};

type MultipleCheckboxItem = BaseItem & {
  options: string[];
  type: 'multiple-checkbox';
};

type RadioItem = BaseItem & {
  options: string[];
  type: 'radio';
};

type Select = BaseItem & {
  options: string[];
  type: 'select';
};

type SingleCheckbox = BaseItem & {
  type: 'single-checkbox';
};

type Text = BaseItem & {
  type: 'text';
};

type Textarea = BaseItem & {
  type: 'textarea';
};

export type QuestionItem =
  | MultipleCheckboxItem
  | RadioItem
  | Select
  | SingleCheckbox
  | Text
  | Textarea;

export type GetQuestionsListResponse = {
  data: QuestionItem[];
};
