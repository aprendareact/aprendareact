import NextLink from 'next/link'
import { Flex, Text, Link, Button, HStack } from '@chakra-ui/core'
import Logo, { DiscordLogo, GithubLogo } from './logo'

const MenuItem = ({ href = '/', children }) => (
  <NextLink href={href}>
    <Button bg="white" rounded="full">
      <Link color="clay.500">{children}</Link>
    </Button>
  </NextLink>
)

const Menu = () => {
  return (
    <>
      <Flex
        py={10}
        bg="polar.500"
        as="header"
        justify="space-between"
        align="center"
        px={{ base: 10, md: 20 }}
        display={{ base: 'flex', md: 'none' }}
      >
        <Text>Em breve Menu Mobile :)</Text>
      </Flex>
      <Flex
        py={10}
        bg="polar.500"
        as="header"
        justify="space-between"
        align="center"
        px={20}
        display={{ base: 'none', md: 'flex' }}
      >
        <Logo />
        <HStack spacing="40px" as="nav">
          <MenuItem href="/">Comunidade</MenuItem>
          <MenuItem href="/">Guias</MenuItem>
          <MenuItem href="/">Cursos</MenuItem>
          <MenuItem href="/">Sobre</MenuItem>
        </HStack>
        <Flex alignItems="center">
          <Link mr={8} href="" title="Discord" isExternal>
            <DiscordLogo />
          </Link>
          <Link
            href="https://github.com/aprendareact"
            title="GitHub"
            isExternal
          >
            <GithubLogo />
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default Menu
