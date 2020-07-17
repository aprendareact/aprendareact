export const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-postcss',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages/`,
    },
  },
  'gatsby-plugin-mdx',
]
