import { FC } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

import aprendaReactTheme from '../styles/theme'

const customTheme = merge(theme, aprendaReactTheme)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
