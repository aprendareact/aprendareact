import { screen, render } from '../../helpers/test-utils'

import Layout from '.'

describe('<Layout />', () => {
  it('shows Layout', () => {
    render(<Layout pageTitle="title">algum conteudo</Layout>)

    expect(screen.getByText(/algum conteudo/i))
  })
})
