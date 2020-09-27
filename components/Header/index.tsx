import { Button, Flex, Text, Heading } from '@chakra-ui/core'

const Header = () => (
  <Flex bg="polar.500" justifyContent="center">
    <Flex
      width={{ sm: 'auto', lg: '1420px' }}
      minHeight="410px"
      direction="column"
      py={10}
    >
      <Heading
        as="h1"
        letterSpacing="tight"
        color="clay.500"
        size="2xl"
        maxWidth="600px"
      >
        Aulas online e ao vivo <br />
        para você aprender react
      </Heading>
      <Text color="clay.500" mt={2} fontSize="xl" maxWidth="450px">
        A forma mais rápida, prática e segura de dar o próximo passo na sua
        carreira como desenvolvedor.
      </Text>

      <div>
        <Button
          mt={4}
          fontSize="sm"
          bg="white"
          color="clay.500"
          rounded="100px"
        >
          COMEÇAR A APRENDER
        </Button>
        <Button
          ml={4}
          mt={4}
          fontSize="sm"
          bg="polar.400"
          color="clay.500"
          rounded="100px"
        >
          FAÇA PARTE
        </Button>
      </div>

      <Text mt={4} color="teal.400" fontSize="sm">
        É de graça
      </Text>
    </Flex>
  </Flex>
)

export default Header
