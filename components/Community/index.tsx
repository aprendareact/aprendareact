import { Text, Link as ChakraLink, Flex, Heading } from '@chakra-ui/core'
import Link from 'next/link'

const Action = ({ emoji, title, link = '/', children }) => (
  <Flex p={10} borderBottom="1px solid" borderColor="gray.200">
    <Heading>{emoji}</Heading>
    <Flex ml={10} direction="column">
      <Heading size="md">{title}</Heading>
      <Text>{children}</Text>

      <Link href={link}>
        <ChakraLink
          mt={8}
          textTransform="uppercase"
          fontSize="sm"
          textColor="gray.800"
          color="clay.500"
        >
          LEIA MAIS →
        </ChakraLink>
      </Link>
    </Flex>
  </Flex>
)

const Community = () => {
  return (
    <Flex mt={150} justifyContent="center">
      <Flex
        px={10}
        width={['full', 'full', 2 / 3]}
        direction="column"
        as="main"
      >
        <Flex
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex justify="center" direction="column">
            <Text color="clay.300" textTransform="uppercase">
              Junte-se á nós
            </Text>
            <Heading size="xl" maxWidth="450px">
              Nossa comunidade e amiga do trabalho remoto, criativa, gentil e
              adora compartilhar.
            </Heading>
            <Text lineHeight="tall" mt={2} color="clay.500" maxWidth="450px">
              Junior ou senior, tímido ou extrovertido, lider dedesenvolvedor ou
              designer - temos várias iniciativas incluindo para interagir com
              indivíduos e equipes com ideias.
            </Text>
          </Flex>

          <Flex
            direction="column"
            border="1px solid"
            borderColor="gray.200"
            borderRadius={8}
            mt={{ base: 10 }}
          >
            <Action emoji="✊🏿" title="Participar de um evento">
              Os testes automatizados não são diferentes de qualquer.
            </Action>

            <Action emoji="🌈" title="Participar de um evento">
              Os testes automatizados não são diferentes de qualquer.
            </Action>

            <Action emoji="📚" title="Participar de um evento">
              Os testes automatizados não são diferentes de qualquer.
            </Action>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Community
