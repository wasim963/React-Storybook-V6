import React from "react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { addDecorator, addParameters } from "@storybook/react";
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: { // Sort stories based on alphabetical order
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
}

// Global Decorators - Customized Decorator
// export const decorators = [
//   ( Story ) => <Center>{ <Story /> }</Center>
// ]

// Global Decorator -  Theme Using Chakra UI
export const decorators = [
  ( Story ) => <ChakraProvider theme={theme} >
    <Box m='4'>
      { <Story /> }
    </Box>
  </ChakraProvider>
]

// Console Add with Context - Consoling things in action
addDecorator( ( story, context ) => withConsole()( story )( context ) );

// Knobs Addon - For Dynamic props
addDecorator( withKnobs );

// View Port Addon - for viewing a component on different devices
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

// a11y addon  Checks compliance of stories with Web Accessibilty Statndards
addDecorator( withA11y );