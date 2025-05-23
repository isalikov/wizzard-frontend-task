import { defaultTheme } from './defaultTheme';

export type ThemedProps = {
  theme?: Theme;
};

export type Theme = typeof defaultTheme;
