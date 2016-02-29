import { cache } from 'aa-db/db/db.json'

import { randomInt } from './utils'

export function randomQuestions (length = 30) {
  const result = []
  const questions = cache.map(x => x.value)

  for (let i = 0; i < length; i++) {
    const index = randomInt({ max: questions.length - 1 })
    result.push(...questions.splice(index, 1))
  }

  return result
}
