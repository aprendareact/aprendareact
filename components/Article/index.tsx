import { Heading, Link as ChakraLink, Text, Flex } from '@chakra-ui/core'
import Link from 'next/link'

export interface ArticleProps {
  variant?: 'featured' | 'default'
  date: string
  title: string
  link: string
  linkText?: string
  linkTitle?: string
  summary?: string
}

const styles = {
  default: {
    articlePadding: 5,
    headingMarginTop: 2,
    headingMaxWidth: '280px',
    headingSize: 'sm'
  },
  featured: {
    articlePadding: 8,
    headingMarginTop: 2,
    headingMaxWidth: '500px',
    headingSize: 'xl'
  }
}

const Article = ({
  variant = 'default',
  date,
  title,
  summary,
  link,
  linkText = 'Leia mais',
  linkTitle = `Vá para a página deste artigo e leia mais sobre ${title}`
}: ArticleProps) => {
  return (
    <Flex
      height="full"
      bg="white"
      as="article"
      direction="column"
      justifyContent="space-between"
      p={styles[variant].articlePadding}
      pb={4}
      rounded="lg"
      border="1px"
      borderColor="gray.200"
      minHeight={150}
    >
      <Flex direction="column">
        <header>
          <Text
            as="time"
            color="gray.700"
            fontSize="xs"
            textTransform="uppercase"
            dateTime={date}
          >
            {date}
          </Text>
          <Heading
            mt={styles[variant].headingMarginTop}
            maxWidth={styles[variant].headingMaxWidth}
            size={styles[variant].headingSize}
          >
            {title}
          </Heading>
        </header>

        {variant === 'featured' ? (
          <Text lineHeight="tall" maxWidth="450px" my={4}>
            {summary}
          </Text>
        ) : null}
      </Flex>

      <Link passHref href={link}>
        <ChakraLink
          title={linkTitle}
          textTransform="uppercase"
          fontSize="sm"
          textColor="gray.800"
          color="clay.500"
        >
          {linkText} →
        </ChakraLink>
      </Link>
    </Flex>
  )
}

export default Article
