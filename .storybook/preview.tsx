import type { Preview } from "@storybook/react";
import RootLayout from '../src/app/layout';
import React from "react";

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
    <RootLayout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
    </RootLayout>
  ),
];

export default preview;
