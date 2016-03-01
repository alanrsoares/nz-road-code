import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'
import { get } from '../api/questions'

const INITIAL_STATE = get()

console.log(INITIAL_STATE)

const actionHandlers = {
  [types.LOAD_QUESTIONS_SUCCESS]: (state, { payload }) => ([
    ...state,
    ...payload
  ]),
  [types.SELECT_OPTION]: (state, { payload }) => ({
    ...state
  })
}

export default handleActions(actionHandlers, INITIAL_STATE)
