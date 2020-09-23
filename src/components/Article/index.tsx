import Heading from '../Heading'
import * as React from 'react'

export interface ArticleProps {
  date: string
  title: string
  link: string
  description?: string
}

const Article: React.FC<ArticleProps> = ({
  date,
  title,
  description,
  link,
}) => (
  <article className="bg-white p-8 pb-4 border border-gray-300 rounded-lg max-w-lg flex flex-col">
    <header>
      <time className="text-xs text-gray-700 tracking-wide" dateTime={date}>
        {date}
      </time>
      <Heading>{title}</Heading>
    </header>
    {description ? <p className="mt-4">{description}</p> : null}
    <a
      href={link}
      className="uppercase text-sm text-gray-800 tracking-wide mt-10"
    >
      Leia mais
    </a>
  </article>
)

export default Article
