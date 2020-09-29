import { Grid, Box, Flex, Heading } from '@chakra-ui/core'
import Article from '@components/Article'

interface Props {
  posts: [
    {
      slug: string
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }
  ]
}

const PostList = ({ posts }: Props) => {
  if (!posts) return null

  const getGridArea = {
    0: '1 / 1 / 3 / 3',
    1: '1 / 3 / 2 / 4',
    2: '1 / 4 / 2 / 5',
    3: '2 / 3 / 3 / 4',
    4: '2 / 4 / 3 / 5'
  }

  return (
    <Flex mt={150} justifyContent="center">
      <Flex
        px={10}
        width={['full', 'full', 2 / 3]}
        direction="column"
        as="main"
      >
        <Heading mb={6}>Nosso blog</Heading>
        <Grid
          minHeight="450px"
          gap={4}
          templateColumns={{ sm: '1fr', md: '1fr', lg: 'repeat(4, 1fr)' }}
        >
          {posts &&
            posts.map((post, index) => {
              return (
                <Box
                  key={post.slug}
                  gridArea={{
                    lg: `${getGridArea[index]}`
                  }}
                >
                  <Article
                    variant={index === 0 ? 'featured' : 'default'}
                    description={post.frontmatter.description}
                    date={post.frontmatter.date}
                    title={post.frontmatter.title}
                    link={`/post/${post.slug}`}
                  />
                </Box>
              )
            })}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default PostList
