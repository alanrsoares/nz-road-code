import { parseProp, parseTags } from './parsers'
import { withLowerCaseKeys } from './utils'

const ENDPOINT_HOST = 'http://www.aa.co.nz'

const QUESTIONS_ENDPOINT = `${ENDPOINT_HOST}/RoadCodeQuizController/getSet`

const parseAnswers = answers => {
  const links = parseTags('a', 'g')(answers)
  const contents = links.map(parseTags('a'))
  const spans = contents.map(parseTags('span', 'g'))
  const spanContent = parseTags('span')

  return spans.reduce((acc, [option, content]) => ({
    ...acc,
    [spanContent(option)]: spanContent(content).trim()
  }), {})
}

const parseImage = image => ({
  uri: `${ENDPOINT_HOST}${parseProp('src')(image).split('?m=')[0]}`
})

const refineQuestion = question => withLowerCaseKeys({
  ...question,
  Image: parseImage(question.Image),
  Answers: parseAnswers(question.Answers)
})

const unwrap = res => res.json()

const refine = data => Promise.resolve(data.map(refineQuestion))

export default class Questions {
  constructor() {
    this.endpoint = QUESTIONS_ENDPOINT
  }

  fetchQuestions() {
    return fetch(this.endpoint)
      .then(unwrap)
      .then(refine)
      .catch(x => console.log(x))
  }
}
