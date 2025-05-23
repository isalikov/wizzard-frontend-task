export const defaultTheme = {
  colors: {
    text: {
      primary: '#222832',
      secondary: '#697484',
      tertiary: '#8791A1',
      inverted: '#FFFFFF',
      danger: '#EB5A68',
    },
    input: {
      border: {
        default: '#EB5A68',
        focused: '#1C45ED',
        danger: '#EB5A68',
        disabled: '#C7CDD6',
      },
      background: {
        default: 'transparent',
        danger: '#FFF2F2',
        disabled: '#F7F7F8',
      },
    },
    checkbox: {
      border: {
        default: '#697484',
        checked: '#1C45ED',
        disabled: '#C0C5CD',
        danger: '#EB5A68',
      },
      background: {
        default: 'transparent',
        checked: '#1C45ED',
        disabled: '#C0C5CD',
        danger: 'transparent',
      },
    },
    button: {
      default: {
        background: {
          default: '#1C45ED',
          hover: '#2E66CF',
          active: '#2B54C3',
        },
        border: {
          default: '#1C45ED',
          hover: '#2E66CF',
          active: '#2B54C3',
        },
      },
      outlined: {
        background: {
          default: 'transparent',
          hover: 'transparent',
          active: 'transparent',
        },
        border: {
          default: '#C7CDD6',
          hover: '#8791A1',
          active: '#1C45ED',
        },
      },
    },
  },
  shadows: {
    focus: {
      active: '0 0 0 2px #3371E633',
      default: '0 1px 3px 0px #E7E8ED',
      danger: '0 0 0 2px #EB5A6833',
    },
  },
};
