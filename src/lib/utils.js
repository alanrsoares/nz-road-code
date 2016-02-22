export const withLowerCaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => ({
    ...acc, [key.toLowerCase()]: obj[key]
  }), {})

export const removeQueryString = uri => uri.split('?')[0]
