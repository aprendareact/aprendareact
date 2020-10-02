import { screen, render } from '../../helpers/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('shows Footer', () => {
    render(<Footer />)

    screen.getByText(/Leia nosso código de conduta/i)
    screen.getByText(/Cursos/i)
    screen.getByText(/Comunidade/i)
    screen.getByText(/Sobre/i)
    screen.getByText(/Blog/i)
    screen.getByText(/Contato/i)
    screen.getByText(/©2020 Aprenda React. 🇧🇷 Todos os direitos reservados./i)
    screen.getByText(/Github/i)
    screen.getByText(/Twitter/i)
    screen.getByText(/Discord/i)
    screen.getByText(/Privacidade/i)
    screen.getByText(/Termos/i)

    expect(screen.getByText(/começar a aprender/i))
  })
})
