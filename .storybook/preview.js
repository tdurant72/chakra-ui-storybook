import React from 'react'
import { addDecorator } from '@storybook/react';
import customTheme from '../src/extendTheme'
import { ChakraProvider } from "@chakra-ui/react"

// addDecorator((storyFn) => (
//   <ChakraProvider theme={customTheme}>
//     {storyFn()}
//   </ChakraProvider>
// ))
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]