import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'
import { get } from '../api/questions'

const INITIAL_STATE = get().map(question => ({
  ...question,
  'selectedAnswer': ''
}))

const actionHandlers = {
  [types.LOAD_QUESTIONS_SUCCESS]: (state, { payload }) => ([
    ...state,
    ...payload
  ])
}

export default handleActions(actionHandlers, INITIAL_STATE)
