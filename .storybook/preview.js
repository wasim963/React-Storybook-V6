import React from "react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
}

// Global Decorators - Customiesd Decorator
// export const decorators = [
//   ( Story ) => <Center>{ <Story /> }</Center>
// ]

// GLobal Decorator -  Theme Using Chakra UI
export const decorators = [
  ( Story ) => <ChakraProvider theme={theme} >
    <Box m='4'>
      { <Story /> }
    </Box>
  </ChakraProvider>
]