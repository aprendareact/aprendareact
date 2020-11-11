import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'
import { mergeWith } from '@chakra-ui/utils'
import { DefaultSeo } from 'next-seo'

import { prism } from '../styles/prism'
import aprendaReactTheme from '../styles/theme'
import chakraTheme from '../styles/chakra'
import SEO from '../next-seo.config'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const customTheme = mergeWith(chakraTheme, aprendaReactTheme, prism, config)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
      <DefaultSeo {...SEO} />
    </ChakraProvider>
  )
}

export default App
