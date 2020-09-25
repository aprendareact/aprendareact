import { screen, render } from '../../helpers/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('shows logo', () => {
    render(<Menu />)

    expect(screen.getByText(/Aprenda React/i))
  })

  it('shows menu items', () => {
    render(<Menu />)

    screen.getByText(/Comunidade/i)
    screen.getByText(/Guias/i)
    screen.getByText(/Cursos/i)
    expect(screen.getByText(/Sobre/i))
  })

  it('show social logos', () => {
    render(<Menu />)

    screen.getByTitle('Discord logo')
    expect(screen.getByTitle(/Github logo/i))
  })
})
