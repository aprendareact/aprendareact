import { Heading, Link as ChakraLink, Text, Flex } from '@chakra-ui/core'
import Link from 'next/link'

export interface ArticleProps {
  smallVariation?: boolean // bad name
  date: string
  title: string
  link: string
  linkText?: string
  description?: string
}

const Article: React.FC<ArticleProps> = ({
  smallVariation, // bad name
  date,
  title,
  description,
  link,
  linkText = 'Leia mais'
}) => (
  <Flex
    as="article"
    direction="column"
    justifyContent="space-between"
    h={smallVariation ? '147px' : '310px'} // its hard to set the height using the gap prop on the initial Grid :/
    bg="white"
    p={smallVariation ? 5 : 8}
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
          mt={smallVariation ? 2 : 0}
          maxWidth={smallVariation ? '280px' : '500px'}
          size={smallVariation ? 'sm' : 'lg'}
        >
          {title}
        </Heading>
      </header>

      {!smallVariation ? <Text mt={4}>{description}</Text> : null}
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

export default Article
