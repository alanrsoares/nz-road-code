export const withLowerCaseKeys = obj =>
  Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [key.toLowerCase()]: obj[key] }),
    {}
  )
