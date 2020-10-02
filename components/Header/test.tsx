import { screen, render } from '../../helpers/test-utils'

import Header from '.'

describe('<Header />', () => {
  it('shows Header', () => {
    render(<Header />)

    screen.getByText(
      /A forma mais rápida, prática e segura de dar o próximo passo na sua carreira como desenvolvedor/i
    )
    screen.getByText(/faça parte/i)
    screen.getByText(/É de graça/i)

    expect(screen.getByText(/começar a aprender/i))
  })
})
