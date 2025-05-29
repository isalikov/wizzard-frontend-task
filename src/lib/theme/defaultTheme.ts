export const defaultTheme = {
  text: {
    colors: {
      primary: '#222832FF',
      secondary: '#697484FF',
      tertiary: '#8791A1FF',
      inverted: '#FFFFFFFF',
      danger: '#EB5A68FF',
    },
  },
  button: {
    primary: {
      backgroundColor: {
        default: '#1C45EDFF',
        hover: '#2E66CFFF',
        pressed: '#2B54C3FF',
        disabled: '#C7CDD6FF',
      },
      borderColor: {
        default: '#1C45EDFF',
        hover: '#2E66CFFF',
        pressed: '#2B54C3FF',
        disabled: '#C7CDD6FF',
      },
    },
    secondary: {
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        pressed: '#F7F7F8FF',
        disabled: '#C7CDD6FF',
      },
      borderColor: {
        default: '#C7CDD6FF',
        hover: '#8791A1FF',
        pressed: '#8791A1FF',
        disabled: '#C7CDD6FF',
      },
    },
    focusColor: '#2E66CFFF',
    focusShadow: '0 0 0 2px #3371E633',
  },
  checkedInput: {
    backgroundColor: {
      default: 'transparent',
      checked: '#1C45EDFF',
      disabled: '#F7F7F8FF',
      danger: 'transparent',
    },
    borderColor: {
      default: '#697484FF',
      checked: '#1C45EDFF',
      disabled: '#C7CDD6FF',
      danger: '#EB5A68FF',
    },
    contentColor: { checked: '#FFFFFFFF', disabled: '#8791A1FF' },
    focusColor: { default: '#1C45EDFF', danger: '#EB5A68FF' },
    focusShadow: { default: '0 0 0 3px #3371E633', danger: '0 0 0 3px #EB5A6833' },
  },
  valueInput: {
    actionIconColor: '#8791A1FF',
    alertIconColor: '#EB5A68FF',
    backgroundColor: { default: 'transparent', disabled: '#F7F7F8FF', danger: '#EB5A68FF' },
    borderColor: {
      default: 'transparent',
      disabled: '#C7CDD6FF',
      danger: '#EB5A68FF',
      focused: '#1C45EDFF',
    },
    boxShadow: '0 1px 3px 0 #E7E8EDFF',
    focusColor: { default: '#1C45EDFF', danger: '#EB5A68FF' },
    focusShadow: { default: '0 0 0 2px #3371E633', danger: '0 0 0 2px #EB5A6833' },
    placeholderColor: { default: '#8791A1FF', danger: '#556070FF' },
  },
};
