import { createAction } from 'redux-actions'

import * as types from '../constants/actionTypes'

export const loadQuestions = createAction(types.LOAD_QUESTIONS)
export const loadQuestionsFail = createAction(types.LOAD_QUESTIONS_FAIL)
export const loadQuestionsSuccess = createAction(types.LOAD_QUESTIONS_SUCCESS)
export const selectAnswer = createAction(types.SELECT_ANSWER)
