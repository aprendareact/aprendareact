import {
  Heading,
  Divider,
  Flex,
  Link as ChakraLink,
  Button,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/core'
import { useBreakpointValue } from '@chakra-ui/media-query'
import Link from 'next/link'

import Logo from '../Menu/logo'

const FooterItem = ({ href = '/', children }) => (
  <Link href={href}>
    <ChakraLink color="clay.500">{children}</ChakraLink>
  </Link>
)

const Footer = () => {
  const variant = useBreakpointValue({
    base: 'Cadastrar',
    md: 'Comece a aprender'
  })

  return (
    <Flex bg="polar.500" mt={150} justifyContent="center">
      <Flex
        px={10}
        width={['full', 'full', 2 / 3]}
        py={20}
        as="footer"
        direction="column"
      >
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Link passHref href="/Aprenda_React_Codigo_de_Conduta.pdf">
            <ChakraLink>
              <Heading>* Leia nosso código de conduta</Heading>
            </ChakraLink>
          </Link>

          <Link href="/">
            <Button
              mt={{ base: 10 }}
              letterSpacing="tight"
              bg="white"
              border="1px"
              borderColor="clay.300"
              rounded="full"
              fontSize="sm"
            >
              COMEÇAR A APRENDER
            </Button>
          </Link>
        </Flex>

        <Divider my={16} />

        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Logo />
          <Stack
            direction={['column', 'row']}
            mt={{ base: 10 }}
            spacing={{ base: 2, md: 10 }}
          >
            <FooterItem>Cursos</FooterItem>
            <FooterItem>Comunidade</FooterItem>
            <FooterItem>Sobre</FooterItem>
            <FooterItem>Blog</FooterItem>
            <FooterItem>Contato</FooterItem>
          </Stack>
        </Flex>

        <Flex my={20} direction="column">
          <Text fontSize="lg">Inscreva-se na Newsletter</Text>
          <Flex mt={2} align="center" width="max-content">
            <InputGroup size="lg">
              <Input
                pr={{ base: '100px', md: '200px' }}
                placeholder="Seu email"
              />
              <InputRightElement justifyContent="flex-end" width="190px">
                <Button
                  onClick={() => alert('Isso ainda não faz nada 🙏')}
                  bgColor="clay.500"
                  width={['90px', '180px']}
                  color="white"
                  height="36px"
                  size="sm"
                >
                  <Text>{variant}</Text>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Text my={{ base: 10 }} textAlign={{ base: 'center' }}>
            ©2020 Aprenda React. 🇧🇷 Todos os direitos reservados.
          </Text>
          <Stack direction={['column', 'row']} spacing={{ base: 2, md: 10 }}>
            <FooterItem>Github</FooterItem>
            <FooterItem>Twitter</FooterItem>
            <FooterItem>Discord</FooterItem>
            <FooterItem>Privacidade</FooterItem>
            <FooterItem>Termos</FooterItem>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
