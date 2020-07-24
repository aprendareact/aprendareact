import * as React from 'react'

export interface ArticleProps {
  date: string
  title: string
  previewText?: string
  link: string
}

const Article: React.FC<ArticleProps> = ({
  date,
  title,
  previewText,
  link,
}) => (
  <article className="bg-white p-8 pb-4 border border-gray-300 rounded-lg max-w-lg flex flex-col">
    <header>
      <time className="text-xs text-gray-700 tracking-wide" dateTime={date}>
        {date}
      </time>
      <h2 className="text-4xl font-bold leading-10">{title}</h2>
    </header>
    {previewText && <p className="mt-4">{previewText}</p>}
    <a
      href={link}
      className="uppercase text-sm text-gray-800 tracking-wide mt-10"
    >
      Leia mais
    </a>
  </article>
)

export default Article
