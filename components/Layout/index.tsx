import Head from 'next/head'
import Link from 'next/link'
import {
  Heading,
  Divider,
  Flex,
  Link as ChakraLink,
  Button,
  HStack
} from '@chakra-ui/core'
import Menu from '../Menu'

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Menu />

      <Flex direction="column" as="main">
        {children}
      </Flex>

      <Footer />
    </>
  )
}

// This should be a separated component. This is just some example:
const Footer = () => {
  return (
    <Flex
      bg="polar.500"
      py={20}
      px="22rem"
      as="footer"
      mt={20}
      direction="column"
    >
      <Flex justify="space-between" align="center">
        <Link href="/Aprenda_React_Codigo_de_Conduta.pdf">
          <ChakraLink>
            <Heading>* Leia nosso código de conduta</Heading>
          </ChakraLink>
        </Link>

        <Link href="/">
          <Button
            letterSpacing="tight"
            bg="white"
            border="1px"
            borderColor="clay.400"
            rounded="100px"
            fontSize="sm"
          >
            COMEÇAR A APRENDER
          </Button>
        </Link>
      </Flex>

      <Divider my={16} />

      <Flex justify="space-between" align="center">
        <Heading maxWidth="150px">Aprenda React</Heading>
        <HStack spacing={10}>
          {/* This should be a separated component. This is just some example: */}
          <Link href="/">
            <ChakraLink color="clay.500">Cursos</ChakraLink>
          </Link>
          <Link href="/">
            <ChakraLink color="clay.500">Comunidade</ChakraLink>
          </Link>
          <Link href="/">
            <ChakraLink color="clay.500">Sobre</ChakraLink>
          </Link>
          <Link href="/">
            <ChakraLink color="clay.500">Blog</ChakraLink>
          </Link>
          <Link href="/">
            <ChakraLink color="clay.500">Contato</ChakraLink>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Layout
