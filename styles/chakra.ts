import { extendTheme } from '@chakra-ui/core'

const Input = {
  defaultProps: {
    variant: 'solid'
  }
}

const theme = extendTheme({
  initialColorMode: 'light',
  components: {
    Input
  }
})

export default theme
