import { Heading, Link as ChakraLink, Text, Flex } from '@chakra-ui/core'
import Link from 'next/link'

export interface ArticleProps {
  variant?: 'featured' | 'default'
  date: string
  title: string
  link: string
  linkText?: string
  description?: string
}

const styles = {
  default: {
    articleHeight: '147px',
    articlePadding: 5,
    headingMarginTop: 2,
    headingMaxWidth: '280px',
    headingSize: 'sm'
  },
  featured: {
    articleHeight: '310px',
    articlePadding: 8,
    headingMarginTop: 0,
    headingMaxWidth: '500px',
    headingSize: 'lg'
  }
}

const Article: React.FC<ArticleProps> = ({
  variant = 'default',
  date,
  title,
  description,
  link,
  linkText = 'Leia mais'
}) => {
  return (
    <Flex
      bg="white"
      as="article"
      direction="column"
      justifyContent="space-between"
      h={styles[variant].articleHeight}
      p={styles[variant].articlePadding}
      pb={4}
      rounded="lg"
      border="1px"
      borderColor="gray.300"
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
          <Text maxWidth="450px" mt={4}>
            {description}
          </Text>
        ) : null}
      </Flex>

      <Link href={link}>
        <ChakraLink
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
