export const prism = {
  styles: {
    global: (props) => {
      return props.colorMode === 'light'
        ? prismLightTheme(props)
        : prismDarkTheme(props)
    }
  }
}

const tabSize = 2
const prismBaseTheme = (theme) => ({
  code: {
    whiteSpace: 'pre'
  },
  "code[class*='language-'], pre[class*='l anguage-']": {
    color: theme.colors.gray[800],
    background: 'none',
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes[2],
    textAlign: 'left',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: theme.lineHeights[2],
    tabSize: 2,
    hyphens: 'none',
    width: '100%'
  },
  /* Code blocks */
  "pre[class*='language-']": {
    paddingTop: theme.space[tabSize],
    paddingBottom: theme.space[tabSize],
    paddingLeft: theme.space[tabSize],
    paddingRight: theme.space[tabSize],
    margin: `${theme.space[6]} 0`,
    overflow: 'auto',
    minWidth: '100%',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap'
  },
  ":not(pre) > code[class*='language-'],pre[class*='language-']": {
    background: theme.colors.gray[50],
    border: `1px solid ${theme.colors.gray[200]}`,
    borderRadius: theme.radii.lg
  },

  /* Inline code */
  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal'
  },
  '.token.comment,.token.prolog,.token.doctype,.token.cdata': {
    color: 'slategray'
  },
  '.token.punctuation': {
    color: '#999'
  },
  '.token.namespace': {
    opacity: 0.7
  },
  '.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted': {
    color: '#905'
  },
  '.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted': {
    color: '#690'
  },
  '.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string': {
    color: '#9a6e3a'
  },
  '.token.atrule,.token.attr-value, .token.keyword': {
    color: '#07a'
  },
  '.token.function,.token.class-name': {
    color: '#dd4a68'
  },
  '.token.regex,.token.important,.token.variable': {
    color: '#e90'
  },
  '.token.important, token.bold': {
    fontWeight: 'bold'
  },
  '.token.italic': {
    fontStyle: 'italic'
  },
  '.token.entity': {
    cursor: 'help'
  },

  '.mdx-marker': {
    display: 'block',
    marginLeft: `-${theme.space[tabSize]}`,
    marginRight: `-${theme.space[tabSize]}`,
    paddingLeft: theme.space[tabSize],
    paddingRight: theme.space[tabSize],
    backgroundColor: theme.colors.purple[50],
    boxShadow: `inset 3px 0px 0 0px ${theme.colors.purple[600]}`,
    minWidth: 'fit-content'
  },
  '.remark-code-title': {
    padding: `${theme.space[tabSize]} ${theme.space[tabSize]}`,
    fontFamily: theme.fonts.mono,
    background: theme.colors.purple[500],
    color: '#FFF',
    border: `1px solid ${theme.colors.purple[200]}`,
    borderTopLeftRadius: theme.radii.lg,
    borderTopRightRadius: theme.radii.lg,
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '-2rem',
    width: '100%',
    '+ pre': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      marginTop: 0
    }
  }
})

export const prismLightTheme = ({ theme }) => ({
  "code[class*='language-'],pre[class*='language-']": {
    color: theme.colors.gray[800]
  },
  ":not(pre) > code[class*='language-'], pre[class*='language-']": {
    background: theme.colors.gray[50],
    border: `1px solid ${theme.colors.gray[200]}`
  },
  '.mdx-marker': {
    backgroundColor: 'hsla(204, 45%, 96%, 1)'
  },
  ...prismBaseTheme(theme)
})

export const prismDarkTheme = ({ theme }) => ({
  "code[class*='language-'],pre[class*='language-']": {
    color: '#011627'
  },
  ":not(pre) > code[class*='language-'], pre[class*='language-']": {
    background: theme.colors.gray[800],
    border: `1px solid ${theme.colors.gray[700]}`
  },
  '.mdx-marker': {
    backgroundColor: theme.colors.gray[700]
  },
  ...prismBaseTheme(theme)
})
