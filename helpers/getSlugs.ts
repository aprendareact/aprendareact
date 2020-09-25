// TODO: Context should have type. Webpack type?
const getSlugs = (context) => {
  const keys = context.keys()

  const data = keys.map((key: string) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

    return slug
  })

  return data
}

export default getSlugs
