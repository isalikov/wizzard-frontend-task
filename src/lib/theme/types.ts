import { defaultTheme } from './defaultTheme';

export type StyledThemeProps = {
  theme?: Theme;
};

export type Theme = typeof defaultTheme;
