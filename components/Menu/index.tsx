import NextLink from 'next/link'
import { Flex, Link, Button, HStack } from '@chakra-ui/core'
import Logo, { DiscordLogo, GithubLogo } from './logo'

const MenuItem = ({ href = '/', children }) => (
  <NextLink href={href}>
    <Button bg="white" rounded="100px">
      <Link color="clay.500">{children}</Link>
    </Button>
  </NextLink>
)

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
        <MenuItem>Comunidade</MenuItem>
        <MenuItem>Guias</MenuItem>
        <MenuItem>Cursos</MenuItem>
        <MenuItem>Sobre</MenuItem>
      </HStack>
      <Flex alignItems="center">
        <Link mr={8} href="" title="Discord" isExternal>
          <DiscordLogo />
        </Link>
        <Link href="https://github.com/aprendareact" title="GitHub" isExternal>
          <GithubLogo />
        </Link>
        {/* <Link
          mr={8}
          href="https://twitter.com/aprendareact"
          title="Twitter"
          isExternal
        >
          <TwitterLogo />
        </Link> */}
      </Flex>
    </Flex>
  )
}

export default Menu
