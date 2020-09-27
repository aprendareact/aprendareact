import NextLink from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Heading, Button, Text, Link, Flex } from '@chakra-ui/core'

import Layout from '@components/Layout'
import getSlugs from '@helpers/getSlugs'
import styles from './[postname].module.css'

export default function BlogPost({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${frontmatter.title}`}>
        <Flex as="article" direction="column" align="center">
          <Flex
            bg="polar.500"
            w="full"
            align="center"
            direction="column"
            pb={10}
          >
            <NextLink href="/">
              <Link ml={20} alignSelf="flex-start" color="clay.500">
                ← Voltar
              </Link>
            </NextLink>

            <Heading size="2xl">{frontmatter.title}</Heading>
          </Flex>

          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}

          <Flex pt={20} className={styles['markdown-body']} direction="column">
            <ReactMarkdown source={markdownBody} />
          </Flex>
          <Flex mt={20}>
            <Button
              letterSpacing="tight"
              bg="white"
              border="1px"
              borderColor="clay.400"
              rounded="100px"
              fontSize="sm"
              onClick={() =>
                alert('Envie um PR para adicionar esta funcionalidade :)')
              }
            >
              ✏️{' '}
              <Text ml={4} textTransform="uppercase">
                edite este post
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = ((context) => getSlugs(context))(
    require.context('../../posts', true, /\.md$/)
  )

  const paths = blogSlugs.map((slug: string) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false // so that 404s properly appear if something's not matching
  }
}
