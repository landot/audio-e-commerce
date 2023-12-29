import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from '../src/style/globalStyles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>    
        <GlobalStyle />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
    </ThemeProvider>
  ),
];

export default preview;
