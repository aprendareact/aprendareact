import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Header from '../components/Header'
import Community from '../components/Community'

const root = process.cwd()

const Index = ({ articles }) => {
  return (
    <Layout pageTitle={'Aprenda React'}>
      <Header />

      <PostList posts={articles} />

      <Community />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const contentRoot = path.join(root, 'artigos')
  const articles = fs.readdirSync(contentRoot).map((p) => {
    const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
    return {
      slug: p.replace(/\.mdx/, ''),
      content,
      frontmatter: matter(content).data
    }
  })
  return { props: { articles } }
}
