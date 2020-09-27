import Layout from '@components/Layout'
import PostList from '@components/PostList'
import getPosts from '@helpers/getPosts'
import Header from '../components/Header'
import Community from '../components/Community'

const Index = ({ posts, title }) => {
  return (
    <Layout pageTitle={title}>
      <Header />

      <PostList posts={posts} />

      <Community />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const posts = ((context) => getPosts(context))(
    require.context('../posts', true, /\.md$/)
  )

  return {
    props: {
      posts,
      title: 'Aprenda React',
      description: 'This is a simple blog built with Next'
    }
  }
}
