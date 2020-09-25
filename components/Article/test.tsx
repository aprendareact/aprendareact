import { screen, render } from '../../helpers/test-utils'

import Article from '.'

describe('<Article />', () => {
  it('shows article information', () => {
    render(
      <Article
        date="23 de Julho de 2020"
        title="Como escrever um teste"
        link="https://www.aprendareact.com.br/post/outro-artigo"
      />
    )

    screen.getByText(/23 de Julho de 2020/i)
    screen.getByText(/Como escrever um teste/i)
    expect(screen.getByText('Leia mais →'))
  })

  it('shows article description', () => {
    render(
      <Article
        date="23 de Julho de 2020"
        title="Como escrever um teste"
        description="Esse é o texto de preview"
        link="https://www.aprendareact.com.br/post/outro-artigo"
      />
    )

    expect(screen.getByText(/esse é o texto de preview/i)).toBeVisible()
  })
})
