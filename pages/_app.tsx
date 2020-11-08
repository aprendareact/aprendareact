import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'
import { mergeWith } from '@chakra-ui/utils'

import { prism } from '../styles/prism'
import aprendaReactTheme from '../styles/theme'
import chakraTheme from '../styles/chakra'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const customTheme = mergeWith(chakraTheme, aprendaReactTheme, prism, config)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
