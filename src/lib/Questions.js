import { cache } from 'aa-db/db/db.json'

import { randomInt, toMap } from './utils'

class Question {
  constructor (cachedQuestion = {}) {
    this.selectedAnswer = ''
    Object.assign(this, cachedQuestion)
  }

  static of ({ value }) {
    return new Question(value)
  }

  selectAnswer (selectedAnswer) {
    return new Question({ ...this, selectedAnswer })
  }
}

const questions = cache.map(Question.of)

export function randomQuestions (length = 35) {
  const result = []

  for (let i = 0; i < length; i++) {
    const index = randomInt({ max: questions.length - 1 })
    result.push(...questions.splice(index, 1))
  }

  return toMap(result)
}
