import hydrate from 'next-mdx-remote/hydrate'

import { getPosts, getPostBySlug } from '@helpers/blog'
import BlogPostLayout from '../../components/BlogPost'
import MDXComponents from '../../components/MDXComponents'

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })

  return <BlogPostLayout frontMatter={frontMatter}>{content}</BlogPostLayout>
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: post }
}
