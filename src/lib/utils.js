export const randomInt = ({ min = 0, max }) =>
  Math.floor(Math.random() * (max - min + 1)) + min
