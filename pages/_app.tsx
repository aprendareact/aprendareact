import { FC } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'
import { theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

const customTheme = merge(theme, {
  fonts: {
    body:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
  },
  colors: {
    polar: {
      100: '#FCFEFE',
      200: '#F8FEFD',
      300: '#F4FDFC',
      400: '#EBFBF9',
      500: '#E3F9F7',
      600: '#B5E2DE',
      700: '#BDE7E3',
      800: '#85CEC7',
      900: '#358A82'
    },
    clay: {
      100: '#EAEAED',
      200: '#CACBD1',
      300: '#ABABB6',
      400: '#6B6C7F',
      500: '#2C2D48',
      600: '#282941',
      700: '#1A1B2B',
      800: '#141420',
      900: '#0D0E16'
    }
  }
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
