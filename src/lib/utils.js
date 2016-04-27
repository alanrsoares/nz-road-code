export const randomInt = ({ min = 0, max }) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const toRows = (hashMap = {}) =>
  Object.keys(hashMap)
        .reduce((acc, key) => [...acc, { key, value: hashMap[key] }], [])

export const toMap = xs =>
  xs.reduce((acc, x, i) => ({ ...acc, [i]: x }), {})

export const camelize = s => 
  s.toLowerCase()
   .replace(/_\w/g, x => x[1].toUpperCase())
