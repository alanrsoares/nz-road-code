import { take, put, call } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import * as actions from '../actions'
import * as questions from '../api/questions'

export function* loadQuestions() {
	while (yield take(types.LOAD_QUESTIONS)) {
		const results = yield call(questions.get);
		console.log(results)
		yield put(actions.loadQuestionsSuccess(results));
	}
}
