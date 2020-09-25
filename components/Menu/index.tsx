import Link from 'next/link'
import { Flex, Link as ChakraLink, Button, HStack } from '@chakra-ui/core'

const Menu = () => {
  return (
    <Flex bg="polar.500" as="header" justify="center" align="center">
      <HStack mt={10} spacing="40px" as="nav">
        <Link href="/">
          <Button bg="white" rounded="100px">
            <ChakraLink color="clay.500">Comunidade</ChakraLink>
          </Button>
        </Link>
        <Link href="/">
          <Button bg="white" rounded="100px">
            <ChakraLink color="clay.500">Guias</ChakraLink>
          </Button>
        </Link>
        <Link href="/">
          <Button bg="white" rounded="100px">
            <ChakraLink color="clay.500">Cursos</ChakraLink>
          </Button>
        </Link>
        <Link href="/">
          <Button bg="white" rounded="100px">
            <ChakraLink color="clay.500">Sobre</ChakraLink>
          </Button>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Menu
