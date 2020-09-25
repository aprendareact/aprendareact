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
    <Flex mt={20} px="22rem" direction="column" as="main">
      <Heading mb={10}>Nosso blog</Heading>
      <Grid gap={4} templateColumns="repeat(4, 1fr)">
        {posts &&
          posts.map((post, index) => {
            return (
              <Box gridArea={getGridArea[index]}>
                <Article
                  key={post.slug}
                  smallVariation={index !== 0}
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
  )
}

export default PostList
