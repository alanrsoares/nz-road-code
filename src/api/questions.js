import Questions from '../lib/Questions'

export function get() {
  return new Questions().fetchQuestions()
}
