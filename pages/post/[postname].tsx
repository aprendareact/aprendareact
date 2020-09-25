import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@components/Layout'
import getSlugs from '@helpers/getSlugs'

export default function BlogPost({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${frontmatter.title}`}>
        <div className="back">
          <Link href="/">
            <a>← Back to post list</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
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
