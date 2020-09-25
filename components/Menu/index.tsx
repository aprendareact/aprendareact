import Link from 'next/link'
import { Flex, Link as ChakraLink, Button, HStack } from '@chakra-ui/core'
import Logo, { DiscordLogo, GithubLogo } from './logo'

const Menu = () => {
  return (
    <Flex
      pt={10}
      bg="polar.500"
      as="header"
      justify="space-between"
      align="center"
      px={20}
    >
      <Logo />
      <HStack spacing="40px" as="nav">
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
      <Flex alignItems="center">
        <Link href="/">
          <ChakraLink mr={8}>
            <DiscordLogo />
          </ChakraLink>
        </Link>

        <Link href="/">
          <ChakraLink>
            <GithubLogo />
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Menu
