import React from 'react'
import { screen, render } from '@testing-library/react'

import Article from './'

describe('Article', () => {
  it('shows article information', () => {
    render(
      <Article
        date="23 de Julho de 2020"
        title="Como escrever um teste"
        link="https://www.aprendareact.com.br/artigos/esse"
      />
    )

    screen.getByText(/como escrever um teste/i)
    screen.getByText(/23 de Julho de 2020/i)
    screen.getByText(/Como escrever um teste/i)

    expect(screen.getByText('Leia mais').closest('a')).toHaveAttribute(
      'href',
      'https://www.aprendareact.com.br/artigos/esse'
    )
  })

  it('shows article information', () => {
    render(
      <Article
        date="23 de Julho de 2020"
        title="Como escrever um teste"
        description="Esse é o texto de preview"
        link="https://www.aprendareact.com.br/artigos/esse"
      />
    )

    expect(screen.getByText(/esse é o texto de preview/i)).toBeVisible()
  })
})
