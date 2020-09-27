import {
  Heading,
  Divider,
  Flex,
  Link as ChakraLink,
  Button,
  HStack,
  Text,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/core'
import Link from 'next/link'

import Logo from '../Menu/logo'

const FooterItem = ({ href = '/', children }) => (
  <Link href={href}>
    <ChakraLink color="clay.500">{children}</ChakraLink>
  </Link>
)

const Footer = () => {
  return (
    <Flex bg="polar.500" mt={'150px'} justifyContent="center">
      <Flex
        width={{ sm: 'auto', lg: '1420px' }}
        py={20}
        as="footer"
        direction="column"
      >
        <Flex justify="space-between" align="center">
          <Link passHref href="/Aprenda_React_Codigo_de_Conduta.pdf">
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
          <Logo />
          <HStack spacing={10}>
            <FooterItem>Cursos</FooterItem>
            <FooterItem>Comunidade</FooterItem>
            <FooterItem>Sobre</FooterItem>
            <FooterItem>Blog</FooterItem>
            <FooterItem>Contato</FooterItem>
          </HStack>
        </Flex>

        <Flex my={20} direction="column">
          <Text fontSize="lg">Inscreva-se na Newsletter</Text>
          <Flex mt={2} align="center" width="max-content">
            <InputGroup size="lg">
              <Input pr="200px" placeholder="Seu email" />
              <InputRightElement width="190px">
                <Button
                  onClick={() => alert('Isso ainda não faz nada 🙏')}
                  bgColor="clay.500"
                  width="180px"
                  color="white"
                  height="36px"
                  size="sm"
                >
                  Comece a aprender
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center">
          <Text>©2020 Aprenda React. 🇧🇷 Todos os direitos reservados.</Text>
          <HStack spacing={10}>
            <FooterItem>Github</FooterItem>
            <FooterItem>Twitter</FooterItem>
            <FooterItem>Discord</FooterItem>
            <FooterItem>Privacidade</FooterItem>
            <FooterItem>Termos</FooterItem>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
