import Layout from '@components/Layout'
import PostList from '@components/PostList'
import getPosts from '@helpers/getPosts'
import { Button, Flex, Text, Heading } from '@chakra-ui/core'

// This should be a separated component. This is just some example:
const Header = () => (
  <Flex
    pl="22rem"
    bg="polar.500"
    minHeight="410px"
    direction="column"
    pt={20}
    pb={10}
  >
    <Heading color="clay.500" size="2xl" wordBreak="normal" maxWidth="600px">
      Aulas online e ao vivo <br />
      para você aprender react
    </Heading>
    <Text color="clay.500" mt={2} fontSize="xl" maxWidth="450px">
      A forma mais rápida, prática e segura de dar o próximo passo na sua
      carreira como desenvolvedor.
    </Text>

    <div>
      <Button mt={4} fontSize="sm" bg="white" color="clay.500" rounded="100px">
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
)

const Index = ({ posts, title, description }) => {
  return (
    <Layout pageTitle={title}>
      <Header />

      <PostList posts={posts} />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const posts = ((context) => getPosts(context))(
    require.context('../posts', true, /\.md$/)
  )

  return {
    props: {
      posts,
      title: 'Aprenda React',
      description: 'This is a simple blog built with Next'
    }
  }
}
