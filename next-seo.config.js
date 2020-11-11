const title = 'Aprenda React'
const description =
  'Aulas online para você aprender React de forma segura e prática.'
const SEO = {
  title,
  description,
  canonical: 'https://aprendareact.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://aprendareact.com.br',
    title,
    description,
    images: [
      {
        url: 'https://aprendareact.com.br/static/images/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@aprendareact',
    site: '@aprendareact',
    cardType: 'summary_large_image'
  }
}

export default SEO
