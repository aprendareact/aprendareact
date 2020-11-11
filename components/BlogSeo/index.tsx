import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

interface Props {
  title: string
  summary: string
  publishedAt: string
  slug: string
  image: string
}

const BlogSeo = ({ title, summary, publishedAt, slug, image }: Props) => {
  const url = `https://aprendareact.com.br/artigos/${slug}`
  const date = new Date(publishedAt).toISOString()
  const featuredImage = {
    url: `https://aprendareact.com.br${image}`,
    alt: title
  }

  return (
    <>
      <NextSeo
        title={`${title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Aprenda React"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage.url]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Aprenda React"
        title={title}
        url={url}
      />
    </>
  )
}

export default BlogSeo
