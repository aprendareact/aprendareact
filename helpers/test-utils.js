import { render } from '@testing-library/react'
import { ChakraProvider, theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

import aprendaReactTheme from '../styles/theme'

const customTheme = merge(theme, aprendaReactTheme)

const AllTheProviders = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {children}
    </ChakraProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options
  })

export * from '@testing-library/react'
export { customRender as render }
