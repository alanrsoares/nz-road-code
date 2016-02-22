import { fork } from 'redux-saga/effects'
import { loadQuestions } from './questions'

export default function* root(getState) {
	yield fork(loadQuestions)
}
