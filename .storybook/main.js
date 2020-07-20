module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        // Config for js and jsx files
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                // use @babel/preset-react for JSX and env (instead of staged presets)
                require.resolve('@babel/preset-react'),
                require.resolve('@babel/preset-env'),
              ],
              plugins: [
                // use @babel/plugin-proposal-class-properties for class arrow functions
                require.resolve('@babel/plugin-proposal-class-properties'),
                // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                require.resolve('babel-plugin-remove-graphql-queries'),
                // use babel-plugin-react-docgen to ensure PropTables still appear
                require.resolve('babel-plugin-react-docgen'),
              ],
            },
          },
        ],
        exclude: [/node_modules\/(?!(gatsby)\/)/],
      },
      {
        // Config for tsx files
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                // use @babel/preset-react for JSX and env (instead of staged presets)
                require.resolve('@babel/preset-react'),
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-typescript'),
              ],
              plugins: [
                // use @babel/plugin-proposal-class-properties for class arrow functions
                require.resolve('@babel/plugin-proposal-class-properties'),
                // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                require.resolve('babel-plugin-remove-graphql-queries'),
              ],
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              propFilter: (prop) => {
                if (prop.parent == null) {
                  return true
                }
                // Filter out props inherited from extending interface with React.HTMLProps< - element - >
                return (
                  prop.parent.fileName.indexOf('node_modules/@types/react') < 0
                )
              },
            },
          },
        ],
        exclude: [/node_modules\/(?!(gatsby)\/)/],
      }
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
