import Heading from './Heading'

import React from 'react'
import { screen, render } from '@testing-library/react'

describe('Heading', () => {
  it('shows Heading information', () => {
    render(<Heading>Titulo</Heading>)

    expect(screen.getByText(/titulo/i))
  })
})
