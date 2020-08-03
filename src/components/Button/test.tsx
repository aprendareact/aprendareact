import React from 'react'
import { screen, render } from '@testing-library/react'

import Button from './'

describe('Button', () => {
  it('deve renderizar um botão com o texto passado', () => {
    render(<Button>confirmar</Button>)
    screen.getByText(/confirmar/i)
    expect(screen.getByRole('button')).toBeVisible()
  })
})
