import Questions from '../lib/Questions'

const questions = new Questions()

export const get = () => questions.fetchQuestions()
