import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-webpack5';

import { GlobalStyles } from '../src/lib/components';
import { defaultTheme } from '../src/lib/theme/defaultTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: defaultTheme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
