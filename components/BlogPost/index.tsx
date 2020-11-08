import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { parseISO, format } from 'date-fns'
import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Divider,
  Button
} from '@chakra-ui/core'
import Layout from '@components/Layout'
import BlogSeo from '@components/BlogSeo'

const editUrl = (slug: string) =>
  `https://github.com/aprendareact/aprendareact.com.br/edit/main/artigos/${slug}.mdx`
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://aprendareact.com.br/artigos/${slug}`
  )}`

export default function BlogLayout({ children, frontMatter }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout pageTitle={`${frontMatter.title}`}>
      <BlogSeo slug={slug} {...frontMatter} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={10}
          w="100%"
        >
          <NextLink href="/">
            <Link mb={10} alignSelf="flex-start" color="clay.500">
              ← Voltar
            </Link>
          </NextLink>
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name={frontMatter.author}
                src={frontMatter.authorImage}
                mr={2}
              />
              <Text fontSize="sm" color={'gray.700'}>
                {frontMatter.author}
                {' / '}
                {format(parseISO(frontMatter.publishedAt), 'dd MMMM yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Divider />
        <Flex justify="center" w="full" mt={20}>
          <Button
            letterSpacing="tight"
            bg="white"
            border="1px"
            rounded="full"
            fontSize="sm"
            mr={5}
          >
            ✏️{' '}
            <Link
              ml={4}
              textTransform="uppercase"
              href={editUrl(slug as string)}
              isExternal
            >
              Edite este artigo
            </Link>
          </Button>

          <Button
            letterSpacing="tight"
            bg="white"
            border="1px"
            rounded="full"
            fontSize="sm"
          >
            🐦{' '}
            <Link
              ml={4}
              textTransform="uppercase"
              href={discussUrl(slug as string)}
              isExternal
            >
              Comente no Twitter
            </Link>
          </Button>
        </Flex>
      </Stack>
    </Layout>
  )
}
