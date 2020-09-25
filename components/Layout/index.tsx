import Head from 'next/head'
import { Flex } from '@chakra-ui/core'

import Menu from '../Menu'
import Footer from '../Footer'

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Menu />

      <Flex direction="column" as="main">
        {children}
      </Flex>

      <Footer />
    </>
  )
}

export default Layout
