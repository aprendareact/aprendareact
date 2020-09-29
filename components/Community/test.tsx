import { screen, render } from '../../helpers/test-utils'

import Community from '.'

describe('<Community />', () => {
  it('shows community information', () => {
    render(<Community />)

    screen.getByText(
      /Nossa comunidade e amiga do trabalho remoto, criativa, gentil e adora compartilhar./i
    )

    screen.getByText(
      /Junior ou senior, tímido ou extrovertido, lider dedesenvolvedor ou designer - temos várias iniciativas incluindo para interagir com indivíduos e equipes com ideias./i
    )

    expect(screen.getByText(/Junte-se á nós/i))
  })
})
